const products = [
  {
    slug: "heets-amber-selection",
    title: "Heets Amber Selection",
    brand: "Heets",
    flavour: "Amber Selection",
    price: 89,
    image: "/kazakhstan/amber.webp",
    description: "Bold tobacco flavor with warm, woody notes."
  },
  {
    slug: "heets-purple-wave",
    title: "Heets Purple Wave",
    brand: "Heets",
    flavour: "Purple Wave",
    price: 89,
    image: "/kazakhstan/purple.webp",
    description: "Mentholated tobacco with fruity berry undertones."
  },
  {
    slug: "heets-silver-selection",
    title: "Heets Silver Selection",
    brand: "Heets",
    flavour: "Silver Selection",
    price: 89,
    image: "/kazakhstan/silver.webp",
    description: "Light tobacco blend with delicate and smooth aroma."
  },
  {
    slug: "heets-turquoise-selection",
    title: "Heets Turquoise Selection",
    brand: "Heets",
    flavour: "Turquoise Selection",
    price: 89,
    image: "/kazakhstan/turquoise.webp",
    description: "Cooling menthol flavor with subtle tobacco blend."
  },
  {
    slug: "heets-yellow-selection",
    title: "Heets Yellow Selection",
    brand: "Heets",
    flavour: "Yellow Selection",
    price: 89,
    image: "/kazakhstan/yellow.webp",
    description: "Light and smooth tobacco experience with citrus notes."
  },

  {
    slug: "terea-oasis-pearl",
    title: "TEREA Oasis Pearl (Japan)",
    brand: "TEREA",
    flavour: "Oasis Pearl (Japan)",
    price: 249,
    image: "/Jpan/OasisPearl.jpg",
    description: "Smooth menthol flavor with a refreshing twist."
  },
  {
    slug: "terea-menthol",
    title: "TEREA Menthol (Japan)",
    brand: "TEREA",
    flavour: "Menthol (Japan)",
    price: 249,
    image: "/Jpan/MENTHOL.jpg",
    description: "Classic menthol for a crisp experience."
  },
  {
    slug: "terea-rich-regular",
    title: "TEREA Rich Regular (Japan)",
    brand: "TEREA",
    flavour: "Rich Regular (Japan)",
    price: 249,
  image: "/Jpan/RichRegualr.png",
    description: "Deep and full-bodied tobacco experience."
  },
  {
    slug: "terea-yellow-menthol",
    title: "TEREA Yellow Menthol (Japan)",
    brand: "TEREA",
    flavour: "Yellow Menthol (Japan)",
    price:  249,
    image: "/Jpan/YellowMenthol.jpg",
    description: "Menthol flavor with citrus undertones."
  },
  {
    slug: "terea-regular-japan",
    title: "TEREA Regular (Japan)",
    brand: "TEREA",
    flavour: "Regular (Japan)",
    price: 249,
    image: "/Jpan/Regularjpan.jpg",
    description: "Smooth and balanced tobacco taste."
  },
  {
    slug: "terea-fusion-menthol",
    title: "TEREA Fusion Menthol (Japan)",
    brand: "TEREA",
    flavour: "Fusion Menthol (Japan)",
    price: 249,
    image: "/Jpan/FusionMenthol.jpg",
    description: "Fusion of cooling menthol and subtle flavors."
  },

  {
    slug: "iqos-terea-apricity-indonesia",
    title: "TEREA Apricity (Indonesia)",
    brand: "TEREA",
    flavour: "Apricity (Indonesia)",
    price: 130,
    image: "/indonesia/apricity-indonesia.webp",
    description: "Warm and fruity tobacco blend with a light touch."
  },
  {
    slug: "iqos-terea-yugen-indonesia",
    title: "TEREA Yugen (Indonesia)",
    brand: "TEREA",
    flavour: "Yugen (Indonesia)",
    price: 130,
    image: "/indonesia/yugen-indonesia.webp",
    description: "Floral and aromatic blend with a sophisticated finish."
  },
  {
    slug: "iqos-terea-sienna-indonesia",
    title: "TEREA Sienna (Indonesia)",
    brand: "TEREA",
    flavour: "Sienna (Indonesia)",
    price: 130,
    image: "/indonesia/sienna.webp",
    description: "Robust and intense tobacco flavor."
  },
  {
    slug: "iqos-terea-blue-indonesia",
    title: "TEREA Blue (Indonesia)",
    brand: "TEREA",
    flavour: "Blue (Indonesia)",
    price: 130,
    image: "/indonesia/Terea-Blue.jpg",
    description: "Cool and crisp menthol tobacco experience."
  },
  {
    slug: "iqos-terea-purple-indonesia-1",
    title: "TEREA Purple Wave (Indonesia)",
    brand: "TEREA",
    flavour: "Purple Wave (Indonesia)",
    price: 130,
    image: "/indonesia/terea-purple-wave.webp",
    description: "Menthol with hints of berry sweetness."
  },
  {
    slug: "iqos-terea-purple-indonesia-2",
    title: "TEREA Purple Menthol (Indonesia)",
    brand: "TEREA",
    flavour: "Purple Menthol (Indonesia)",
    price: 130,
    image: "/indonesia/purple-indonesia-2.png",
    description: "Smooth menthol with fruity aroma."
  },

  {
    slug: "iqos-terea-silver-kazakhstan",
    title: "TEREA Silver (Kazakhstan)",
    brand: "TEREA",
    flavour: "Silver (Kazakhstan)",
    price: 130,
    image: "/kazakhstan/silver.webp",
    description: "Light and subtle tobacco experience."
  },
  {
    slug: "iqos-terea-amber-kazakhstan",
    title: "TEREA Amber (Kazakhstan)",
    brand: "TEREA",
    flavour: "Amber (Kazakhstan)",
    price: 130,
    image: "/kazakhstan/amber.webp",
    description: "Well-rounded, warm tobacco flavor."
  },
  {
    slug: "iqos-terea-bronze-kazakhstan",
    title: "TEREA Bronze (Kazakhstan)",
    brand: "TEREA",
    flavour: "Bronze (Kazakhstan)",
    price: 130,
    image: "/kazakhstan/bronze.webp",
    description: "Cocoa and dried fruit notes with deep tobacco."
  },
  {
    slug: "iqos-terea-purple-kazakhstan",
    title: "TEREA Purple (Kazakhstan)",
    brand: "TEREA",
    flavour: "Purple (Kazakhstan)",
    price: 130,
    image: "/kazakhstan/purple.webp",
    description: "Menthol flavor with berry aftertaste."
  },

  {
    slug: "iqos-iluma-obsidian-black",
    title: "IQOS ILUMA Prime - Obsidian Black",
    brand: "IQOS",
    flavour: "ILUMA Prime - Obsidian Black",
    price: 439,
    image: "/iluma/BlackDevice.png",
    description: "Elegant black ILUMA Prime with premium finish."
  },
  {
    slug: "iqos-iluma-gold-khaki",
    title: "IQOS ILUMA Prime - Gold Khaki",
    brand: "IQOS",
    flavour: "ILUMA Prime - Gold Khaki",
    price: 439,
    image: "/iluma/khaki.png",
    description: "Stylish gold khaki design with a modern look."
  },
  {
    slug: "iqos-iluma-jade-green",
    title: "IQOS ILUMA Prime - Jade Green",
    brand: "IQOS",
    flavour: "ILUMA Prime - Jade Green",
    price: 439,
    image: "/iluma/GreenDevice.png",
    description: "Luxury green finish with powerful device performance."
  },
  {
    slug: "iqos-iluma-neon-limited",
    title: "IQOS ILUMA Prime - Neon Limited",
    brand: "IQOS",
    flavour: "ILUMA Prime - Neon Limited",
    price: 599,
    image: "/iluma/PrimeNeonLimited.jpg",
    description: "Limited edition neon color for bold users."
  },
  {
    slug: "iqos-iluma-bronze-taupe",
    title: "IQOS ILUMA Prime - Bronze Taupe",
    brand: "IQOS",
    flavour: "ILUMA Prime - Bronze Taupe",
    price: 439,
    image: "/iluma/Primebright.png",
    description: "Premium bronze look with matte texture."
  },
  {
    slug: "iqos-iluma-oasis-limited",
    title: "IQOS ILUMA Prime - Oasis Limited",
    brand: "IQOS",
    flavour: "ILUMA Prime - Oasis Limited",
    price: 599,
    image: "/iluma/prime-oasis-limited-edition.jpeg",
    description: "Special edition device with oasis design."
  },

  {
    slug: "iqos-iluma-one-pebble-grey",
    title: "IQOS ILUMA One - Pebble Grey",
    brand: "IQOS",
    flavour: "ILUMA One - Pebble Grey",
    price: 239,
    image: "/ilumaone/ilumapebble.jpg",
    description: "Compact and durable in elegant grey tone."
  },
  {
    slug: "iqos-iluma-one-pebble-beige",
    title: "IQOS ILUMA One - Pebble Beige",
    brand: "IQOS",
    flavour: "ILUMA One - Pebble Beige",
    price: 239,
    image: "/ilumaone/Beige.jpg",
    description: "Portable and sleek in a calm beige style."
  },
  {
    slug: "iqos-iluma-one-moss-green",
    title: "IQOS ILUMA One - Moss Green",
    brand: "IQOS",
    flavour: "ILUMA One - Moss Green",
    price: 239,
    image: "/ilumaone/Green.jpg",
    description: "Earthy green color with smooth grip finish."
  },
  {
    slug: "iqos-iluma-one-sunset-red",
    title: "IQOS ILUMA One - Sunset Red",
    brand: "IQOS",
    flavour: "ILUMA One - Sunset Red",
    price: 239,
    image: "/ilumaone/sunsetred.png",
    description: "Bold red design for standout users."
  },
  {
    slug: "iqos-iluma-one-we-limited",
    title: "IQOS ILUMA One - We Edition (Limited)",
    brand: "IQOS",
    flavour: "ILUMA One - We Edition (Limited)",
    price: 239,
    image: "/ilumaone/blue.png",
    description: "Limited edition design inspired by unity."
  },
  {
    slug: "iqos-iluma-one-oasis-limited",
    title: "IQOS ILUMA One - Oasis Limited",
    brand: "IQOS",
    flavour: "ILUMA One - Oasis Limited",
    price: 239,
    image: "/ilumaone/orange.jpg",
    description: "Limited edition oasis style for modern users."
  }
];

export default products;
