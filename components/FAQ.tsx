"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { content } from "@/data/content"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl text-text-primary mb-4">
            {content.faq.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            {content.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openItems.includes(index)

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-card transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-300"
                >
                  <span className="font-semibold text-lg text-text-primary pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`px-8 pb-2 transition-all duration-300 ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
