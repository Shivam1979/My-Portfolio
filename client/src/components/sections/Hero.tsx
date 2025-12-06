import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroTaglines, personalInfo } from "@/lib/data";
import { useState, useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_blue_tech_network_background.png";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 mix-blend-overlay dark:mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
            Available for Opportunities
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-6">
            {personalInfo.name}
          </h1>
          
          <div className="h-20 md:h-24 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
              >
                {heroTaglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="min-w-[160px] text-base" asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] text-base" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground">
            {/* Social Links - using placeholders but styled */}
            <a href="#" className="hover:text-accent transition-colors transform hover:scale-110 duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors transform hover:scale-110 duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
