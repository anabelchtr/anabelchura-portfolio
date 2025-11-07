import { Badge } from "@/components/ui/badge";

const experienceData = [
    {
        company: "Newshore by FLYR",
        role: "Scrum Master",
        tags: "Airlines (Avianca client)",
        period: "2022 – 2025",
        description: "Led two distributed agile teams, facilitated Scrum ceremonies, managed stakeholder expectations, and implemented agile metrics. Applied Management 3.0 practices to foster ownership, collaboration, and psychological safety.",
        stack: ".NET 6, Angular, Azure DevOps, Jira, Miro, Power BI, Looker"
    },
    {
        company: "Inforfactory SRL",
        role: "QA Engineer / .NET Developer / Internal Scrum Master",
        tags: "Platform migration and stability",
        period: "2017 – 2022",
        description: "Migrated applications to .NET Core + Angular, stabilized releases, designed and executed functional and regression testing, and coordinated integrations. Reorganized the team with a focus on continuous improvement.",
        stack: ".NET Core, Angular, RabbitMQ, TeamCity, Azure, Git, Postman"
    },
    {
        company: "Tismart",
        role: "Developer & Team Lead",
        tags: "Web portals and back-office systems",
        period: "2015 – 2016",
        description: "Redesigned corporate portals (Infocenter, Banco Mercantil, DATEC), defined MVC architecture and REST services, led web–mobile integrations, and managed task assignments.",
        stack: "ASP.NET MVC, Web Services, SQL Server"
    },
    {
        company: "Cya Consultores",
        role: "Developer",
        tags: "Attendance management systems",
        period: "2014 – 2015",
        description: "Developed attendance and personnel control systems for SMEs.",
        stack: "VB.NET, SQL Server"
    },
    {
        company: "Departmental Electoral Court",
        role: "Developer",
        tags: "Administrative systems",
        period: "2016",
        description: "Developed internal systems for administrative management and process tracking.",
        stack: "VB.NET"
    }
];

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <p className="text-muted-foreground mb-8">Career progression (Dev → QA → Scrum Master) and projects by company.</p>
      
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
