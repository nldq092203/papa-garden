import { Top5Collection } from "./top-5-collection"
import { CompleteCollection } from "./complete-collection"

export function BonsaiCollection() {
  return (
    <section id="collection" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Top5Collection />
        <CompleteCollection />
      </div>
    </section>
  )
}
