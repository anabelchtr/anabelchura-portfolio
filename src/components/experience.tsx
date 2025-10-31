import { Badge } from "@/components/ui/badge";

const experienceData = [
    {
        company: "Newshore by FLYR",
        role: "Scrum Master",
        tags: "Aerolíneas (cliente Avianca)",
        period: "2022 – 2025",
        description: "Liderazgo de 2 equipos ágiles distribuidos, facilitación de ceremonias, gestión de stakeholders y adopción de métricas ágiles. Prácticas de Management 3.0 para promover ownership y seguridad psicológica.",
        stack: ".NET 6, Angular, Azure DevOps, Jira, Miro, Power BI, Looker"
    },
    {
        company: "Inforfactory SRL",
        role: "QA Engineer / .NET Developer / Scrum Master interno",
        tags: "Migración y estabilidad de plataformas",
        period: "2017 – 2022",
        description: "Migración de aplicaciones a .NET Core + Angular, estabilización de releases, diseño y ejecución de pruebas (funcional, regresión) y coordinación de integraciones. Reorganización de equipo con foco en mejora continua.",
        stack: ".NET Core, Angular, RabbitMQ, TeamCity, Azure, Git, Postman"
    },
    {
        company: "Tismart",
        role: "Developer & Team Lead",
        tags: "Portales web y backoffice",
        period: "2015 – 2016",
        description: "Renovación de portales (Infocenter, Banco Mercantil, DATEC), definición de arquitectura MVC y servicios REST, liderazgo de integraciones web–móvil y asignación de tareas.",
        stack: "ASP.NET MVC, Web Services, SQL Server"
    },
    {
        company: "Cya Consultores",
        role: "Developer",
        tags: "Sistemas de asistencia",
        period: "2014 – 2015",
        description: "Desarrollo de sistemas de asistencia y control de personal para pymes.",
        stack: "VB.NET, SQL Server"
    },
    {
        company: "Tribunal Electoral Departamental",
        role: "Developer",
        tags: "Sistemas administrativos",
        period: "2016",
        description: "Desarrollo de sistemas internos de control y gestión administrativa.",
        stack: "VB.NET"
    }
];

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experiencia
        </h2>
      </div>
      <p className="text-muted-foreground mb-8">Evolución de roles (Dev → QA → Scrum Master) y proyectos por empresa.</p>
      
      <ol className="relative border-l border-border space-y-8">
        {experienceData.map((item, index) => (
          <li key={index} className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 ring-8 ring-background">
                <span className="h-3 w-3 rounded-full bg-primary" />
            </span>
            <div className="p-4 bg-card rounded-lg border">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.company} — <span className="font-normal">{item.role}</span></h3>
                    <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{item.period}</p>
                </div>
                <Badge variant="outline" className="mb-3">{item.tags}</Badge>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-xs text-muted-foreground"><strong>Stack/Tools:</strong> {item.stack}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
