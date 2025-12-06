import { Code, Database, Globe, Layers, Server, Terminal, TestTube, MonitorPlay } from "lucide-react";

export const personalInfo = {
  name: "Shivam Singh",
  role: "SDET | Test Automation Engineer | SIH’22 Winner",
  location: "Navi Mumbai, India",
  phone: "9302213653",
  email: "shivamsingh13653@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/itzshivamsingh", 
    github: "#"    
  }
};

export const heroTaglines = [
  "Java • Selenium • Playwright • RestAssured • TestNG • SQL • CI/CD",
  "Specializing in UI & API Automation Frameworks",
  "Building Scalable & Reliable Test Solutions",
  "Improving Test Coverage & Execution Speed",
  "Winner of Smart India Hackathon 2022"
];

export const aboutMe = "I am an Automation Test Engineer (SDET) with strong hands-on experience in UI & API automation, framework development, SQL validation, and CI/CD integration. I specialize in building scalable, maintainable automation solutions using Java, Selenium WebDriver, TestNG, Playwright (Java), and RestAssured. My focus is on improving test coverage, reliability, and execution speed through automation and optimized frameworks.";

export const summaryProfile = "Results-driven SDET with extensive experience in building scalable automation frameworks using Java, Selenium, and Playwright. Proven track record in API testing, CI/CD integration, and performance engineering for enterprise-grade banking applications.";

export const linkedInAbout = "I work across end-to-end QA processes, including requirement analysis, test case design, functional testing, regression testing, database validation, and automation script development.\n\nI am continuously enhancing my skills in POM framework design, reusable utilities, reporting setup, debugging, and DevOps-based executions.\n\nKey Competencies:\n• UI Automation – Selenium WebDriver, Playwright (Java)\n• API Automation – Postman, RestAssured\n• SQL & DB Validation – DBeaver, SSMS, HeidiSQL\n• Framework Design (POM, Modular, DDT)\n• CI/CD Pipeline Execution & Agile Collaboration";

export const education = {
  degree: "B.Tech – Electronics & Communication Engineering",
  cgpa: "7.92",
  school: "Sagar Institute of Research & Technology, Bhopal (2020 – 2024)",
  school2: "Class 12 – CBSE (2019 – 2020)",
  school3: "Class 10 – MP Board (2017 – 2018)"
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
    items: ["Selenium WebDriver", "Playwright (Java)", "Rest Assured", "Postman", "TestNG", "JMeter"]
  },
  {
    category: "DevOps & Databases",
    icon: Terminal,
    items: ["Azure DevOps", "Git", "Maven", "SQL Server", "HeidiSQL", "DBeaver", "SSMS"]
  },
  {
    category: "Frameworks & Concepts",
    icon: Layers,
    items: ["POM Framework", "Modular Framework", "DDT (Data Driven Testing)", "Reusable Utilities", "Agile"]
  }
];

export const experience = [
  {
    role: "Software Test Engineer",
    company: "QualityKiosk Technologies Pvt. Ltd.",
    period: "March 2024 – Present",
    location: "Navi Mumbai, India",
    description: "Spearheading automation initiatives for banking and financial domains, focusing on framework development and CI/CD integration.",
    achievements: [
      "Built and executed UI automation scripts using Selenium WebDriver, TestNG, Playwright (Java).",
      "Developed API automation suites using RestAssured, validating end-to-end backend workflows.",
      "Designed and maintained POM-based automation frameworks with reusable utilities and modular components.",
      "Integrated automation test suites into Azure DevOps CI/CD pipelines for continuous execution.",
      "Performed functional testing, regression testing, and requirement-based test case writing.",
      "Conducted API testing using Postman and backend validation using SQL (DBeaver, HeidiSQL, SSMS).",
      "Collaborated with developers, BAs, and QA leads to resolve issues and ensure timely releases."
    ]
  },
  {
    role: "Trainee Software Engineer",
    company: "QualityKiosk Technologies Pvt. Ltd.",
    period: "Jan 2024 – March 2024",
    location: "Navi Mumbai, India",
    description: "Initial training and foundation in automation and QA processes.",
    achievements: [
      "Learned automation fundamentals, Core Java, and built basic Selenium scripts.",
      "Practiced API testing and SQL queries for test data validation.",
      "Developed understanding of SDLC, Agile ceremonies, Git, Maven, and QA workflows.",
      "Performed manual testing tasks and wrote structured test cases."
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
    title: "Winner, Smart India Hackathon (SIH)",
    year: "2022",
    description: "Won the national-level hackathon by delivering a real-world, high-pressure solution within 36 hours. Contributed to development, testing, and end-to-end feature validation.",
    link: "https://www.linkedin.com/posts/itzshivamsingh_smartindiahackathon-innovationnation-techtrailblazers-activity-7083397360256528384-R6SF?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Rising Star Award (UOB & MW Upgrade Project)",
    year: "2025",
    description: "Recognized for rapid growth and contribution to automation excellence.",
    link: "https://www.linkedin.com/posts/itzshivamsingh_teamwork-collaboration-activity-726938535198978477-qo-0?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Stellar Team Award (RIB/RMB Project)",
    year: "2024",
    description: "Awarded for exceptional collaboration and delivery in the RIB project.",
    link: "https://www.linkedin.com/posts/itzshivamsingh_teamwork-collaboration-activity-7269385351989784577-qo-0?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Finalist & Participant, Smart India Hackathon",
    year: "2021-2022",
    description: "Participated in idea development, prototype design, basic testing, and problem analysis.",
    link: null
  }
];

export const certifications = [
  "Core Java – Udemy",
  "SQL – Udemy"
];
