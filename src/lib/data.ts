export interface ServiceItem {
  id: string;
  title: string;
  titleArabic?: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
  image?: string;
  ctaText?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  countryFlag: string;
  region: "Dubai & UAE" | "Nearby Escapes" | "Middle East" | "Tropical Asia" | "Europe";
  duration: string;
  nights: number;
  priceAED: number;
  image: string;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  requirements: string[];
  visaNote: string;
  bestFor: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatarBg: string;
}

export const PACKAGE_REGIONS = [
  "All",
  "Dubai & UAE",
  "Nearby Escapes",
  "Middle East",
  "Tropical Asia",
  "Europe",
] as const;

export type PackageRegion = (typeof PACKAGE_REGIONS)[number];

export const COMPANY_INFO = {
  name: "Al Raheeq Tourism",
  arabicName: "الرحيق للسياحة",
  legalEntity: "Al Raheeq Tourism LLC",
  tagline: "Your Gateway to Dubai & Beyond",
  phone: "+971 4 396 9478",
  cleanPhone: "+97143969478",
  whatsapp: "97143969478",
  email: "info@alraheeqtourism.com",
  rating: 5.0,
  reviewsCount: "1,200+",
  address: {
    line1: "Al Masraf Building, 22nd Floor",
    line2: "Al Rigga, Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Al Masraf Building, 22nd Floor, Al Rigga, Deira, Dubai, UAE",
    googleMapsQuery: "Al+Masraf+Building+Al+Rigga+Deira+Dubai",
    mapLink: "https://maps.google.com/?q=Al+Masraf+Building+Al+Rigga+Deira+Dubai"
  },
  timings: {
    weekdays: "Monday – Saturday: 9:00 AM to 10:00 PM",
    sunday: "Sunday: Closed",
    badge: "Open Today until 10:00 PM"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "visa-assistance",
    title: "UAE Tourist Visas",
    titleArabic: "خدمات التأشيرات",
    tagline: "Quick 30 & 60-day UAE tourist visas and global services",
    description: "Express 24–48 hour fast-track approvals with complete document verification by Dubai visa experts.",
    iconName: "FileCheck",
    badge: "24–48h Fast Track",
    ctaText: "Apply Visa",
    image: "/bento/bento-visa.jpg",
    features: [
      "UAE 30-Day & 60-Day Tourist Visas",
      "Express 24-48 hour fast-track processing",
      "Document verification by Dubai visa experts",
      "Schengen, UK, USA & international visa help"
    ]
  },
  {
    id: "flight-bookings",
    title: "Worldwide Flights",
    titleArabic: "حجوزات الطيران",
    tagline: "Best rates for international and domestic flights",
    description: "Book flights across 500+ airlines with instant e-tickets, corporate discounts, and quick rebooking support.",
    iconName: "Plane",
    badge: "Best Fare Guarantee",
    ctaText: "Search Flights",
    image: "/bento/bento-flights.jpg",
    features: [
      "Economy, Business & First Class options",
      "Instant confirmation & e-ticket delivery",
      "24/7 rebooking & cancellation support",
      "Special group & corporate discounts"
    ]
  },
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    titleArabic: "حجوزات الفنادق",
    tagline: "Luxury and budget hotel bookings worldwide",
    description: "From 5-star Dubai resorts like Atlantis and Burj Al Arab to budget-friendly city hotels near Deira.",
    iconName: "Building2",
    badge: "Exclusive Rates",
    ctaText: "Book Hotel",
    image: "/bento/bento-hotels.jpg",
    features: [
      "Access to luxury Dubai 5-star beachfront resorts",
      "Exclusive complimentary breakfast & room upgrades",
      "Zero hidden fees with transparent invoicing",
      "Family-friendly and business-centric accommodations"
    ]
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    titleArabic: "التأمين الصحي للسفر",
    tagline: "Complete travel insurance coverage",
    description: "Mandatory UAE-compliant protection covering medical emergencies, lost baggage, and flight delays.",
    iconName: "ShieldCheck",
    badge: "UAE Compliant",
    ctaText: "Get Covered",
    image: "/bento/bento-insurance.jpg",
    features: [
      "Emergency medical & hospitalization cover",
      "Baggage delay & loss reimbursement",
      "COVID-19 & emergency evacuation protection",
      "Instant certificate generation for visa filing"
    ]
  },
  {
    id: "desert-safari",
    title: "Desert Safari & Red Dunes",
    titleArabic: "رحلات السفاري الصحراوية",
    tagline: "Unforgettable Dubai desert adventures",
    description: "Experience thrill-packed red dune bashing, quad biking, camel riding, and VIP Arabian BBQ camp.",
    iconName: "Compass",
    badge: "Top Dubai Experience",
    ctaText: "Book Safari",
    image: "/bento/bento-safari.jpg",
    features: [
      "VIP Desert Safari with red dunes bashing",
      "Quad biking, sandboarding & camel trekking",
      "Live Tanoura, Fire Show & 5-Star BBQ dinner",
      "Private 4x4 pickup directly from your hotel"
    ]
  },
  {
    id: "holiday-packages",
    title: "City Tours & Combos",
    titleArabic: "الباقات السياحية",
    tagline: "Dubai tours and holiday packages",
    description: "Burj Khalifa At The Top, Marina Dhow Cruises, city excursions, and customized international itineraries.",
    iconName: "Compass",
    badge: "Must Visit",
    ctaText: "Explore Tours",
    image: "/bento/bento-tours.jpg",
    features: [
      "Tailor-made itineraries for couples, families & groups",
      "Burj Khalifa At The Top & Museum of the Future",
      "Dubai Marina luxury sunset yacht & Dhow dinner",
      "Private luxury transfers & certified multilingual guides"
    ]
  }
];

