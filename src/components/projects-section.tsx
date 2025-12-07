import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work. Each project showcases my ability to deliver
              high-quality, user-centric solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2">
          {projects.map((project) => {
            const image = imageMap.get(project.id);
            return (
              <Card key={project.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  <Link href={project.link} className="block relative h-48 w-full" target="_blank" rel="noopener noreferrer">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </Link>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-1">{project.title}</CardTitle>
                  <CardDescription className="mb-4 h-24">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                   <Button asChild variant="outline">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
