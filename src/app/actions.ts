"use server";

// This file is no longer used for the contact form,
// but is kept in case you want to use server actions for other features.

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.message?.[0] || 'Invalid data provided.',
    };
  }
  
  // This logic is now handled on the client-side with EmailJS
  console.log("Form submission is now handled by EmailJS on the client.");

  return {
    success: true,
    message: `Thank you, ${validatedFields.data.name}! Your message has been sent.`,
  };
}
