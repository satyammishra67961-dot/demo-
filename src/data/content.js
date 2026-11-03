export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Store', href: '#store' },
  { label: 'Contact', href: '#contact' },
]

export const collections = [
  {
    id: 'men',
    number: '01',
    title: "Men's Wear",
    eyebrow: 'Tailored ease',
    image: '/images/men.webp',
    imageAlt: 'Man wearing a refined tailored outfit',
    description:
      'Clean lines, relaxed tailoring and everyday essentials designed to move effortlessly from day to evening.',
    items: ['Casual Shirts', 'Formal Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Jackets'],
    gallery: [
      { src: '/images/men-casual.webp', alt: 'Men’s casual shirt styling' },
      { src: '/images/men-tshirt.webp', alt: 'Men’s premium t-shirt' },
      { src: '/images/men-denim.webp', alt: 'Men’s denim collection' },
      { src: '/images/men-jacket.webp', alt: 'Men’s statement jacket' },
    ],
    note: 'A considered edit of modern menswear — refined, wearable and quietly confident.',
  },
  {
    id: 'women',
    number: '02',
    title: "Women's Wear",
    eyebrow: 'Modern femininity',
    image: '/images/women.webp',
    imageAlt: 'Woman wearing a modern editorial look',
    description:
      'Fluid silhouettes, statement details and effortless layers for the woman who dresses for herself.',
    items: ['Dresses', 'Kurtis', 'Tops', 'Ethnic Wear', 'Jeans', 'Co-ord Sets'],
    gallery: [
      { src: '/images/women-dress.webp', alt: 'Elegant women’s dress' },
      { src: '/images/women-kurti.webp', alt: 'Women’s kurti styling' },
      { src: '/images/women-top.webp', alt: 'Women’s contemporary top' },
      { src: '/images/women-coord.webp', alt: 'Women’s co-ord set' },
    ],
    note: 'From polished separates to occasion-ready drapes, every piece is chosen for presence.',
  },
  {
    id: 'kids',
    number: '03',
    title: "Kids' Wear",
    eyebrow: 'Little icons',
    image: '/images/kids.webp',
    imageAlt: 'Child wearing a stylish kids outfit',
    description:
      'Playful, comfortable and picture-perfect pieces made for everyday adventures and special celebrations.',
    items: ["Boys' Clothing", "Girls' Clothing", "Kids' Casual Wear", 'Party Wear'],
    gallery: [
      { src: '/images/kids-boys.webp', alt: 'Boys’ casual clothing' },
      { src: '/images/kids-girls.webp', alt: 'Girls’ everyday outfit' },
      { src: '/images/kids-party.webp', alt: 'Kids’ party wear' },
    ],
    note: 'Comfort-first silhouettes with the same attention to detail as our grown-up collections.',
  },
  {
    id: 'traditional',
    number: '04',
    title: 'Traditional Wear',
    eyebrow: 'Heritage, reimagined',
    image: '/images/traditional.webp',
    imageAlt: 'Woman wearing traditional attire',
    description:
      'Celebrate every occasion with richly detailed ethnic silhouettes, festive edits and wedding-worthy looks.',
    items: ['Ethnic Outfits', 'Festive Wear', 'Wedding Collection', 'Traditional Clothing'],
    gallery: [
      { src: '/images/trad-wedding.webp', alt: 'Traditional wedding collection' },
      { src: '/images/trad-festive.webp', alt: 'Festive traditional wear' },
      { src: '/images/trad-ethnic.webp', alt: 'Traditional ethnic outfit' },
      { src: '/images/women-ethnic.webp', alt: 'Ethnic wear detail' },
    ],
    note: 'Timeless craft, contemporary styling — made for moments that deserve to be remembered.',
  },
]

