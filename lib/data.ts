export const SITE = {
  name: "The Achievers Institute of Learning",
  tagline: "Nepal's First AI-Powered Online Tuition Platform",
  url: "https://theachievers.com.np",
  phones: ["976-9884993", "981-0686665", "974-7968501", "974-7968502"],
  email: "info@theachievers.com.np",
  whatsapp: "https://wa.me/9779810686665?text=Hi!%20I'd%20like%20to%20know%20more%20about%20The%20Achievers%20online%20tuition%20classes.",
  address: "Puspalal Chowk, Science Campus Road, Mahendranagar, Kanchanpur, Nepal",
  maps: "https://maps.app.goo.gl/fo6vjBYxXNQiSswWA",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61579416387457",
    youtube: "https://youtube.com/@TheAchieversAcademy-edu",
    tiktok: "https://www.tiktok.com/@achievers.academy10",
  },
  app: "https://play.google.com/store/apps/details?id=com.theachievers.learning",
};

export const STATS = [
  { value: "100K+", label: "Students Helped" },
  { value: "30+", label: "Expert Mentors" },
  { value: "95%+", label: "Pass Rate" },
  { value: "24/7", label: "Learning Access" },
];

export type Course = {
  slug: string;
  title: string;
  track: string;
  classLevel: string;
  subjects: string[];
  price: number;
  seats: number;
  mode: string;
  featured?: boolean;
  blurb: string;
  schedule: string;
  includes: string[];
};

export const COURSES: Course[] = [
  { slug: "class-11-science", title: "Class 11 Science — Full Year", track: "NEB Science", classLevel: "Class 11", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"], price: 14999, seats: 120, mode: "Live + Recorded", featured: true,
    blurb: "The foundation year, taught like it decides everything — because it does. Concepts are built from zero with daily numerics practice, so Class 12 feels like revision instead of rescue.",
    schedule: "Mon–Sat · 6:00–8:30 AM + evening doubt hour",
    includes: ["180+ live classes", "Chapterwise notes PDFs", "40+ chapter tests", "Parent progress calls"] },
  { slug: "class-12-science", title: "Class 12 Science — Board Sprint", track: "NEB Science", classLevel: "Class 12", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"], price: 15999, seats: 120, mode: "Live + Recorded", featured: true,
    blurb: "A board-exam sprint engineered backwards from the NEB marking scheme. High-weightage chapters first, 10 full model sets under timed conditions, and answer-writing workshops that teach you how marks are actually awarded.",
    schedule: "Mon–Sat · 5:30–8:30 AM + Sunday model set",
    includes: ["200+ live classes", "10 full NEB model sets", "Answer-writing workshops", "1:1 rank strategy call"] },
  { slug: "medical-cee", title: "Medical CEE Crash Course", track: "Entrance", classLevel: "CEE", subjects: ["Zoology", "Botany", "Physics", "Chemistry"], price: 12999, seats: 80, mode: "Live + Mock Tests", featured: true,
    blurb: "120 days of objective-pattern warfare for CEE (MBBS/BDS/BSc Nursing). Taught by MBBS scholars who cracked the same paper — 5,000+ MCQs, negative-marking strategy, and weekly all-Nepal rank lists so you always know where you stand.",
    schedule: "Mon–Sat · 7:00–10:00 AM + nightly MCQ drill",
    includes: ["5,000+ MCQ bank", "20 CEE-pattern mocks", "Weekly rank lists", "MBBS scholar mentors"] },
  { slug: "class-12-management", title: "Class 12 Management — Full Year", track: "NEB Management", classLevel: "Class 12", subjects: ["Accountancy", "Economics", "English", "Business Studies"], price: 11999, seats: 100, mode: "Live + Recorded",
    blurb: "Ledger to boardroom: journal entries to final accounts, micro to macro — with formats NEB examiners expect, memorised the painless way. Includes business maths shortcuts that save 20 minutes per paper.",
    schedule: "Mon–Fri · 6:00–8:00 AM + Saturday test",
    includes: ["150+ live classes", "Format-perfect practice sets", "Weekly Saturday tests", "Doubt support on WhatsApp"] },
  { slug: "class-8-10-maths", title: "Class 8–10 Mathematics Foundation", track: "School", classLevel: "Class 8–10", subjects: ["Mathematics"], price: 6999, seats: 150, mode: "Live + Recorded",
    blurb: "Where toppers are actually made. Algebra, geometry and trigonometry foundations taught with visual intuition — so SEE and +2 Science feel like a natural climb, not a cliff.",
    schedule: "Tue–Sat · 5:00–6:30 PM after school",
    includes: ["120+ live classes", "Visual concept sheets", "Monthly parent reports", "SEE-pattern practice"] },
];

