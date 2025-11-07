import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About Me
        </h2>
      </div>

      <div className="space-y-8">
        <p className="text-muted-foreground">
          Technology professional with over 9 years of experience combining software development, quality assurance, and agile leadership. Currently performing as a <strong>Scrum Master with a strong technical background</strong>, supporting distributed teams in delivering value and achieving continuous improvement.
        </p>
        <p className="text-muted-foreground">
          background as a <strong>.NET, Angular, and SQL Server developer</strong> allows me to understand technical challenges and translate them into effective collaboration practices, agile metrics, and result-oriented outcomes.
        </p>

        <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Scrum • Kanban • SAFe</Badge>
            <Badge variant="secondary">Metrics: Velocity, Burndown, Cycle Time</Badge>
            <Badge variant="secondary">Management 3.0</Badge>
            <Badge variant="secondary">Jira • Azure DevOps • Miro • Power BI</Badge>
            <Badge variant="secondary">.NET • Angular • SQL Server</Badge>
            <Badge variant="secondary">API Testing (Postman)</Badge>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Skills & Roles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="role-card">
              <h4 className="font-bold text-foreground">🟩 Scrum Master / Agile Leadership</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Facilitation of Scrum ceremonies and effective retrospectives</li>
                <li>Implementation of agile metrics (Velocity, Burndown, Cycle Time)</li>
                <li>Management 3.0 practices: Moving Motivators, Delegation Poker, Celebration Grid</li>
                <li>Coaching teams towards continuous improvement and psychological safety</li>
                <li>Executive communication with stakeholders</li>
              </ul>
            </div>
            <div className="role-card">
              <h4 className="font-bold text-foreground">🟨 QA Engineer / Quality Advocate</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Design and execution of tests (Functional, Regression, Smoke, Sanity)</li>
                <li>Exploratory testing and UAT support</li>
                <li>API testing using Postman; defect reporting in Jira/Azure DevOps</li>
                <li>Initial automation with Selenium / Postman scripts</li>
              </ul>
            </div>
            <div className="role-card">
              <h4 className="font-bold text-foreground">🟦 Developer / Technical Background</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>C#, ASP.NET, .NET Core, MVC, Angular, SQL Server</li>
                <li>Onion Architecture, SOLID principles, RESTful APIs</li>
                <li>HTML5, CSS3, JavaScript, jQuery</li>
                <li>GitLab/GitFlow, TeamCity, Azure DevOps</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Certificaciones</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2 text-sm">
                    <p>Scrum Master Professional Certificate (SMPC) · Scrum Foundation Professional Certificate(CertiProf)</p>
                    <p>Informatics Engineering · Licentiate degree (U.A.G.R.M)</p>
                    <p>Diploma in Software Project Management (U.A.G.R.M)</p>
                    <p>Diploma en Business Intelligence Gerencial (UPB)</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Herramientas</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                    <p>Jira · Confluence · Azure DevOps · GitLab · Miro · Power BI · Looker · Visual Studio · Postman</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
