"use client"

import {
  Home,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { content } from "@/data/content"

export function Footer() {
  const iconMap = {
    Instagram,
    Facebook,
    Linkedin,
  }

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="w-8 h-8 text-cognac" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium">
                  {content.brand.name}
                </span>
                <span className="text-sm text-white/80 -mt-1">
                  {content.brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              {content.footer.company.description}
            </p>

            <div className="flex space-x-4">
              {content.footer.company.social.map((social) => {
                const IconComponent =
                  iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-full hover:bg-cognac transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cognac mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {content.footer.contact.address}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cognac flex-shrink-0" />
                <a
                  href={`tel:${content.footer.contact.phone}`}
                  className="text-white/80 hover:text-cognac transition-colors duration-300"
                >
                  {content.footer.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cognac flex-shrink-0" />
                <a
                  href={`mailto:${content.footer.contact.email}`}
                  className="text-white/80 hover:text-cognac transition-colors duration-300"
                >
                  {content.footer.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {content.footer.legal.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
