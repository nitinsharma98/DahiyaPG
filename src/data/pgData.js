export const pgInfo = {
  name: "Dahiya PG",
  tagline: "Your Safe, Clean & Modern Home Away From Home",
  category: "Only For Boys",
  status: "Newly Opened",
  description:
    "Newly opened premium Boys PG situated at Mata Chowk, Rewari. Located just 50 meters from both the Bus Stand and Bawal Chowk, and only 1.8 km from Rewari Railway Station. We offer fully furnished AC and Non-AC rooms (Single, Double & Triple occupancy) with 24x7 CCTV surveillance, high-speed Wi-Fi, hygienic homely food mess, RO drinking water, and daily housekeeping.",
  phones: ["8689035480", "8708716457"],
  address: "Mata Chowk, Near By Bus Stand, Rewari, Haryana - 123401",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.237466826645!2d76.6133!3d28.1926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d507bfa7c5c0d%3A0x1efd3683f81014e0!2sMata%20Chowk%2C%20Rewari%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappNumber: "8689035480",
};

export const stats = [
  { label: "Distance to Bus Stand", value: "50 Meters", sub: "1 Min Walk" },
  { label: "Distance to Bawal Chowk", value: "50 Meters", sub: "Instant Transit" },
  { label: "Railway Station", value: "1.8 Km", sub: "5 Mins Ride" },
  { label: "Property Condition", value: "100% Brand New", sub: "Newly Opened" },
];

export const facilities = [
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    desc: "Uncapped optical fiber Wi-Fi internet for seamless online classes, studies, remote work, and streaming.",
    icon: "Wifi",
    badge: "Free 24x7",
  },
  {
    id: "ac",
    title: "AC & Non-AC Rooms",
    desc: "Choose between climate-controlled cooling AC rooms or airy, well-ventilated Non-AC rooms as per your budget.",
    icon: "AirVent",
    badge: "Both Options",
  },
  {
    id: "cctv",
    title: "24x7 CCTV Surveillance",
    desc: "Complete 24x7 CCTV monitoring across corridors and entrance gates ensuring top-tier safety and secure entry.",
    icon: "ShieldCheck",
    badge: "24/7 Security",
  },
  {
    id: "food",
    title: "Homely & Hygienic Food",
    desc: "Freshly prepared nutritious breakfast, lunch, and dinner. Tiffin packing option available for students & employees.",
    icon: "UtensilsCrossed",
    badge: "3 Meals + Tea",
  },
  {
    id: "ro",
    title: "RO Purified Water",
    desc: "Multi-stage RO filtered cold and normal drinking water available 24/7 on every floor for healthy living.",
    icon: "Droplets",
    badge: "Safe & Pure",
  },
  {
    id: "medical",
    title: "Medical & First Aid Kit",
    desc: "Emergency first-aid medical supplies kept ready on-premises, with quick access to nearby top clinics & doctors.",
    icon: "HeartPulse",
    badge: "Safety First",
  },
  {
    id: "cleaning",
    title: "Daily Housekeeping",
    desc: "Regular thorough floor mopping, corridor sanitization, and washroom cleaning to keep premises sparkling clean.",
    icon: "Sparkles",
    badge: "Clean Living",
  },
  {
    id: "lockers",
    title: "Personal Steel Almirah",
    desc: "Heavy-duty steel lockers with individual lock and keys for each resident to secure clothes, laptops & valuables.",
    icon: "Lock",
    badge: "Personal Key",
  },
  {
    id: "power",
    title: "24x7 Power & Water",
    desc: "Uninterrupted 24-hour water supply, hot water geyser in winter, and inverter power backup support.",
    icon: "Zap",
    badge: "Uninterrupted",
  },
];

