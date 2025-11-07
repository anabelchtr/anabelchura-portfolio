import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
            Contact
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">Open to opportunities as Scrum Master, QA Engineer, or Developer with a strong technical foundation.</p>
                <a href="mailto:anabelchtr@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>anabelchtr@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/anabel-chura-trivino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span>/in/anabel-chura-tr</span>
                </a>
                <a href="https://github.com/anabelchura" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                    <span>@anabelchura</span>
                </a>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">Aditional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Location:</strong> Santa Cruz, Bolivia</p>
                <p><strong>Idioms:</strong> Spanish (native), English (B2 Upper-Intermediate)</p>
                <p><strong>Availability:</strong> Remote o hibrid</p>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
