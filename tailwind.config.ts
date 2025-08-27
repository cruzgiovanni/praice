import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        // Brand Colors
        primary: "#F8F6F3",
        "primary-foreground": "#1A1A1A",
        secondary: "#2C2C2C",
        accent: "#8B4513",

        // Surface Colors
        background: "#FFFFFF",
        surface: "#F5F5F5",
        card: "#FFFFFF",

        // Brand Accent Colors
        cognac: "#B8943A",
        sage: "#E6C25A",

        // Text Colors
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "muted-foreground": "#666666",

        // Status Colors
        success: "#4A7C59",
        warning: "#B8860B",
        error: "#A0522D",

        // Legacy support
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#8B4513",
        foreground: "#1A1A1A",
        muted: "#F5F5F5",
        popover: "#FFFFFF",
        "popover-foreground": "#1A1A1A",
        "card-foreground": "#1A1A1A",
        "secondary-foreground": "#FFFFFF",
        "accent-foreground": "#FFFFFF",
        destructive: "#A0522D",
        "destructive-foreground": "#FFFFFF",
      },
      spacing: {
        xs: "0.5rem", // 8px
        sm: "0.8125rem", // 13px
        md: "1.3125rem", // 21px
        lg: "2.125rem", // 34px
        xl: "3.4375rem", // 55px
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.6" }], // 14px
        base: ["1rem", { lineHeight: "1.6" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.5" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.4" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.3" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.2" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.1" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      },
      borderRadius: {
        none: "0",
        sm: "calc(0.5rem - 4px)",
        DEFAULT: "0.5rem",
        md: "calc(0.5rem - 2px)",
        lg: "1.5rem",
        xl: "2rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        modal: "0 20px 40px rgba(0, 0, 0, 0.12)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.08)",
        elevated: "0 8px 40px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
