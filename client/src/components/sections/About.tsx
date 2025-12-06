import { motion } from "framer-motion";
import { aboutMe, linkedInAbout, achievements, certifications } from "@/lib/data";
import { Award, CheckCircle, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col gap-4 mb-12 text-center">
            <h2 className="text-3xl font-bold font-heading md:text-4xl text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold font-heading text-foreground">
                Professional Profile
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutMe}
              </p>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm mt-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" /> Education
                </h4>
                <div className="space-y-1">
                  <p className="font-medium">B.Tech in Electronics & Communication</p>
                  <p className="text-sm text-muted-foreground">CGPA: 7.92</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-semibold font-heading text-foreground">
                Achievements & Certifications
              </h3>
              
              <div className="space-y-4">
                {achievements.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Award className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description} ({item.year})</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm bg-background border border-border rounded-full flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-border">
             <h3 className="text-xl font-semibold font-heading text-foreground mb-6 text-center">
                Extended Bio
              </h3>
             <p className="text-muted-foreground leading-relaxed whitespace-pre-line max-w-3xl mx-auto text-justify">
               {linkedInAbout}
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
