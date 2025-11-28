import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

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
          <div className="relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-30"></div>
             <Crown className="absolute -top-8 left-1/2 -translate-x-1/2 h-20 w-20 text-accent z-20 animate-float" style={{ animationDuration: '3s' }} />
             <Image
                src="https://i.postimg.cc/LsNs9kPw/c637f55d-08cf-408c-b3e7-f73ec8bfecb4.png"
                alt="John King"
                width={400}
                height={400}
                className="relative z-10 rounded-full object-cover aspect-square shadow-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
