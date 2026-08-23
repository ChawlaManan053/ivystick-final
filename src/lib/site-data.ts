import {
  FaBookOpen,
  FaGraduationCap,
  FaGlobeAmericas,
  FaPenNib,
  FaComments,
  FaAward,
  FaChartLine,
  FaUsers,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaLightbulb,
  FaRocket,
  FaRegClock,
  FaClipboardList,
  FaTrophy,
  FaHandshake,
  FaUserGraduate,
  FaBrain,
  FaLayerGroup,
  FaBullseye,
} from "react-icons/fa";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#programs" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Why Us", href: "#why" },
  { label: "Universities", href: "#universities" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const UNIVERSITIES = [
  { name: "Harvard", domain: "harvard.edu" },
  { name: "MIT", domain: "mit.edu" },
  { name: "Stanford", domain: "stanford.edu" },
  { name: "Oxford", domain: "ox.ac.uk" },
  { name: "Cambridge", domain: "cam.ac.uk" },
  { name: "Yale", domain: "yale.edu" },
  { name: "Princeton", domain: "princeton.edu" },
  { name: "Cornell", domain: "cornell.edu" },
  { name: "Brown", domain: "brown.edu" },
  { name: "Caltech", domain: "caltech.edu" },
  { name: "Columbia", domain: "columbia.edu" },
  { name: "Univ. of Chicago", domain: "uchicago.edu" },
  { name: "Duke", domain: "duke.edu" },
  { name: "Johns Hopkins", domain: "jhu.edu" },
  { name: "Carnegie Mellon", domain: "cmu.edu" },
  { name: "Univ. of Michigan", domain: "umich.edu" },
  { name: "Georgia Tech", domain: "gatech.edu" },
  { name: "Imperial College", domain: "imperial.ac.uk" },
  { name: "Univ. of Toronto", domain: "utoronto.ca" },
  { name: "NUS Singapore", domain: "nus.edu.sg" },
  { name: "ETH Zurich", domain: "ethz.ch" },
];


export const PROGRAMS = [
  { title: "SAT", icon: FaPenNib, desc: "Digital SAT mastery with proven 1500+ frameworks." },
  { title: "Advanced Placement (AP)", icon: FaAward, desc: "20+ AP subjects taught by 5/5 scorers." },
  { title: "IBDP", icon: FaGraduationCap, desc: "Full Diploma support across HL & SL subjects." },
  { title: "IB (MYP)", icon: FaLayerGroup, desc: "Strong foundations for the IB continuum." },
  { title: "IGCSE", icon: FaBookOpen, desc: "50,000+ curated questions across all boards." },
  { title: "ACT", icon: FaBullseye, desc: "Speed, accuracy and elite composite scores." },
  { title: "PSAT", icon: FaChartLine, desc: "National Merit preparation, started early." },
  { title: "College Admissions", icon: FaGlobeAmericas, desc: "End-to-end strategy for global universities." },
  { title: "Essay Guidance", icon: FaPenNib, desc: "Compelling, authentic personal statements." },
  { title: "Interview Preparation", icon: FaComments, desc: "Confident, polished admission interviews." },
  { title: "Scholarship Guidance", icon: FaTrophy, desc: "Merit & need-based funding roadmaps." },
  { title: "TMUA", icon: FaBrain, desc: "Mathematics admissions test preparation for leading UK universities." },
  { title: "ESAT", icon: FaRocket, desc: "Focused preparation for the Engineering and Science Admissions Test." },
  { title: "TARA", icon: FaClipboardCheck, desc: "Specialized admissions test preparation with structured practice and expert guidance." },
];

/** Course-specific detail content shown in the "Learn more" dialog. */
export const PROGRAM_DETAILS: Record<
  string,
  { tagline: string; covered: string[]; support: string[] }
> = {
  SAT: {
    tagline:
      "A complete Digital SAT program built around diagnostics, deliberate practice and a score strategy designed for your target universities.",
    covered: [
      "Digital SAT preparation",
      "Reading & Writing",
      "Mathematics",
      "Full-length practice tests",
    ],
    support: ["Timed practice", "Score improvement strategy", "Personalized preparation"],
  },
  "Advanced Placement (AP)": {
    tagline:
      "AP coaching from mentors with proven 5/5 records — concept-first teaching paired with relentless exam-focused drilling.",
    covered: [
      "AP subject preparation",
      "Concept mastery",
      "Exam-focused preparation",
      "Practice questions",
    ],
    support: ["Full-length & mock exams", "Subject-specific guidance", "Personalized academic support"],
  },
  IBDP: {
    tagline:
      "End-to-end IB Diploma support across HL and SL — from conceptual depth to the coursework that decides your final grade.",
    covered: [
      "IB Diploma Programme support",
      "HL & SL subject preparation",
      "Conceptual understanding",
      "Internal Assessment guidance",
    ],
    support: ["Extended Essay support", "Exam preparation", "Personalized academic planning"],
  },
  "IB (MYP)": {
    tagline:
      "Early, structured mentorship that builds the academic foundations the IB continuum will later demand.",
    covered: [
      "IB Middle Years Programme support",
      "Strong academic foundations",
      "Subject-specific support",
      "Concept building",
    ],
    support: ["Assignment & exam preparation", "Preparation for the IB continuum"],
  },
  IGCSE: {
    tagline:
      "Board-accurate IGCSE preparation with curated question banks and past-paper mastery across every major subject.",
    covered: [
      "IGCSE subject preparation",
      "Strong conceptual foundations",
      "Structured practice",
      "Past-paper preparation",
    ],
    support: ["Exam strategy", "Personalized academic support"],
  },
  ACT: {
    tagline:
      "Speed, accuracy and composure across all four ACT sections — engineered for an elite composite score.",
    covered: ["ACT preparation", "English", "Mathematics", "Reading", "Science"],
    support: ["Timed practice", "Mock tests", "Composite-score strategy"],
  },
  PSAT: {
    tagline:
      "An early advantage: PSAT preparation aimed at National Merit-level scores and a seamless transition into the SAT.",
    covered: ["PSAT preparation", "Reading & Writing", "Mathematics", "Digital test strategy"],
    support: ["Timed practice", "Practice tests", "Preparation for competitive scores"],
  },
  "College Admissions": {
    tagline:
      "A senior mentor guiding your entire application arc — from shortlist to submission — for universities worldwide.",
    covered: [
      "University selection strategy",
      "Application planning",
      "Profile development",
      "Application strategy",
    ],
    support: ["University-specific guidance", "Application timeline", "End-to-end admissions support"],
  },
  "Essay Guidance": {
    tagline:
      "Essays that sound unmistakably like you — shaped, sharpened and edited without ever losing your voice.",
    covered: [
      "Personal statement guidance",
      "College essays",
      "Story development",
      "Structure and clarity",
    ],
    support: [
      "Authentic voice",
      "Editing and refinement",
      "Guidance that never makes your writing feel artificial",
    ],
  },
  "Interview Preparation": {
    tagline:
      "Mock interviews with admissions-experienced mentors so you walk in calm, articulate and memorable.",
    covered: [
      "University interview preparation",
      "Mock interviews",
      "Common interview questions",
      "Communication strategy",
    ],
    support: ["Confidence building", "Personalized feedback", "Interview-specific preparation"],
  },
  "Scholarship Guidance": {
    tagline:
      "Find the funding you qualify for — and present a profile that makes committees say yes.",
    covered: [
      "Scholarship discovery",
      "Eligibility guidance",
      "Application strategy",
      "Scholarship essays",
    ],
    support: [
      "Profile positioning",
      "Application planning",
      "Guidance for competitive scholarship opportunities",
    ],
  },
  TMUA: {
    tagline:
      "Test of Mathematics for University Admission preparation for leading UK universities, built on reasoning rather than rote.",
    covered: [
      "TMUA preparation",
      "Mathematical reasoning",
      "Problem-solving",
      "Past-style questions",
    ],
    support: ["Timed practice", "Exam strategy", "Personalized preparation"],
  },
  ESAT: {
    tagline:
      "Focused Engineering and Science Admissions Test preparation across mathematics and the sciences.",
    covered: [
      "ESAT preparation",
      "Mathematics & science reasoning",
      "Problem-solving",
      "Exam-style questions",
    ],
    support: ["Timed practice", "Test strategy", "Personalized preparation"],
  },
  TARA: {
    tagline:
      "Structured TARA admissions test preparation with expert guidance on analysis, reasoning and timing.",
    covered: [
      "TARA admissions test preparation",
      "Analytical and reasoning skills",
      "Problem-solving",
      "Structured practice",
    ],
    support: ["Timed preparation", "Exam strategy", "Personalized guidance"],
  },
};

export const SERVICES = [
  { title: "Personal Mentorship", icon: FaChalkboardTeacher },
  { title: "One-to-One Sessions", icon: FaUsers },
  { title: "Personal Study Planner", icon: FaClipboardList },
  { title: "Practice Tests", icon: FaClipboardCheck },
  { title: "Mock Exams", icon: FaPenNib },
  { title: "College Counselling", icon: FaGlobeAmericas },
  { title: "Application Strategy", icon: FaBullseye },
  { title: "Essay Review", icon: FaBookOpen },
  { title: "Interview Coaching", icon: FaComments },
  { title: "Score Improvement Plans", icon: FaChartLine },
  { title: "Weekly Progress Reports", icon: FaClipboardList },
  { title: "Parent Meetings", icon: FaHandshake },
];

export const WHY_CHOOSE = [
  { title: "Expert Faculty", icon: FaChalkboardTeacher, desc: "Mentors from the world's top universities." },
  { title: "Personal Mentorship", icon: FaUserGraduate, desc: "A dedicated guide for every student." },
  { title: "Global Curriculum", icon: FaGlobeAmericas, desc: "Aligned with international standards." },
  { title: "Small Batch Size", icon: FaUsers, desc: "Focused attention, never a crowded room." },
  { title: "Individual Attention", icon: FaBullseye, desc: "Plans tailored to each learner." },
  { title: "Real Exam Simulations", icon: FaClipboardCheck, desc: "Test-day conditions, every time." },
  { title: "Flexible Learning", icon: FaRegClock, desc: "Online & in-person, on your schedule." },
  { title: "Performance Tracking", icon: FaChartLine, desc: "Data-driven progress dashboards." },
  { title: "Premium Study Material", icon: FaBookOpen, desc: "Curated, exam-accurate resources." },
  { title: "High Success Rate", icon: FaTrophy, desc: "A track record that speaks for itself." },
];

export const STATS = [
  { value: 95, suffix: "%", label: "Students Improved Scores" },
  { value: 98, suffix: "%", label: "Student Satisfaction" },
  { value: 90, suffix: "%", label: "Admissions into Top Universities" },
  { value: 1500, suffix: "+", label: "SAT Achievers" },
  { value: 1000, suffix: "+", label: "Students Mentored" },
  { value: 50, suffix: "+", label: "Partner Schools" },
];

export const JOURNEY = [
  { title: "Discovery", icon: FaLightbulb, desc: "We understand your goals and dream schools." },
  { title: "Assessment", icon: FaClipboardCheck, desc: "A diagnostic to map your exact starting point." },
  { title: "Personal Learning Plan", icon: FaClipboardList, desc: "A bespoke roadmap built around you." },
  { title: "Expert Mentorship", icon: FaChalkboardTeacher, desc: "One-to-one guidance from top scorers." },
  { title: "Practice Tests", icon: FaPenNib, desc: "Deliberate practice with instant feedback." },
  { title: "Performance Tracking", icon: FaChartLine, desc: "Every metric monitored and refined." },
  { title: "Mock Exams", icon: FaClipboardCheck, desc: "Full-length, real exam simulations." },
  { title: "Score Improvement", icon: FaRocket, desc: "Measurable gains, milestone by milestone." },
  { title: "University Applications", icon: FaGlobeAmericas, desc: "Essays, strategy and interviews perfected." },
  { title: "Global Success", icon: FaTrophy, desc: "Admission into the world's best universities." },
];

export const TESTIMONIALS = [
  {
    name: "Aaraynaa Lohia",
    role: "SAT 1590 / 1600 · Physics HL 7/7",
    quote:
      "IVY STICK didn't just raise my score — they rebuilt my confidence. My mentor knew exactly where I struggled and how to fix it.",
    rating: 5,
  },
  {
    name: "Pragun Sharma",
    role: "SAT 1590 / 1600 · AP Calculus BC 5/5",
    quote:
      "The personalized planning was unreal. Every week felt structured and purposeful. I hit my dream score two months early.",
    rating: 5,
  },
  {
    name: "Aadhyan Diwakar",
    role: "SAT 1600 / 1600",
    quote:
      "Perfect score, perfect experience. The mock exams felt harder than the real thing, so test day felt easy.",
    rating: 5,
  },
  {
    name: "Meera K. (Parent)",
    role: "Parent of IBDP Student",
    quote:
      "As a parent, the weekly progress reports and parent meetings gave me complete peace of mind. Truly premium mentorship.",
    rating: 5,
  },
  {
    name: "Daniyal Ahmed",
    role: "Admitted · University of Toronto",
    quote:
      "From essays to interviews, they guided every step. I got into my first choice with a scholarship.",
    rating: 5,
  },
  {
    name: "Arush Nath",
    role: "Admitted · Northwestern University",
    quote:
      "I wanted to tell you that 2 days ago I got off the waitlist for Northwestern and will be going there in September. Thank you so much for all your help throughout my journey since 10th grade — I could not have done it without you!",
    rating: 5,
  },
  {
    name: "Zohar Fateh",
    role: "AP Physics",
    quote:
      "Thank you for teaching me AP Physics this year. I genuinely enjoyed your classes and learned a lot from the way you taught. You had a really nice way of explaining things that made difficult concepts much easier to understand. I really appreciate all the effort you put into teaching.",
    rating: 5,
  },
  {
    name: "Aarav Goel",
    role: "AP Physics C: Mechanics · Score 5",
    quote:
      "I had a great experience with Ankit sir. He would always take any doubts I had and would always urge me to practice more. He also explained the concepts relevant to the questions I got wrong so beautifully that I would never get those types of questions wrong again. It won't be an exaggeration to say that I got a 5 on my Physics Mechanics AP because of him.",
    rating: 5,
  },
  {
    name: "Aarav Shrivastava",
    role: "AP Physics C: Mechanics · Score 5",
    quote:
      "Working with you made a significant difference in how I approached AP Physics C: Mechanics. Your clear explanations, emphasis on conceptual understanding, and step-by-step problem-solving strategies helped me build confidence, especially with topics like rotational motion and energy conservation. Your guidance played a big role in helping me score a 5 on the exam.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How is IVY STICK's SAT preparation different?",
    a: "Every student receives a diagnostic, a personalized study plan, and one-to-one mentorship from tutors who have themselves scored 1500+. We combine 50,000+ practice questions with real exam simulations.",
  },
  {
    q: "Do you offer AP and IB subject support?",
    a: "Yes. We cover 20+ AP subjects and the full IB Diploma across HL and SL, taught by mentors with proven 5/5 and 7/7 track records.",
  },
  {
    q: "Can you help with ACT and IGCSE alongside SAT?",
    a: "Absolutely. We prepare students for SAT, ACT, IGCSE, PSAT and more — often in parallel with a coordinated schedule to avoid burnout.",
  },
  {
    q: "What does the admissions counselling include?",
    a: "End-to-end support: university shortlisting, application strategy, essay guidance, interview coaching, and scholarship planning for universities worldwide.",
  },
  {
    q: "How are the fees structured?",
    a: "Fees depend on the program, intensity and duration. Book a free consultation and we'll design a plan and transparent quote tailored to your goals.",
  },
  {
    q: "Do you provide scholarship guidance?",
    a: "Yes — we help identify merit and need-based opportunities and craft applications that maximize your chances of funding.",
  },
];

export const CONTACT = {
  phone: "+91 85868 04126",
  phoneRaw: "+918586804126",
  email: "jeeprepplus@gmail.com",
  instagram: "https://www.instagram.com/ivystickeducation/?hl=en",
  whatsapp: "https://wa.me/918586804126",
};
