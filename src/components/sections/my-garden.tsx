import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import MapEmbed from "@/components/map-embed"
import BonsaiImage from "@/components/shared/bonsai-image"

export function MyGardenSection() {
  return (
    <section id="garden" className="py-20 bg-gradient-to-br from-[#FBFBFB] via-[#CADBB7]/20 to-[#93A267]/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#93A267]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#CADBB7]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#93A267]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#485935] mb-6 text-balance relative">
              Vườn cây của ba
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#93A267] to-[#CADBB7] rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Những tác phẩm bonsai sống động, được tạo nên bằng thời gian và đam mê
          </p>
        </div>

        {/* Enhanced Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#93A267]/20 to-[#CADBB7]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <BonsaiImage
                src="/beautiful-mature-bonsai-tree-in-ceramic-pot.jpg"
                alt="Ảnh cổng vườn"
                ratio="landscape"
                className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#485935]">Cổng vườn</h3>
                <p className="text-sm text-muted-foreground">Lối vào vườn</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#CADBB7]/20 to-[#93A267]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <BonsaiImage
                src="/japanese-maple-bonsai-cascade-style-red-leaves.jpg"
                alt="Ảnh trong sân vườn"
                ratio="landscape"
                className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#485935]">Khu vườn chính</h3>
                <p className="text-sm text-muted-foreground">Nơi chăm sóc và trưng bày bonsai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="max-w-10xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-[#93A267]/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#93A267] to-[#CADBB7]"></div>
            <CardContent className="p-12">
              <div className="flex items-start gap-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#93A267] to-[#CADBB7] rounded-full flex items-center justify-center shadow-xl">
                    <MapPin className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#485935] mb-4">Địa chỉ vườn</h3>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">Phước Hiệp, Tuy Phước, Bình Định, Việt Nam</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-base md:text-lg text-muted-foreground">
                    <span className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#93A267] rounded-full"></div>
                      Giờ mở cửa: 8:00 – 18:00 mỗi ngày
                    </span>
                    <span className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#CADBB7] rounded-full"></div>
                      Miễn phí tham quan
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="mt-8">
                <MapEmbed />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
