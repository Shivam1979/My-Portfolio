import { motion } from "framer-motion";
import { Database, Code, Server, Layers } from "lucide-react";
import { useState } from "react";

// Skill Data with Logo URLs (using Devicon and local fallbacks)
const skillCategoriesWithIcons = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }, 
    ]
  },
  {
    title: "Automation & Testing Tools",
    icon: Layers,
    skills: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { name: "TestNG", icon: "https://cdn.worldvectorlogo.com/logos/testng.svg" }, 
      { name: "Rest Assured", icon: "https://rest-assured.io/img/rest-assured-logo-cyan.png" }, 
      { name: "JMeter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" }, 
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ]
  },
  {
    title: "Build, IDE & DevOps",
    icon: Server,
    skills: [
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MS SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "HeidiSQL", icon: null },
      { name: "DBeaver", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
    ]
  }
];

// Component to handle individual skill icon with error state
const SkillIcon = ({ name, iconUrl }: { name: string; iconUrl: string | null }) => {
  const [hasError, setHasError] = useState(false);

  if (!iconUrl || hasError) {
    return (
      <div className="w-8 h-8 shrink-0 rounded bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground border border-border">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
      <img 
        src={iconUrl} 
        alt={name} 
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/30 bg-accent/5 text-accent font-mono text-sm mb-4">
             <Code className="w-3 h-3" />
             <span>/usr/bin/skills</span>
          </div>
          <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground">
            Technical Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategoriesWithIcons.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-[0_0_20px_rgba(var(--accent),0.15)] hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <div className="p-2 bg-secondary rounded text-foreground group-hover:text-accent transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold font-heading text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50"
                    >
                      <SkillIcon name={skill.name} iconUrl={skill.icon} />
                      <span className="text-base font-semibold text-foreground tracking-wide">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
