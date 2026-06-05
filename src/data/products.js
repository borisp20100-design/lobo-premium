export const products = [
  {
    id: "lobo-air-smart-glasses",
    name: "Lobo Air - Smart Glasses Pro",
    tagline: "Sonido Open-Ear, Conectividad Inteligente y Estilo Oakley & Ray-Ban.",
    description: "La fusión definitiva de diseño premium y tecnología futurista. Las Lobo Air integran un sistema de audio abierto patentado (Open-ear speakers) de doble canal que transmite sonido de alta fidelidad directamente a tus oídos sin aislarte del entorno. Su montura ultra liviana de polímero aeroespacial y sus lentes polarizados UV400 intercambiables ofrecen un confort excepcional y una protección visual inigualable.",
    price: 189.99,
    originalPrice: 279.99,
    rating: 4.9,
    reviewsCount: 248,
    images: [
      "./lobo_wolf_glasses_1780699885633.png",
      "./real_smart_glasses_1_1780699436243.png",
      "./real_smart_glasses_2_1780699449872.png",
      "./real_smart_glasses_3_1780699465002.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&start=43&end=53", // Simulación del video Rickroll de 10s con las gafas smart de fondo (ejemplo simulado de YouTube)
    variants: {
      colors: [
        { name: "Negro Mate (Obsidian Black)", value: "#121212" },
        { name: "Azul Cobalto (Deep Ocean)", value: "#1A2E40" },
        { name: "Carey (Tortoise Classic)", value: "#5C4033" }
      ],
      sizes: ["Lentes Polarizadas Oscuras", "Filtro Anti Luz Azul", "Espejadas Oro"]
    },
    specs: {
      "Audio": "Altavoces Abiertos de Doble Canal Coaxial",
      "Conectividad": "Bluetooth 5.3 de ultra bajo consumo",
      "Control": "Panel táctil capacitivo lateral integrado",
      "Lentes": "Polarizadas TAC UV400 de alta definición",
      "Batería": "Hasta 6 horas de reproducción / Carga rápida magnética (1.5 horas)",
      "Resistencia": "Certificación IPX4 resistente a salpicaduras y sudor",
      "Peso": "Solo 38 gramos de chasis ergonómico"
    },
    reviews: [
      {
        id: "r1",
        author: "Carlos M.",
        rating: 5,
        date: "2026-06-01",
        title: "Increíble calidad de audio y estilo único",
        comment: "Vengo de usar Ray-Ban Stories y estas gafas se sienten mucho más ligeras en el rostro. La calidad del altavoz open-ear es fantástica para caminar o andar en bici sin perder de vista los ruidos de la calle. Los lentes polarizados oscuros son de primer nivel."
      },
      {
        id: "r2",
        author: "Sofia L.",
        rating: 5,
        date: "2026-05-28",
        title: "Diseño premium espectacular",
        comment: "El marco color Carey se ve sumamente lujoso. La batería dura perfectamente todo mi día laboral y el micrófono filtra genial el viento para llamadas manos libres. Me encantó la carga magnética."
      },
      {
        id: "r3",
        author: "Andrés H.",
        rating: 4,
        date: "2026-05-15",
        title: "Muy cómodas para uso diario",
        comment: "Elegí el lente con filtro de luz azul para usar frente a la computadora y ha disminuido mucho mi fatiga visual. La conexión Bluetooth es instantánea con mi teléfono."
      }
    ],
    tags: ["Destacado", "Best Seller", "Nuevo"]
  }
];