export const ALL_PACKAGES: TourPackage[] = [
  {
    id: "dubai-luxury-explorer",
    title: "Dubai Ultimate Luxury & Desert Explorer",
    destination: "Dubai, UAE",
    countryFlag: "🇦🇪",
    region: "Dubai & UAE",
    duration: "5 Days / 4 Nights",
    nights: 4,
    priceAED: 1450,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 420,
    highlights: [
      "Burj Khalifa 124th Floor at sunset",
      "VIP Red Dune Desert Safari with BBQ dinner",
      "Dubai Marina Glass Dhow Cruise",
      "Dubai Frame & Old Dubai heritage walk"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Dubai Marina Cruise", description: "Airport pickup, 4★ hotel check-in in Deira/Downtown. Evening 2-hour luxury glass dhow cruise along Dubai Marina with international buffet dinner and live entertainment." },
      { day: 2, title: "Burj Khalifa & Downtown Discovery", description: "Fast-track entry to Burj Khalifa Levels 124 & 125. Dubai Mall free time, Dubai Aquarium & Underwater Zoo. Evening at Dubai Fountain show." },
      { day: 3, title: "VIP Desert Safari & BBQ Night", description: "Morning free for shopping at Gold Souk & Spice Souk. Afternoon 4x4 dune bashing in Lahbab Red Dunes, camel riding, sandboarding, henna. 5-star BBQ buffet with belly dance and fire show." },
      { day: 4, title: "Dubai Frame & Cultural Heritage", description: "Visit Dubai Frame for panoramic views. Old Dubai heritage walk through Al Fahidi Historical District. Abra ride across Dubai Creek. Afternoon at leisure or optional Museum of the Future visit." },
      { day: 5, title: "Departure", description: "Breakfast and hotel checkout. Private transfer to Dubai International Airport (DXB)." }
    ],
    inclusions: [
      "4 nights in 4★ hotel with daily breakfast",
      "Private airport transfers (arrival & departure)",
      "Burj Khalifa At The Top tickets (Level 124 & 125)",
      "VIP Desert Safari with BBQ dinner & entertainment",
      "Marina Dhow Cruise with dinner",
      "Dubai Frame entry ticket",
      "English-speaking tour coordinator"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunch & personal expenses",
      "Museum of the Future ticket (optional add-on)",
      "UAE visa (can be arranged separately)"
    ],
    requirements: [
      "Original Passport with minimum 6 months validity from travel date",
      "UAE Tourist Visa (30/60 Days) or GCC National / Visa-on-Arrival eligibility",
      "1 Passport-size photograph with white background (digital copy)",
      "Confirmed return flight ticket and hotel reservation voucher",
      "Travel insurance with emergency medical coverage"
    ],
    visaNote: "UAE tourist visa (30/60 days) can be processed by Al Raheeq Tourism within 24-48 hours.",
    bestFor: ["Families", "Couples", "First-time visitors"]
  },
  {
    id: "abu-dhabi-royal-heritage",
    title: "Abu Dhabi Royal Heritage & Louvre",
    destination: "Abu Dhabi, UAE",
    countryFlag: "🇦🇪",
    region: "Dubai & UAE",
    duration: "Full Day",
    nights: 0,
    priceAED: 175,
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 310,
    highlights: [
      "Sheikh Zayed Grand Mosque guided tour",
      "Louvre Abu Dhabi museum visit",
      "Emirates Palace & Corniche photo stop",
      "Yas Island & Ferrari World exterior"
    ],
    itinerary: [
      { day: 1, title: "Abu Dhabi Full Day Tour", description: "7:30 AM hotel pickup from Dubai. Drive to Abu Dhabi (1.5 hrs). Visit Sheikh Zayed Grand Mosque with expert guide. Photo stop at Emirates Palace and Corniche Beach. Louvre Abu Dhabi museum visit. Lunch break at Yas Mall. Drive past Ferrari World and Yas Marina Circuit on Yas Island. Return to Dubai by 6:00 PM." }
    ],
    inclusions: [
      "Hotel pickup & drop-off in Dubai",
      "Air-conditioned luxury transport",
      "Sheikh Zayed Grand Mosque entry & guided tour",
      "Louvre Abu Dhabi museum entry ticket",
      "Professional English-speaking guide",
      "Bottled water throughout the trip"
    ],
    exclusions: [
      "Lunch & personal expenses",
      "Ferrari World entry ticket (optional add-on AED 295)",
      "Gratuities"
    ],
    requirements: [
      "Original Passport or Emirates ID (for UAE residents)",
      "Valid UAE entry stamp or tourist visa",
      "Modest dress code for Sheikh Zayed Mosque (covered shoulders & ankles; headscarf for women)",
      "Comfortable walking shoes & sun protection",
      "Booking confirmation voucher on mobile"
    ],
    visaNote: "Valid UAE visa required. Abu Dhabi is within the UAE — no separate visa needed.",
    bestFor: ["Culture lovers", "Families", "Photography"]
  },
  {
    id: "oman-musandam-fjords",
    title: "Oman Musandam Fjords Dhow Cruise",
    destination: "Musandam, Oman",
    countryFlag: "🇴🇲",
    region: "Nearby Escapes",
    duration: "Full Day",
    nights: 0,
    priceAED: 240,
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 185,
    highlights: [
      "Traditional wooden dhow cruise through fjords",
      "Dolphin watching in open waters",
      "Snorkeling in crystal-clear Omani waters",
      "Fresh Arabic seafood buffet lunch on board"
    ],
    itinerary: [
      { day: 1, title: "Musandam Fjords Day Trip", description: "6:00 AM pickup from Dubai. Drive to Dibba port (approx 2 hrs). Board traditional Omani dhow. Cruise through dramatic limestone fjords with dolphin spotting. Snorkeling stop at secluded bay. Fresh Arabic lunch served on board. Swimming and kayaking. Return cruise to Dibba port. Drive back to Dubai by 7:00 PM." }
    ],
    inclusions: [
      "Dubai hotel pickup & drop-off",
      "AC transport to Dibba, Oman",
      "Full-day dhow cruise through Musandam fjords",
      "Snorkeling equipment & life jackets",
      "Arabic buffet lunch with fresh seafood on board",
      "Soft drinks, tea, coffee & water",
      "Kayaking equipment"
    ],
    exclusions: [
      "Oman border visa fee (approx AED 60, paid at border)",
      "Towels & personal items",
      "Gratuities",
      "Travel insurance"
    ],
    requirements: [
      "Original Passport with minimum 6 months validity (mandatory at UAE–Oman border)",
      "UAE Residence Visa (minimum 3 months validity) or valid UAE Tourist Visa",
      "Oman border entry fee (~AED 60 per person, paid directly at border checkpoint)",
      "Passport and visa copy sent to Al Raheeq 48 hrs prior for border pass clearance",
      "Swimwear, beach towel & sun protection"
    ],
    visaNote: "Oman on-arrival visa fee (~AED 60) payable at Dibba border. Passport must have 6 months validity.",
    bestFor: ["Adventure seekers", "Nature lovers", "Families"]
  },
  {
    id: "georgia-scenic-highlands",
    title: "Georgia Scenic Highlands & Tbilisi",
    destination: "Tbilisi & Kazbegi, Georgia",
    countryFlag: "🇬🇪",
    region: "Nearby Escapes",
    duration: "5 Days / 4 Nights",
    nights: 4,
    priceAED: 1850,
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 240,
    highlights: [
      "Tbilisi Old Town & Narikala Fortress cable car",
      "Kazbegi Gergeti Trinity Church with Caucasus backdrop",
      "Mtskheta UNESCO World Heritage site",
      "Georgian wine tasting & traditional Supra feast"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tbilisi", description: "Arrival at Tbilisi International Airport. Private transfer to 4★ boutique hotel. Evening walking tour of Abanotubani sulfur bath district and Shardeni Street. Welcome Georgian dinner with wine." },
      { day: 2, title: "Tbilisi City Discovery", description: "Full day guided tour: Narikala Fortress via cable car, Metekhi Church, Peace Bridge, Rustaveli Avenue. Visit Dry Bridge flea market. Afternoon Georgian cooking class or free time. Evening stroll along the Kura River." },
      { day: 3, title: "Mtskheta & Ananuri", description: "Day trip to Mtskheta — ancient capital and UNESCO site. Visit Jvari Monastery and Svetitskhoveli Cathedral. Drive to Ananuri fortress on Aragvi River. Return to Tbilisi. Evening at leisure in Fabrika district." },
      { day: 4, title: "Kazbegi Mountain Expedition", description: "Full day trip along Georgian Military Highway. Stops at Zhinvali Reservoir and Gudauri ski resort viewpoint. Arrive at Stepantsminda (Kazbegi). 4x4 ride to Gergeti Trinity Church (2170m) with stunning Caucasus panorama. Lunch with mountain views. Return to Tbilisi by evening." },
      { day: 5, title: "Departure", description: "Breakfast. Free time for last-minute shopping at Meidan Bazaar. Private transfer to Tbilisi International Airport." }
    ],
    inclusions: [
      "4 nights in 4★ boutique hotel (Tbilisi) with breakfast",
      "Private airport transfers",
      "All sightseeing transfers in AC vehicle",
      "Professional English-speaking guide",
      "Mtskheta UNESCO tour",
      "Kazbegi full-day excursion with 4x4 to Gergeti Church",
      "1 traditional Georgian Supra dinner with wine",
      "All entry tickets mentioned in itinerary"
    ],
    exclusions: [
      "International flights (Dubai–Tbilisi return)",
      "Travel insurance",
      "Lunches & personal expenses",
      "Optional hot-air balloon ride over Tbilisi"
    ],
    requirements: [
      "Original Passport valid for minimum 6 months from entry date",
      "UAE Residence Visa (UAE residents enjoy visa-free entry for up to 360 days) or Georgia e-Visa",
      "Confirmed return flight tickets (Dubai ↔ Tbilisi)",
      "Confirmed hotel booking vouchers & tour itinerary",
      "Travel medical insurance valid in Georgia for the entire stay",
      "Proof of financial sufficiency (cash or international debit/credit card)"
    ],
    visaNote: "UAE residents with valid residence visa get visa-free entry to Georgia for up to 1 year. Indian, Pakistani, and most passport holders — check requirements.",
    bestFor: ["Couples", "Nature lovers", "Adventure seekers"]
  },
  {
    id: "baku-flame-towers",
    title: "Baku Flame Towers & Gabala Alpine",
    destination: "Baku & Gabala, Azerbaijan",
    countryFlag: "🇦🇿",
    region: "Nearby Escapes",
    duration: "4 Days / 3 Nights",
    nights: 3,
    priceAED: 1650,
    image: "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 175,
    highlights: [
      "Flame Towers panoramic views at night",
      "Old City Icherisheher UNESCO walking tour",
      "Gobustan mud volcanoes & rock art",
      "Gabala Tufandag mountain cable car"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Baku", description: "Arrival at Heydar Aliyev International Airport. Private transfer to 4★ hotel. Evening drive to Highland Park for panoramic night view of Flame Towers and Baku Bay. Dinner at a seaside boulevard restaurant." },
      { day: 2, title: "Baku City & Gobustan", description: "Morning tour of Old City (Icherisheher) — Maiden Tower, Palace of Shirvanshahs, narrow craft lanes. Drive to Gobustan National Park to see ancient petroglyphs and bubbling mud volcanoes. Return to Baku. Afternoon visit to Heydar Aliyev Center (Zaha Hadid). Evening free at Nizami Street." },
      { day: 3, title: "Gabala Mountain Day", description: "Drive to Gabala (3 hrs through scenic mountains). Tufandag Mountain Resort cable car ride with Caucasus views. Visit Nohur Lake for paddle boating. Lunch in nature. Drive back to Baku via Shamakhi town. Evening at leisure." },
      { day: 4, title: "Departure", description: "Breakfast. Optional visit to Ateshgah Fire Temple or Yanar Dag (Burning Mountain). Private transfer to Baku airport." }
    ],
    inclusions: [
      "3 nights in 4★ hotel (Baku) with breakfast",
      "Private airport transfers",
      "All sightseeing in private AC vehicle",
      "English-speaking guide throughout",
      "Gobustan National Park entry",
      "Tufandag cable car ticket",
      "Heydar Aliyev Center entry",
      "1 Azerbaijani traditional dinner"
    ],
    exclusions: [
      "International flights (Dubai–Baku return)",
      "Travel insurance",
      "Lunches & personal expenses",
      "Azerbaijan e-Visa (ASAN visa)"
    ],
    requirements: [
      "Passport with minimum 6 months validity beyond travel dates & 2 blank pages",
      "Azerbaijan ASAN E-Visa (e-visa approval printout; processed online within 3 days)",
      "Confirmed round-trip flight tickets (Dubai ↔ Baku)",
      "Hotel reservation vouchers for Baku and Gabala",
      "Valid travel health insurance",
      "Passport-size photograph (soft copy for visa application)"
    ],
    visaNote: "Most nationalities can apply for Azerbaijan ASAN e-Visa online (approx $26). Processing takes 3-5 business days.",
    bestFor: ["Culture lovers", "Couples", "Photography"]
  },
  {
    id: "armenia-monasteries-sevan",
    title: "Armenia Historic Monasteries & Lake Sevan",
    destination: "Yerevan & Lake Sevan, Armenia",
    countryFlag: "🇦🇲",
    region: "Nearby Escapes",
    duration: "4 Days / 3 Nights",
    nights: 3,
    priceAED: 1590,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80",
    featured: false,
    rating: 4.8,
    reviewsCount: 130,
    highlights: [
      "Yerevan Republic Square & Cascade Complex",
      "Garni pagan temple — Hellenistic era ruins",
      "Lake Sevan — 'Jewel of Armenia' boat ride",
      "Tsaghkadzor ski resort ropeway"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Yerevan", description: "Arrival at Zvartnots International Airport. Transfer to 4★ hotel. Evening walking tour of Republic Square with musical fountain show. Dinner at a traditional Armenian tavern." },
      { day: 2, title: "Garni & Geghard Monastery", description: "Drive to Garni Temple — the only standing Greco-Roman temple in the Caucasus. Continue to Geghard Monastery (UNESCO). Watch lavash bread baking at a local home. Return to Yerevan. Afternoon at Cascade Complex art center. Evening free." },
      { day: 3, title: "Lake Sevan & Tsaghkadzor", description: "Drive to Lake Sevan — Armenia's largest lake at 1900m altitude. Visit Sevanavank Monastery on the peninsula. Optional boat ride. Continue to Tsaghkadzor for ropeway with panoramic mountain views. Return to Yerevan by evening." },
      { day: 4, title: "Departure", description: "Breakfast. Optional morning visit to Armenian Genocide Memorial & Museum. Private transfer to Yerevan airport." }
    ],
    inclusions: [
      "3 nights in 4★ hotel (Yerevan) with breakfast",
      "Private airport transfers",
      "All sightseeing in private AC vehicle",
      "English-speaking guide",
      "Garni Temple & Geghard Monastery entries",
      "Tsaghkadzor ropeway ticket",
      "1 traditional Armenian dinner"
    ],
    exclusions: [
      "International flights (Dubai–Yerevan return)",
      "Travel insurance",
      "Lunches & personal expenses",
      "Lake Sevan boat ride (optional ~$5)"
    ],
    requirements: [
      "Original Passport with at least 6 months validity",
      "UAE Residence Visa (allows visa-free entry for UAE residents) or Armenian E-Visa",
      "Return flight tickets & confirmed hotel accommodation vouchers",
      "Valid travel insurance covering emergency medical expenses",
      "Warm clothing layers for high-altitude Lake Sevan & mountain excursions"
    ],
    visaNote: "UAE residents with valid residence visa get visa-free entry to Armenia. Indian passport holders can get e-visa or visa on arrival.",
    bestFor: ["History buffs", "Nature lovers", "Budget travelers"]
  },
  {
    id: "turkey-istanbul-cappadocia",
    title: "Turkey Magical Istanbul & Cappadocia",
    destination: "Istanbul & Cappadocia, Turkey",
    countryFlag: "🇹🇷",
    region: "Middle East",
    duration: "6 Days / 5 Nights",
    nights: 5,
    priceAED: 2750,
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 350,
    highlights: [
      "Cappadocia sunrise hot air balloon flight",
      "Bosphorus sunset yacht cruise",
      "Hagia Sophia & Blue Mosque guided tour",
      "Grand Bazaar & underground cave hotels"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Istanbul", description: "Arrival at Istanbul Airport. Private transfer to 4★ Sultanahmet hotel. Evening Bosphorus sunset cruise with Turkish tea. Dinner at a rooftop restaurant overlooking the Golden Horn." },
      { day: 2, title: "Istanbul Old City", description: "Full-day guided tour: Hagia Sophia, Blue Mosque, Topkapi Palace, Basilica Cistern. Lunch break at traditional lokanta. Afternoon at Grand Bazaar for shopping. Evening free at Istiklal Avenue and Taksim Square." },
      { day: 3, title: "Fly to Cappadocia", description: "Morning flight to Kayseri/Nevşehir. Transfer to boutique cave hotel in Göreme. Afternoon Cappadocia South Tour: Derinkuyu Underground City, Ihlara Valley walk, Selime Monastery. Evening sunset at Red Valley viewpoint." },
      { day: 4, title: "Cappadocia Hot Air Balloon & North Tour", description: "Pre-dawn hot air balloon flight over fairy chimneys (weather permitting). Breakfast at cave hotel. North Cappadocia Tour: Devrent Valley, Monks Valley (Paşabağ), Avanos pottery workshop, Göreme Open Air Museum (UNESCO). Evening Turkish night show with dinner." },
      { day: 5, title: "Return to Istanbul", description: "Morning flight back to Istanbul. Afternoon visit Dolmabahçe Palace and Spice Bazaar (Egyptian Market). Farewell dinner at a Karaköy seafood restaurant." },
      { day: 6, title: "Departure", description: "Breakfast and hotel checkout. Private transfer to Istanbul Airport." }
    ],
    inclusions: [
      "2 nights 4★ hotel in Istanbul + 2 nights cave hotel in Cappadocia + 1 night Istanbul",
      "Daily breakfast",
      "Internal flights (Istanbul ↔ Cappadocia)",
      "Hot air balloon ride in Cappadocia",
      "Bosphorus sunset cruise",
      "All museum & site entry tickets",
      "Professional English-speaking guide",
      "All private transfers & sightseeing transport"
    ],
    exclusions: [
      "International flights (Dubai–Istanbul return)",
      "Travel insurance",
      "Lunches & personal shopping",
      "Turkey e-Visa fee ($50 for some nationalities)",
      "Gratuities"
    ],
    requirements: [
      "Passport valid for at least 6 months from the date of entry into Turkey",
      "Turkey E-Visa (approved online before departure) or sticker visa as per nationality",
      "Confirmed return air tickets & inter-city flight vouchers",
      "Hotel booking confirmations in Istanbul and Cappadocia",
      "Comprehensive international travel health insurance",
      "Proof of financial sufficiency ($50/day minimum) or credit card"
    ],
    visaNote: "Most nationalities need a Turkey e-Visa (apply online, approved within hours, ~$50). UAE residents — check eligibility.",
    bestFor: ["Couples", "Honeymooners", "Culture lovers"]
  },
  {
    id: "egypt-pyramids-nile",
    title: "Egypt Cairo Pyramids & Nile Luxury",
    destination: "Cairo & Giza, Egypt",
    countryFlag: "🇪🇬",
    region: "Middle East",
    duration: "5 Days / 4 Nights",
    nights: 4,
    priceAED: 2100,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 265,
    highlights: [
      "Giza Great Pyramids & Sphinx up close",
      "Grand Egyptian Museum (GEM) visit",
      "Nile dinner cruise with live Tanoura show",
      "Khan el-Khalili bazaar & Islamic Cairo"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Cairo", description: "Arrival at Cairo International Airport. Private transfer to 5★ Nile-view hotel. Evening Nile dinner cruise with international buffet, belly dance, Tanoura show, and live music." },
      { day: 2, title: "Pyramids & Sphinx", description: "Full-day tour of Giza Plateau: Great Pyramid of Khufu, Pyramid of Khafre, Pyramid of Menkaure, and the Great Sphinx. Optional camel ride with pyramids backdrop. Visit the Solar Boat Museum. Afternoon at Memphis and Saqqara Step Pyramid." },
      { day: 3, title: "Grand Egyptian Museum & Citadel", description: "Morning visit to the Grand Egyptian Museum (GEM) — world's largest archaeological museum with Tutankhamun's complete collection. Afternoon: Saladin Citadel, Mohammed Ali Mosque. Explore Coptic Cairo (Hanging Church, Ben Ezra Synagogue)." },
      { day: 4, title: "Islamic Cairo & Khan el-Khalili", description: "Walking tour through Islamic Cairo: Al-Azhar Mosque, Al-Muizz Street historic corridor. Shopping at Khan el-Khalili bazaar. Afternoon Egyptian cooking class or Nile felucca ride. Farewell dinner at a traditional Egyptian restaurant." },
      { day: 5, title: "Departure", description: "Breakfast and hotel checkout. Private transfer to Cairo International Airport." }
    ],
    inclusions: [
      "4 nights in 5★ Nile-view hotel with daily breakfast",
      "Private airport transfers",
      "All sightseeing in private AC vehicle",
      "Professional licensed Egyptologist guide",
      "Giza Pyramids, Sphinx & Saqqara entries",
      "Grand Egyptian Museum entry ticket",
      "Nile dinner cruise with entertainment",
      "All entry fees as per itinerary"
    ],
    exclusions: [
      "International flights (Dubai–Cairo return)",
      "Travel insurance",
      "Egypt tourist visa (available on arrival for most nationalities ~$25)",
      "Lunches & personal expenses",
      "Optional camel ride at Pyramids"
    ],
    requirements: [
      "Original Passport valid for at least 6 months from arrival date",
      "Egypt Tourist Visa / Visa on Arrival (for eligible nationalities ~$25 USD) or E-Visa",
      "2 recent passport-size photographs (white background)",
      "Round-trip flight booking confirmation and Cairo hotel vouchers",
      "Travel medical insurance",
      "USD cash notes (clean/recent) for on-arrival visa fee and personal gratuities"
    ],
    visaNote: "Egypt visa on arrival available for most nationalities (~$25 USD). UAE residents with valid visa can also apply for Egypt e-visa.",
    bestFor: ["History buffs", "Families", "Culture lovers"]
  },
  {
    id: "saudi-alula-marvels",
    title: "Saudi Arabia AlUla Ancient Marvels",
    destination: "AlUla, Saudi Arabia",
    countryFlag: "🇸🇦",
    region: "Middle East",
    duration: "4 Days / 3 Nights",
    nights: 3,
    priceAED: 3200,
    image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80",
    featured: false,
    rating: 4.8,
    reviewsCount: 95,
    highlights: [
      "Hegra Nabataean tombs — Saudi's first UNESCO site",
      "Elephant Rock sunset experience",
      "Maraya — world's largest mirrored building",
      "AlUla Old Town heritage trail"
    ],
    itinerary: [
      { day: 1, title: "Arrival in AlUla", description: "Fly from Dubai to AlUla (or via Jeddah/Madinah). Transfer to desert resort. Afternoon at leisure at the resort oasis pool. Evening Elephant Rock sunset experience with traditional Arabian refreshments." },
      { day: 2, title: "Hegra & Dadan Kingdom", description: "Full-day guided tour of Hegra (Madain Saleh) — 111 monumental Nabataean tombs carved into sandstone. Visit Dadan ancient kingdom ruins and Jabal Ikmah open-air library of inscriptions. Lunch at a local farm-to-table restaurant." },
      { day: 3, title: "AlUla Old Town & Stargazing", description: "Morning heritage trail through AlUla Old Town — 900-year-old mudbrick labyrinth. Visit Maraya concert hall (mirrored building). Afternoon camel trek through Wadi Al-Qura. Evening stargazing dinner in the desert under Arabian skies." },
      { day: 4, title: "Departure", description: "Breakfast and checkout. Optional morning visit to Hijaz Railway station ruins. Transfer to AlUla airport for return flight." }
    ],
    inclusions: [
      "3 nights desert resort accommodation with breakfast",
      "Airport transfers in AlUla",
      "Hegra UNESCO site guided tour",
      "Elephant Rock sunset experience",
      "AlUla Old Town heritage trail",
      "Licensed Saudi heritage guide",
      "Stargazing desert dinner"
    ],
    exclusions: [
      "Flights (Dubai–AlUla return, via Jeddah)",
      "Travel insurance",
      "Saudi tourist visa (e-visa available ~$120)",
      "Lunches & personal expenses",
      "Optional camel trek"
    ],
    requirements: [
      "Passport with minimum 6 months validity",
      "Saudi Tourist E-Visa (instant online issuance for GCC residents & 50+ nationalities)",
      "Confirmed return flight tickets & AlUla desert resort vouchers",
      "Mandatory travel medical insurance (automatically included with Saudi tourist visa)",
      "Modest travel attire suitable for desert exploration and heritage monuments"
    ],
    visaNote: "Saudi Arabia tourist e-visa available online for 50+ nationalities (~$120 SAR). UAE residents check eligibility.",
    bestFor: ["History buffs", "Couples", "Photography"]
  },
  {
    id: "bali-tropical-ubud",
    title: "Bali Tropical Island & Ubud Villas",
    destination: "Bali, Indonesia",
    countryFlag: "🇮🇩",
    region: "Tropical Asia",
    duration: "6 Days / 5 Nights",
    nights: 5,
    priceAED: 2350,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 290,
    highlights: [
      "Tegallalang rice terraces & jungle swing",
      "Nusa Penida island speedboat day trip",
      "Ubud Monkey Forest & art village walk",
      "Private pool villa option available"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrival at Ngurah Rai International Airport. Private transfer to Seminyak/Kuta beachfront hotel. Evening sunset beach walk and welcome Balinese dinner." },
      { day: 2, title: "Ubud Cultural Day", description: "Drive to Ubud. Visit Sacred Monkey Forest, Tegallalang Rice Terraces, and famous Bali Swing. Traditional Balinese lunch amidst rice paddies. Visit Ubud Art Market and Royal Palace. Transfer to Ubud villa or return to Seminyak." },
      { day: 3, title: "Nusa Penida Island", description: "Early morning speedboat to Nusa Penida island. Visit Kelingking Beach (T-Rex cliff), Crystal Bay for snorkeling, and Angel Billabong natural infinity pool. Lunch on the island. Return to Bali by sunset." },
      { day: 4, title: "Temples & Waterfall", description: "Visit Tirta Empul holy water temple. Trek to Tegenungan Waterfall. Afternoon at Tanah Lot sea temple for iconic sunset photos. Evening Balinese Kecak fire dance performance." },
      { day: 5, title: "Beach & Spa Day", description: "Full day at leisure. Morning traditional Balinese spa treatment (90 min). Afternoon beach club at Seminyak or optional water sports. Farewell seafood dinner at Jimbaran Bay beach." },
      { day: 6, title: "Departure", description: "Breakfast and hotel checkout. Private transfer to Bali airport." }
    ],
    inclusions: [
      "5 nights hotel/villa accommodation with breakfast",
      "Private airport transfers",
      "All sightseeing in private AC vehicle with driver",
      "Nusa Penida speedboat & island tour",
      "Bali Swing experience",
      "1 Balinese spa treatment (90 min)",
      "Tanah Lot & temple entry tickets",
      "English-speaking Balinese guide"
    ],
    exclusions: [
      "International flights (Dubai–Bali return)",
      "Travel insurance",
      "Indonesia visa (free for UAE residents up to 30 days)",
      "Lunches & personal expenses",
      "Water sports & optional activities"
    ],
    requirements: [
      "Passport valid for at least 6 months from entry date with blank visa pages",
      "Indonesia Visa on Arrival (e-VOA or at Denpasar DPS airport, ~35 USD) or 30-day visa exemption",
      "Confirmed return flight ticket departing Indonesia within visa validity",
      "Electronic Customs Declaration (e-CD) QR code filled within 3 days of arrival",
      "Bali Regional Tourist Tax payment confirmation (IDR 150,000 / ~AED 35)",
      "International travel health insurance"
    ],
    visaNote: "UAE residents and most passport holders get free visa on arrival in Indonesia for 30 days.",
    bestFor: ["Honeymooners", "Couples", "Families"]
  },
  {
    id: "thailand-bangkok-phuket",
    title: "Thailand Bangkok & Phuket Island Hopper",
    destination: "Bangkok & Phuket, Thailand",
    countryFlag: "🇹🇭",
    region: "Tropical Asia",
    duration: "6 Days / 5 Nights",
    nights: 5,
    priceAED: 1950,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 320,
    highlights: [
      "Phi Phi Islands speedboat day tour",
      "James Bond Island limestone formation",
      "Bangkok Grand Palace & Wat Pho",
      "Chao Phraya dinner cruise"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", description: "Arrival at Suvarnabhumi Airport. Private transfer to 4★ Sukhumvit/Riverside hotel. Evening Chao Phraya River dinner cruise with Thai dance performance and buffet." },
      { day: 2, title: "Bangkok Temples & City", description: "Full day guided tour: Grand Palace, Wat Pho (Reclining Buddha), Wat Arun (Temple of Dawn). Afternoon tuk-tuk ride through Chinatown. Evening at Asiatique The Riverfront night market." },
      { day: 3, title: "Fly to Phuket", description: "Morning flight to Phuket. Transfer to beachfront resort in Patong/Kata. Afternoon at leisure on the beach. Evening Phuket Old Town walking street and dinner." },
      { day: 4, title: "Phi Phi Islands", description: "Full-day speedboat tour to Phi Phi Islands: Maya Bay (The Beach film location), Pileh Lagoon, Monkey Beach. Snorkeling stops with tropical fish. Lunch on Phi Phi Don island. Return to Phuket by sunset." },
      { day: 5, title: "Phang Nga Bay & James Bond Island", description: "Day trip to Phang Nga Bay by longtail boat. Visit James Bond Island (Khao Phing Kan). Sea kayaking through limestone caves and mangrove tunnels. Lunch at floating village. Return to Phuket. Evening farewell Thai massage and dinner." },
      { day: 6, title: "Departure", description: "Breakfast and hotel checkout. Transfer to Phuket International Airport." }
    ],
    inclusions: [
      "2 nights 4★ hotel in Bangkok + 3 nights beach resort in Phuket",
      "Daily breakfast",
      "Internal flight (Bangkok → Phuket)",
      "Chao Phraya dinner cruise",
      "Phi Phi Islands speedboat full-day tour",
      "Phang Nga Bay & James Bond Island tour",
      "All entry tickets as per itinerary",
      "Private transfers & English-speaking guide"
    ],
    exclusions: [
      "International flights (Dubai–Bangkok, Phuket–Dubai)",
      "Travel insurance",
      "Thailand visa (free for UAE passport holders 30 days)",
      "Lunches & personal expenses",
      "Thai massage (optional add-on)"
    ],
    requirements: [
      "Original Passport valid for at least 6 months from arrival date",
      "Thailand Visa Exemption stamp (for UAE passport holders) or Thailand Tourist Visa / E-visa",
      "Confirmed return flight ticket within 30 or 60 days",
      "Confirmed hotel booking vouchers for Bangkok and Phuket",
      "Proof of funds (at least 20,000 THB / approx AED 2,100 per person or 40,000 THB per family)",
      "Travel insurance with international hospitalization cover"
    ],
    visaNote: "UAE passport holders get visa exemption for 30 days. Indian/Pakistani passport holders need a Thailand visa (can be arranged by Al Raheeq).",
    bestFor: ["Families", "Adventure seekers", "Budget travelers"]
  },
  {
    id: "switzerland-alpine-panorama",
    title: "Switzerland Alpine Panorama & Jungfrau",
    destination: "Zurich, Lucerne & Interlaken, Switzerland",
    countryFlag: "🇨🇭",
    region: "Europe",
    duration: "7 Days / 6 Nights",
    nights: 6,
    priceAED: 5800,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 160,
    highlights: [
      "Mount Titlis revolving cable car & glacier",
      "Interlaken paragliding over Swiss Alps",
      "Lucerne Chapel Bridge & Lion Monument",
      "Swiss Alps Golden Pass panoramic train"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Zurich", description: "Arrival at Zurich Airport. Private transfer to 4★ hotel. Afternoon walking tour of Zurich Old Town — Bahnhofstrasse, Lindenhof viewpoint, Lake Zurich promenade. Welcome Swiss fondue dinner." },
      { day: 2, title: "Rhine Falls & Zurich", description: "Day trip to Rhine Falls — Europe's largest waterfall in Schaffhausen. Boat ride to the central rock. Return to Zurich. Afternoon visit Swiss National Museum. Evening free at Zurich West (trendy district)." },
      { day: 3, title: "Transfer to Lucerne", description: "Scenic drive to Lucerne (1 hr). Visit Chapel Bridge (Kapellbrücke), Lion Monument, and Old Town. Afternoon lake cruise on Lake Lucerne (1 hour). Check into Lucerne hotel." },
      { day: 4, title: "Mount Titlis Glacier", description: "Full day excursion to Mount Titlis (3238m) via Engelberg. World's first revolving cable car (Rotair). Walk on Europe's highest suspension bridge (Titlis Cliff Walk). Ice Grotto exploration. Snow activities at glacier park. Return to Lucerne by evening." },
      { day: 5, title: "Transfer to Interlaken", description: "Golden Pass scenic train from Lucerne to Interlaken through Alpine meadows and lakes. Afternoon arrival in Interlaken. Optional paragliding over Swiss Alps (weather permitting). Evening walk along Höheweg promenade with Jungfrau views." },
      { day: 6, title: "Jungfraujoch — Top of Europe", description: "Train excursion to Jungfraujoch (3454m) — Top of Europe via Grindelwald. Visit Ice Palace, Sphinx Observatory with 360° Alpine panorama, and Aletsch Glacier viewpoint. Return to Interlaken. Farewell Swiss dinner." },
      { day: 7, title: "Departure", description: "Breakfast and checkout. Private transfer to Zurich Airport (2 hrs) or Geneva Airport (3 hrs) for departure." }
    ],
    inclusions: [
      "6 nights in 4★ hotels (Zurich, Lucerne, Interlaken) with breakfast",
      "Private airport transfers",
      "Rhine Falls excursion with boat ride",
      "Lake Lucerne 1-hour cruise",
      "Mount Titlis cable car & Cliff Walk tickets",
      "Golden Pass panoramic train (Lucerne → Interlaken)",
      "Jungfraujoch Top of Europe train ticket",
      "All inter-city private transfers",
      "English-speaking tour manager throughout"
    ],
    exclusions: [
      "International flights (Dubai–Zurich return)",
      "Travel insurance (mandatory for Schengen)",
      "Schengen visa fee (€80)",
      "Lunches & personal expenses",
      "Paragliding at Interlaken (optional ~CHF 170)",
      "Swiss Travel Pass upgrade"
    ],
    requirements: [
      "Original Passport valid for at least 6 months beyond stay date with minimum 2 blank pages",
      "Valid Schengen Visa (Type C Short Stay) — Al Raheeq provides full document file & appointment support",
      "Mandatory Schengen Travel Health Insurance with minimum €30,000 emergency medical cover",
      "Confirmed round-trip flight tickets and all Swiss hotel vouchers",
      "Last 3-6 months official bank statement with bank stamp (proof of financial means)",
      "NOC / No-Objection certificate from UAE employer or trade license copy for business owners"
    ],
    visaNote: "Schengen visa required. Al Raheeq Tourism provides complete Schengen visa documentation assistance, appointment booking, and travel insurance.",
    bestFor: ["Honeymooners", "Families", "Luxury travelers"]
  }
];

