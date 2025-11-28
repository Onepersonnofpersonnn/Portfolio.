"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_5wir4xq',
      'template_v4gobzg',
      formRef.current,
      'coeCr0ZOBZX6NhOVF'
    ).then(
      () => {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        formRef.current?.reset();
        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: "Error",
          description: `Failed to send message: ${error.text}`,
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
  };
  
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardHeader className="p-6">
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="from_name">Name</Label>
                  <Input id="from_name" name="from_name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="from_email">Email</Label>
                  <Input id="from_email" name="from_email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." required />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
