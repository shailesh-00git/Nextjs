"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { CreateContact } from "@/actions";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // gather data from the form element
    const form = e.currentTarget;
    const formData = new FormData(form);

    // call the action and await result
    const result = await CreateContact(formData);

    if (result.success) {
      // donot forget to remove it
      console.log(result);
      setMessage("Message sent successfully!");
      form.reset();
    } else {
      setMessage(result.error || "something went wrong");
    }
    setIsSubmitting(false);
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Contact us</CardTitle>
      </CardHeader>

      <CardContent>
        {message && (
          <div
            className={`p-3 mb-4 rounded-lg ${message.includes("success") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"} `}
          >
            {message}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full"
          id="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              name="subject"
              id="subject"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              disabled={isSubmitting}
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
