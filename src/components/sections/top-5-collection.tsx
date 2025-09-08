"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { bonsaiCollection } from "@/data/bonsai-collection"
import BonsaiImage from "@/components/shared/bonsai-image"
import { ImageLightbox } from "@/components/shared/image-lightbox"

/**
 * Utilities
 */
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function Top5Collection() {
  const data = useMemo(() => bonsaiCollection.slice(0, 5), [])
  const [active, setActive] = useState(0)
  
  // ---- Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxTree, setLightboxTree] = useState<typeof data[0] | null>(null)

  // ---- Mobile carousel state (scroll-snap + dots sync)
  const railRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  } as const

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  } as const

  // Track active slide by measuring which card center is closest to viewport center
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    const handler = () => {
      const slides = Array.from(rail.querySelectorAll<HTMLElement>("[data-slide]"))
      const railRect = rail.getBoundingClientRect()
      const centerX = railRect.left + railRect.width / 2

      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      slides.forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const dist = Math.abs(cx - centerX)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = idx
        }
      })
      setActive(bestIdx)
    }

    handler()
    rail.addEventListener("scroll", handler, { passive: true })
    window.addEventListener("resize", handler)
    return () => {
      rail.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [])

  const scrollToIndex = (idx: number) => {
    const rail = railRef.current
    if (!rail) return
    const slide = rail.querySelector<HTMLElement>(`[data-slide="${idx}"]`)
    if (!slide) return
    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  // Open lightbox with all images for a bonsai
  const openLightbox = (tree: typeof data[0]) => {
    const allImages = [tree.image, ...(tree.sub_images || [])].filter(Boolean)
    setLightboxImages(allImages)
    setLightboxTree(tree)
    setLightboxIndex(0)
    setLightboxOpen(true)
  }

  return (
    <motion.div 
      ref={containerRef}
      className="relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(72,89,53,0.1),transparent_50%)]" />

      <Card className="relative bg-background/80 backdrop-blur-sm border-primary/20 mb-16 shadow-xl">
        <div className="text-center pb-8 pt-12 px-6 sm:px-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            Top 5 Bonsai Tuyệt Phẩm
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Khám phá 5 bonsai tiêu biểu—thành quả của nhiều năm kiên nhẫn và nghệ thuật uốn tỉa tinh hoa
          </p>
        </div>

        <div className="w-full px-2 sm:px-4 lg:px-6 pb-12">
          {/* ===== Mobile (≤640): Full screen carousel ===== */}
          <div className="block sm:hidden">
            <div className="relative w-full">
              <div
                ref={railRef}
                className="flex overflow-x-auto mobile-carousel snap-x snap-mandatory"
                aria-label="Top 5 bonsai"
                role="region"
                style={{ 
                  width: '100%',
                  height: '500px'
                }}
              >
                {data.map((tree, i) => {
                  const isActive = i === active
                  return (
                    <motion.div
                      key={tree.id}
                      data-slide={i}
                      className="snap-center shrink-0 w-full h-full"
                      style={{ 
                        width: '90vw',
                        maxWidth: '400px',
                        scrollMarginInline: "0px"
                      }}
                      aria-current={isActive ? "true" : undefined}
                      variants={cardVariants}
                    >
                      <Card
                        className={[
                          "group border-2 bg-background/95 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl h-full w-full",
                          isActive
                            ? "border-primary/50 shadow-2xl ring-2 ring-primary/20"
                            : "border-border/30 shadow-lg hover:border-primary/30",
                        ].join(" ")}
                      >
                        <div 
                          className="relative h-[85%] cursor-pointer"
                          onClick={() => openLightbox(tree)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                          <BonsaiImage
                            src={tree.image || "/placeholder.svg"}
                            alt={tree.name}
                            ratio="portrait"
                            className="rounded-t-lg transition-all duration-700 group-hover:scale-110 h-full w-full"
                            priority={i === 0}
                          />
                        </div>
                        <CardContent className="p-3 h-[15%] flex flex-col justify-center">
                          <div className="text-center">
                            <h4 className="font-bold text-foreground text-sm leading-tight mb-1">{tree.name}</h4>
                            <p className="text-muted-foreground italic text-xs">{tree.species}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Dots indicator */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {data.map((_, i) => {
                  const on = i === active
                  return (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(i)}
                      className={[
                        "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                        on ? "w-6 bg-primary shadow-lg" : "w-2 bg-primary/30 hover:bg-primary/50",
                      ].join(" ")}
                      aria-label={`Show item ${i + 1}`}
                      aria-current={on ? "true" : "false"}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* ===== Tablet (640px-1024px): Compact layout ===== */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex justify-center items-end gap-1 px-1 overflow-x-auto scrollbar-hide">
              {data.map((tree, index) => {
                const spotlight = index === 2
                const sideCard = index === 1 || index === 3

                return (
                  <motion.div
                    key={tree.id}
                    className={[
                      "transition-all duration-500 hover:-translate-y-2 flex-shrink-0",
                      spotlight 
                        ? "w-36" 
                        : sideCard 
                          ? "w-24" 
                          : "w-20",
                    ].join(" ")}
                    variants={cardVariants}
                  >
                      <Card
                        className={[
                          "group border-2 bg-background/95 backdrop-blur-sm transition-all duration-500",
                          spotlight
                            ? "h-[500px] border-primary/40 shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-primary/20"
                            : "h-[320px] border-border/30 shadow hover:shadow-md hover:border-primary/20",
                        ].join(" ")}
                      >

                      <div 
                        className={`relative ${spotlight ? 'h-[80%]' : 'h-[70%]'} cursor-pointer`}
                        onClick={() => openLightbox(tree)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                        <BonsaiImage
                          src={tree.image || "/placeholder.svg"}
                          alt={tree.name}
                          ratio={spotlight ? "landscape" : "portrait"}
                          className="rounded-t-lg transition-all duration-700 group-hover:scale-110 h-full w-full"
                          priority={spotlight}
                        />
                        {spotlight && (
                          <div className="absolute top-2 left-2 z-20">
                            <Badge className="bg-primary text-primary-foreground shadow-lg animate-pulse text-xs">
                              ⭐
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className={spotlight ? "p-3" : sideCard ? "p-2" : "p-1.5"}>
                        <h4
                          className={[
                            "font-bold mb-1 text-foreground transition-colors group-hover:text-primary",
                            spotlight 
                              ? "text-sm" 
                              : sideCard 
                                ? "text-xs" 
                                : "text-xs",
                          ].join(" ")}
                        >
                          {tree.name}
                        </h4>
                        <p className="text-muted-foreground italic text-xs mb-2">
                          {tree.species}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ===== Desktop (≥1024px): Full spotlight layout ===== */}
          <div className="hidden lg:block">
            <div className="flex justify-center items-end gap-2 lg:gap-3 xl:gap-4 px-2">
              {data.map((tree, index) => {
                const spotlight = index === 2 // center hero
                const sideCard = index === 1 || index === 3 // cards next to center

                return (
                  <motion.div
                    key={tree.id}
                    className={[
                      "transition-all duration-500 hover:-translate-y-2 flex-shrink-0",
                      spotlight 
                        ? "w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56" 
                        : sideCard 
                          ? "w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44" 
                          : "w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36",
                    ].join(" ")}
                    variants={cardVariants}
                  >
                    <Card
                      className={[
                        "group border-2 bg-background/95 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl",
                        spotlight
                          ? "h-[400px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[520px] border-primary/40 shadow-2xl hover:shadow-primary/20 ring-2 ring-primary/10"
                          : sideCard
                            ? "h-[300px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] border-border/30 shadow-lg hover:border-primary/30"
                            : "h-[240px] sm:h-[260px] md:h-[300px] lg:h-[320px] xl:h-[340px] border-border/20 shadow hover:border-primary/20",
                      ].join(" ")}
                    >
                       <div 
                         className={`relative ${spotlight ? 'h-[75%]' : 'h-[65%]'} cursor-pointer`}
                         onClick={() => openLightbox(tree)}
                       >
                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                         <BonsaiImage
                           src={tree.image || "/placeholder.svg"}
                           alt={tree.name}
                           ratio={spotlight ? "landscape" : "portrait"}
                           className="rounded-t-lg transition-all duration-700 group-hover:scale-110 h-full w-full"
                           priority={spotlight}
                         />
                         {spotlight && (
                           <div className="absolute top-4 left-4 z-20">
                             <Badge className="bg-primary text-primary-foreground shadow-lg animate-pulse">
                               ⭐ Top 1
                             </Badge>
                           </div>
                         )}
                       </div>

                      <CardContent className={spotlight ? "p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8" : sideCard ? "p-3 sm:p-4 md:p-5" : "p-2 sm:p-3 md:p-4"}>
                        <h4
                          className={[
                            "font-bold mb-1 sm:mb-2 text-foreground transition-colors group-hover:text-primary",
                            spotlight 
                              ? "text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl" 
                              : sideCard 
                                ? "text-sm sm:text-base md:text-lg" 
                                : "text-xs sm:text-sm md:text-base",
                          ].join(" ")}
                        >
                          {tree.name}
                        </h4>
                        <p
                          className={[
                            "text-muted-foreground italic mb-2 sm:mb-3", 
                            spotlight 
                              ? "text-sm sm:text-base md:text-base" 
                              : "text-xs sm:text-sm"
                          ].join(" ")}
                        >
                          {tree.species}
                        </p>

                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Card>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        title={lightboxTree?.name}
        species={lightboxTree?.species}
      />
    </motion.div>
  )
}