/** Featured packages shown on the homepage (first 4 featured ones) */
export const FEATURED_PACKAGES = ALL_PACKAGES.filter((p) => p.featured).slice(0, 4);

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Tariq Mansoor",
    location: "Saudi Arabia",
    rating: 5,
    date: "February 2026",
    comment: "Got our family 60-day UAE tourist visas within 36 hours through Al Raheeq Tourism. Their office in Al Masraf Building is very welcoming and staff is super professional.",
    avatarBg: "bg-sky-600"
  },
  {
    id: "rev-2",
    name: "Priya Sharma",
    location: "India",
    rating: 5,
    date: "January 2026",
    comment: "The Desert Safari and Marina Dhow cruise packages were 10/10! Everything was on time, driver was friendly, and the food was amazing. Best agency in Deira!",
    avatarBg: "bg-amber-600"
  },
  {
    id: "rev-3",
    name: "Michael Henderson",
    location: "United Kingdom",
    rating: 5,
    date: "March 2026",
    comment: "Quick flight ticketing and great hotel recommendation near Al Rigga metro. Saved us a lot of money compared to online booking engines. Highly recommend!",
    avatarBg: "bg-emerald-600"
  },
  {
    id: "rev-4",
    name: "Fatima Al Zahra",
    location: "Oman",
    rating: 5,
    date: "April 2026",
    comment: "Very smooth process for getting our Schengen visas sorted. The team guided us step-by-step with the documentation. True professionals.",
    avatarBg: "bg-rose-600"
  },
  {
    id: "rev-5",
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    date: "May 2026",
    comment: "Booked a complete 5-day Dubai itinerary for my corporate team. The private transfers and hotel bookings were flawless. Excellent B2B service.",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "rev-6",
    name: "Ayesha Khan",
    location: "Pakistan",
    rating: 5,
    date: "June 2026",
    comment: "Fastest UAE visa service I have ever used. Applied on Monday morning and got the approval by Tuesday evening. Very transparent pricing.",
    avatarBg: "bg-teal-600"
  },
  {
    id: "rev-7",
    name: "Ahmed Al-Husseini",
    location: "Kuwait",
    rating: 5,
    date: "July 2026",
    comment: "Booked a private VIP desert safari with dune buggies for our family. The guide was exceptionally courteous and made sure the kids were safe throughout. Outstanding hospitality from Al Raheeq.",
    avatarBg: "bg-purple-600"
  },
  {
    id: "rev-8",
    name: "Elena Rostova",
    location: "Germany",
    rating: 5,
    date: "August 2026",
    comment: "Super convenient and transparent service. We landed late at DXB and their private airport transfer was waiting seamlessly. The Burj Khalifa combo tickets saved us hours in queue!",
    avatarBg: "bg-cyan-600"
  },
  {
    id: "rev-9",
    name: "Rashid Al Nuaimi",
    location: "Qatar",
    rating: 5,
    date: "September 2026",
    comment: "Needed urgent visa assistance for my cousins visiting Dubai. The Al Raheeq team processed everything in under 18 hours without any hassle. Truly dependable service in Deira.",
    avatarBg: "bg-blue-600"
  },
  {
    id: "rev-10",
    name: "Sophie Laurent",
    location: "France",
    rating: 5,
    date: "October 2026",
    comment: "An unforgettable day tour to Abu Dhabi! Our driver picked us up right from our hotel lobby in Dubai, shared deep cultural insights, and gave us ample time at the Louvre. 5 stars!",
    avatarBg: "bg-orange-600"
  }
];

