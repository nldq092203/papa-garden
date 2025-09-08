"use client"

import { Button } from "@/components/ui/button"
import BonsaiImage from "@/components/shared/bonsai-image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/3 to-teal-500/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-2000"></div>
              <div className="relative">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-balance text-muted-foreground/70 mb-3 tracking-wider"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(34, 197, 94, 0.4)"
                  }}
                >
                  Chào mừng đến
                </motion.h2>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance leading-tight relative group"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent relative inline-block"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      backgroundPosition: "0% 50%",
                      transition: { duration: 0.3 }
                    }}
                  >
                    Vườn cây của ba
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.span>
                  
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      width: "100%",
                      boxShadow: "0 0 8px rgba(34, 197, 94, 0.4)"
                    }}
                  />
                </motion.h1>
                
                {/* Floating particles with Framer Motion - Mobile optimized */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400/60 rounded-full hidden sm:block"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-1 h-1 bg-green-400/40 rounded-full hidden sm:block"
                  animate={{ 
                    y: [0, 6, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -right-2 w-0.5 h-0.5 bg-teal-400/50 rounded-full hidden sm:block"
                  animate={{ 
                    x: [0, 3, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              {/* Main description with better typography */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  ease: "easeOut"
                }}
              >
                <motion.p 
                  className="text-2xl font-medium text-foreground/90 leading-relaxed"
                  whileHover={{ 
                    scale: 1.02,
                    color: "rgba(147, 162, 103, 1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Một khu vườn gia đình
                </motion.p>
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-[#93A267] to-[#CADBB7] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    width: "5rem",
                    boxShadow: "0 0 8px rgba(147, 162, 103, 0.4)"
                  }}
                />
              </motion.div>

              {/* Detailed description with better structure */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                <motion.p 
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.0,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    color: "rgba(147, 162, 103, 0.8)",
                    x: 3
                  }}
                >
                  Mỗi bonsai ở đây là kết quả của nhiều năm vun trồng và tỉa tót, từ dáng cây giản dị cho người mới chơi đến những dáng thế độc đáo cho nhà sưu tập.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    color: "rgba(147, 162, 103, 0.8)",
                    x: 3
                  }}
                >
                  Hãy ghé thăm khu vườn của chúng tôi, chọn cho mình một chậu bonsai mang dấu ấn riêng, hoặc trò chuyện cùng chúng tôi để được chia sẻ kinh nghiệm và niềm vui chăm sóc cây.
                </motion.p>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.4,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "rgba(147, 162, 103, 1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-[#93A267] rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span>Hơn 20 năm kinh nghiệm</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "rgba(147, 162, 103, 1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-[#93A267] rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <span>100+ cây bonsai</span>
                </motion.div>
              </motion.div>
            </motion.div>
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
