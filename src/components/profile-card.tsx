import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const profileImage = PlaceHolderImages.find(p => p.id === 'anabel-profile');

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <Image
        src={profileImage?.imageUrl || "https://picsum.photos/seed/anabel/160/160"}
        alt={profileImage?.description || "Foto de Anabel Chura Triviño"}
        width={160}
        height={160}
        className="rounded-full border-4 border-card shadow-lg"
        data-ai-hint={profileImage?.imageHint}
        priority
      />
      <h1 className="mt-6 text-3xl font-bold font-headline tracking-tight text-foreground">
        Anabel Chura Triviño
      </h1>
      <h2 className="mt-2 text-base font-medium text-primary">
        Scrum Master • QA • Ex-Developer
      </h2>
      <p className="mt-4 max-w-xs text-muted-foreground">
        Liderazgo ágil con enfoque corporativo, soporte en QA y experiencia previa en desarrollo .NET.
      </p>

      <nav className="mt-8 hidden lg:block">
        <ul className="space-y-3">
          <li>
            <Link href="#about" className="group flex items-center gap-3 font-medium text-muted-foreground hover:text-primary">
              <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary"></span>
              <span className="tracking-wide">Sobre mí</span>
            </Link>
          </li>
          <li>
            <Link href="#experience" className="group flex items-center gap-3 font-medium text-muted-foreground hover:text-primary">
              <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary"></span>
              <span className="tracking-wide">Experiencia</span>
            </Link>
          </li>
          <li>
            <Link href="#blog" className="group flex items-center gap-3 font-medium text-muted-foreground hover:text-primary">
              <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary"></span>
              <span className="tracking-wide">Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="mt-8 flex items-center gap-4">
        <a href="mailto:anabelchtr@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/anabel-chura-trivino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
        </a>
        <a href="https://github.com/anabelchura" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
        </a>
      </div>

       <a href="#contact" className="w-full lg:w-auto mt-8">
        <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Contáctame
        </Button>
      </a>

    </div>
  );
}
