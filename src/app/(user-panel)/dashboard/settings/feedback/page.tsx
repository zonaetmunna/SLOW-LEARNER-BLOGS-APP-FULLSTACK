"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const feedbackFormSchema = z.object({
  feedbackType: z.enum(["suggestion", "bug", "content", "other"], {
    required_error: "Please select a feedback type.",
  }),
  feedbackArea: z.enum(["ui", "content", "performance", "features", "other"], {
    required_error: "Please select the area of feedback.",
  }),
  satisfaction: z.enum(
    [
      "verySatisfied",
      "satisfied",
      "neutral",
      "dissatisfied",
      "veryDissatisfied",
    ],
    {
      required_error: "Please rate your satisfaction.",
    }
  ),
  feedbackContent: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
  contactConsent: z.boolean().default(false),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

// This can come from your database or API
const defaultValues: FeedbackFormValues = {
  feedbackType: "suggestion",
  feedbackArea: "features",
  satisfaction: "neutral",
  feedbackContent: "",
  contactConsent: false,
};

export default function FeedbackPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues,
  });

  function onSubmit(data: FeedbackFormValues) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Feedback submitted successfully");
      form.reset(defaultValues);
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Feedback</h3>
        <p className="text-sm text-muted-foreground">
          Share your thoughts to help us improve
        </p>
      </div>
      <Separator />

      {isSubmitted ? (
        <div className="bg-primary/10 p-6 rounded-lg text-center">
          <h4 className="text-lg font-medium mb-2">
            Thank you for your feedback!
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            We appreciate your input and will use it to improve our platform.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit another feedback
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium">Feedback Details</h4>
                <p className="text-sm text-muted-foreground">
                  Tell us what&apos;s on your mind
                </p>
              </div>
              <Separator />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="feedbackType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select feedback type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="content">
                            Content Feedback
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        What kind of feedback are you providing?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="feedbackArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback Area</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ui">User Interface</SelectItem>
                          <SelectItem value="content">
                            Content Quality
                          </SelectItem>
                          <SelectItem value="performance">
                            Performance
                          </SelectItem>
                          <SelectItem value="features">Features</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Which area of our platform does this relate to?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="satisfaction"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Overall Satisfaction</FormLabel>
                    <FormDescription>
                      How satisfied are you with our platform?
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="veryDissatisfied" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Very Dissatisfied
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="dissatisfied" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Dissatisfied
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="neutral" />
                          </FormControl>
                          <FormLabel className="font-normal">Neutral</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="satisfied" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Satisfied
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="verySatisfied" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Very Satisfied
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="feedbackContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please share your thoughts, ideas, or issues..."
                        className="resize-none h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Be as specific as possible to help us understand.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Contact permission</FormLabel>
                      <FormDescription>
                        Allow us to contact you for further details about your
                        feedback if needed.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="min-w-[120px]"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Feedback"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
