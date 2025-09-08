"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BonsaiImage from "@/components/shared/bonsai-image"

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onIndexChange: (index: number) => void
  title?: string
  species?: string
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
  species
}: ImageLightboxProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        onIndexChange((currentIndex - 1 + images.length) % images.length)
      } else if (e.key === "ArrowRight") {
        onIndexChange((currentIndex + 1) % images.length)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const goToPrevious = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    onIndexChange((currentIndex + 1) % images.length)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X size={24} />
        </Button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight size={24} />
            </Button>
          </>
        )}

        {/* Main content */}
        <div
          className="relative max-w-7xl max-h-[90vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <BonsaiImage
              src={images[currentIndex]}
              alt={title || "Bonsai image"}
              ratio="auto"
              className="max-h-[80vh] w-full object-contain rounded-lg"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
          </motion.div>

          {/* Image info */}
          {(title || species) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-white"
            >
              {title && <h3 className="text-xl font-semibold mb-1">{title}</h3>}
              {species && <p className="text-white/80 italic">{species}</p>}
            </motion.div>
          )}

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex justify-center gap-2 overflow-x-auto pb-2"
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onIndexChange(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-white shadow-lg scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <BonsaiImage
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    ratio="square"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </motion.div>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
