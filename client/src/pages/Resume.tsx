import { motion } from "framer-motion";
import { personalInfo, experience, projects, education, certifications } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, Share2, Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Skill Data with Logo URLs (using Devicon and local fallbacks)
// Note: For icons not in Devicon, we'd typically use a generic icon or custom SVG. 
// Using text/generic for ones that might be missing to ensure stability.
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }, // Using MySQL icon as generic SQL representation often works, or we can use specific DBs below
    ]
  },
  {
    title: "Automation & Testing Tools",
    skills: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { name: "TestNG", icon: null }, // No official devicon, will use fallback
      { name: "Rest Assured", icon: null }, // No official devicon
      { name: "JMeter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" }, // JMeter often uses the feather/apache logo or specific, using fallback text for safety if specific URL fails, but actually let's just use text for stability if uncertain.
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ]
  },
  {
    title: "Build, IDE & DevOps",
    skills: [
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MS SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "HeidiSQL", icon: null },
    ]
  }
];

const targetRoles = [
  "SDET",
  "Test Automation Engineer",
  "QA Automation Engineer",
  "Automation Test Engineer",
  "QA Test Automation Engineer",
  "Quality Assurance Automation Engineer"
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 pt-20 pb-12">
      
      {/* AI/Cyber Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1e] to-[#050810]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-cyan-500/20 pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-2"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-400 font-mono"
            >
              {personalInfo.role}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400"
            >
              <span>{personalInfo.location}</span>
              <span className="text-cyan-500/50">•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">{personalInfo.email}</a>
              <span className="text-cyan-500/50">•</span>
              <span>{personalInfo.phone}</span>
            </motion.div>
          </div>
          
          <div className="mt-6 md:mt-0 flex gap-3">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 text-slate-300">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)] border-none">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </Button>
          </div>
        </div>

        {/* Target Roles */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Target Roles</h3>
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/50 px-3 py-1 text-sm font-normal"
              >
                {role}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column (Left/Center) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">Professional Experience</h2>
              </div>
              
              <div className="space-y-8 border-l border-cyan-500/20 ml-3 pl-8 relative">
                {experience.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-2 border-cyan-500 bg-[#0a0f1e]" />
                    <div className="mb-1">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <div className="flex justify-between items-center flex-wrap gap-2 text-cyan-400/80 font-mono text-sm mt-1">
                        <span>{job.company}</span>
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

             {/* Projects */}
             <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-purple-500/10 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">Key Projects</h2>
              </div>
              
              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <Card key={idx} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">{project.role}</Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="space-y-10">
            
            {/* Skills with Logos */}
            <section className="bg-slate-900/30 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm">
               <h2 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                 <span className="text-cyan-400">///</span> Technical Arsenal
               </h2>
               
               <div className="space-y-8">
                 {skillCategories.map((cat, idx) => (
                   <div key={idx}>
                     <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">{cat.title}</h3>
                     <div className="grid grid-cols-2 gap-3">
                       {cat.skills.map((skill, sIdx) => (
                         <div key={sIdx} className="flex items-center gap-2 bg-slate-950/50 p-2 rounded border border-slate-800/50 hover:border-cyan-500/30 transition-colors group">
                           {skill.icon ? (
                             <img src={skill.icon} alt={skill.name} className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                           ) : (
                             <div className="w-5 h-5 shrink-0 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                               {skill.name.charAt(0)}
                             </div>
                           )}
                           <span className="text-sm text-slate-300 font-medium truncate" title={skill.name}>{skill.name}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" /> Education
              </h2>
              <div className="bg-slate-900/30 border border-slate-800 p-4 rounded-xl">
                <h3 className="font-bold text-slate-200">{education.degree}</h3>
                <p className="text-sm text-slate-400 mt-1">{education.school}</p>
                <div className="mt-3 flex items-center gap-2">
                   <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-950/20">CGPA: {education.cgpa}</Badge>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500/50 mt-0.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
