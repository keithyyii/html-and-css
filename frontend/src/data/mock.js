const mockData = {
  personalInfo: {
    name: "Angel Keith Carbon",
    title: "BSIT Student | Future UI/UX Designer and Front-End Developer",
    bio: "Hi! I'm Angel Keith Carbon, a BSIT student and aspiring UI/UX Designer and Front-End Developer. I enjoy designing and developing websites and applications that are both visually appealing and user-friendly. With a passion for blending creativity and functionality, I'm constantly learning new tools and techniques to improve my skills and create meaningful digital experiences.",
    interests: ["Machine Learning", "Web Development (Front-End)", "Visual Arts", "Graphic Design"],
    languages: ["English", "Filipino"],
    contact: {
      email: "angelkeithcarbon@gmail.com",
      phone: "0956 468 6964"
    },
    social: {
      facebook: "https://facebook.com/keithyyii",
      github: "#",
      linkedin: "#"
    }
  },
  
  education: [
    {
      institution: "Technological University of the Philippines",
      degree: "Bachelor of Science in Information Technology",
      date: "Present",
      achievement: null
    },
    {
      institution: "Our Lady of Fatima University – Quezon City Campus",
      degree: "Senior High School (STEM)",
      date: "2023",
      achievement: "Graduated with High Honors"
    }
  ],
  
  projects: [
    {
      name: "E-Commerce Prototype",
      technology: "Figma",
      date: "2025",
      description: "Designed a mobile shopping app prototype with focus on UI/UX design.",
      features: ["Mobile-first design", "User-centered interface", "Shopping cart functionality", "Product catalog"]
    },
    {
      name: "Voting Application",
      technology: "Flutter, Figma",
      date: "2025", 
      description: "Built a mobile voting application using Flutter (frontend) and Figma (design).",
      features: ["Cross-platform mobile app", "Secure voting system", "Real-time results", "User authentication"]
    },
    {
      name: "CRUD-Based Java E-Commerce Application",
      technology: "Java, MySQL",
      date: "2025",
      description: "Developed an e-commerce system with CRUD functionality using Java and MySQL.",
      features: ["Database integration", "Product management", "User management", "Order processing"]
    },
    {
      name: "Mini-Compiler / Interpreter",
      technology: "Programming Languages",
      date: "2025",
      description: "Built a lightweight compiler supporting loops and conditional statements.",
      features: ["Lexical analysis", "Syntax parsing", "Code generation", "Error handling"]
    },
    {
      name: "Advanced Access Control and Item Scanning System",
      technology: "System Design",
      date: "2024",
      description: "Designed a prototype that integrates access control with item scanning for school facilities.",
      features: ["RFID integration", "Database logging", "Real-time monitoring", "Security protocols"]
    },
    {
      name: "Ordering System",
      technology: "C Programming",
      date: "2023",
      description: "Developed a simple ordering system using the C programming language.",
      features: ["Menu management", "Order processing", "Receipt generation", "Inventory tracking"]
    },
    {
      name: "ATM Simulation System", 
      technology: "Programming",
      date: "2023",
      description: "Created a console-based program simulating ATM operations.",
      features: ["Account management", "Transaction processing", "Balance inquiry", "Security features"]
    }
  ],
  
  skills: {
    programmingLanguages: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 }
    ],
    webDevelopment: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 70 }
    ],
    mobileFrameworks: [
      { name: "Flutter", level: 75 }
    ],
    databases: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 65 }
    ],
    designTools: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ],
    areasOfInterest: [
      { name: "Machine Learning", level: 60 },
      { name: "Visual Arts", level: 75 },
      { name: "Graphic Design", level: 70 }
    ]
  }
};

export default mockData;