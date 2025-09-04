import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Praice - Móveis Planejados",
  description:
    "Móveis planejados de luxo para apartamentos. 100% MDF, garantia de 5 anos, direto da fábrica e até 20% abaixo do mercado. Qualidade e sofisticação para seu lar.",
  keywords: [
    "hortolândia",
    "monte-mor",
    "campinas",
    "móveis planejados",
    "móveis sob medida",
    "design de interiores",
    "Praice",
    "móveis de luxo",
    "MDF",
    "apartamentos",
    "decoração",
  ],
  authors: [{ name: "Praice" }],
  openGraph: {
    title: "Praice | Móveis Planejados de Luxo - Design Sob Medida",
    description:
      "Praice: móveis planejados de luxo para apartamentos. Qualidade premium, design exclusivo e acabamentos sofisticados para transformar seu lar.",
    url: "praice.com.br",
    siteName: "Praice",
    images: [
      {
        url: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Praice - Móveis Planejados de Luxo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-navbutton-color" content="#8B4513" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="theme-color"
          content="#8B4513"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#654321"
          media="(prefers-color-scheme: dark)"
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17532297943"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17532297943');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
