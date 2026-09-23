export const personalInfo = {
  name: "Mohammed Suzain Khan",
  title: "Software Engineer & ISE Undergrad",
  email: "suzein2576@gmail.com",
  phone: "+91 9019660826",
  phoneRaw: "9019660826",
  location: "Karnataka, India",
  college: "Adichunchanagiri Institute of Technology",
  degree: "B.E. – Information Science and Engineering",
  cgpa: "8.8",
  pucScore: "91%",
  schoolScore: "83%",
  expectedGraduation: "2028",
  availability: "Available for Internships & Projects",
  github: "https://github.com/suzein2576",
  linkedin: "https://linkedin.com/in/mohammed-suzain-khan",
  roles: [
    "Software Engineer",
    "Information Science Undergrad",
    "Full-Stack Java & Web Developer",
    "Python & SQL Specialist",
    "Data Structures & Algorithms Enthusiast"
  ],
  bio: "I am a dedicated Information Science and Engineering undergraduate at Adichunchanagiri Institute of Technology holding an 8.8 CGPA. With a strong grounding in Java, Python, C, SQL, and modern web development, I love solving algorithmic challenges, building robust database-backed architectures, and developing clean, intuitive digital experiences. Committed to continuous learning, collaborative problem-solving, and writing scalable, production-ready code."
};

export const stats = [
  { label: "B.E. CGPA", value: "8.8", subtext: "Adichunchanagiri Inst. of Tech" },
  { label: "2nd PUC", value: "91%", subtext: "Pre-University Distinction" },
  { label: "10th CBSE", value: "83%", subtext: "Mountain View Public School" },
  { label: "Core Stacks", value: "6+", subtext: "Java, Python, C, SQL & Web" }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90, icon: "Coffee", description: "OOP, Collections, Multithreading, JDBC" },
      { name: "Python", level: 88, icon: "Terminal", description: "Computational logic, Data scripting, NPTEL certified" },
      { name: "C", level: 82, icon: "Cpu", description: "Memory management, Pointers, Core CS fundamentals" },
      { name: "SQL", level: 88, icon: "Database", description: "Complex queries, Joins, Aggregations, Indexing" },
      { name: "JavaScript", level: 85, icon: "FileCode", description: "ES6+, Async/Await, DOM manipulation, APIs" }
    ]
  },
  {
    id: "core",
    title: "Core CS Concepts",
    icon: "Layers",
    skills: [
      { name: "Data Structures & Algorithms", level: 88, icon: "GitFork", description: "Arrays, Linked Lists, Trees, Graphs, Sorting & Searching" },
      { name: "Object-Oriented Programming (OOP)", level: 92, icon: "Boxes", description: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
      { name: "Database Management Systems (DBMS)", level: 89, icon: "Server", description: "Normalization, ER Modeling, ACID properties, Transactions" },
      { name: "Software Engineering & SDLC", level: 85, icon: "Workflow", description: "Modular design, Agile basics, Clean coding standards" }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML5 & Semantic Markup", level: 92, icon: "Layout", description: "Accessible, responsive document structuring" },
      { name: "CSS3 & Modern Layouts", level: 90, icon: "Palette", description: "Flexbox, Grid, Custom properties, Glassmorphic UI" },
      { name: "React.js", level: 84, icon: "Atom", description: "Hooks, Component Architecture, State Management" },
      { name: "Tailwind CSS", level: 90, icon: "Sparkles", description: "Utility-first design, Dark mode, Custom animations" }
    ]
  },
  {
    id: "tools",
    title: "Frameworks, Tools & DB",
    icon: "Wrench",
    skills: [
      { name: "MySQL", level: 90, icon: "Database", description: "Relational schema design, Stored procedures, Relational modeling" },
      { name: "Java Collections Framework", level: 88, icon: "Box", description: "Lists, Sets, Maps, Queues, Iterators" },
      { name: "JDBC (Java Database Connectivity)", level: 85, icon: "Cable", description: "Connecting Java applications to relational databases" },
      { name: "Git & GitHub", level: 86, icon: "GitBranch", description: "Version control, Branching, Pull requests, Collaboration" },
      { name: "IntelliJ IDEA & VS Code", level: 92, icon: "Monitor", description: "Advanced debugging, Extensions, Refactoring" }
    ]
  },
  {
    id: "soft",
    title: "Professional & Soft Skills",
    icon: "Users",
    skills: [
      { name: "Problem Solving", level: 95, icon: "Brain", description: "Analytical mindset and structured troubleshooting" },
      { name: "Communication & Teamwork", level: 90, icon: "MessageSquare", description: "Cross-functional collaboration and clear documentation" },
      { name: "Time Management & Adaptability", level: 88, icon: "Clock", description: "Prioritizing deliverables and rapid assimilation of new tech" },
      { name: "Leadership & Collaboration", level: 87, icon: "Award", description: "Guiding peer study sessions and group project coordination" }
    ]
  }
];

