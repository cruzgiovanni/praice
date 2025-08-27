import {
  Shield,
  Factory,
  Award,
  TrendingDown,
  Truck,
  Leaf,
  Star,
} from "lucide-react"
import { content } from "@/data/content"

const iconMap = {
  Shield,
  Factory,
  Award,
  TrendingDown,
  Truck,
  Leaf,
}

export function TrustSignals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Features */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-4">
            {content.trust.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {content.trust.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {content.trust.signals.map((signal, index) => {
            const IconComponent = iconMap[signal.icon as keyof typeof iconMap]

            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cognac/10 rounded-full mb-6 group-hover:bg-cognac/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-cognac" />
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-3">
                  {signal.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {signal.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-surface rounded-3xl p-12">
          <h3 className="font-serif text-3xl font-medium text-center text-text-primary mb-12">
            O Que Nossos Clientes Dizem
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.trust.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-warning fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-text-primary mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <footer>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-text-secondary">{testimonial.role}</div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
