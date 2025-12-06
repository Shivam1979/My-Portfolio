import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
         <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-heading md:text-4xl mb-6">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently available for new opportunities. Whether you have a question about my work or want to discuss a potential collaboration, I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* LinkedIn Card */}
            <Card className="bg-background/10 border-white/10 hover:bg-background/20 transition-all group backdrop-blur-sm cursor-pointer" onClick={() => window.open(personalInfo.social.linkedin, '_blank')}>
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="p-4 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-white/60 text-sm mb-4">Professional Profile</p>
                <span className="text-accent flex items-center gap-2 text-sm font-medium">
                  Connect <ExternalLink className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-background/10 border-white/10 hover:bg-background/20 transition-all group backdrop-blur-sm cursor-pointer" onClick={() => window.location.href = `mailto:${personalInfo.email}`}>
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="p-4 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-white/60 text-sm mb-4 break-all">{personalInfo.email}</p>
                <span className="text-accent flex items-center gap-2 text-sm font-medium">
                  Send Message <ExternalLink className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-background/10 border-white/10 hover:bg-background/20 transition-all group backdrop-blur-sm cursor-pointer" onClick={() => window.location.href = `tel:${personalInfo.phone}`}>
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="p-4 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-white/60 text-sm mb-4">{personalInfo.phone}</p>
                <span className="text-accent flex items-center gap-2 text-sm font-medium">
                  Call Now <ExternalLink className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