export const projects = [
  {
    id: "campussphere",
    title: "CampusSphere – Student Academic & DBMS Portal",
    subtitle: "Enterprise Relational Database & Course Management System",
    category: "Java & DBMS",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    description: "A comprehensive academic management system developed with Java, JDBC, and MySQL. Implements normalized 3NF database architecture, handles student enrollment, course registration, attendance tracking, and grade auditing with ACID transaction guarantees.",
    features: [
      "ACID-compliant relational transactions ensuring zero data loss during high-load enrollments",
      "Normalized schema with relational foreign key cascades, triggers, and indexed queries",
      "Interactive Java interface connecting through JDBC with prepared statements to prevent SQL injections",
      "Automated CGPA calculation engine and analytical report generator for academic advisors"
    ],
    techStack: ["Java", "JDBC", "MySQL", "OOP", "Database Management", "Git"],
    githubUrl: "https://github.com/suzein2576/CampusSphere-DBMS",
    liveUrl: "#",
    featured: true
  },
  {
    id: "algoverse",
    title: "Algoverse – Algorithm & Data Structure Visualizer",
    subtitle: "Interactive Graph & Sorting Traversal Engine",
    category: "Web & DSA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "An intuitive web application designed to visualize complex computer science algorithms step-by-step. Features interactive graph traversals (Dijkstra, BFS, DFS) and sorting algorithms (Quick Sort, Merge Sort, Heap Sort) with customizable speed and array size.",
    features: [
      "Real-time visual playback with step-by-step control, pause, and speed adjustments",
      "Comparative time & space complexity metrics dynamically displayed per algorithm",
      "Custom node and obstacle placement for shortest-path pathfinding grid simulations",
      "Responsive glassmorphic UI built with React, Framer Motion, and Tailwind CSS"
    ],
    techStack: ["React.js", "JavaScript", "Algorithms", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/suzein2576/Algoverse-Visualizer",
    liveUrl: "#",
    featured: true
  },
  {
    id: "pystream",
    title: "PyAutomate – Intelligent Data Pipeline & Scraper",
    subtitle: "Computational Python Automation & Analytics",
    category: "Python & Tools",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    description: "An automated Python pipeline inspired by NPTEL Joy of Programming concepts. Extracts unstructured multi-source web data, cleans and normalizes records, and exports clean SQL datasets and visualization reports.",
    features: [
      "Multi-threaded automated scraping with error handling and retry exponential backoffs",
      "Data transformation pipeline applying regex filters and statistical cleaning",
      "Direct relational export into structured MySQL / SQLite database tables",
      "Automated summary metrics and visualization plots for quick data inspection"
    ],
    techStack: ["Python", "Pandas", "BeautifulSoup", "SQL", "Computational Thinking"],
    githubUrl: "https://github.com/suzein2576/PyAutomate-DataPipeline",
    liveUrl: "#",
    featured: true
  },
  {
    id: "devpulse",
    title: "DevPulse – Futuristic Developer Portfolio System",
    subtitle: "Modern Responsive Web Showcase with Terminal Mode",
    category: "Web & DSA",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    description: "A state-of-the-art developer portfolio and command center featuring dark/light mode toggle, dynamic typing hero, interactive developer terminal, printable resume generator, and glassmorphic UI.",
    features: [
      "Embedded interactive terminal emulator accepting shell-like commands (`whoami`, `skills`, `projects`)",
      "Live printable resume modal designed to output clean single/two-page CVs directly",
      "Smooth micro-interactions and scroll-driven reveal animations using Framer Motion",
      "100% responsive layout optimized for mobile, tablet, and high-DPI displays"
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Lucide React", "Vite"],
    githubUrl: "https://github.com/suzein2576/Portfolio-Website",
    liveUrl: "#",
    featured: false
  }
];

export const education = [
  {
    degree: "B.E. in Information Science and Engineering",
    institution: "Adichunchanagiri Institute of Technology (AIT)",
    affiliations: "Bachelor of Engineering",
    score: "CGPA: 8.8",
    period: "2024 – Expected 2028",
    status: "Currently Pursuing",
    badge: "Current Undergrad",
    description: "Undertaking in-depth study in Computer Science and Information Science fundamentals. Focusing on Data Structures, Algorithms, Object-Oriented System Design, Database Engineering, and Operating Systems.",
    highlights: [
      "Current Academic Standing: 8.8 CGPA",
      "Strong performance in core engineering mathematics and programming laboratories",
      "Active participant in departmental coding workshops and tech forums"
    ]
  },
  {
    degree: "2nd PUC (Pre-University Course)",
    institution: "Mountain View PU College",
    affiliations: "Pre-University Education",
    score: "91%",
    period: "2022 – 2024",
    status: "Completed",
    badge: "Distinction (91%)",
    description: "Rigorous pre-university science curriculum with special focus on Mathematics, Physics, and analytical problem-solving.",
    highlights: [
      "Graduated with 91% distinction",
      "Excelled in logical reasoning, calculus, and mechanics"
    ]
  },
  {
    degree: "10th – CBSE",
    institution: "Mountain View Public School",
    affiliations: "Central Board of Secondary Education",
    score: "83%",
    period: "2021 – 2022",
    status: "Completed",
    badge: "First Class (83%)",
    description: "Comprehensive secondary education covering foundation sciences, mathematics, and English communication.",
    highlights: [
      "Passed with 83% overall score",
      "Active in extracurricular sports and science club exhibitions"
    ]
  }
];

export const certifications = [
  {
    title: "NPTEL – Joy of Programming in Python",
    issuer: "NPTEL / Indian Institute of Technology (IIT)",
    date: "2025",
    type: "Coursework & Professional Certification",
    skillsLearned: ["Python Programming", "Computational Thinking", "Problem Solving", "Algorithm Design", "Data Structures"],
    credentialId: "NPTEL25-PYTHON",
    description: "Rigorous 12-week national certification course covering programming paradigms, data structures, recursion, and computational algorithmic thinking in Python."
  },
  {
    title: "NPTEL – Database Management Systems (DBMS)",
    issuer: "NPTEL / Indian Institute of Technology (IIT)",
    date: "Verified",
    type: "Core CS Certification",
    skillsLearned: ["Relational Algebra", "SQL Queries", "Normalization (1NF-BCNF)", "Concurrency Control", "ACID Transactions"],
    credentialId: "NPTEL-DBMS-CORE",
    description: "Comprehensive national certification validating mastery in database architectures, ER modeling, SQL querying, indexing, transaction management, and relational database integrity."
  }
];

export const experiences = [
  {
    role: "Coursework & Technical Specialization",
    organization: "NPTEL – Joy of Programming in Python",
    period: "2025",
    type: "Academic Certification & Training",
    points: [
      "Completed an intensive NPTEL course focused on Python programming, problem solving, and computational thinking.",
      "Solved algorithmic problem sets involving recursion, dynamic data manipulation, and string parsing.",
      "Developed modular Python scripts to automate logical exercises and process computational problems."
    ]
  },
  {
    role: "Computer Science & Engineering Scholar",
    organization: "Adichunchanagiri Institute of Technology",
    period: "2024 – Present",
    type: "Undergraduate Engineering Program",
    points: [
      "Maintaining an outstanding CGPA of 8.8 across semesters in Information Science and Engineering.",
      "Deepening practical expertise in Java Object-Oriented Programming, Collections Framework, and MySQL integration.",
      "Collaborating with peers on practical database implementations and algorithmic problem-solving."
    ]
  }
];
