import type { Product, Category } from './schema'

export const seedCategories: Category[] = [
  {
    id: 'cat-rings',
    slug: 'rings',
    name: 'Rings',
    description: 'Solitaires, eternity bands, and bespoke heirloom statement rings crafted in solid 18k gold and platinum.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },
  {
    id: 'cat-necklaces',
    slug: 'necklaces',
    name: 'Necklaces & Pendants',
    description: 'Luminous diamond solitaires, lustrous freshwater pearls, and sculptural chains made to be cherished daily.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },
  {
    id: 'cat-bracelets',
    slug: 'bracelets',
    name: 'Bracelets & Bangles',
    description: 'Timeless diamond tennis bracelets, hand-polished cuffs, and fluid chains of extraordinary balance.',
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },
  {
    id: 'cat-earrings',
    slug: 'earrings',
    name: 'Earrings',
    description: 'Effortless diamond studs, cascading baroque drops, and architectural huggie hoops forged for light reflection.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  }
]

export const seedProducts: Product[] = [
  // --- RINGS ---
  {
    id: 'aur-rng-01',
    slug: 'celestial-solitaire-diamond-ring',
    name: 'The Celestial Solitaire Ring',
    subtitle: '1.50ct Brilliant Round Cut Diamond in 18k Solid Gold',
    description: 'A contemporary tribute to iconic romance. The Celestial Solitaire suspends a hand-selected 1.50 carat lab-grown diamond atop a delicate, tapering knife-edge band engineered to capture ambient light from every facet. Forged from recycled 18k solid gold with four micro-claw prongs.',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 1850,
    compareAtPrice: 2200,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isNew: true,
    materials: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold', '950 Platinum'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['US 5', 'US 6', 'US 6.5', 'US 7', 'US 7.5', 'US 8', 'US 9'],
    defaultSize: 'US 7',
    gemstone: 'Lab Diamond',
    caratWeight: '1.50 ct',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-RNG-001',
    details: [
      { label: 'Center Stone', value: '1.50 Carat Round Brilliant Cut' },
      { label: 'Diamond Color & Clarity', value: 'D-E Color, VVS1 Clarity' },
      { label: 'Band Width', value: '1.8 mm micro-tapered' },
      { label: 'Metal Weight', value: '3.6 grams (Solid 18k)' },
      { label: 'Certification', value: 'IGI Certificate of Authenticity Included' }
    ],
    careInstructions: 'Clean gently using warm soapy water and a soft-bristled brush. Store individually in your velvet AURELIA keepsake box.',
    shippingInfo: 'Complimentary overnight insured shipping via FedEx Signature Required. 30-day risk-free returns.',
    reviews: [
      {
        id: 'rev-01',
        author: 'Eleanor Vance',
        rating: 5,
        date: '2026-09-14',
        title: 'Breathtaking sparkle and proportion',
        comment: 'Proposed with this ring and my fiancé was speechless. The setting lets so much light pass through the stone. Unbelievable craftsmanship.',
        verified: true
      },
      {
        id: 'rev-02',
        author: 'Marcus Sterling',
        rating: 5,
        date: '2026-10-02',
        title: 'Exceeded all expectations',
        comment: 'The packaging alone feels like high luxury. Ring size 6 was spot-on and the platinum finish is pristine.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-rng-02',
    slug: 'luminary-eternity-band',
    name: 'The Luminary Eternity Band',
    subtitle: 'Continuous Micro-Pavé Diamonds in 18k White Gold',
    description: 'An unbroken circle of radiance. Set with seamless micro-pavé conflict-free diamonds totaling 1.20 carats, this eternity band is handcrafted with scalloped edges for low-profile everyday elegance and stackable luxury.',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 1290,
    compareAtPrice: 1450,
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    stockCount: 8,
    isFeatured: false,
    isNew: false,
    materials: ['18k White Gold', '18k Yellow Gold', '950 Platinum'],
    defaultMaterial: '18k White Gold',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8'],
    defaultSize: 'US 6',
    gemstone: 'Lab Diamond',
    caratWeight: '1.20 ctw',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-RNG-002',
    details: [
      { label: 'Total Carat Weight', value: '1.20 ct total diamond weight' },
      { label: 'Clarity / Color', value: 'VS1 / F Color' },
      { label: 'Band Profile', value: 'Comfort-fit rounded interior' },
      { label: 'Setting', value: 'Shared-prong scalloped micro-pavé' }
    ],
    careInstructions: 'Soak in lukewarm water with mild dish soap for 10 minutes, rinse under lukewarm running water and pat dry.',
    shippingInfo: 'Complimentary insured express shipping. 30-day return policy.',
    reviews: [
      {
        id: 'rev-03',
        author: 'Sophia Chen',
        rating: 5,
        date: '2026-08-28',
        title: 'Perfect anniversary upgrade',
        comment: 'Stacks seamlessly against my engagement ring without scratching. Very comfortable for 24/7 wear.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-rng-03',
    slug: 'verona-emerald-cut-halo-ring',
    name: 'The Verona Emerald Cut Halo Ring',
    subtitle: '2.0ct Deep Colombian Emerald with French Pavé Halo',
    description: 'An ode to vintage aristocracy. Features a saturated 2.0 carat lab-created Colombian emerald framed by twenty-eight scintillating brilliant cut diamonds. Hand-engraved gallery detailing adds quiet grandeur.',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 2450,
    compareAtPrice: 2800,
    rating: 5.0,
    reviewCount: 19,
    inStock: true,
    stockCount: 3,
    isFeatured: true,
    isNew: true,
    materials: ['18k Yellow Gold', '950 Platinum'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['US 6', 'US 7', 'US 8'],
    defaultSize: 'US 7',
    gemstone: 'Emerald & Diamond',
    caratWeight: '2.40 ctw',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-RNG-003',
    details: [
      { label: 'Center Gemstone', value: '2.00 Carat Emerald Cut Hydrothermal Emerald' },
      { label: 'Halo Stones', value: '0.40 ctw Round Brilliant Diamonds' },
      { label: 'Metal Composition', value: 'Solid 18k Fairmined Gold' },
      { label: 'Origin', value: 'Handcrafted in Antwerp' }
    ],
    careInstructions: 'Avoid harsh ultrasonic cleaners. Wipe with microfibre polishing cloth.',
    shippingInfo: 'Insured high-value armored courier delivery included.',
    reviews: [
      {
        id: 'rev-04',
        author: 'Vivienne Laurent',
        rating: 5,
        date: '2026-10-18',
        title: 'Deep, hypnotic green hue',
        comment: 'The emerald color is mesmerizing in natural daylight. Truly museum quality.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-rng-04',
    slug: 'solis-sculptural-dome-signet',
    name: 'The Solis Sculptural Dome Signet',
    subtitle: 'Heavyweight Solid 18k Gold Architectural Ring',
    description: 'A modern statement of poise and permanence. Solid, substantial, and contoured to hug the finger with ergonomic fluidity, the Solis Dome Ring reflects a high-mirror gold luster with a flush-set starburst diamond.',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 980,
    compareAtPrice: 1150,
    rating: 4.7,
    reviewCount: 15,
    inStock: true,
    stockCount: 11,
    isFeatured: false,
    isNew: false,
    materials: ['18k Yellow Gold', '18k Rose Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    defaultSize: 'US 7',
    gemstone: 'Flush Diamond',
    caratWeight: '0.08 ct',
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-RNG-004',
    details: [
      { label: 'Weight', value: '7.8 grams pure solid gold' },
      { label: 'Finish', value: 'Mirror high polish' },
      { label: 'Band Profile', value: 'Tapered comfort curved interior' }
    ],
    careInstructions: 'Use the included jewelry cloth to remove fingerprints and retain high-gloss shine.',
    shippingInfo: 'Ships within 24 hours in luxury presentation box.',
    reviews: []
  },

  // --- NECKLACES ---
  {
    id: 'aur-nck-01',
    slug: 'etoile-diamond-drop-pendant',
    name: 'The Étoile Diamond Drop Pendant',
    subtitle: '1.0ct Pear Brilliant Diamond on Diamond-Cut Chain',
    description: 'Suspended in pure weightlessness, the Étoile pendant features a tear-shaped pear diamond encased in a 3-prong bezel, sliding gracefully along a fine 1.1mm diamond-cut cable chain with dual adjustment points.',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Pendants',
    price: 1350,
    compareAtPrice: 1580,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    stockCount: 9,
    isFeatured: true,
    isNew: true,
    materials: ['18k Yellow Gold', '18k White Gold', '950 Platinum'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['16 - 18 inch Adjustable', '18 - 20 inch Adjustable'],
    defaultSize: '16 - 18 inch Adjustable',
    gemstone: 'Lab Diamond',
    caratWeight: '1.00 ct',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-NCK-001',
    details: [
      { label: 'Center Stone', value: '1.00 ct Pear Cut Lab Diamond' },
      { label: 'Clarity / Color', value: 'VVS2 / E Color' },
      { label: 'Chain Type', value: 'Solid 18k Diamond-Cut Cable Chain' },
      { label: 'Clasp', value: 'Secure lobster claw with AURELIA hallmark tag' }
    ],
    careInstructions: 'Clean with warm water and mild soap; store laid flat to prevent knotting.',
    shippingInfo: 'Complimentary insured shipping included.',
    reviews: [
      {
        id: 'rev-05',
        author: 'Camilla Hayes',
        rating: 5,
        date: '2026-10-11',
        title: 'Minimalist perfection',
        comment: 'I never take it off. It sits right at my collarbone and catches the light delicately without being ostentatious.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-nck-02',
    slug: 'meridian-baroque-pearl-choker',
    name: 'The Meridian Baroque Pearl Choker',
    subtitle: 'Hand-Selected Lustrous Freshwater Baroque Pearls with 18k Toggle',
    description: 'No two organic gems are identical. The Meridian combines rare, orient-rich organic freshwater pearls individually hand-knotted on Japanese silk cord, finished with an architectural 18k gold equestrian toggle clasp.',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Pendants',
    price: 820,
    compareAtPrice: 950,
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    stockCount: 5,
    isFeatured: true,
    isNew: false,
    materials: ['18k Yellow Gold Clasp', '18k White Gold Clasp'],
    defaultMaterial: '18k Yellow Gold Clasp',
    sizes: ['16 inch Choker', '18 inch Princess'],
    defaultSize: '16 inch Choker',
    gemstone: 'Cultured Baroque Pearl',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-NCK-002',
    details: [
      { label: 'Pearl Grade', value: 'Grade AAA Handpicked Baroque Pearls (11-13mm)' },
      { label: 'Stringing', value: 'Double hand-knotted natural Japanese silk' },
      { label: 'Clasp Type', value: 'Solid 18k Gold T-Bar Toggle' }
    ],
    careInstructions: 'Put pearls on last after perfume and hairspray. Wipe with damp cloth after wearing.',
    shippingInfo: 'Complimentary signature delivery.',
    reviews: []
  },
  {
    id: 'aur-nck-03',
    slug: 'aureus-heavy-herringbone-chain',
    name: 'The Aureus Fluid Herringbone Chain',
    subtitle: '4.5mm Silken Weave in 18k Italian Gold',
    description: 'Supple as silk against the skin. Forged in Vicenza, Italy, this herringbone necklace drapes liquid gold flat across the clavicle, catching every movement with hypnotic golden radiance.',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Pendants',
    price: 1100,
    compareAtPrice: 1250,
    rating: 4.9,
    reviewCount: 27,
    inStock: true,
    stockCount: 7,
    isFeatured: false,
    isNew: false,
    materials: ['18k Yellow Gold', '18k White Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['16 inch', '18 inch', '20 inch'],
    defaultSize: '18 inch',
    gemstone: 'None',
    images: [
      'https://images.unsplash.com/photo-1611591475152-47352332906b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1611591475152-47352332906b?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-NCK-003',
    details: [
      { label: 'Chain Width', value: '4.5 mm flat profile' },
      { label: 'Origin', value: 'Vicenza, Italy' },
      { label: 'Gold Weight', value: '11.4 grams 18k solid gold' }
    ],
    careInstructions: 'Store flat in box. Do not bend or sleep in herringbone chains to maintain shape.',
    shippingInfo: 'Shipped in velvet presentation case with polishing kit.',
    reviews: []
  },
  {
    id: 'aur-nck-04',
    slug: 'celeste-sapphire-constellation-locket',
    name: 'The Celeste Sapphire Constellation Locket',
    subtitle: 'Engravable Heirloom Oval Locket with Ceylon Blue Sapphires',
    description: 'An intimate heirloom designed to keep treasures close to the heart. Hand-engraved with starbursts set with natural Ceylon sapphires, the locket opens to hold two beloved photographs.',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Pendants',
    price: 1420,
    compareAtPrice: null,
    rating: 5.0,
    reviewCount: 16,
    inStock: true,
    stockCount: 4,
    isFeatured: false,
    isNew: true,
    materials: ['18k Yellow Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['20 - 22 inch Chain'],
    defaultSize: '20 - 22 inch Chain',
    gemstone: 'Ceylon Sapphire',
    caratWeight: '0.35 ctw',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-NCK-004',
    details: [
      { label: 'Locket Dimensions', value: '22mm x 16mm oval' },
      { label: 'Gemstones', value: 'Five Natural Ceylon Sapphires (Royal Blue)' },
      { label: 'Interior', value: 'Two photo wells with crystal protective inserts' }
    ],
    careInstructions: 'Wipe dry with clean polishing cloth.',
    shippingInfo: 'Includes custom photo sizing template and gift wrapping.',
    reviews: []
  },

  // --- BRACELETS ---
  {
    id: 'aur-brc-01',
    slug: 'eternity-diamond-tennis-bracelet',
    name: 'The AURELIA Tennis Bracelet',
    subtitle: '4.00 ctw DEF/VS Lab Diamonds in 4-Prong 18k Setting',
    description: 'The definitive standard of quiet luxury. Fifty uniform round brilliant diamonds set into fluid articulate 4-prong links that wrap around the wrist with effortless suppleness. Fitted with a double-safety hidden clasp.',
    category: 'bracelets',
    categoryLabel: 'Bracelets & Bangles',
    price: 2650,
    compareAtPrice: 3100,
    rating: 5.0,
    reviewCount: 52,
    inStock: true,
    stockCount: 5,
    isFeatured: true,
    isNew: false,
    materials: ['18k White Gold', '18k Yellow Gold', '950 Platinum'],
    defaultMaterial: '18k White Gold',
    sizes: ['6.5 inch', '7.0 inch', '7.5 inch'],
    defaultSize: '7.0 inch',
    gemstone: 'Lab Diamond',
    caratWeight: '4.00 ctw',
    images: [
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-BRC-001',
    details: [
      { label: 'Diamond Quality', value: '4.00 Total Carats, DEF Color, VS Clarity' },
      { label: 'Link Articulation', value: 'Full 360-degree precision hinge joints' },
      { label: 'Clasp Mechanism', value: 'Internal box lock with dual safety latches' }
    ],
    careInstructions: 'Professional ultrasonic cleaning safe or warm soapy water rinse.',
    shippingInfo: 'Signature-required insured shipping in discreet tamper-evident parcel.',
    reviews: [
      {
        id: 'rev-06',
        author: 'Julian Thorne',
        rating: 5,
        date: '2026-10-25',
        title: 'Heirloom tier quality',
        comment: 'Bought this for my wife’s 40th. Every stone is calibrated identically; the safety clasp gives tremendous confidence.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-brc-02',
    slug: 'solene-sculpted-cuff-bangle',
    name: 'The Solène Sculpted Gold Cuff',
    subtitle: 'Fluted Architectural Hinge Bangle in 18k Yellow Gold',
    description: 'An architectural sculpture for the wrist. Featuring gently tapering fluted ribs inspired by classical columns, this solid hinged cuff clicks securely into place with seamless tension.',
    category: 'bracelets',
    categoryLabel: 'Bracelets & Bangles',
    price: 1680,
    compareAtPrice: 1950,
    rating: 4.8,
    reviewCount: 21,
    inStock: true,
    stockCount: 6,
    isFeatured: false,
    isNew: true,
    materials: ['18k Yellow Gold', '18k Rose Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['Small (6.0")', 'Medium (6.5")', 'Large (7.0")'],
    defaultSize: 'Medium (6.5")',
    gemstone: 'None',
    images: [
      'https://images.unsplash.com/photo-1611591475152-47352332906b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1611591475152-47352332906b?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-BRC-002',
    details: [
      { label: 'Gold Weight', value: '18.2 grams solid 18k gold' },
      { label: 'Hinge Style', value: 'Concealed micro-pin hinge with push-button release' }
    ],
    careInstructions: 'Gently wipe with microfiber cloth.',
    shippingInfo: 'Overnight priority shipping included.',
    reviews: []
  },
  {
    id: 'aur-brc-03',
    slug: 'palermo-paperclip-chain-bracelet',
    name: 'The Palermo Heavy Link Bracelet',
    subtitle: 'Elongated Oval Links with Pavé Diamond Carabiner',
    description: 'Modern attitude meets classical goldsmithing. Bold elongated links crafted in solid 18k gold centered with a diamond-encrusted threaded carabiner lock that allows for personalization with charms.',
    category: 'bracelets',
    categoryLabel: 'Bracelets & Bangles',
    price: 1390,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
    stockCount: 7,
    isFeatured: false,
    isNew: false,
    materials: ['18k Yellow Gold', '18k White Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['6.75 inch', '7.25 inch'],
    defaultSize: '7.25 inch',
    gemstone: 'Lab Diamond',
    caratWeight: '0.22 ctw',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-BRC-003',
    details: [
      { label: 'Link Gauge', value: '6.0 mm wide elongated links' },
      { label: 'Lock Feature', value: 'Functional screw-lock charm holder' }
    ],
    careInstructions: 'Polish with included jewelry cloth.',
    shippingInfo: 'Express complimentary shipping.',
    reviews: []
  },
  {
    id: 'aur-brc-04',
    slug: 'nura-keshi-pearl-wristlet',
    name: 'The Nura Keshi Pearl Wristlet',
    subtitle: 'Freeform Japanese Keshi Pearls on 18k Venetian Box Chain',
    description: 'Delicate petals of light. Naturally formed baroque keshi pearls float along a shimmering box chain, capturing ambient candlelight with an iridescent rainbow sheen.',
    category: 'bracelets',
    categoryLabel: 'Bracelets & Bangles',
    price: 650,
    compareAtPrice: 720,
    rating: 4.7,
    reviewCount: 14,
    inStock: true,
    stockCount: 12,
    isFeatured: false,
    isNew: false,
    materials: ['18k Yellow Gold', '18k Rose Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['6.5 - 7.5 inch Adjustable'],
    defaultSize: '6.5 - 7.5 inch Adjustable',
    gemstone: 'Keshi Pearl',
    images: [
      'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-BRC-004',
    details: [
      { label: 'Pearl Type', value: 'Natural Japanese Keshi Pearls' },
      { label: 'Chain Type', value: '1.2mm Venetian Box Chain with silicone stopper ball' }
    ],
    careInstructions: 'Store in soft velvet pouch.',
    shippingInfo: 'Free 2-day delivery.',
    reviews: []
  },

  // --- EARRINGS ---
  {
    id: 'aur-err-01',
    slug: 'solstice-diamond-stud-earrings',
    name: 'The Solstice Diamond Studs (2.0 ctw)',
    subtitle: 'Pair of 1.0ct Round Brilliant Lab Diamonds in 3-Prong Martini Setting',
    description: 'The foundation of every curated jewelry collection. A calibrated pair of 1.0 carat each round brilliant diamonds cut to ideal optical proportions, set close to the ear lobe in minimalist three-prong martini mounts with screw backs.',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 1950,
    compareAtPrice: 2350,
    rating: 5.0,
    reviewCount: 64,
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isNew: false,
    materials: ['18k White Gold', '18k Yellow Gold', '950 Platinum'],
    defaultMaterial: '18k White Gold',
    sizes: ['Standard Pierced Ear'],
    defaultSize: 'Standard Pierced Ear',
    gemstone: 'Lab Diamond',
    caratWeight: '2.00 ctw',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-ERR-001',
    details: [
      { label: 'Total Weight', value: '2.00 Carats Total Weight (1.0ct per ear)' },
      { label: 'Cut / Clarity / Color', value: 'Ideal Cut / VVS2 / D Color' },
      { label: 'Backing', value: 'Threaded screw-backs for absolute security' }
    ],
    careInstructions: 'Clean regularly with jewelry brush and warm water.',
    shippingInfo: 'Complimentary overnight insured shipping with dual certificate dossier.',
    reviews: [
      {
        id: 'rev-07',
        author: 'Grace Montgomery',
        rating: 5,
        date: '2026-10-30',
        title: 'Total head-turners',
        comment: 'The fire and brilliance from these studs are astonishing. The 3-prong martini setting sits completely flush against the lobe without tipping forward.',
        verified: true
      }
    ]
  },
  {
    id: 'aur-err-02',
    slug: 'lumia-baroque-pearl-drop-earrings',
    name: 'The Lumia Baroque Pearl Drops',
    subtitle: 'Tear-Shaped South Sea Pearls Suspended from Diamond Huggies',
    description: 'Drama meets organic delicacy. A pair of radiant 12mm baroque South Sea pearls dangling fluidly from pavé-diamond huggie earrings crafted in 18k solid yellow gold.',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 890,
    compareAtPrice: 1050,
    rating: 4.9,
    reviewCount: 29,
    inStock: true,
    stockCount: 4,
    isFeatured: true,
    isNew: true,
    materials: ['18k Yellow Gold', '18k White Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['Standard Pierced Ear'],
    defaultSize: 'Standard Pierced Ear',
    gemstone: 'South Sea Pearl & Diamond',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-ERR-002',
    details: [
      { label: 'Pearl Size', value: '11.5 - 12.5mm Australian South Sea baroque' },
      { label: 'Accent Stones', value: '0.18 ctw micro-pavé diamonds on huggie hoop' },
      { label: 'Versatility', value: 'Pearls are detachable; huggies can be worn solo' }
    ],
    careInstructions: 'Remove before swimming or bathing.',
    shippingInfo: 'Complimentary priority delivery.',
    reviews: []
  },
  {
    id: 'aur-err-03',
    slug: 'aura-chunky-gold-huggie-hoops',
    name: 'The Aura Bold Huggie Hoops',
    subtitle: 'Thick Polished 18k Solid Gold Everyday Hoops (14mm)',
    description: 'The definitive daily luxury hoop. Cast in heavyweight solid 18k gold with a satisfying click closure, the Aura Hoops provide a luminous golden gleam from morning coffee to black-tie evening gala.',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 590,
    compareAtPrice: 680,
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    stockCount: 14,
    isFeatured: false,
    isNew: false,
    materials: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
    defaultMaterial: '18k Yellow Gold',
    sizes: ['14mm Diameter', '18mm Diameter'],
    defaultSize: '14mm Diameter',
    gemstone: 'None',
    images: [
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-ERR-003',
    details: [
      { label: 'Outer Diameter', value: '14 mm (Width 3.8 mm)' },
      { label: 'Closure', value: 'Seamless integrated click lock' },
      { label: 'Weight', value: '4.8 grams solid 18k gold pair' }
    ],
    careInstructions: 'Clean with warm water and soft lint-free cloth.',
    shippingInfo: 'Fast 2-day delivery.',
    reviews: []
  },
  {
    id: 'aur-err-04',
    slug: 'seraphina-cascading-diamond-chandeliers',
    name: 'The Seraphina Cascading Chandeliers',
    subtitle: 'Art Deco Articulated Diamond Drop Earrings (3.5 ctw)',
    description: 'A masterwork of Parisian Haute Joaillerie. Handcrafted with articulated geometric bars holding emerald, marquise, and round brilliant diamonds that sway with hypnotic movement.',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 3450,
    compareAtPrice: 3900,
    rating: 5.0,
    reviewCount: 12,
    inStock: true,
    stockCount: 2,
    isFeatured: true,
    isNew: true,
    materials: ['950 Platinum', '18k White Gold'],
    defaultMaterial: '950 Platinum',
    sizes: ['Standard Pierced Ear'],
    defaultSize: 'Standard Pierced Ear',
    gemstone: 'Lab Diamond Multi-Cut',
    caratWeight: '3.50 ctw',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    sku: 'AUR-ERR-004',
    details: [
      { label: 'Total Diamond Weight', value: '3.50 Carats Total Weight' },
      { label: 'Diamond Cuts', value: 'Marquise, Emerald, and Round Brilliant' },
      { label: 'Length', value: '48 mm drop length' }
    ],
    careInstructions: 'Store in fitted presentation showcase.',
    shippingInfo: 'Armored courier delivery with personal handover.',
    reviews: []
  }
]
