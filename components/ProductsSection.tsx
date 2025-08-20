"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Home,
  Bed,
  ChefHat,
  Monitor,
  Bath,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { content } from "@/data/content"

const products = [
  {
    id: 1,
    name: "Living Integrado",
    description:
      "Ambientes conectados que maximizam espaços e criam fluidez perfeita entre sala e cozinha",
    icon: Home,
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Móveis multifuncionais",
      "Otimização de espaço",
      "Design contemporâneo",
    ],
    priceFrom: "R$ 8.900",
  },
  {
    id: 2,
    name: "Quartos",
    description:
      "Refúgios de tranquilidade com soluções inteligentes de armazenamento e conforto",
    icon: Bed,
    image:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Guarda-roupas planejados",
      "Cabeceiras exclusivas",
      "Criados-mudos integrados",
    ],
    priceFrom: "R$ 5.400",
  },
  {
    id: 3,
    name: "Cozinhas",
    description:
      "Espaços gourmet que transformam o ato de cozinhar em uma experiência prazerosa",
    icon: ChefHat,
    image:
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Bancadas em quartzo",
      "Armários até o teto",
      "Ilhas multifuncionais",
    ],
    priceFrom: "R$ 12.200",
  },
  {
    id: 4,
    name: "Home Office",
    description:
      "Escritórios integrados que unem produtividade e design em perfeita harmonia",
    icon: Monitor,
    image:
      "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Mesas ergonômicas",
      "Estantes modulares",
      "Iluminação integrada",
    ],
    priceFrom: "R$ 3.800",
  },
  {
    id: 5,
    name: "Banheiros",
    description:
      "Spas pessoais com acabamentos luxuosos e funcionalidade excepcional",
    icon: Bath,
    image:
      "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Móveis sob medida", "Espelhos iluminados", "Nichos integrados"],
    priceFrom: "R$ 4.200",
  },
]

export function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<number>(1)

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-white to-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cognac rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-cognac/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-cognac" />
            <span className="text-cognac font-medium">Produtos Exclusivos</span>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-medium text-text-primary mb-6 leading-tight">
            Ambientes que
            <span className="block text-cognac">Inspiram Vida</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Cada ambiente é cuidadosamente projetado para refletir seu estilo
            único, combinando funcionalidade excepcional com design sofisticado.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Product */}
          <div className="lg:row-span-2">
            <div className="relative h-[600px] rounded-3xl overflow-hidden group">
              <Image
                src={
                  products.find((p) => p.id === selectedProduct)?.image || ""
                }
                alt={products.find((p) => p.id === selectedProduct)?.name || ""}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  {products.find((p) => p.id === selectedProduct)?.icon && (
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      {(() => {
                        const IconComponent = products.find(
                          (p) => p.id === selectedProduct
                        )?.icon
                        return IconComponent ? (
                          <IconComponent className="w-6 h-6" />
                        ) : null
                      })()}
                    </div>
                  )}
                  <div>
                    <h3 className="text-3xl font-serif font-medium">
                      {products.find((p) => p.id === selectedProduct)?.name}
                    </h3>
                    <p className="text-white/80">
                      A partir de{" "}
                      {
                        products.find((p) => p.id === selectedProduct)
                          ?.priceFrom
                      }
                    </p>
                  </div>
                </div>

                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  {products.find((p) => p.id === selectedProduct)?.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {products
                    .find((p) => p.id === selectedProduct)
                    ?.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                </div>

                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-cognac hover:bg-accent text-white font-medium rounded-full transition-all duration-300 hover:shadow-elevated hover:scale-105">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 ${
                  selectedProduct === product.id
                    ? "bg-cognac text-white shadow-elevated scale-105"
                    : "bg-white hover:bg-surface"
                }`}
                onClick={() => setSelectedProduct(product.id)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full transition-colors duration-300 ${
                      selectedProduct === product.id
                        ? "bg-white/20"
                        : "bg-cognac/10"
                    }`}
                  >
                    <product.icon
                      className={`w-6 h-6 ${
                        selectedProduct === product.id
                          ? "text-white"
                          : "text-cognac"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h4
                      className={`font-serif text-xl font-medium mb-1 ${
                        selectedProduct === product.id
                          ? "text-white"
                          : "text-text-primary"
                      }`}
                    >
                      {product.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        selectedProduct === product.id
                          ? "text-white/80"
                          : "text-text-secondary"
                      }`}
                    >
                      A partir de {product.priceFrom}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      selectedProduct === product.id
                        ? "text-white"
                        : "text-cognac"
                    } ${hoveredProduct === product.id ? "translate-x-1" : ""}`}
                  />
                </div>

                {selectedProduct === product.id && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-card">
          <h3 className="font-serif text-3xl font-medium text-text-primary mb-4">
            Pronto para Transformar Seu Lar?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos criar o
            ambiente dos seus sonhos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="px-8 py-4 bg-cognac text-white font-medium rounded-full hover:bg-accent transition-all duration-300 hover:shadow-elevated hover:scale-105"
              onClick={() => {
                const url = `https://wa.me/${
                  content.whatsapp.number
                }?text=${encodeURIComponent(content.whatsapp.message)}`
                window.open(url, "_blank")
              }}
            >
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
