import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Database } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/30 bg-accent/5 text-accent font-mono text-sm mb-4">
               <Database className="w-3 h-3" />
               <span>/home/work/projects</span>
            </div>
            <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground">
              Key Project Deliverables
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Major automation initiatives executed during professional tenure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/60 hover:border-accent/50 group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs font-normal bg-accent/10 text-accent border-accent/20">
                      {project.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mt-4">
                    {project.points.map((point, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md font-mono border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
