import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col gap-4 mb-16 text-center">
            <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in Quality Assurance and Automation Engineering.
            </p>
          </div>

          <div className="relative border-l border-border ml-4 md:ml-0 space-y-12">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-10 ml-8 md:ml-12 relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-12 md:-left-[58px] flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground ring-4 ring-background">
                  <Briefcase className="w-4 h-4" />
                </span>

                <div className="bg-card p-6 md:p-8 rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <p className="text-lg text-accent font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm font-medium bg-secondary px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    {job.description}
                  </p>

                  <ul className="space-y-3">
                    {job.achievements.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