export const moods = [
  {
    id: 'new',
    label: 'New Arrivals',
    caption: 'The season’s fresh perspective',
    images: [
      {
        src: '/images/new-arrivals.webp',
        alt: 'Fashion editorial for new arrivals',
        title: 'The New Edit',
        tag: 'New Arrivals',
        ratio: 'tall',
      },
      {
        src: '/images/men-jacket.webp',
        alt: 'Man wearing a statement jacket',
        title: 'Structure & Softness',
        tag: 'Menswear',
        ratio: 'wide',
      },
      {
        src: '/images/women-elegant.webp',
        alt: 'Woman in an elegant new-season look',
        title: 'Quiet Confidence',
        tag: 'Womenswear',
        ratio: 'wide',
      },
    ],
  },
  {
    id: 'trending',
    label: 'Trending Styles',
    caption: 'What the city is wearing now',
    images: [
      {
        src: '/images/trending.webp',
        alt: 'Curated fashion rails and trending styles',
        title: 'The Style Files',
        tag: 'Trending',
        ratio: 'tall',
      },
      {
        src: '/images/editorial-2.webp',
        alt: 'Editorial street style fashion',
        title: 'Street Editorial',
        tag: 'City Edit',
        ratio: 'wide',
      },
      {
        src: '/images/women-coord.webp',
        alt: 'Woman wearing a modern co-ord set',
        title: 'Set The Tone',
        tag: 'Co-ords',
        ratio: 'wide',
      },
    ],
  },
  {
    id: 'everyday',
    label: 'Everyday Fashion',
    caption: 'Elevated essentials for real life',
    images: [
      {
        src: '/images/everyday.webp',
        alt: 'Everyday fashion editorial',
        title: 'Everyday, Elevated',
        tag: 'Essentials',
        ratio: 'tall',
      },
      {
        src: '/images/men-casual.webp',
        alt: 'Men’s relaxed everyday shirt',
        title: 'Easy Tailoring',
        tag: 'Menswear',
        ratio: 'wide',
      },
      {
        src: '/images/women-top.webp',
        alt: 'Women’s everyday top',
        title: 'Soft Spoken',
        tag: 'Womenswear',
        ratio: 'wide',
      },
    ],
  },
  {
    id: 'premium',
    label: 'Premium Collection',
    caption: 'The pieces worth keeping',
    images: [
      {
        src: '/images/premium.webp',
        alt: 'Premium fashion editorial portrait',
        title: 'The Signature Few',
        tag: 'Premium',
        ratio: 'tall',
      },
      {
        src: '/images/editorial-4.webp',
        alt: 'Premium menswear editorial',
        title: 'Modern Form',
        tag: 'Editorial',
        ratio: 'wide',
      },
      {
        src: '/images/women-dress.webp',
        alt: 'Premium women’s dress',
        title: 'After Hours',
        tag: 'Occasion',
        ratio: 'wide',
      },
    ],
  },
  {
    id: 'festive',
    label: 'Festive Collection',
    caption: 'Dressed for celebration',
    images: [
      {
        src: '/images/festive.webp',
        alt: 'Festive fashion editorial',
        title: 'A Season To Shine',
        tag: 'Festive',
        ratio: 'tall',
      },
      {
        src: '/images/trad-wedding.webp',
        alt: 'Wedding collection traditional wear',
        title: 'The Wedding Edit',
        tag: 'Traditional',
        ratio: 'wide',
      },
      {
        src: '/images/traditional.webp',
        alt: 'Traditional fashion attire',
        title: 'Heritage In Motion',
        tag: 'Occasion',
        ratio: 'wide',
      },
    ],
  },
]

export const rotateLooks = [
  { src: '/images/new-arrivals.webp', alt: 'New season fashion look' },
  { src: '/images/women-dress.webp', alt: 'Elegant dress look' },
  { src: '/images/men-jacket.webp', alt: 'Tailored jacket look' },
  { src: '/images/editorial-2.webp', alt: 'Editorial fashion look' },
  { src: '/images/festive.webp', alt: 'Festive fashion look' },
  { src: '/images/premium.webp', alt: 'Premium collection look' },
]

export const features = [
  {
    number: '01',
    icon: 'sparkle',
    title: 'Stylish Collections',
    text: 'Curated silhouettes that move easily from everyday ease to occasion-ready elegance.',
  },
  {
    number: '02',
    icon: 'scissors',
    title: 'Modern Fashion',
    text: 'Contemporary edits informed by global style, translated for the way you actually live.',
  },
  {
    number: '03',
    icon: 'diamond',
    title: 'Quality-Focused Selection',
    text: 'Thoughtful fabrics, considered finishes and the kind of details you can feel.',
  },
  {
    number: '04',
    icon: 'heart',
    title: 'Friendly Customer Service',
    text: 'Warm, personal guidance to help you find the piece that feels unmistakably you.',
  },
  {
    number: '05',
    icon: 'people',
    title: 'Fashion for Everyone',
    text: 'Men, women, kids and tradition — a wardrobe with space for every story.',
  },
]

export const stats = [
  { value: 4, suffix: '', label: 'Curated Collections' },
  { value: 20, suffix: '', label: 'Style Categories' },
  { value: 5, suffix: '', label: 'Editorial Moods' },
  { value: 1, suffix: '', label: 'Signature Identity' },
]

export const marqueeWords = [
  'VELORA',
  'WEAR YOUR IDENTITY',
  'MENSWEAR',
  'WOMENSWEAR',
  'KIDS',
  'TRADITIONAL',
  'NEW SEASON',
]
