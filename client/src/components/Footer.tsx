import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-foreground/5 py-8 border-t border-border">
      <div className="container px-6 mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Designed & Built with Engineering Precision.
        </p>
      </div>
    </footer>
  );
}
