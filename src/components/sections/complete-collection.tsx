"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X, Search } from "lucide-react"
import { bonsaiCollection } from "@/data/bonsai-collection"
import BonsaiImage from "@/components/shared/bonsai-image"
import { FilterUI } from "@/components/shared/filter-ui"
import { ImageLightbox } from "@/components/shared/image-lightbox"

type FilterState = {
  species: string[]
  ageRanges: string[]
}

export function CompleteCollection() {
  const [filters, setFilters] = useState<FilterState>({
    species: [],
    ageRanges: []
  })

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxTree, setLightboxTree] = useState<(typeof bonsaiCollection)[number] | null>(null)

  // Get unique species and age ranges from data
  const speciesOptions = useMemo(() => {
    const species = [...new Set(bonsaiCollection.map(tree => tree.species))]
    return species.sort()
  }, [])

  const ageRanges = [
    { label: "10-15 năm", min: 10, max: 15 },
    { label: "16-20 năm", min: 16, max: 20 },
    { label: "21-25 năm", min: 21, max: 25 },
    { label: "26-30 năm", min: 26, max: 30 },
    { label: "31+ năm", min: 31, max: 999 }
  ]

  // Filter the collection based on current filters
  const filteredCollection = useMemo(() => {
    return bonsaiCollection.filter(tree => {
      const age = parseInt(tree.age.replace(" năm", ""))
      
      // Check species filter
      const speciesMatch = filters.species.length === 0 || filters.species.includes(tree.species)
      
      // Check age filter
      const ageMatch = filters.ageRanges.length === 0 || 
        filters.ageRanges.some(range => {
          const rangeData = ageRanges.find(r => r.label === range)
          return rangeData && age >= rangeData.min && age <= rangeData.max
        })
      
      return speciesMatch && ageMatch
    })
  }, [filters, ageRanges])

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  const openLightbox = (tree: (typeof bonsaiCollection)[number]) => {
    const allImages = [tree.image, ...(tree.sub_images || [])].filter(Boolean)
    setLightboxImages(allImages)
    setLightboxTree(tree)
    setLightboxIndex(0)
    setLightboxOpen(true)
  }
  return (
    <div className="space-y-8">
      <Card className="border-0 bg-transparent">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl font-bold text-foreground mb-4">Bộ Sưu Tập Hoàn Chỉnh</CardTitle>
        </CardHeader>
      </Card>

      {/* Filter UI */}
      <FilterUI
        speciesOptions={speciesOptions}
        ageRanges={ageRanges.map(range => range.label)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        totalCount={bonsaiCollection.length}
        filteredCount={filteredCollection.length}
      />

      {/* Collection Grid */}
      <AnimatePresence mode="wait">
        {filteredCollection.length > 0 ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCollection.map((tree, index) => (
              <motion.div
                key={tree.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group"
              >
                <Card className="group hover:shadow-xl transition-all duration-500 cursor-pointer bg-background border border-border/50 hover:border-primary/30 hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <BonsaiImage
                      src={tree.image || "/placeholder.svg"}
                      alt={tree.name}
                      ratio="square"
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-primary/90 text-primary-foreground shadow-lg">
                        {tree.species}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {tree.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground italic">{tree.species}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-medium">{tree.age}</span>
                        <Badge variant="outline" className="text-xs bg-secondary/10">
                          {tree.description}
                        </Badge>
                      </div>
                      <Separator />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openLightbox(tree)}
                        className="w-full text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 group-hover:shadow-md"
                      >
                        Xem Chi Tiết →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-dashed border-2 border-muted-foreground/25 bg-gradient-to-br from-muted/20 to-muted/10">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-6"
                >
                  <Search size={32} className="text-muted-foreground" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-semibold text-foreground mb-3"
                >
                  Không tìm thấy kết quả
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6 max-w-md"
                >
                  Không có cây bonsai nào phù hợp với bộ lọc hiện tại. Hãy thử điều chỉnh bộ lọc để xem thêm kết quả.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => handleFiltersChange({ species: [], ageRanges: [] })}
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <X size={16} />
                    Xóa tất cả bộ lọc
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  )
}
