"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." required />
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