export const roomTypes = [
  {
    id: "single",
    name: "Single Occupancy Room",
    subtitle: "Private & Peaceful Sanctuary",
    type: "AC / Non-AC Options",
    tag: "Maximum Privacy",
    priceEstimate: "₹7,500 - ₹9,500",
    features: [
      "1 Dedicated Wooden Bed & Mattress",
      "Personal Multi-Compartment Steel Locker",
      "Headboard Charging Points & Bedside Light",
      "Quiet Environment for Serious Studies/Work",
      "High-Speed Wi-Fi & Daily Room Cleaning",
      "Full Mess Food Plan Included",
    ],
    recommendedFor: "Students preparing for UPSC/SSC/NEET or Remote Tech Employees",
  },
  {
    id: "double",
    name: "Double Sharing Room",
    subtitle: "Most Popular & Budget Balanced",
    type: "AC / Non-AC Options",
    tag: "Most Popular",
    priceEstimate: "₹5,500 - ₹6,500",
    features: [
      "2 Separate Wooden Beds with Fresh Bedding",
      "2 Independent Steel Lockers with Separate Keys",
      "Dual Charging Sockets near each Bed",
      "Spacious Room with Cross Ventilation",
      "High-Speed Wi-Fi & Daily Housekeeping",
      "Full 3-Time Mess Food Plan Included",
    ],
    recommendedFor: "College Students, Friends & Working Professionals",
  },
  {
    id: "triple",
    name: "Triple Sharing Room",
    subtitle: "Best Value & Pocket-Friendly",
    type: "AC / Non-AC Options",
    tag: "Best Value",
    priceEstimate: "₹4,500 - ₹5,200",
    features: [
      "3 Individual Wooden Beds with Mattresses",
      "3 Personal Steel Lockers with Keys",
      "Ample Space & Natural Light",
      "Individual Power Points for Mobile/Laptop",
      "High-Speed Wi-Fi & Daily Maintenance",
      "Complete 3-Meal Food Mess Included",
    ],
    recommendedFor: "Budget-conscious Students & Industrial Trainees",
  },
];

export const mealSchedule = {
  timings: [
    { meal: "Morning Breakfast & Chai", time: "7:30 AM - 9:30 AM", notes: "Hot breakfast + freshly brewed tea" },
    { meal: "Afternoon Lunch", time: "12:30 PM - 2:30 PM", notes: "Hot lunch / Tiffin packing allowed" },
    { meal: "Evening Refreshment", time: "5:00 PM - 6:00 PM", notes: "Evening tea / light snack" },
    { meal: "Night Dinner", time: "8:00 PM - 10:00 PM", notes: "Freshly cooked nutritious dinner" },
  ],
  days: [
    {
      day: "Monday",
      breakfast: "Stuffed Aloo Paratha, Curd & Pickle + Hot Tea",
      lunch: "Dal Tadka, Seasonal Sabzi, Phulka Roti, Jeera Rice & Salad",
      dinner: "Delicious Rajma Masala, Tawa Roti, Rice & Sweet Kheer",
    },
    {
      day: "Tuesday",
      breakfast: "Veg Poha / Suji Upma with Peanuts + Hot Tea",
      lunch: "Punjabi Kadhi Pakoda, Steamed Rice, Chapati & Onion Salad",
      dinner: "Seasonal Mix Veg, Dal Fry, Fresh Tawa Roti & Papad",
    },
    {
      day: "Wednesday",
      breakfast: "Paneer Paratha / Puri Bhaji + Chai",
      lunch: "Chole Masala, Basmati Rice, Soft Roti & Boondi Raita",
      dinner: "Aloo Gobhi Matar, Yellow Dal, Chapati & Halwa Treat",
    },
    {
      day: "Thursday",
      breakfast: "Crispy Methi / Plain Paratha with White Butter + Chai",
      lunch: "Dal Makhani, Fried Rice, Tawa Roti & Green Salad",
      dinner: "Bhindi Masala / Lauki Chana, Tarka Dal & Fresh Phulka",
    },
    {
      day: "Friday",
      breakfast: "Veg Grilled Sandwich / Bread Butter + Chai",
      lunch: "Matar Paneer Gravy, Jeera Rice, Soft Roti & Green Salad",
      dinner: "Black Chana Masala, Steamed Rice, Chapati & Salad",
    },
    {
      day: "Saturday",
      breakfast: "Stuffed Gobhi / Mix Veg Paratha with Curd + Tea",
      lunch: "Rajma Chawal, Soft Roti, Papad & Cucumber Raita",
      dinner: "Soyabean Aloo Curry, Masoor Dal, Roti & Sweet Dish",
    },
    {
      day: "Sunday",
      breakfast: "Special Chole Bhature / Special Sunday Feast + Chai",
      lunch: "Sunday Royal Thali: Paneer Lababdar, Jeera Rice, Roti & Gulab Jamun",
      dinner: "Light Khichdi / Kadhi Rice / Light Dal & Roti (Easy on stomach)",
    },
  ],
};

