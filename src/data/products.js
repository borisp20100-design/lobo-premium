export const products = [
  {
    id: "lobo-watch-01",
    name: "Lobo Chrono-Tactical Pro",
    tagline: "El reloj inteligente de titanio definitivo para exploradores modernos.",
    description: "Diseñado para resistir las condiciones más extremas, el Lobo Chrono-Tactical Pro combina la precisión militar con la conectividad inteligente avanzada. Con su chasis de titanio grado aeroespacial y pantalla AMOLED protegida por cristal de zafiro, redefine lo que un reloj de alto rendimiento puede lograr.",
    price: 349.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviewsCount: 142,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video demostrativo
    variants: {
      colors: [
        { name: "Titanio Carbón", value: "#2A2A2A" },
        { name: "Plata Ártica", value: "#D3D3D3" },
        { name: "Bronce Desierto", value: "#8C7853" }
      ],
      sizes: ["44mm", "47mm"]
    },
    specs: {
      "Material del Chasis": "Titanio Grado 5 Aeroespacial",
      "Cristal": "Zafiro Sintético Ultra Resistente",
      "Autonomía": "Hasta 21 días en modo inteligente / 45 días en ahorro",
      "Resistencia al Agua": "10 ATM (100 metros)",
      "Sensores": "GPS de doble frecuencia, Monitor Cardíaco ECG, Oxímetro SpO2, Altímetro, Barómetro"
    },
    reviews: [
      {
        id: "r1",
        author: "Sebastián R.",
        rating: 5,
        date: "2026-05-10",
        title: "Increíble calidad de materiales",
        comment: "El chasis de titanio es sumamente liviano y resistente. Ya sufrió un par de golpes accidentales y el cristal de zafiro está impecable. La batería me dura fácilmente 2 semanas usándolo diariamente para registrar mis entrenamientos. Altamente recomendado."
      },
      {
        id: "r2",
        author: "Valeria M.",
        rating: 4,
        date: "2026-05-02",
        title: "Muy completo, excelente para trekking",
        comment: "El GPS es muy preciso en montaña. Lo único es que la pantalla a pleno sol brilla bien, pero me costó un poco adaptarme a la interfaz los primeros días. Los acabados premium se notan apenas abres la caja."
      }
    ],
    tags: ["Destacado", "Best Seller"]
  },
  {
    id: "lobo-sound-02",
    name: "Lobo Acoustic-ANC Studio",
    tagline: "Cancelación de ruido adaptativa y sonido de alta fidelidad certificado.",
    description: "Experimenta la pureza absoluta del sonido. Los auriculares Lobo Acoustic-ANC aíslan activamente hasta el 99.4% del ruido ambiental mediante micrófonos de retroalimentación dual. Diseñados con almohadillas de espuma con memoria cubiertas de cuero sintético premium para garantizar máxima comodidad en largas sesiones.",
    price: 289.99,
    originalPrice: 379.99,
    rating: 4.9,
    reviewsCount: 88,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    variants: {
      colors: [
        { name: "Negro Obsidiana", value: "#121212" },
        { name: "Crema Alabastro", value: "#F5F5DC" },
        { name: "Azul Abismo", value: "#1D2D44" }
      ],
      sizes: ["Estándar"]
    },
    specs: {
      "Drivers": "40mm Dinámicos de Neodimio",
      "Cancelación de Ruido": "ANC Activo Híbrido hasta -42dB",
      "Conectividad": "Bluetooth 5.3 / Multipunto / Conexión Jack 3.5mm",
      "Autonomía": "Hasta 40 horas con ANC activo / 60 horas sin ANC",
      "Codecs Soportados": "LDAC, AAC, SBC, aptX HD"
    },
    reviews: [
      {
        id: "r3",
        author: "Martín P.",
        rating: 5,
        date: "2026-05-18",
        title: "Cancelación de ruido espectacular",
        comment: "Trabajo en una oficina compartida muy ruidosa y al ponérmelos el silencio es total. El sonido tiene una definición brutal en agudos y graves muy profundos sin llegar a saturar. Valen cada centavo."
      }
    ],
    tags: ["Destacado"]
  },
  {
    id: "lobo-bag-03",
    name: "Bolso de Viaje Lobo Nomad Leather",
    tagline: "El compañero definitivo para el viajero exigente.",
    description: "Confeccionado artesanalmente con cuero de grano completo italiano, el bolso Nomad es espacioso, elegante y sumamente duradero. Diseñado para cumplir con las dimensiones de equipaje de mano de aerolíneas globales, cuenta con compartimentos dedicados para calzado, laptop y organizador de cables de fácil acceso.",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviewsCount: 56,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    variants: {
      colors: [
        { name: "Marrón Vintaje", value: "#654321" },
        { name: "Negro Mate", value: "#1A1A1A" },
        { name: "Cognac Premium", value: "#9E5B2F" }
      ],
      sizes: ["45L", "55L"]
    },
    specs: {
      "Material Exterior": "100% Cuero de Grano Completo Encerado",
      "Forro Interior": "Algodón de Sarga de Alta Resistencia e Impermeable",
      "Cierres": "YKK Excella de Bronce Pulido",
      "Compartimento Laptop": "Hasta 16 pulgadas acolchado",
      "Garantía": "De por vida contra defectos de fabricación"
    },
    reviews: [
      {
        id: "r4",
        author: "Francisca L.",
        rating: 5,
        date: "2026-04-29",
        title: "Una obra de arte de cuero",
        comment: "Huele a cuero real desde que abres la caja. Los cierres corren de manera súper suave y el color cognac tiene un matiz hermoso. Ya he realizado 3 viajes con él y aguanta perfectamente el trajín. ¡Excelente compra!"
      }
    ],
    tags: ["Best Seller"]
  },
  {
    id: "lobo-keyboard-04",
    name: "Teclado Lobo Mech-Pro Aluminum",
    tagline: "Precisión táctil y acústica refinada para creadores y gamers.",
    description: "Construido sobre un bloque sólido de aluminio CNC anodizado, este teclado mecánico de distribución 75% ofrece una rigidez estructural inigualable. Con switches pre-lubricados de fábrica y espuma amortiguadora de porón de triple capa, cada pulsación produce un sonido satisfactorio y cremoso.",
    price: 159.99,
    originalPrice: 219.99,
    rating: 4.9,
    reviewsCount: 95,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    variants: {
      colors: [
        { name: "Gris Espacial", value: "#5A5D64" },
        { name: "Verde Bosque", value: "#2E473B" },
        { name: "Negro Carbón", value: "#212121" }
      ],
      sizes: ["Switches Lineales", "Switches Táctiles"]
    },
    specs: {
      "Material del Chasis": "Aluminio 6063 CNC Anodizado",
      "Switches": "Lobo Cream V2 (Pre-lubricados, Hot-swap)",
      "Keycaps": "PBT de Doble Inyección Perfil Cherry",
      "Batería": "4000 mAh (Inalámbrico 2.4GHz / Bluetooth 5.1 / Cable USB-C)",
      "Iluminación": "RGB Sur con efectos programables"
    },
    reviews: [
      {
        id: "r5",
        author: "Ignacio K.",
        rating: 5,
        date: "2026-05-15",
        title: "El mejor teclado que he tenido",
        comment: "El peso es considerable (cerca de 1.8 kg), lo que le da una estabilidad increíble. La sensación al escribir es sumamente suave y el sonido es exactamente ese 'thock' cremoso que buscaba sin tener que modificar nada."
      }
    ],
    tags: ["Nuevo"]
  },
  {
    id: "lobo-projector-05",
    name: "Proyector Lobo Cinema-Laser 4K",
    tagline: "Tu cine privado en casa con brillo láser y color cinematográfico.",
    description: "Convierte cualquier pared en una pantalla de cine de hasta 150 pulgadas. Con tecnología de fuente de luz láser ALPD, este proyector ofrece un brillo excepcional de 2200 lúmenes ANSI y resolución 4K UHD real. Integra Android TV para streaming directo de tus apps favoritas.",
    price: 899.99,
    originalPrice: 1299.99,
    rating: 4.7,
    reviewsCount: 34,
    images: [
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    variants: {
      colors: [
        { name: "Blanco Cerámico", value: "#ECECEC" },
        { name: "Gris Grafito", value: "#3A3B3C" }
      ],
      sizes: ["Estándar"]
    },
    specs: {
      "Resolución": "4K UHD (3840 x 2160)",
      "Fuente de Luz": "Láser ALPD (Vida útil > 25,000 horas)",
      "Brillo": "2200 Lúmenes ANSI",
      "Sistema de Sonido": "Bocinas Duales Dolby Audio 15W sintonizadas por Harman/Kardon",
      "Enfoque": "Autoenfoque Inteligente y Corrección Trapezoidal 6 Puntos"
    },
    reviews: [
      {
        id: "r6",
        author: "Ricardo G.",
        rating: 4,
        date: "2026-05-22",
        title: "Excelente calidad de proyección",
        comment: "El brillo es excelente, incluso de día con cortinas no muy gruesas se ve bien. De noche la experiencia es idéntica al cine. El sistema operativo corre súper fluido. Le doy 4 estrellas solo porque es algo pesado para transportar."
      }
    ],
    tags: ["Destacado"]
  },
  {
    id: "lobo-coffee-06",
    name: "Cafetera Expreso Lobo Barista Touch",
    tagline: "El arte del café de especialidad al alcance de un toque.",
    description: "Diseñada para los verdaderos amantes del café. Con su bomba italiana de 19 bares y sistema de calentamiento rápido ThermoJet, la Lobo Barista Touch extrae cada nota de sabor del grano fresco en segundos. Cuenta con pantalla táctil intuitiva y espumador automático de microespuma de leche.",
    price: 499.99,
    originalPrice: 649.99,
    rating: 4.8,
    reviewsCount: 71,
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    variants: {
      colors: [
        { name: "Acero Inoxidable", value: "#C0C0C0" },
        { name: "Negro Mate Trufa", value: "#2B2B2B" }
      ],
      sizes: ["Semiautomática"]
    },
    specs: {
      "Presión de Bomba": "19 Bares Bomba de Alta Calidad Italiana",
      "Tiempo de Calentamiento": "3 segundos con sistema ThermoJet",
      "Molinillo Integrado": "Cónico de acero endurecido con 30 niveles de molienda",
      "Capacidad de Agua": "2.0 Litros con filtro de carbón activo",
      "Espumador": "Varita de vapor autolimpiante con ajuste de temperatura"
    },
    reviews: [
      {
        id: "r7",
        author: "Carla P.",
        rating: 5,
        date: "2026-05-24",
        title: "Una delicia cada mañana",
        comment: "El café sale con una crema perfecta y el molinillo integrado es muy preciso. Poder programar la temperatura y textura de la leche hace que preparar lattes sea una experiencia facilísima. Vale completamente la inversión para los amantes del buen café."
      }
    ],
    tags: ["Nuevo"]
  }
];
