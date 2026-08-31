export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  detailedDesc: string;
  tech: string[];
  features: string[];
  architecture: string[];
  github: string;
  liveDemo?: string;
  samplePayload?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  items: { name: string; level: number }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  gpa: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeCode: string;
  status: string;
  dateOrDuration: string;
  desc: string;
  url?: string;
}

export const profileData = {
  name: "Singh Kanishka",
  roleTitle: "Aspiring Software Development Engineer",
  shortRole: "SDE & Full-Stack Developer",
  email: "kanishka2704@gmail.com",
  phone: "+91 9998768832",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/KanishkaSingh-2004",
  linkedin: "https://www.linkedin.com/in/kanishka-singh-678663383/",
  resumeUrl: "/resume.pdf",
  summary:
    "Full-stack developer skilled in React.js, Node.js, Express.js, and MongoDB, with hands-on experience building traceability dashboards, expense-tracking apps, and travel-planning platforms using REST APIs and layered architecture. Strong DSA fundamentals. Seeking an SDE internship to build scalable, real-world web applications.",
};

export const experiences: ExperienceItem[] = [
  {
    id: "flyrank-intern",
    company: "FlyRank",
    role: "Backend AI Engineering Intern",
    period: "Jun 2026",
    location: "Remote",
    tech: ["Node.js", "Python", "REST APIs", "AI Integration", "Backend Systems"],
    bullets: [
      "Building and integrating AI models and APIs into backend systems for scalable product services",
      "Working with Node.js and Python to develop and maintain robust backend infrastructure",
      "Collaborating closely with the engineering team to design, optimize, and launch core product features",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "secure-chain-ledger",
    title: "SecureChainLedger",
    subtitle: "Pharma Blockchain Platform",
    desc: "Permissioned blockchain-based pharmaceutical traceability system featuring responsive user dashboards for batch lifecycle and supply chain monitoring.",
    detailedDesc:
      "Developed the frontend interface for a permissioned blockchain-based pharmaceutical traceability system. Designed intuitive and responsive dashboards that allow stakeholders to trace batch lifecycles, monitor supply chain events, and maintain data integrity using reusable, scalable React UI components.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Blockchain Traceability"],
    features: [
      "Developed frontend interface for permissioned blockchain-based pharma traceability",
      "Built responsive, user-friendly dashboards for tracking batch lifecycle and supply chain events",
      "Designed modular, reusable UI components ensuring scalability and consistent user experience",
      "Integrated REST API communication layers for real-time batch event updates",
    ],
    architecture: [
      "React.js Single Page Application (SPA) architecture with Tailwind CSS",
      "RESTful API client layer connected to blockchain middleware nodes",
      "Reusable UI component system built for high performance and responsiveness",
      "State-driven dashboard rendering for batch history and audit trails",
    ],
    github: "https://github.com/KanishkaSingh-2004/SecureChainLedger",
    samplePayload: `{
  "batchId": "BATCH-PHARMA-2026-884",
  "status": "VERIFIED_IN_TRANSIT",
  "timestamp": "2026-08-31T12:00:00Z",
  "blockchainHash": "0x7f9a8b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a",
  "nodesConfirmed": 12
}`,
  },
  {
    id: "expense-tracker-app",
    title: "Expense Tracker App",
    subtitle: "Full-Stack Financial Dashboard",
    desc: "Responsive expense management and budget tracking application with interactive spending analysis dashboards and Node.js/MongoDB REST APIs.",
    detailedDesc:
      "Built a full-stack expense tracking platform designed to help users log daily transactions, monitor custom budget goals, and visualize spending breakdowns. Implemented secure REST APIs with Node.js, Express, and MongoDB for seamless CRUD operations and spending analytics.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    features: [
      "Developed a responsive expense tracking application for managing daily expenses and budgets",
      "Built interactive dashboards and reusable UI components for spending analysis",
      "Implemented REST APIs with Node.js and MongoDB for creating, updating, and managing records",
      "Engineered flexible data aggregation layers for spending categories and monthly budgets",
    ],
    architecture: [
      "Client layer: React.js with Tailwind CSS for interactive data visualization",
      "Server layer: Node.js & Express.js REST API controllers",
      "Database layer: MongoDB collection schemas with dynamic indexing",
      "Component-based architecture supporting reusable budget widgets and modals",
    ],
    github: "https://github.com/KanishkaSingh-2004/Expense-Tracker-App",
    samplePayload: `{
  "transactionId": "TXN_994012",
  "category": "Software & Subscriptions",
  "amount": 49.99,
  "currency": "USD",
  "paymentMethod": "Credit Card",
  "date": "2026-08-31"
}`,
  },
  {
    id: "traviqo",
    title: "TRAVIQO",
    subtitle: "Intelligent Travel Planning Platform",
    desc: "Enterprise-grade intelligent travel planning application featuring RESTful APIs, Prisma ORM, itinerary management, budget tracking, and collaborative trip planning.",
    detailedDesc:
      "Engineered an enterprise-grade travel planning web application using a layered architectural model. Utilized PostgreSQL with Prisma ORM to power itinerary generation, expense tracking, packing checklists, and real-time collaborative trip management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Layered Architecture",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
    ],
    features: [
      "Enterprise-Grade Intelligent Travel Planning Platform",
      "Developed full-stack travel planning application using layered software architecture",
      "Implemented RESTful APIs with Prisma ORM for itinerary management and budget tracking",
      "Built interactive features for packing assistance and collaborative multi-user trip planning",
    ],
    architecture: [
      "Layered Architecture: Controller -> Service -> Repository / Prisma ORM",
      "Relational Database Schema designed with PostgreSQL and Prisma Migrations",
      "Modular React UI layout with responsive trip timelines and itinerary cards",
      "RESTful endpoint routing for trip itineraries, packing lists, and shared budgets",
    ],
    github: "https://github.com/KanishkaSingh-2004/Traviqo-master",
    samplePayload: `{
  "tripId": "TRIP-EUROPE-2026",
  "destination": "Zurich & Lucerne",
  "collaborators": ["Kanishka", "Engineering Team"],
  "itineraryDays": 7,
  "budgetAllocated": 2500,
  "currency": "EUR"
}`,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "PROGRAMMING LANGUAGES",
    items: [
      { name: "C", level: 85 },
      { name: "Java", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 86 },
    ],
  },
  {
    id: "frameworks",
    name: "FRAMEWORKS & WEB",
    items: [
      { name: "React.js", level: 94 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "REST APIs", level: 94 },
    ],
  },
  {
    id: "databases_cloud",
    name: "DATABASES & CLOUD",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 86 },
      { name: "PostgreSQL", level: 84 },
      { name: "AWS (EC2)", level: 80 },
      { name: "AWS (Lambda)", level: 78 },
      { name: "AWS (S3)", level: 82 },
    ],
  },
  {
    id: "tools_cs",
    name: "TOOLS & CORE CS",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Data Structures & Algos", level: 90 },
      { name: "Operating Systems (OS)", level: 85 },
      { name: "DBMS", level: 88 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Computer Networks", level: 86 },
      { name: "Prisma ORM", level: 82 },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology in Computer Science",
    specialization: "Artificial Intelligence",
    period: "2023 – 2027",
    gpa: "8.24",
    details: [
      "Specializing in Artificial Intelligence with a strong focus on Machine Learning, Full-Stack Web Development, and Core Software Engineering.",
      "Consistently maintained strong academic standing with a GPA of 8.24.",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL, IIT Kharagpur",
    badgeCode: "NPTEL-CNIP-2025",
    status: "COMPLETED",
    dateOrDuration: "12-week course (Jan–Apr 2025)",
    desc: "In-depth certification covering IP architecture, TCP/UDP protocols, routing algorithms, network security, and internetworking fundamentals.",
  },
  {
    title: "Information Security (CS406)",
    issuer: "Saylor University",
    badgeCode: "SAYLOR-CS406",
    status: "COMPLETED",
    dateOrDuration: "46 Hours | Score: 87.76% | Aug 2026",
    desc: "Rigorous coursework covering information security principles, cryptographic methods, network defense mechanisms, and access control policies.",
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL, IIT Kharagpur",
    badgeCode: "NPTEL-IOT-2026",
    status: "IN PROGRESS",
    dateOrDuration: "Expected completion 2026",
    desc: "Comprehensive study of IoT architectures, wireless sensor networks, embedded protocols, and smart system integration.",
  },
];
