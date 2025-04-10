"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=500&width=800",
    alt: "Jądrowy reaktor badawczy i jego wykorzystanie",
    title: "Jądrowy reaktor badawczy i jego wykorzystanie",
    description: "Uczniowie naszej szkoły podczas wizyty w centrum badawczym.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=500&width=800",
    alt: "Zajęcia laboratoryjne",
    title: "Nowoczesne laboratoria",
    description: "Nauka przez doświadczenie w naszych pracowniach przedmiotowych.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=500&width=800",
    alt: "Wymiana międzynarodowa",
    title: "Programy wymiany międzynarodowej",
    description: "Współpracujemy z wieloma szkołami w Europie w ramach programu Erasmus+.",
  },
]

export default function MainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideTrackRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return

    setIsAnimating(true)
    setCurrentSlide(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-100">
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Slide Track - This will move horizontally */}
        <div
          ref={slideTrackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${carouselItems.length * 100}%`,
          }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="relative w-full flex-shrink-0">
              <div className="relative h-full w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority={item.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="max-w-lg text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        onClick={prevSlide}
        aria-label="Poprzedni slajd"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
        onClick={nextSlide}
        aria-label="Następny slajd"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Przejdź do slajdu ${index + 1}`}
            aria-current={index === currentSlide}
            disabled={isAnimating}
          ></button>
        ))}
      </div>
    </div>
  )
}