export type Teacher = {
  slug: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  featured?: boolean;
  photo: string;
};

/* Editorial imagery — all photography served from Unsplash. */
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("photo-1522202176988-66273c2fd55f", 1200),
  heroBadge: U("photo-1531123897727-8f129e1688ce", 200),
  essay: [
    { src: U("photo-1427504494785-3a9ca7044f45", 900), caption: "Live at the board", note: "Physics, Batch of 2026 — Mahendranagar studio" },
    { src: U("photo-1434030216411-0b793f4b4173", 900), caption: "Notes before boards", note: "Chapterwise sheets shipped with every class" },
    { src: U("photo-1509062522246-3755977927d7", 900), caption: "First bench, anywhere", note: "Live + recorded on the Achievers app" },
  ],
};

export const TEACHERS: Teacher[] = [
  { slug: "nirmal-dhami", name: "Mr. Nirmal Dhami", subject: "Zoology", qualification: "MBBS scholar, KUSMS", experience: "2+ yrs", featured: true, photo: U("photo-1507003211169-0a1dd7228f2d", 400) },
  { slug: "prakash-saud", name: "Prakash Saud", subject: "Physics", qualification: "JEE Ranker, BSc", experience: "4+ yrs", featured: true, photo: U("photo-1560250097-0b93528c311a", 400) },
  { slug: "divyanshu-thapa", name: "Divyanshu Thapa", subject: "Chemistry", qualification: "IOE Ranker, MSc Running (Founder)", experience: "6+ yrs", featured: true, photo: U("photo-1472099645785-5658abf4ff4e", 400) },
  { slug: "gaurav-bist", name: "Gaurav Prasad Bist", subject: "Mathematics", qualification: "IOE Ranker, BSc Complete", experience: "5+ yrs", photo: U("photo-1500648767791-00dcc994a43e", 400) },
  { slug: "niraj-badu", name: "Niraj Badu", subject: "Biology", qualification: "SNSC Ranker, BSc Complete", experience: "4+ yrs", photo: U("photo-1506794778202-cad84cf45f1d", 400) },
  { slug: "dipesh-saud", name: "Dipesh Saud", subject: "Physics", qualification: "B.E. Computer", experience: "2+ yrs", featured: true, photo: U("photo-1519085360753-af0119f7cbe7", 400) },
  { slug: "dipesh-kalouni", name: "Dipesh Kalouni", subject: "Chemistry", qualification: "WRC Ranker, BSc Complete", experience: "4+ yrs", photo: U("photo-1573497019940-1c28c88b4f3e", 400) },
  { slug: "birendra-oire", name: "Birendra Singh Oire", subject: "Physics & Mathematics", qualification: "SNSC Ranker, MSc Running", experience: "5+ yrs", photo: U("photo-1580489944761-15a19d654956", 400) },
  { slug: "chakra-chand", name: "Chakra Chand", subject: "Physics", qualification: "MSc Topper, MSc Complete", experience: "6+ yrs", photo: U("photo-1438761681033-6461ffad8d80", 400) },
  { slug: "tikendra-bist", name: "Tikendra Prasad Bist", subject: "Physics", qualification: "FWU Ranker, BSc Complete", experience: "4+ yrs", photo: U("photo-1573496359142-b8d87734a5a2", 400) },
  { slug: "kailash-bhatt", name: "Kailash Bhatt", subject: "Mathematics", qualification: "Mathematics Topper, BSc", experience: "4+ yrs", photo: U("photo-1544005313-94ddf0286df2", 400) },
];

