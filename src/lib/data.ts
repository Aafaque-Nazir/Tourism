export interface ServiceItem {
  id: string;
  title: string;
  titleArabic?: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceNote: string;
  image: string;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  highlights: string[];
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
    id: "flight-bookings",
    title: "Flight Bookings",
    titleArabic: "حجوزات الطيران",
    tagline: "Best rates for international and domestic flights",
    description: "Book flights across 500+ airlines with instant e-tickets, flexible dates, and quick rebooking support.",
    iconName: "Plane",
    badge: "Best Fare Guarantee",
    features: [
      "Economy, Business & First Class options",
      "Instant confirmation & e-ticket delivery",
      "24/7 rebooking & cancellation support",
      "Special group & corporate discounts"
    ]
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    titleArabic: "خدمات التأشيرات",
    tagline: "Quick UAE tourist visas and global visa services",
    description: "Get 30-day, 60-day, and express UAE tourist visas. We also provide guidance for Schengen, UK, US, and Asian visas.",
    iconName: "FileCheck",
    badge: "High Approval Rate",
    features: [
      "UAE 30-Day & 60-Day Tourist Visas",
      "Express 24-48 hour fast-track processing",
      "Document verification by Dubai visa experts",
      "Schengen, UK, USA & international visa help"
    ]
  },
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    titleArabic: "حجوزات الفنادق",
    tagline: "Luxury and budget hotel bookings worldwide",
    description: "From 5-star Dubai resorts like Atlantis and Burj Al Arab to budget-friendly city hotels near Downtown and Deira.",
    iconName: "Building2",
    badge: "Exclusive Rates",
    features: [
      "Access to luxury Dubai 5-star beachfront resorts",
      "Exclusive complimentary breakfast & room upgrades",
      "Zero hidden fees with transparent invoicing",
      "Family-friendly and business-centric accommodations"
    ]
  },
  {
    id: "holiday-packages",
    title: "Holiday Packages",
    titleArabic: "الباقات السياحية",
    tagline: "Dubai tours and holiday packages",
    description: "Enjoy Desert Safaris, Marina Dhow Cruises, city tours, and international holiday trips.",
    iconName: "Compass",
    badge: "Top Rated",
    features: [
      "Tailor-made itineraries for couples, families & groups",
      "VIP Desert Safari with dune bashing & BBQ dinner",
      "Burj Khalifa At The Top, Museum of the Future passes",
      "Private luxury transfers & certified multilingual guides"
    ]
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    titleArabic: "التأمين الصحي للسفر",
    tagline: "Complete travel insurance coverage",
    description: "Insurance packages covering medical emergencies, trip cancellations, lost baggage, and flight delays.",
    iconName: "ShieldCheck",
    badge: "Mandatory UAE Compliant",
    features: [
      "Emergency medical & hospitalization cover",
      "Baggage delay & loss reimbursement",
      "COVID-19 & emergency evacuation protection",
      "Instant certificate generation for visa filing"
    ]
  }
];

export const FEATURED_PACKAGES: TourPackage[] = [
  {
    id: "desert-safari-vip",
    title: "VIP Red Dune Desert Safari & BBQ Dinner",
    category: "Adventure & Culture",
    duration: "6 Hours",
    priceNote: "Starting from AED 149",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 340,
    highlights: [
      "4x4 Dune Bashing in Lahbab Red Dunes",
      "Camel Riding, Sandboarding & Henna Painting",
      "Live Belly Dance, Tanoura Show & Fire Show",
      "5-Star International BBQ Buffet Dinner"
    ]
  },
  {
    id: "marina-dhow-cruise",
    title: "Dubai Marina Luxury Glass Dhow Cruise",
    category: "Romantic & Dining",
    duration: "2 Hours",
    priceNote: "Starting from AED 120",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 280,
    highlights: [
      "Cruising past illuminated Dubai Marina towers & JBR",
      "International 4-Star Buffet with veg & non-veg dishes",
      "Live Arabic Tanoura dance entertainment",
      "Open-air upper deck & air-conditioned lower deck"
    ]
  },
  {
    id: "burj-khalifa-aquarium",
    title: "Burj Khalifa 124th Floor + Dubai Aquarium Combo",
    category: "Iconic Landmarks",
    duration: "Flexible",
    priceNote: "Starting from AED 230",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 5.0,
    reviewsCount: 420,
    highlights: [
      "Fast-track entry to Burj Khalifa Levels 124 & 125",
      "360-degree breathtaking views of Dubai skyline",
      "Access to Dubai Aquarium & Underwater Zoo inside Dubai Mall",
      "Witness the spectacular Dubai Fountain Show"
    ]
  },
  {
    id: "abu-dhabi-day-tour",
    title: "Abu Dhabi Full Day City Tour & Grand Mosque",
    category: "Heritage & Sightseeing",
    duration: "8-9 Hours",
    priceNote: "Starting from AED 160",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    rating: 4.9,
    reviewsCount: 195,
    highlights: [
      "Visit Sheikh Zayed Grand Mosque with guided insight",
      "Drive along Corniche Beach & Emirates Palace photo stop",
      "Heritage Village & dates market visit",
      "Ferrari World Abu Dhabi photo stop on Yas Island"
    ]
  }
];

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
  date?: string;
  travelers?: string;
  notes?: string;
}) {
  const sanitize = (val?: string, max = 200) => {
    if (!val || typeof val !== "string") return "";
    return val.replace(/[\r\n\t]/g, " ").slice(0, max).trim();
  };

  const phone = COMPANY_INFO.cleanPhone.replace("+", "");
  const lines = [
    `*Hello Al Raheeq Tourism!* 🇦🇪`,
    `I would like to get an instant quote from your website:`,
    data.serviceOrPackage ? `• *Service / Tour:* ${sanitize(data.serviceOrPackage, 100)}` : null,
    data.name ? `• *My Name:* ${sanitize(data.name, 80)}` : null,
    data.travelers ? `• *Travelers:* ${sanitize(data.travelers, 50)}` : null,
    data.date ? `• *Expected Travel Date:* ${sanitize(data.date, 30)}` : null,
    data.notes ? `• *Additional Notes:* ${sanitize(data.notes, 250)}` : null,
    ``,
    `Please share the best rates and details. Thank you!`
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
}
