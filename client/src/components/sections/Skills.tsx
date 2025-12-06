import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Database, Code, Server, Layers } from "lucide-react";

// Skill Data with Logo URLs (using Devicon and local fallbacks)
// Mapping existing data to include icons
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
      { name: "TestNG", icon: null }, 
      { name: "Rest Assured", icon: null }, 
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
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
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

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 transition-colors"
                    >
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 shrink-0" />
                      ) : (
                        <div className="w-5 h-5 shrink-0 rounded bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground border border-border">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
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
