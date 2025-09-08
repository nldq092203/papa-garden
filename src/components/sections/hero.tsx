import { Button } from "@/components/ui/button"
import BonsaiImage from "@/components/shared/bonsai-image"

export function HeroSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/3 to-teal-500/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-2000"></div>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-balance text-muted-foreground/70 mb-3 tracking-wider animate-trendy-glow">
                  Chào mừng đến
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight relative group animate-modern-pulse">
                  <span className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent relative inline-block">
                    Vườn cây của ba
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </h1>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-modern-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-modern-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-3 w-1 h-1 bg-teal-400/50 rounded-full animate-modern-bounce delay-500"></div>
              </div>
            </div>
            <div className="space-y-6">
              {/* Main description with better typography */}
              <div className="space-y-4">
                <p className="text-2xl font-medium text-foreground/90 leading-relaxed">
                  Một khu vườn gia đình
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#93A267] to-[#CADBB7] rounded-full"></div>
              </div>

              {/* Detailed description with better structure */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mỗi bonsai ở đây là kết quả của nhiều năm vun trồng và tỉa tót, từ dáng cây giản dị cho người mới chơi đến những dáng thế độc đáo cho nhà sưu tập.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hãy ghé thăm khu vườn của chúng tôi, chọn cho mình một chậu bonsai mang dấu ấn riêng, hoặc trò chuyện cùng chúng tôi để được chia sẻ kinh nghiệm và niềm vui chăm sóc cây.
                </p>
              </div>

              {/* Call-to-action section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium">
                  Khám phá bộ sưu tập
                </Button>
                <Button variant="outline" size="lg" className="border-[#93A267] text-[#485935] hover:bg-[#93A267] hover:text-white px-8 py-3 text-lg font-medium">
                  Tìm hiểu thêm
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#93A267] rounded-full"></div>
                  <span>Hơn 20 năm kinh nghiệm</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#93A267] rounded-full"></div>
                  <span>100+ cây bonsai</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Animated background circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#93A267]/30 to-[#CADBB7]/30 rounded-full -z-10 animate-pulse-glow animate-scale-breathe"></div>
            
            {/* Secondary background circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#CADBB7]/20 to-[#93A267]/20 rounded-full -z-20 animate-scale-breathe" style={{animationDelay: '1s'}}></div>
            
            {/* Main hero image */}
            <BonsaiImage
              src="/hero_image.png"
              alt="Beautiful ancient pine bonsai tree"
              ratio="auto"
              className="relative z-10 drop-shadow-2xl animate-gentle-float"
            />
            
            {/* Floating accent elements */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-[#93A267]/60 rounded-full animate-modern-bounce"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#CADBB7]/60 rounded-full animate-modern-bounce delay-1000"></div>
            <div className="absolute top-1/2 right-4 w-1 h-1 bg-[#93A267]/40 rounded-full animate-modern-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
