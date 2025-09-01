export const content = {
  // Brand Information
  brand: {
    name: "Praice",
    tagline: "Negócios Imobiliários",
    description:
      "Móveis planejados de luxo com expertise em apartamentos. Qualidade superior, garantia de 5 anos e preços até 20% abaixo do mercado.",
  },

  // Header Navigation
  navigation: {
    main: [],
    more: [],
  },

  // Hero Carousel
  hero: {
    slides: [
      {
        id: 0,
        image:
          "https://images.pexels.com/photos/7005281/pexels-photo-7005281.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "APARTAMENTO COMPLETO BRANCO",
        subtitle: "5 AMBIENTES | ATÉ 56M²",
        price: "R$17.680",
        paymentInfo:
          "À VISTA | OU 18X DE R$1.180 NO CARTÃO | OU 18X DE R$1.340 NO BOLETO",
        cta: "Solicite Seu Orçamento",
      },
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/6636302/pexels-photo-6636302.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Transforme Seu Apartamento em um Lar de Sonhos",
        subtitle:
          "Móveis planejados de luxo, 100% MDF, com garantia de 5 anos e preços excepcionais",
        cta: "Explore Nossas Coleções",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Qualidade Direto da Fábrica",
        subtitle:
          "Economia de até 20% sem abrir mão da sofisticação e durabilidade",
        cta: "Conheça Nossos Diferenciais",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/7031718/pexels-photo-7031718.jpeg?auto=compress&cs=tinysrgb&w=1920",
        title: "Design Sob Medida Para Seu Estilo de Vida",
        subtitle:
          "Soluções personalizadas que maximizam espaços e refletem sua personalidade",
        cta: "Solicite Seu Projeto",
      },
    ],
  },

  // Products Section
  products: [
    {
      id: 1,
      name: "Guarda Roupa Casal",
      description:
        "Soluções inteligentes de armazenamento para casais com organização otimizada e design elegante",
      icon: "Home",
      image:
        "https://images.pexels.com/photos/9646754/pexels-photo-9646754.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/9646754/pexels-photo-9646754.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Gaveteiro", "Sapateira", "Pratileiras", "Cabides integrados"],
      highlight: "Organização inteligente para o casal moderno.",
    },
    {
      id: 2,
      name: "Guarda Roupa Solteiro",
      description:
        "Armazenamento compacto e funcional para solteiros com aproveitamento máximo do espaço",
      icon: "Bed",
      image:
        "https://images.pexels.com/photos/19878542/pexels-photo-19878542.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/19878542/pexels-photo-19878542.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Design compacto",
        "Gaveteiro",
        "Sapateira",
        "Pratileiras",
        "Cabides integrados",
      ],
      highlight: "Funcionalidade e estilo para o solteiro urbano.",
    },
    {
      id: 3,
      name: "Cozinha",
      description:
        "Espaços gourmet que transformam o ato de cozinhar em uma experiência prazerosa",
      icon: "ChefHat",
      image:
        "https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Gaveteiro",
        "Armários embutidos",
        "Espaço para fogão ou cooktop",
        "Armários superiores e inferiores",
      ],
      highlight: "Fluxo perfeito entre preparo e convivência.",
    },
    {
      id: 4,
      name: "Lavanderia",
      description:
        "Espaços funcionais para lavagem e organização de roupas com máxima eficiência",
      icon: "Monitor",
      image:
        "https://images.pexels.com/photos/4993073/pexels-photo-4993073.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/4993073/pexels-photo-4993073.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Armário aéreo",
        "Prateleiras funcionais",
        "Espaço reservado para máquina de lavar",
      ],
      highlight: "Eficiência e organização para suas roupas.",
    },
    {
      id: 5,
      name: "Banho Social",
      description:
        "Banheiros elegantes para receber visitas com acabamentos sofisticados e funcionalidade",
      icon: "Bath",
      image:
        "https://images.pexels.com/photos/8134749/pexels-photo-8134749.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/8134749/pexels-photo-8134749.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Portas ou gavetões",
        "Gabinete inferior para cuba",
        "Prateleiras para otimizar o espaço",
      ],
      highlight: "Elegância e funcionalidade para receber visitas.",
    },
  ],

  // Trust Signals
  trust: {
    title: "Por Que Escolher a Praice",
    subtitle: "Comprometimento com excelência em cada detalhe",
    signals: [
      {
        icon: "Shield",
        title: "Garantia de 5 Anos",
        description:
          "Cobertura completa para sua tranquilidade e investimento protegido",
      },
      {
        icon: "Factory",
        title: "Direto da Fábrica",
        description:
          "Eliminamos intermediários para oferecer os melhores preços do mercado",
      },
      {
        icon: "Award",
        title: "100% MDF Premium",
        description: "Material de primeira qualidade, resistente e durável",
      },

      {
        icon: "Truck",
        title: "Entrega Garantida",
        description: "Prazos cumpridos e instalação profissional incluída",
      },
    ],
    testimonials: [
      {
        name: "Marina Silva",
        location: "Monte Mor",
        content:
          "A qualidade dos móveis da Praice superou todas as minhas expectativas. O acabamento é impecável e o atendimento, excepcional.",
        rating: 5,
      },
      {
        name: "Roberto Mendes",
        location: "Hortolândia",
        content:
          "Transformaram meu apartamento de 45m² em um espaço incrível. A economia foi significativa e o resultado, profissional.",
        rating: 5,
      },
    ],
  },

  // FAQ Section
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Esclarecemos suas principais dúvidas",
    items: [
      {
        question: "A instalação está incluída no valor?",
        answer:
          "Sim, todos os nossos projetos incluem instalação profissional realizada por nossa equipe especializada, sem custos adicionais.",
      },
      {
        question: "Como funciona a garantia de 5 anos?",
        answer:
          "Nossa garantia cobre defeitos de fabricação, problemas estruturais e componentes. Inclui manutenção preventiva anual gratuita.",
      },
      {
        question: "Vocês atendem apartamentos de qualquer tamanho?",
        answer:
          "Sim. Cada projeto é desenvolvido sob medida para suas necessidades.",
      },
      {
        question: "É possível personalizar cores e acabamentos?",
        answer:
          "Absolutamente. Oferecemos ampla variedade de cores, texturas e acabamentos para que seu projeto reflita perfeitamente seu estilo.",
      },
      {
        question: "Qual é a forma de pagamento?",
        answer:
          "Aceitamos cartão de crédito (até 18x), PIX e boleto bancário (até 18x).",
      },
    ],
  },

  // Footer
  footer: {
    company: {
      description:
        "Praice é especialista em móveis planejados de luxo, oferecendo soluções personalizadas com qualidade excepcional e preços justos.",
      social: [
        {
          name: "Instagram",
          href: "https://www.instagram.com/praice_negociosmobiliarios/",
          icon: "Instagram",
        },
        // {
        //   name: "Facebook",
        //   href: "https://www.instagram.com/praice_negociosmobiliarios/",
        //   icon: "Facebook",
        // },
      ],
    },

    contact: {
      address: "Av da Emancipação 3770, 13186-000",
      phone: "(19) 97114-2860",
      email: "xxxx@gmail.com",
      whatsapp: "5519971142860",
      cnpj: "38.481.407/0001-50",
    },
    legal: {
      copyright: "Praice Negócios Imobiliários - Todos os direitos reservados.",
    },
  },

  // WhatsApp
  whatsapp: {
    number: "5519971142860",
    message:
      "Olá! Gostaria de conhecer mais sobre os móveis planejados da Praice.",
    buttonText: "Fale Conosco",
  },
}
