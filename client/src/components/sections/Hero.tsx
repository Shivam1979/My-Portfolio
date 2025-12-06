import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Cpu, Network, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroTaglines, personalInfo } from "@/lib/data";
import { useState, useEffect } from "react";

const targetRoles = [
  "SDET",
  "Test Automation Engineer",
  "QA Automation Engineer",
  "Automation Test Engineer"
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 perspective-1000">
      
      {/* 3D Background Grid & AI Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Floor with 3D perspective */}
        <div className="absolute inset-0 bg-grid-pattern [transform:rotateX(60deg)_translateY(-100px)_scale(2)] opacity-20 dark:opacity-30 origin-top" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center preserve-3d">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col items-center"
        >
          {/* AI/Tech Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md"
          >
            <Cpu className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              System Online // Ready to Automate
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight text-foreground mb-4 relative">
            <span className="block text-glow">{personalInfo.name}</span>
          </h1>
          
          <div className="h-20 md:h-16 mb-8 flex items-center justify-center w-full">
             <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                className="text-xl md:text-2xl text-muted-foreground font-mono"
              >
                {heroTaglines[taglineIndex]}
              </motion.p>
          </div>

          {/* Target Roles Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl">
            {targetRoles.map((role, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="bg-background/50 backdrop-blur border-accent/30 text-foreground hover:border-accent hover:text-accent transition-all duration-300"
              >
                {role}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Button size="lg" className="min-w-[160px] text-base font-bold shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)] transition-all" asChild>
              <a href="#projects">
                <Network className="w-4 h-4 mr-2" />
                Analyze Work
              </a>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] text-base hover:bg-accent/10 hover:text-accent border-foreground/20" asChild>
              <a href="#contact">Initialize Contact</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 text-muted-foreground">
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors">
                  <Github className="w-6 h-6 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Github</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-6 h-6 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
