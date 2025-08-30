"use client"

import { content } from "@/data/content"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image
                src="/praice.avif"
                alt="Praice Logo"
                fill
                className="object-cover rounded-full"
                sizes="32px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-text-primary">
                {content.brand.name}
              </span>
              <span className="text-xs text-text-secondary -mt-1">
                {content.brand.tagline}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="max-[600px]:hidden">
            <button className="px-6 py-2 bg-cognac text-white text-sm font-medium rounded-full hover:bg-accent transition-all duration-300 hover:shadow-elevated">
              <a
                href={`https://wa.me/${content.whatsapp.number}?text=${content.whatsapp.message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento Grátis
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
