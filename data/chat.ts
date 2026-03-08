export interface QuickReply {
  label: string;
  value: string;
}

export interface BotResponse {
  trigger: string[];
  response: string;
}

export const QUICK_REPLIES: QuickReply[] = [
  { label: "Find a doctor", value: "How do I find a doctor?" },
  { label: "Is it free?", value: "Is DocNear free for patients?" },
  { label: "For doctors", value: "How can I join as a doctor?" },
  { label: "Verified doctors", value: "How are doctors verified?" },
];

export const BOT_RESPONSES: BotResponse[] = [
  {
    trigger: ["find", "search", "doctor", "near", "book", "appointment"],
    response:
      "Finding a doctor on DocNear is simple! Search by city or specialty, pick an available slot, and confirm. You'll get an SMS confirmation instantly. 📍",
  },
  {
    trigger: ["free", "cost", "charge", "price", "pay", "patient"],
    response:
      "DocNear is completely free for patients — always. No hidden fees, no subscription. You only pay the doctor's consultation fee directly. ✅",
  },
  {
    trigger: ["doctor", "join", "register", "sign up", "onboard"],
    response:
      "Doctors can join DocNear for free on our Starter plan. Get a verified profile, manage appointments, and reach more patients in your city. Visit our pricing page for Pro and Featured plans. 🩺",
  },
  {
    trigger: ["verified", "kyc", "trust", "real", "legit"],
    response:
      "Every doctor on DocNear goes through KYC verification — they submit their MCI/NMC registration number and ID proof. Verified doctors get a trust badge on their profile. 🛡️",
  },
  {
    trigger: ["prescription", "digital", "medicine"],
    response:
      "After your consultation, your doctor sends a digital prescription directly to your DocNear account. You can share it with any pharmacy instantly — no paper needed. 📋",
  },
  {
    trigger: ["city", "tier", "small", "nagda", "ujjain", "bhopal", "indore"],
    response:
      "DocNear works in 200+ cities across India including Tier 2 and Tier 3 cities like Nagda, Ujjain, Ratlam, and more. We're expanding fast! 🌏",
  },
  {
    trigger: ["hello", "hi", "hey", "help", "support"],
    response:
      "Hello! 👋 I'm DocBot, your DocNear assistant. I can help you find doctors, answer questions about bookings, or guide doctors on joining. What would you like to know?",
  },
];

export const FALLBACK_RESPONSE =
  "Great question! For detailed help, please email us at hello@docnear.in or explore our FAQ section. We typically respond within a few hours. 😊";

export const GREETING_MESSAGE =
  "Hi there! 👋 I'm DocBot. How can I help you today? Ask me anything about finding doctors, booking appointments, or joining DocNear as a doctor.";
