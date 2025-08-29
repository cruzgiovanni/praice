"use client"

import { useState, useEffect } from "react"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { content } from "@/data/content"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.hero.slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.hero.slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + content.hero.slides.length) % content.hero.slides.length
    )
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {content.hero.slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "blur(2px)",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center text-center text-white drop-shadow-2xl">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 py-12 text-white/80 drop-shadow-2xl">
                <Heart className="w-4 h-4 " />
                <p className="">Monte Mor - Hortolândia - Sumaré </p>
              </div>
              {slide.price ? (
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight animate-fade-in font-extrabold">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-6 animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="text-center mb-8 animate-slide-up">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {slide.price}
                    </div>
                    <div className="text-lg md:text-xl text-white/90">
                      {slide.paymentInfo}
                    </div>
                  </div>
                  <button
                    className="inline-block px-8 py-4 bg-cognac text-white text-lg font-medium rounded-full hover:bg-accent transition-all duration-300 hover:shadow-elevated hover:scale-105 animate-slide-up"
                    onClick={() => {
                      if (slide.cta === "Explore Nossas Coleções") {
                        const collectionsSection =
                          document.getElementById("collections")
                        if (collectionsSection) {
                          collectionsSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      } else {
                        const url = `https://wa.me/${
                          content.whatsapp.number
                        }?text=${encodeURIComponent(content.whatsapp.message)}`
                        window.open(url, "_blank")
                      }
                    }}
                  >
                    {slide.cta}
                  </button>
                </div>
              ) : (
                <div>
                  <h1 className=" text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <button
                    className="inline-block px-8 py-4 bg-cognac text-white text-lg font-medium rounded-full hover:bg-accent transition-all duration-300 hover:shadow-elevated hover:scale-105 animate-slide-up"
                    onClick={() => {
                      if (slide.cta === "Explore Nossas Coleções") {
                        const collectionsSection =
                          document.getElementById("collections")
                        if (collectionsSection) {
                          collectionsSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      } else {
                        const url = `https://wa.me/${
                          content.whatsapp.number
                        }?text=${encodeURIComponent(content.whatsapp.message)}`
                        window.open(url, "_blank")
                      }
                    }}
                  >
                    {slide.cta}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        <ChevronLeft className="w-4 h-3 md:w-6 md:h-5 text-white/80 group-hover:text-white transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        <ChevronRight className="w-4 h-3 md:w-6 md:h-5 text-white/80 group-hover:text-white transition-colors" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {content.hero.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Progress */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div
            className="h-1 bg-cognac transition-all duration-75 ease-linear"
            style={{
              animation: `progress 5000ms linear infinite`,
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