export const TESTIMONIALS = [
  { name: "Aarav Sharma", role: "Class 12 · Science", text: "Interactive doubt clearing; Physics & Maths improved significantly." },
  { name: "Sneha Gurung", role: "Class 11 · Science", text: "Recorded lessons for anytime revision; chapterwise notes before exams." },
  { name: "Bishal Thapa", role: "Class 12 · Management", text: "Accounts & Economics clear; weekly tests kept me consistent." },
  { name: "Anjali Shrestha", role: "Class 11 · Science", text: "Chemistry became my strongest subject with real examples." },
  { name: "Prakash Adhikari", role: "Class 12 · Science", text: "Quality teaching from home; pre-board doubt sessions were a lifesaver." },
  { name: "Sunita Karki", role: "Parent", text: "Can track my daughter's progress and attendance; teachers are caring." },
  { name: "Rohan Maharjan", role: "Class 11 · Science", text: "Affordable, well-structured; mock tests feel exactly like real NEB." },
  { name: "Pooja Bhandari", role: "Class 12 · Science", text: "Step-by-step Biology & numerics; board exam confidence very high." },
];

export const FAQS = [
  { q: "Who are the classes for?", a: "NEB Class 11 & 12 students in both Science and Management streams — plus Medical CEE, IOE/BIT and foundation aspirants from Class 8 upwards. If your exams are set by NEB or the Medical Education Commission, our classrooms are built for exactly your paper pattern, marking scheme and calendar." },
  { q: "How do live classes work?", a: "Every batch follows a fixed weekly timetable streamed live from our Mahendranagar studio — morning batches before school/college, evening doubt hours after. Every single session is recorded and uploaded the same day, so a missed class costs you nothing: rewatch it anytime on the website or Android app, with the same chapterwise notes your classmates got." },
  { q: "Are mock tests really free?", a: "Yes — chapterwise tests after every chapter and full-length NEB-pattern model sets with instant scoring are included for all enrolled students at no extra charge. Visitors can also attempt preview tests without paying, so you can feel the exact board-level difficulty before you spend a rupee." },
  { q: "What payment methods are accepted?", a: "eSewa, Khalti, Fonepay and direct transfers from major Nepali banks, all through an encrypted checkout — we never see or store your card or wallet credentials. Need it in parts? Talk to a counsellor about two-installment plans for full-year courses." },
  { q: "Can I try before paying?", a: "Absolutely — that is the whole point of the free demo. Book a real live class in 30 seconds, sit with a real batch, meet the teacher, and attempt a free mock test. Enroll only if the first bench feels like yours." },
];

export const SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "English", "Computer Science"];

export const SYLLABUS: Record<string, { subject: string; chapters: { title: string; weightage: string }[] }[]> = {
  science: [
    { subject: "Physics", chapters: [{ title: "Mechanics", weightage: "18%" }, { title: "Thermodynamics", weightage: "12%" }, { title: "Optics", weightage: "14%" }, { title: "Electromagnetism", weightage: "16%" }] },
    { subject: "Chemistry", chapters: [{ title: "Physical Chemistry", weightage: "25%" }, { title: "Organic Basics", weightage: "30%" }, { title: "Inorganic", weightage: "20%" }] },
    { subject: "Mathematics", chapters: [{ title: "Calculus", weightage: "28%" }, { title: "Algebra", weightage: "22%" }, { title: "Trigonometry", weightage: "15%" }] },
  ],
  management: [
    { subject: "Accountancy", chapters: [{ title: "Journal & Ledger", weightage: "25%" }, { title: "Final Accounts", weightage: "30%" }] },
    { subject: "Economics", chapters: [{ title: "Microeconomics", weightage: "50%" }, { title: "Macroeconomics", weightage: "50%" }] },
  ],
};

export type MockTest = {
  id: string;
  title: string;
  subject: string;
  questions: number;
  minutes: number;
  difficulty: string;
};

export const MOCK_TESTS: MockTest[] = [
  { id: "phy-mech-01", title: "Physics — Mechanics Chapter Test", subject: "Physics", questions: 25, minutes: 30, difficulty: "Medium" },
  { id: "chem-org-01", title: "Chemistry — Organic Basics", subject: "Chemistry", questions: 30, minutes: 35, difficulty: "Hard" },
  { id: "maths-calc-01", title: "Maths — Calculus Practice", subject: "Mathematics", questions: 20, minutes: 30, difficulty: "Medium" },
  { id: "bio-cell-01", title: "Biology — Cell Full Test", subject: "Biology", questions: 25, minutes: 30, difficulty: "Easy" },
  { id: "acc-final-01", title: "Accountancy — Final Accounts", subject: "Accountancy", questions: 20, minutes: 40, difficulty: "Medium" },
  { id: "neb-full-01", title: "NEB Full-Length Model Set 01", subject: "Physics", questions: 50, minutes: 90, difficulty: "Board-level" },
];
