export const WA_NUMBER = "923317294872";
export const PRICE = 1299;
export const BRAND_EMAIL = "mitexpert4@gmail.com";

export function waLink(text?: string) {
  return `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function money(n: number) {
  return "Rs " + n.toLocaleString("en-US");
}

export type Slide = {
  img: string;
  bg: string;
  dot: string;
  badge: string;
  title: string;
  sub: string;
  price: string;
  cta: string;
  go: "shop" | "lavender" | "rosemary" | "blogs" | "home" | "howto";
};

export const SLIDES: Slide[] = [
  {
    img: "/images/pair-standing.jpg",
    bg: "linear-gradient(122deg,#5C3F84 0%,#8E6BB8 46%,#1F7A4A 100%)",
    dot: "#DCC9F0",
    badge: "Pakistan's first",
    title: "Dust allergy relief spray",
    sub: "Kills and neutralises dust mites in bedding, sofas, carpets and curtains. PCSIR tested, plant-oil based.",
    price: "Rs 1,299 · 250 ml",
    cta: "Shop now",
    go: "shop",
  },
  {
    img: "/images/group-five.jpg",
    bg: "linear-gradient(122deg,#7B57A6 0%,#A98BC9 50%,#6B4A93 100%)",
    dot: "#F3EAFA",
    badge: "Save up to Rs 298",
    title: "Bundles for the whole house",
    sub: "One bottle per room — five ready-made pairings of Lavender and Rosemary, delivered together.",
    price: "From Rs 2,399",
    cta: "See bundles",
    go: "shop",
  },
  {
    img: "/images/lav-hero-clean.png",
    bg: "linear-gradient(122deg,#6B4A93 0%,#9B7EC8 52%,#5C3F84 100%)",
    dot: "#F3EAFA",
    badge: "Bedroom pick",
    title: "Lavender 250 ml",
    sub: "Softer, calming scent for the mattress, pillows and kids' rooms — mist before sleep and let it air dry.",
    price: "Rs 1,299",
    cta: "Shop Lavender",
    go: "lavender",
  },
  {
    img: "/images/ros-hero-clean.png",
    bg: "linear-gradient(122deg,#1F7A4A 0%,#2E9E62 50%,#6B4A93 100%)",
    dot: "#F3EAFA",
    badge: "Living room pick",
    title: "Rosemary 250 ml",
    sub: "Fresh, herbal scent for sofas, carpets and curtains — the daytime clean-up spray.",
    price: "Rs 1,299",
    cta: "Shop Rosemary",
    go: "rosemary",
  },
  {
    img: "/images/dust-mites-macro.jpg",
    bg: "linear-gradient(122deg,#2B2440 0%,#5C3F84 52%,#14603C 100%)",
    dot: "#DCC9F0",
    badge: "Lab tested · PCSIR",
    title: "Dust mites, gone from your fabrics",
    sub: "Magnified, they live in every mattress and sofa. MiteXpert treats the fabric itself — no washing, no stains.",
    price: "PCSIR certified",
    cta: "Read the guides",
    go: "blogs",
  },
  {
    img: "/images/four-lineup.jpg",
    bg: "linear-gradient(122deg,#14603C 0%,#2E9E62 48%,#5C3F84 100%)",
    dot: "#A9E8C6",
    badge: "500+ Pakistani homes",
    title: "Sleep without the sneezing",
    sub: "Twice a week, three minutes — families across Karachi, Lahore and Islamabad breathe easier indoors.",
    price: "★ 4.9 · 200 reviews",
    cta: "See reviews",
    go: "home",
  },
  {
    img: "/images/lav-trio.jpg",
    bg: "linear-gradient(122deg,#5C3F84 0%,#8E6BB8 50%,#1F7A4A 100%)",
    dot: "#F3EAFA",
    badge: "Come back and save",
    title: "Join the indoor-health list",
    sub: "Subscribe with your email and we send a 5% discount code for your second order, plus dust allergy tips for Pakistani homes.",
    price: "5% off your 2nd order",
    cta: "How to use it",
    go: "howto",
  },
];

export type ProductKey = "lavender" | "rosemary";

export const CATALOG: Record<ProductKey, { name: string; price: number; img: string }> = {
  lavender: { name: "Lavender 250ml", price: 1299, img: "/images/lav-hero-clean.png" },
  rosemary: { name: "Rosemary 250ml", price: 1299, img: "/images/ros-hero-clean.png" },
};

export const PRODUCTS: Record<
  ProductKey,
  {
    name: string;
    accent: string;
    tint: string;
    tagline: string;
    body: string;
    gallery: string[];
    rooms: string[];
    cardImg: string;
    shopImg: string;
  }
> = {
  lavender: {
    name: "Lavender",
    accent: "#7B57A6",
    tint: "#F3EAFA",
    tagline: "Calm, gentle scent for bedrooms",
    body: "A softer fragrance built for the room you sleep in. Mist pillows, mattress, bedsheets and kids' rooms before bed — dust mites and their allergens are neutralised while the room simply smells clean.",
    gallery: ["/images/lav-hero-clean.png", "/images/lav-duo.jpg", "/images/lav-linen-scene.jpg"],
    rooms: ["Mattress & pillows", "Bedsheets & blankets", "Kids' rooms", "Cupboard linen"],
    cardImg: "/images/lavender-card.jpg",
    shopImg: "/images/lavender-shop.jpg",
  },
  rosemary: {
    name: "Rosemary",
    accent: "#1F7A4A",
    tint: "#E9F6EF",
    tagline: "Fresh, herbal lift for living areas",
    body: "A crisper scent for daytime cleaning. Mist sofas, carpets, curtains and cushions after sweeping — the mites living deep in the fabric are treated, not just covered up.",
    gallery: ["/images/ros-hero-clean.png", "/images/ros-duo.jpg", "/images/ros-sidetable-scene.jpg"],
    rooms: ["Sofas & cushions", "Carpets & rugs", "Curtains", "Car seats"],
    cardImg: "/images/rosemary-card.jpg",
    shopImg: "/images/rosemary-shop.jpg",
  },
};

export type Bundle = {
  key: string;
  name: string;
  contents: string;
  price: string;
  save: string;
  img: string;
};

export const BUNDLES: Bundle[] = [
  { key: "bundle0", name: "The Evergreen Duo", contents: "2 × Rosemary", price: "Rs 2,399", save: "Save Rs 199", img: "/images/ros-duo.jpg" },
  { key: "bundle1", name: "Calm Protection Duo", contents: "2 × Lavender", price: "Rs 2,399", save: "Save Rs 199", img: "/images/lav-duo.jpg" },
  { key: "bundle2", name: "The Perfect Balance", contents: "1 Lavender + 1 Rosemary", price: "Rs 2,399", save: "Save Rs 199", img: "/images/pair-standing.jpg" },
  { key: "bundle3", name: "The Serenity Edit", contents: "2 Lavender + 1 Rosemary", price: "Rs 3,599", save: "Save Rs 298", img: "/images/lav-trio.jpg" },
  { key: "bundle4", name: "The Aromatic Reserve", contents: "2 Rosemary + 1 Lavender", price: "Rs 3,599", save: "Save Rs 298", img: "/images/four-lineup.jpg" },
];

export const TEAM = [
  {
    img: "/images/team-emaan.jpg",
    name: "Emaan Ghori",
    role: "Founder & Head of Operations and Production",
    quote:
      "“You can’t control the allergens outside, but you can take control of the allergens inside your home. At MiteXpert, I focus on formulating reliable solutions and delivering consistent quality so you can breathe easy every day.”",
    li: "https://www.linkedin.com/in/emaan-ghori-48b7482b3",
  },
  {
    img: "/images/team-zahra.jpg",
    name: "Zahra Himayl",
    role: "Founder & Head of Strategy and Finance",
    quote: "“At MiteXpert, my goal is to bring you a healthier, dust allergen free home environment — just as you deserve.”",
    li: "https://www.linkedin.com/company/mitexpert",
  },
  {
    img: "/images/team-amna.jpg",
    name: "Amna Abdul Rahim",
    role: "Founder & Head of Orders & Customer Management",
    quote:
      "“I personally look after your orders and queries, ensuring everything runs smoothly from your order to your doorstep, because every MiteXpert customer is important to us.”",
    li: "https://www.linkedin.com/in/aamna-rahim-2203a032a",
  },
  {
    img: "/images/team-kinza.jpg",
    name: "Kinza Imtiaz",
    role: "Founder & Head of Research and Development",
    quote: "“As the Research & Development Lead at MiteXpert, I focus on finding innovative and safe solutions designed to make you healthier at home.”",
    li: "https://www.linkedin.com/in/kinza-imtiaz-890760358",
  },
];

export const REVIEWS: { text: string; name: string; city: string }[] = [
  { text: "Haven't experienced any allergies since I started using these. It made a real difference!", name: "Taha Soomro", city: "Karachi" },
  { text: "A quick spray before cleaning and I can do everything without worrying about dust or allergies.", name: "Aniqa Habib", city: "Karachi" },
  { text: "Significant reduction in allergic reaction — the results speak for themselves.", name: "Maryam Mirza", city: "Gujranwala" },
  { text: "After just one use I felt a difference and slept well that night.", name: "Ghadeer Ali", city: "Karachi" },
  { text: "No harsh chemical smell, and a noticeable reduction in sneezing and discomfort.", name: "Zimal Bint e Ali", city: "Karachi" },
  { text: "I liked Lavender more when I ordered, but now Rosemary is my favourite.", name: "Fozia Sharjeel", city: "Karachi" },
];

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  lead: string;
  img: string;
  sections: [string, string][];
};

const ARTICLE_IMG = [
  "/images/pair-standing.jpg", // 01 symptoms — bedroom scene, where symptoms are felt
  "/images/dust-mites-macro.jpg", // 02 causes — the mites themselves, magnified
  "/images/lav-linen-scene.jpg", // 03 guide — clean folded linen, the washing/routine step
  "/images/ros-sidetable-scene.jpg", // 04 signs — bedside/bed context, where signs show up
  "/images/lav-single.jpg", // 05 relief — calm, settled bedroom scene
  "/images/four-lineup.jpg", // 06 local — full shelf/home scene, Pakistani homes
];

export const ARTICLES: Article[] = [
  {
    slug: "symptoms-of-dust-allergy",
    kicker: "01 — symptoms",
    title: "The most common symptoms of dust allergies",
    lead: "A dust allergy is your immune system reacting to proteins found in dust-mite debris. Indoors, it usually shows up as a mix of respiratory and skin symptoms.",
    img: ARTICLE_IMG[0],
    sections: [
      ["Constant sneezing and runny nose", "If sneezing or congestion hits the moment you wake up, or while you clean, dust is very likely the trigger."],
      ["Coughing around dust", "Sweeping, vacuuming or shaking out bedsheets stirs particles into the air, which often leads to sudden dry coughing fits."],
      ["Breathing difficulty", "In more severe cases dust-mite allergy triggers asthma-like symptoms — wheezing, chest tightness and shortness of breath."],
      ["Skin irritation and “biting” sensations", "Sudden itching or a crawling feeling at night in bed is a strong indicator of mites in the mattress or pillows."],
      ["Small bumps on the skin", "Prolonged contact with mite-infested fabrics can cause eczema flare-ups, redness and clusters of small itchy bumps."],
    ],
  },
  {
    slug: "dust-mites-invisible-cause",
    kicker: "02 — causes",
    title: "Dust mites: the invisible cause of allergies and asthma",
    lead: "Dust mites are microscopic organisms that cannot be seen with the naked eye, yet they are one of the most common causes of indoor allergies.",
    img: ARTICLE_IMG[1],
    sections: [
      ["What are dust mites?", "They live in household dust and feed on dead skin cells, thriving in soft furnishings and warm, humid environments."],
      ["Why they are common in Pakistan", "Humid weather, dust-heavy air and frequent use of carpets, bedding and sofas let mite populations multiply easily."],
      ["Health effects", "Exposure can trigger asthma symptoms, sneezing and nasal irritation, skin itching, and symptoms that worsen at night."],
      ["The quiet part", "Dust mites go unnoticed for years — but their effect on sleep, skin and breathing is significant."],
    ],
  },
  {
    slug: "how-to-get-rid-of-dust-mites",
    kicker: "03 — guide",
    title: "How to get rid of dust mites in your home, step by step",
    lead: "You cannot eliminate dust completely, but you can reduce the allergens that cause your symptoms. Consistency matters more than intensity.",
    img: ARTICLE_IMG[2],
    sections: [
      ["Step 1 — Wash bedding regularly", "Wash sheets, pillow covers and blankets in hot water to remove allergens."],
      ["Step 2 — Vacuum frequently", "Vacuum carpets, sofas and upholstered furniture to reduce dust build-up."],
      ["Step 3 — Sun-dry fabrics", "Expose mattresses and pillows to sunlight to reduce moisture and mites."],
      ["Step 4 — Control humidity", "Keep indoor humidity low so mite populations cannot grow."],
      ["Or — just use MiteXpert", "Steps 1 to 4 take hours every week. One alternative covers all of them: hold MiteXpert 6–8 inches away, mist bedding, carpets, curtains and pillows, let it air dry — twice a week. Dust allergy relief without the washing, sun-drying and daily vacuuming routine."],
    ],
  },
  {
    slug: "signs-of-dust-mites",
    kicker: "04 — signs",
    title: "Signs you have dust mites in your bed or sofa",
    lead: "Dust mites are invisible, but their effects can usually be felt — most of all at night.",
    img: ARTICLE_IMG[3],
    sections: [
      ["Common signs", "Sneezing after waking up, itchy skin during or after sleep, nasal congestion in the morning, and allergy symptoms that worsen indoors."],
      ["Why night is worse", "Prolonged contact with bedding and upholstery increases exposure to allergens for hours at a time."],
      ["What to do first", "Treat the mattress, pillows and sofa — the three places you spend the most contact hours."],
    ],
  },
  {
    slug: "allergy-relief-support",
    kicker: "05 — relief",
    title: "Allergy relief support: what regular use changes",
    lead: "MiteXpert reduces allergens by targeting dust mites where they hide and grow — bedding, sofas and carpets.",
    img: ARTICLE_IMG[4],
    sections: [
      ["What eases", "Sneezing, itchy skin, watery eyes, breathing discomfort and general dust allergy symptoms."],
      ["How long it takes", "Most customers notice a difference within the first week, improving with consistent use."],
      ["Long term", "Regular use supports a healthier home and long-term relief instead of masking symptoms."],
    ],
  },
  {
    slug: "why-dust-mites-thrive-in-pakistan",
    kicker: "06 — local",
    title: "Why dust mites thrive in Pakistani homes",
    lead: "Construction dust, traffic, dry seasons and humid spells make Pakistani homes an ideal habitat for dust mites.",
    img: ARTICLE_IMG[5],
    sections: [
      ["The climate factor", "Humidity plus warmth is exactly what mites need to multiply in mattresses and sofas."],
      ["The furnishing factor", "Heavy use of carpets, layered bedding and fabric sofas gives mites more places to live."],
      ["What helps", "A locally made, lab-tested spray suited to this climate — used alongside washing and vacuuming."],
    ],
  },
];

export const FAQ: { q: string; a: string }[] = [
  { q: "Is it safe for kids?", a: "Yes — citric acid based and skin friendly. Skin and respiratory friendly, no side effects." },
  { q: "Will it stain my bedsheets?", a: "Let fabrics air dry before use." },
  { q: "How long does one bottle last?", a: "250 ml covers a bedroom for roughly 2–3 weeks of twice-weekly use." },
  { q: "Which scent should I pick?", a: "Lavender for bedrooms, Rosemary for living areas. Message us if unsure." },
  { q: "Delivery and payment?", a: "Nationwide delivery and cash on delivery available." },
  { q: "Does it replace cleaning?", a: "No — it works alongside washing and vacuuming, targeting what they miss." },
];

export const PAGES: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/about", label: "Our story" },
  { href: "/blogs", label: "Guides" },
  { href: "/contact", label: "Contact" },
];