export const locationPerks = [
  {
    title: "Rewari Bus Stand",
    dist: "50 Meters",
    time: "1 Min Walk",
    desc: "Direct Haryana Roadways, DTC, and private buses to Delhi, Gurgaon, Jaipur, Narnaul, and Rohtak.",
    icon: "Bus",
  },
  {
    title: "Bawal Chowk",
    dist: "50 Meters",
    time: "1 Min Walk",
    desc: "The primary junction for shared autos, cabs, and company bus pickups for IMT Bawal & Dharuhera.",
    icon: "Compass",
  },
  {
    title: "Rewari Railway Station",
    dist: "1.8 Km",
    time: "5 Mins Ride",
    desc: "Major railway junction with direct express & local trains to Delhi, Gurgaon, Jaipur, and Chandigarh.",
    icon: "Train",
  },
  {
    title: "Main Market & Shopping",
    dist: "100 Meters",
    time: "2 Mins Walk",
    desc: "All daily essentials, stationery, medical stores, fruit markets, and clothing shops right at hand.",
    icon: "ShoppingBag",
  },
  {
    title: "Coaching Centers & Libraries",
    dist: "200 - 400 Meters",
    time: "3-5 Mins Walk",
    desc: "Walking distance to major coaching institutes, study libraries, and computer training centers.",
    icon: "GraduationCap",
  },
  {
    title: "IMT Bawal & Industrial Hub",
    dist: "Easy Transit",
    time: "15 Mins by Bus",
    desc: "Dedicated company buses and frequent shuttle autos pick up directly from Bawal Chowk (50m away).",
    icon: "Building2",
  },
];

export const galleryImages = [
  {
    url: "/images/corridor.jpg",
    title: "Bright & Wide Corridor",
    category: "Premises",
    desc: "Newly constructed sparkling tiled corridor with natural light & open ventilation",
  },
  {
    url: "/images/room-beds.jpg",
    title: "Comfortable Twin Bed Room",
    category: "Rooms",
    desc: "Solid wooden cots with clean bedding and dedicated bedside electrical sockets",
  },
  {
    url: "/images/room-lockers.jpg",
    title: "Secure Steel Lockers & Bed Setup",
    category: "Rooms",
    desc: "Heavy-duty 3-door individual steel almirah lockers with separate lock and key for each resident",
  },
  {
    url: "/images/room-beds-2.jpg",
    title: "Clean & Spacious Room Interior",
    category: "Rooms",
    desc: "Well-maintained room with fresh bedsheets, comfortable pillows, and power ports",
  },
  {
    url: "/images/pg-banner.jpg",
    title: "Official Dahiya PG Notice Board",
    category: "Amenities",
    desc: "Authentic printed property board confirming address, facilities, and contact details",
  },
  {
    url: "/images/pg-signage.jpg",
    title: "New Open Premise Boards",
    category: "Premises",
    desc: "Dahiya PG - Only For Boys - Mata Chowk Near By Bus Stand, Rewari",
  },
];

export const targetProfiles = [
  {
    badge: "Perfect For Students",
    icon: "GraduationCap",
    title: "Student-Centric Environment",
    points: [
      "24x7 High-Speed Wi-Fi for lectures, mock tests & research",
      "Peaceful, disciplined study atmosphere without distractions",
      "Only 200m from top coaching institutes and reading libraries",
      "Timely nutritious food so you can focus 100% on studies",
      "Clean rooms and power backup during exam season",
    ],
  },
  {
    badge: "Ideal For Working Men",
    icon: "Briefcase",
    title: "Employee & Professional Friendly",
    points: [
      "Just 50m from Bawal Chowk for instant company bus pickup to IMT Bawal / Dharuhera",
      "Early breakfast and hygienic lunch tiffin packing facility",
      "Relaxing AC rooms with hot water geyser after long shift hours",
      "Personal steel lockers for secure laptop & documents storage",
      "Flexible 24x7 secure entry under CCTV surveillance",
    ],
  },
];

export const faqs = [
  {
    q: "Is Dahiya PG exclusively for boys?",
    a: "Yes, Dahiya PG is strictly a Boys PG. It offers a safe, disciplined, and comfortable living environment for male students and working professionals.",
  },
  {
    q: "Where exactly is Dahiya PG located in Rewari?",
    a: "We are located at Mata Chowk, Near By Bus Stand, Rewari. We are situated within a 50-meter radius of both Rewari Bus Stand and Bawal Chowk, making local and outstation transit effortless.",
  },
  {
    q: "What room configurations are available?",
    a: "We offer Single Occupancy, Double Sharing, and Triple Sharing rooms in both AC and Non-AC configurations. All rooms feature wooden beds, mattresses, personal steel lockers, and charging points.",
  },
  {
    q: "Is food included in the monthly rent?",
    a: "Yes! We provide 3 wholesome, hygienic, pure vegetarian meals daily (Breakfast, Lunch, Dinner) plus evening tea. We also provide tiffin packing for office goers and coaching students.",
  },
  {
    q: "What security measures are in place?",
    a: "The property has 24x7 CCTV surveillance covering all corridors and entry points. Gates have monitored secure entry at all hours.",
  },
  {
    q: "How can I book a room or schedule a visit?",
    a: "You can call us directly at 8689035480 or 8708716457, or click the WhatsApp button on this website to schedule an immediate physical room tour.",
  },
];
