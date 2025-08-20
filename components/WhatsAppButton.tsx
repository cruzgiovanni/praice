"use client"

import { MessageCircle } from "lucide-react"
import { content } from "@/data/content"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${
      content.whatsapp.number
    }?text=${encodeURIComponent(content.whatsapp.message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full shadow-elevated hover:shadow-modal transition-all duration-300 hover:scale-105 group"
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="font-medium hidden sm:block">
        {content.whatsapp.buttonText}
      </span>
    </button>
  )
}
