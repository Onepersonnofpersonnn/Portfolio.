import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my expertise in various web technologies, from
              front-end to back-end.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-float"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-2">
                <CheckCircle className="h-12 w-12 text-accent" />
              </CardHeader>
              <CardContent className="p-2 w-full">
                <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1 mb-3 h-10">{skill.description}</p>
                <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
