import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
    {
        title: "What being a Scrum Master truly means?",
        description: "Soon..",
        link: "#"
    },
    {
        title: "From Developer to Scrum Master: the power of a technical mindset",
        description: "Soon..",
        link: "#"
    },
    {
        title: "Agile Metrics",
        description: "..",
        link: "#"
    }
];

export function Blog() {
    return (
        <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                    Blog
                </h2>
            </div>
            <p className="text-muted-foreground mb-8">Publications..</p>
            
            <div className="grid grid-cols-1 gap-6">
                {blogPosts.map((post, index) => (
                    <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">{post.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" asChild>
                                <a href={post.link}>Read</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
                Tip: soon to be replaced
            </p>
        </section>
    );
}
