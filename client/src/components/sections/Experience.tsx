import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase, ChevronRight, Terminal } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative vertical line for code structure look */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/30 bg-accent/5 text-accent font-mono text-sm mb-4">
             <Terminal className="w-3 h-3" />
             <span>/var/log/experience</span>
          </div>
          <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground">
            Professional History
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-accent/50 shadow-sm transition-all group">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border/50 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        {job.role}
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border-0">Current</Badge>
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded border border-border">
                      <Calendar className="w-3 h-3 mr-2" />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {job.achievements.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-foreground/80 p-2 rounded hover:bg-secondary/40 transition-colors">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
