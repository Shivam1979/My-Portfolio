import { Code, Database, Globe, Layers, Server, Terminal, TestTube, MonitorPlay } from "lucide-react";

export const personalInfo = {
  name: "Shivam Singh",
  role: "SDET / Test Automation Engineer",
  location: "Kopar Khairane, Navi Mumbai",
  phone: "+91 9302213653",
  email: "shivamsingh13653@gmail.com",
  social: {
    linkedin: "#", // Placeholder as not provided
    github: "#"    // Placeholder as not provided
  }
};

export const heroTaglines = [
  "Architecting Quality through Code & Automation.",
  "Building Robust Frameworks for Flawless Software.",
  "Shivam Singh: Precision in Automation, Excellence in Quality.",
  "Transforming Testing into a Strategic Advantage.",
  "SDET & Automation Engineer: Bridging Code and Quality."
];

export const aboutMe = "I am a detail-oriented SDET and Test Automation Engineer with a passion for building robust testing frameworks. With a strong foundation in Electronics & Communication Engineering, I bridge the gap between hardware precision and software agility. I specialize in designing scalable automation solutions using Java, Selenium, and Playwright to ensure seamless software delivery. My approach combines technical expertise with a deep understanding of QA processes to drive efficiency and reliability. I thrive in agile environments, constantly learning and adapting to new technologies.";

export const summaryProfile = "Results-driven SDET with extensive experience in building scalable automation frameworks using Java, Selenium, and Playwright. Proven track record in API testing, CI/CD integration, and performance engineering for enterprise-grade banking applications.";

export const linkedInAbout = "As a passionate SDET and Test Automation Engineer, I specialize in ensuring software quality through innovative automation solutions. With a background in Electronics & Communication Engineering, I bring a structured and analytical approach to solving complex testing challenges.\n\nMy expertise spans across Core Java, Selenium WebDriver, Playwright, and API automation tools like Rest Assured and Postman. I have successfully designed and maintained Page Object Model (POM) frameworks, integrated automated suites into Azure DevOps CI/CD pipelines, and conducted performance testing using JMeter.\n\nCurrently, at Quality Kiosk Technologies, I lead automation initiatives for critical banking and middleware projects, optimizing regression cycles and enhancing test coverage. I am a strong advocate for Agile methodologies and enjoy mentoring teams on automation best practices.\n\nI am driven by the challenge of delivering bug-free, high-performance software and am constantly exploring new tools to elevate testing standards.";

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  cgpa: "7.92",
  school: "University / Institute Name" // Placeholder
};

export const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["Core Java", "SQL"]
  },
  {
    category: "Automation Tools",
    icon: MonitorPlay,
    items: ["Selenium WebDriver", "Playwright (Java)", "TestNG", "Rest Assured", "JMeter", "Postman"]
  },
  {
    category: "DevOps & Tools",
    icon: Terminal,
    items: ["Maven", "IntelliJ IDEA", "Azure DevOps", "Git", "HeidiSQL", "MySQL", "MS SQL Server"]
  },
  {
    category: "Frameworks & Concepts",
    icon: Layers,
    items: ["POM Framework", "Automation Framework Design", "DDT (Data Driven Testing)", "Agile Methodology"]
  }
];

export const experience = [
  {
    role: "Test Engineer",
    company: "Quality Kiosk Technologies Pvt. Ltd.",
    period: "Jan 2024 – Present",
    description: "Spearheading automation initiatives for banking and financial domains, focusing on framework development and CI/CD integration.",
    achievements: [
      "Developed robust UI automation scripts using Selenium and Playwright (Java) with TestNG.",
      "Executed comprehensive API automation utilizing Rest Assured and Postman.",
      "Conducted performance testing and analysis using JMeter to ensure system stability.",
      "Architected and maintained scalable Page Object Model (POM) frameworks.",
      "Seamlessly integrated automated test suites into Azure DevOps CI/CD pipelines.",
      "Performed rigorous SQL-based backend validation to ensure data integrity.",
      "Mentored team members through internal training sessions on Automation, Git, and Azure DevOps."
    ]
  }
];

export const projects = [
  {
    title: "Retail Internet Banking Automation (RIB)",
    role: "Automation Engineer",
    tech: ["Selenium WebDriver", "TestNG", "Maven", "SQL", "Azure DevOps"],
    description: "A comprehensive automation suite designed to validate the retail internet banking platform's functionality and security.",
    points: [
      "Designed a modular POM framework to handle complex banking workflows.",
      "Implemented Data-Driven Testing (DDT) to cover extensive customer scenarios.",
      "Reduced regression testing time by 40% through parallel execution integration.",
      "Ensured data consistency across banking transactions via SQL backend validation."
    ]
  },
  {
    title: "Unified Onboarding Automation (UOB)",
    role: "SDET",
    tech: ["Playwright (Java)", "API Testing", "SQL Server", "Azure DevOps"],
    description: "End-to-end automation for a unified customer onboarding system, focusing on speed and reliability across multiple touchpoints.",
    points: [
      "Leveraged Playwright's capabilities for fast and reliable cross-browser testing.",
      "Automated complex API chains to verify user data flow and system integrations.",
      "Integrated automated checks into the deployment pipeline for rapid feedback.",
      "Maintained high test stability with auto-waiting and resilient locators."
    ]
  },
  {
    title: "Middleware Upgrade (COLO → OCP Migration)",
    role: "Performance & Integration Tester",
    tech: ["Rest Assured", "JMeter", "ActiveMQ", "Azure DevOps"],
    description: "Validation of critical middleware migration from Colocation to OpenShift Container Platform (OCP) ensuring zero downtime.",
    points: [
      "Validated message queues and middleware integrity using ActiveMQ and Rest Assured.",
      "Conducted load testing with JMeter to verify system performance under new architecture.",
      "Ensured seamless data transition and system connectivity post-migration.",
      "Collaborated closely with DevOps teams to verify deployment health."
    ]
  }
];

export const achievements = [
  {
    title: "Rising Star Award",
    year: "2025",
    description: "Recognized for rapid growth and contribution to automation excellence."
  },
  {
    title: "Stellar Team Award",
    year: "2024",
    description: "Awarded for exceptional collaboration and delivery in the RIB project."
  },
  {
    title: "Winner, Smart India Hackathon",
    year: "2022",
    description: "National level recognition for innovative problem solving."
  }
];

export const certifications = [
  "Core Java – Udemy",
  "SQL – Udemy"
];