export function buildWhatsAppQuoteUrl(data: {
  serviceOrPackage?: string;
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  travelers?: string;
  visaAssistance?: boolean;
  notes?: string;
}) {
  const sanitize = (val?: string, max = 250) => {
    if (!val || typeof val !== "string") return "";
    return val.replace(/[\r\n\t]+/g, " ").slice(0, max).trim();
  };

  const phone = COMPANY_INFO.cleanPhone.replace("+", "");

  const details: string[] = [];
  if (data.serviceOrPackage) {
    details.push(`📍 *Inquiry / Package:* ${sanitize(data.serviceOrPackage, 120)}`);
  }
  if (data.name) {
    details.push(`👤 *Traveler Name:* ${sanitize(data.name, 80)}`);
  }
  if (data.phone) {
    details.push(`📱 *Contact / WhatsApp:* ${sanitize(data.phone, 40)}`);
  }
  if (data.email) {
    details.push(`✉️ *Email Address:* ${sanitize(data.email, 100)}`);
  }
  if (data.travelers) {
    details.push(`👥 *Travelers:* ${sanitize(data.travelers, 50)}`);
  }
  if (data.date) {
    details.push(`📅 *Preferred Travel Date:* ${sanitize(data.date, 40)}`);
  }
  if (data.visaAssistance !== undefined) {
    details.push(
      `🛂 *Visa Assistance:* ${
        data.visaAssistance ? "Yes, assistance required" : "Not needed (Have Visa / UAE Resident)"
      }`
    );
  }
  if (data.notes) {
    details.push(`📝 *Message / Special Notes:* ${sanitize(data.notes, 300)}`);
  }

  const messageLines = [
    `*AL RAHEEQ TOURISM LLC • DUBAI*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Hello Team Al Raheeq Tourism! 👋`,
    `I would like to inquire and receive an official quotation for:`,
    ``,
    details.length > 0 ? details.join("\n") : `📍 *Inquiry:* General Travel Services`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Kindly share availability, detailed itinerary, and best pricing. Thank you!`
  ];

  const text = encodeURIComponent(messageLines.join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildEmailQuoteUrl(data: {
  serviceOrPackage?: string;
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  travelers?: string;
  visaAssistance?: boolean;
  notes?: string;
}) {
  const sanitize = (val?: string, max = 250) => {
    if (!val || typeof val !== "string") return "";
    return val.replace(/[\r\n\t]+/g, " ").slice(0, max).trim();
  };

  const subject = encodeURIComponent(
    `Official Quote Request — ${sanitize(data.serviceOrPackage || "General Travel Inquiry", 60)}${
      data.name ? ` (${sanitize(data.name, 40)})` : ""
    }`
  );

  const details: string[] = [];
  if (data.serviceOrPackage) details.push(`• Package / Service: ${sanitize(data.serviceOrPackage, 120)}`);
  if (data.name) details.push(`• Traveler Name: ${sanitize(data.name, 80)}`);
  if (data.phone) details.push(`• Phone / WhatsApp: ${sanitize(data.phone, 40)}`);
  if (data.email) details.push(`• Email Address: ${sanitize(data.email, 100)}`);
  if (data.date) details.push(`• Preferred Travel Date: ${sanitize(data.date, 40)}`);
  if (data.travelers) details.push(`• Number of Travelers: ${sanitize(data.travelers, 40)}`);
  if (data.visaAssistance !== undefined) {
    details.push(
      `• Visa Assistance: ${data.visaAssistance ? "Yes, assistance required" : "No, already have visa/residence"}`
    );
  }
  if (data.notes) details.push(`• Special Requests / Notes: ${sanitize(data.notes, 400)}`);

  const bodyLines = [
    `Dear Al Raheeq Tourism Concierge Team,`,
    ``,
    `I am requesting an official quotation and detailed travel itinerary for the following:`,
    ``,
    details.length > 0 ? details.join("\n") : `• Service: General Travel Inquiry`,
    ``,
    `Please share the detailed breakdown including 5% UAE VAT, inclusions, and payment options.`,
    ``,
    `Best regards,`,
    sanitize(data.name || "Valued Traveler", 60),
    data.phone ? sanitize(data.phone, 40) : ""
  ].filter((line) => line !== undefined);

  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
}
