import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { MyGardenSection } from "@/components/sections/my-garden"
import { BonsaiCollection } from "@/components/sections/collection"
import { Footer } from "@/components/footer"

export default function BonsaiGarden() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MyGardenSection />
      <BonsaiCollection />
      <Footer />
    </div>
  )
}
