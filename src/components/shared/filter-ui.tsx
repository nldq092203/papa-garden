"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X, Check } from "lucide-react"

type FilterState = { species: string[]; ageRanges: string[] }

interface Props {
  speciesOptions: string[]
  ageRanges: string[]
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  totalCount: number
  filteredCount: number
}

export function FilterUI({ speciesOptions, ageRanges, filters, onFiltersChange, totalCount, filteredCount }: Props) {
  const [open, setOpen] = useState(false)

  const toggle = (key: "species" | "ageRanges", value: string) => {
    const arr = filters[key].includes(value)
      ? filters[key].filter(v => v !== value)
      : [...filters[key], value]
    onFiltersChange({ ...filters, [key]: arr })
  }

  const clear = () => onFiltersChange({ species: [], ageRanges: [] })
  const hasFilters = filters.species.length > 0 || filters.ageRanges.length > 0

  return (
    <div className="relative">
      {/* Header (always visible) */}
      <div className="flex items-center justify-between py-2">
        <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setOpen(true)}>
          <Filter size={16} /> Bộ lọc
          {hasFilters && <Badge className="ml-1">{filters.species.length + filters.ageRanges.length}</Badge>}
        </Button>
        <span className="text-sm text-muted-foreground">
          Tìm thấy <b className="text-foreground">{filteredCount}</b> / {totalCount} cây
        </span>
      </div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-background rounded-t-2xl shadow-2xl p-6 z-50"
          >
            {/* Header of sheet */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Filter size={18} /> Bộ lọc
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <X size={16} />
              </Button>
            </div>

            {/* Species */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Loài</h4>
              <div className="flex flex-wrap gap-2">
                {speciesOptions.map(s => {
                  const active = filters.species.includes(s)
                  return (
                    <Button
                      key={s}
                      variant={active ? "default" : "outline"}
                      size="sm"
                      className="rounded-full text-xs px-3 py-1"
                      onClick={() => toggle("species", s)}
                    >
                      {active && <Check size={14} className="mr-1" />}
                      {s}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Age */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Độ tuổi</h4>
              <div className="flex flex-wrap gap-2">
                {ageRanges.map(r => {
                  const active = filters.ageRanges.includes(r)
                  return (
                    <Button
                      key={r}
                      variant={active ? "secondary" : "outline"}
                      size="sm"
                      className="rounded-full text-xs px-3 py-1"
                      onClick={() => toggle("ageRanges", r)}
                    >
                      {active && <Check size={14} className="mr-1" />}
                      {r}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between gap-2">
              {hasFilters ? (
                <Button variant="ghost" size="sm" onClick={clear}>
                  Xóa bộ lọc
                </Button>
              ) : (
                <div />
              )}
              <Button onClick={() => setOpen(false)}>Áp dụng</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
