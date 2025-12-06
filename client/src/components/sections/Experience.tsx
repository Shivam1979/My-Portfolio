import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase, ChevronRight, Terminal, Clock } from "lucide-react";

export default function Experience() {
  // Calculate total experience dynamically
  const startDate = new Date("2024-01-01"); // Jan 2024
  const currentDate = new Date();
  
  // Calculate difference in milliseconds
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  // Convert to years with 1 decimal place
  const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative vertical line for code structure look - Mobile hidden, visible on md+ */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/30 bg-accent/5 text-accent font-mono text-sm mb-4 backdrop-blur-md shadow-sm">
             <Terminal className="w-3 h-3" />
             <span>/var/log/experience</span>
          </div>
          <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground mb-4">
            Professional History
          </h2>
          
          {/* Total Experience Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-accent/50 rounded-full shadow-lg shadow-accent/10">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-semibold text-foreground">Total Experience: </span>
            <span className="font-bold text-accent text-lg">{diffYears} Years</span>
          </div>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Connector Dot */}
              <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-[0_0_15px_rgba(var(--accent),0.5)] z-20 md:-translate-x-1/2 hidden md:block" />

              {/* Empty space for the other side of the timeline */}
              <div className="flex-1 hidden md:block" />

              {/* Content Card */}
              <div className="flex-1 w-full pl-8 md:pl-0">
                 {/* Mobile Timeline line */}
                 <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />
                 {/* Mobile Dot */}
                 <div className="absolute left-[22px] top-8 w-3 h-3 bg-accent rounded-full border-2 border-background z-20 md:hidden" />

                <div className="relative bg-card/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/60 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 group">
                   {/* Realistic glass reflection effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                   
                   <div className="relative z-10">
                     <div className="flex flex-col gap-2 mb-4 border-b border-border/50 pb-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-foreground leading-tight">
                            {job.role}
                          </h3>
                          {index === 0 && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 animate-pulse">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <p className="text-lg text-accent font-medium">{job.company}</p>
                          <div className="flex items-center text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50 w-fit">
                            <Calendar className="w-3 h-3 mr-2" />
                            {job.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                        {job.description}
                      </p>

                      <div className="grid gap-3">
                        {job.achievements.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90 p-2 rounded-lg hover:bg-secondary/40 transition-colors">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
