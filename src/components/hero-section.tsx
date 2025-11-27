import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none">
                John King
              </h1>
              <p className="text-2xl font-medium text-primary">
                Professional Web Developer
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate developer with exceptional skills in creating elegant,
                efficient, and user-friendly web experiences. Specialized in
                JavaScript, Python, and modern front-end frameworks.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
