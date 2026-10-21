import { IMG } from './images';

// Hardcoded destination catalog — grouped by month, exactly as shown in the mockups.
export const destinations = [
  {
    slug: 'lisbon', city: 'Lisbon', country: 'Portugal', month: 'January', dates: '05 → 29',
    badge: 'Lisbon by sea', image: IMG.lisbon,
    blurb: 'Arrive in Lisbon by the sea. Coffee mornings, tiled alleys and slow sunsets by the water.',
    intro: 'A city made for slow mornings and long workdays by the sea. Our Lisbon month is built around the Tagus — work near the water, climb the hills after hours, and end the week with the group at sunset.',
    weather: {
      headline: 'Three hundred days of sun',
      sun: '300+', temp: '18°C', wifi: '220 Mbps',
      note: 'Mild winters, an ocean breeze year-round and terraces that never really close.',
    },
    plans: [
      { name: 'The Room', price: '$1,450', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,400', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.lisbon, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.lisbon, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Portugal?', a: 'Most passports get 90 days visa-free in the Schengen area. We send full guidance with your booking confirmation.' },
      { q: 'Is January a good time for Lisbon?', a: 'Mild and wonderfully quiet. Around 18°C most days, sunny terraces and zero tourist crowds.' },
    ],
  },
  {
    slug: 'chiang-mai', city: 'Chiang Mai', country: 'Thailand', month: 'January', dates: '09 → 02',
    badge: 'Chiang Mai in focus', image: IMG.chiangmai,
    blurb: 'Temples, mountains and night markets. The classic nomad base, done properly.',
    intro: 'Thailand\u2019s mountain capital has hosted nomads for a decade, and for good reason: temples, night markets, jungle gyms and noodles that cost less than a coffee back home.',
    weather: {
      headline: 'Warm days, cool mountain nights',
      sun: '280+', temp: '27°C', wifi: '150 Mbps',
      note: 'Warm afternoons around 27°C with cool mountain evenings — bring one hoodie.',
    },
    plans: [
      { name: 'The Room', price: '$980', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$1,750', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.chiangmai, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.chiangmai, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Thailand?', a: 'Most passports get 60 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'Is the coworking space air-conditioned?', a: 'Yes — fast fiber, air-conditioning and a quiet floor for calls, open around the clock.' },
    ],
  },
  {
    slug: 'mexico-city', city: 'Mexico City', country: 'Mexico', month: 'January', dates: '11 → 05',
    badge: 'Mexico City in heat', image: IMG.mexicocity,
    blurb: 'Big-city energy, legendary food and the best coffee in the Americas.',
    intro: 'A megacity with a village soul. Work from leafy Roma cafes, eat your way through the markets, and let the city\u2019s color do the rest.',
    weather: {
      headline: 'Endless blue-sky season',
      sun: '300+', temp: '22°C', wifi: '180 Mbps',
      note: 'High altitude means warm days, cool evenings and a serious blue-sky season.',
    },
    plans: [
      { name: 'The Room', price: '$1,190', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,050', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.mexicocity, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.mexicocity, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Is Mexico City safe for a month?', a: 'In the neighborhoods we stay in, yes — we choose calm, walkable districts and brief everyone at arrival.' },
      { q: 'How walkable is the area?', a: 'Very. Cafes, gyms and groceries are within a ten-minute walk of the apartment.' },
    ],
  },
  {
    slug: 'barcelona', city: 'Barcelona', country: 'Spain', month: 'February', dates: '05 → 01',
    badge: 'Barcelona rhythm', image: IMG.barcelona,
    blurb: 'Beach mornings, tapas nights and modernista streets between work sprints.',
    intro: 'Gaudí towers, beach commutes and late dinners. Barcelona balances big-city energy with a work-friendly calm that is hard to beat.',
    weather: {
      headline: 'Sun between the work sprints',
      sun: '290+', temp: '19°C', wifi: '300 Mbps',
      note: 'Mediterranean light with a sea breeze. February is calm, sunny and wonderfully local.',
    },
    plans: [
      { name: 'The Room', price: '$1,650', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,700', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.barcelona, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.barcelona, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Spain?', a: 'Most passports get 90 days visa-free in the Schengen area. We send full guidance with your booking confirmation.' },
      { q: 'Where exactly do we stay?', a: 'In the Eixample district — modernista facades, quiet streets and a fifteen-minute walk to the beach.' },
    ],
  },
  {
    slug: 'da-nang', city: 'Da Nang', country: 'Vietnam', month: 'February', dates: '08 → 04',
    badge: 'Da Nang calm', image: IMG.danang,
    blurb: 'Calm beaches, mountain passes and the quiet side of Vietnam.',
    intro: 'Quiet beaches, marble mountains and the cheapest fresh fruit of the trip. Da Nang is Vietnam at an easy, breathable pace.',
    weather: {
      headline: 'Beach mornings, breezy afternoons',
      sun: '250+', temp: '26°C', wifi: '140 Mbps',
      note: 'Dawn swims, breezy afternoons and sunsets over the Marble Mountains.',
    },
    plans: [
      { name: 'The Room', price: '$940', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$1,680', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.danang, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.danang, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Vietnam?', a: 'Most nationalities need an e-visa, which we walk you through step by step before departure.' },
      { q: 'Is the beach far?', a: 'Cross the street. Every room sits one block from the sand.' },
    ],
  },
  {
    slug: 'medellin', city: 'Medellín', country: 'Colombia', month: 'February', dates: '11 → 07',
    badge: 'Medellín spring', image: IMG.medellin,
    blurb: 'Eternal spring, green mountains and a city that moves with the music.',
    intro: 'The city of eternal spring. Green mountains on every horizon, a metro that actually works, and a coworking scene that keeps growing.',
    weather: {
      headline: 'Eternal spring, all year',
      sun: '290+', temp: '23°C', wifi: '160 Mbps',
      note: 'They call it eternal spring for a reason. 23°C and flowering trees in every month.',
    },
    plans: [
      { name: 'The Room', price: '$1,050', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$1,850', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.medellin, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.medellin, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Colombia?', a: 'Most passports get 90 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'Which neighborhood do we stay in?', a: 'El Poblado — leafy, calm, and a short ride from the city\u2019s best cafes and coworking spaces.' },
    ],
  },
  {
    slug: 'marrakech', city: 'Marrakech', country: 'Morocco', month: 'March', dates: '05 → 29',
    badge: 'Marrakech in gold', image: IMG.marrakech,
    blurb: 'Riads, souks and desert light, a short walk from the medina.',
    intro: 'Clay walls, mint tea and desert light. Our Marrakech month is based in a restored riad a short walk from the medina.',
    weather: {
      headline: 'Golden light on clay walls',
      sun: '300+', temp: '24°C', wifi: '120 Mbps',
      note: 'Dry desert air, golden mornings and cool riad courtyards at midday.',
    },
    plans: [
      { name: 'The Room', price: '$1,100', features: ['Private room in a shared restored riad', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$1,900', features: ['Private riad suite with your own terrace', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.marrakech, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.marrakech, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Morocco?', a: 'Most passports get 90 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'Is the medina overwhelming?', a: 'It is part of the magic — and your local host walks you through it on day one, shortcuts included.' },
    ],
  },
  {
    slug: 'canggu', city: 'Canggu', country: 'Indonesia', month: 'March', dates: '08 → 01',
    badge: 'Canggu by the break', image: IMG.canggu,
    blurb: 'Surf breaks, rice fields and slow island mornings in Bali.',
    intro: 'Rice fields, surf breaks and smoothie bowls. Canggu is Bali at its most balanced — work mornings, ocean evenings.',
    weather: {
      headline: 'Surf, sun and slow mornings',
      sun: '280+', temp: '28°C', wifi: '100 Mbps',
      note: 'Tropical and bright. Short warm rains clear fast, surf all season.',
    },
    plans: [
      { name: 'The Room', price: '$1,150', features: ['Private room in a shared villa with a pool', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,000', features: ['Private villa suite with pool access', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.canggu, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.canggu, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Indonesia?', a: 'Most passports get a 30-day visa on arrival, extendable once. We handle the paperwork guide for you.' },
      { q: 'Do I need to rent a scooter?', a: 'No — we arrange walkable stays and shared rides. Scooter rental is optional for the adventurous.' },
    ],
  },
  {
    slug: 'cape-town', city: 'Cape Town', country: 'South Africa', month: 'March', dates: '11 → 05',
    badge: 'Cape Town edges', image: IMG.capetown,
    blurb: 'Two oceans, one mountain and the best commute views on earth.',
    intro: 'Two oceans, one flat-topped mountain and a food scene that punches far above its weight. Cape Town is the trip people rebook.',
    weather: {
      headline: 'Mountain light, ocean air',
      sun: '260+', temp: '22°C', wifi: '170 Mbps',
      note: 'Cape Doctor winds and crisp light. Pack layers for Table Mountain.',
    },
    plans: [
      { name: 'The Room', price: '$1,250', features: ['Private room in a shared Sea Point apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,150', features: ['Private apartment with mountain views', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.capetown, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.capetown, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for South Africa?', a: 'Most passports get 90 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'Is the city car-free friendly?', a: 'Yes — we stay in Sea Point where cafes, the promenade and coworking are all walkable.' },
    ],
  },
  {
    slug: 'tokyo', city: 'Tokyo', country: 'Japan', month: 'April', dates: '04 → 28',
    badge: 'Tokyo in motion', image: IMG.tokyo,
    blurb: 'Precision, ramen and quiet backstreets made for deep work.',
    intro: 'The world\u2019s most reliable city. Trains on the second, ramen at midnight, and quiet backstreets made for deep work.',
    weather: {
      headline: 'Crisp air, cherry blossom evenings',
      sun: '230+', temp: '17°C', wifi: '400 Mbps',
      note: 'Crisp April air, late-month blossoms and clear evenings across the city.',
    },
    plans: [
      { name: 'The Room', price: '$1,700', features: ['Private room in a shared Orbitfolk apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,800', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.tokyo, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.tokyo, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Japan?', a: 'Most passports get 90 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'Is Tokyo expensive for a month?', a: 'Less than its reputation. Groceries, ramen and transport are affordable — our guide covers the local tricks.' },
    ],
  },
  {
    slug: 'buenos-aires', city: 'Buenos Aires', country: 'Argentina', month: 'April', dates: '07 → 01',
    badge: 'Buenos Aires nights', image: IMG.buenosaires,
    blurb: 'Steak, tango and grand boulevards with late-night energy.',
    intro: 'Grand boulevards, hidden bistros and a nightlife that starts when your workday ends. Buenos Aires is Europe with better weather.',
    weather: {
      headline: 'Long days, late dinners',
      sun: '270+', temp: '21°C', wifi: '150 Mbps',
      note: 'Autumn in the southern hemisphere: soft light, 21°C and café terraces full.',
    },
    plans: [
      { name: 'The Room', price: '$1,020', features: ['Private room in a shared Palermo apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$1,800', features: ['Private suite with your own kitchen', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.buenosaires, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.buenosaires, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Argentina?', a: 'Most passports get 90 days visa-free on arrival. We send full guidance with your booking confirmation.' },
      { q: 'How late does the city stay up?', a: 'Very — dinner starts at nine. The good news: your workday can start late too.' },
    ],
  },
  {
    slug: 'split', city: 'Split', country: 'Croatia', month: 'April', dates: '10 → 04',
    badge: 'Split by the Adriatic', image: IMG.split,
    blurb: 'Roman walls, Adriatic swims and island ferries every weekend.',
    intro: 'Roman walls, Adriatic swims and island ferries before lunch. Split turns a work month into a coastal summer.',
    weather: {
      headline: 'Adriatic light all season',
      sun: '270+', temp: '20°C', wifi: '130 Mbps',
      note: 'Shoulder-season Adriatic: calm seas, warm stones and locals back in town.',
    },
    plans: [
      { name: 'The Room', price: '$1,300', features: ['Private room in a shared old-town apartment', 'Weekly cleaning and linen service', '24/7 coworking access', 'Weekly community dinners and events'] },
      { name: 'The Suite', price: '$2,200', features: ['Private apartment by the waterfront', 'Weekly cleaning and linen service', '24/7 coworking access', 'Airport transfer and welcome dinner', 'Weekly community dinners and events'] },
    ],
    gallery: [IMG.split, IMG.workspace, IMG.community],
    cityImages: [IMG.story, IMG.split, IMG.room, IMG.workspace],
    cityFaqs: [
      { q: 'Do I need a visa for Croatia?', a: 'Croatia is in the Schengen area — most passports get 90 days visa-free. We send guidance with your booking.' },
      { q: 'Can I swim in April?', a: 'The brave do. The water is cool but the sunbathing weather is real from mid-April.' },
    ],
  },
];

export const months = ['January', 'February', 'March', 'April'];

export const monthBlurbs = {
  January: 'Kick off the year somewhere new. Three cities. One tribe.',
  February: 'Short month, long list of places.',
  March: 'Spring line-up: from the medina to the surf.',
  April: 'Close the season in style. Three cities. One tribe.',
};

export function getDestination(slug) {
  return destinations.find((d) => d.slug === slug);
}

export function destinationsByMonth(month) {
  return destinations.filter((d) => d.month === month);
}