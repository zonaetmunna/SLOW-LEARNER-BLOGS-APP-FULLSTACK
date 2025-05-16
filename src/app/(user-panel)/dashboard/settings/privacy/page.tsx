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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { handleSettingsSubmit } from "@/lib/form-helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const privacyFormSchema = z.object({
  profileVisibility: z.enum(["public", "followers", "private"], {
    required_error: "Please select profile visibility.",
  }),
  readingHistory: z.boolean(),
  activityVisibility: z.boolean(),
  dataCollection: z.boolean(),
  analyticsConsent: z.boolean(),
  cookiePreferences: z.enum(["essential", "functional", "all"], {
    required_error: "Please select cookie preferences.",
  }),
});

type PrivacyFormValues = z.infer<typeof privacyFormSchema>;

// This can come from your database or API
const defaultValues: PrivacyFormValues = {
  profileVisibility: "public",
  readingHistory: true,
  activityVisibility: true,
  dataCollection: true,
  analyticsConsent: true,
  cookiePreferences: "all",
};

export default function PrivacySettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacyFormSchema),
    defaultValues,
  });

  async function onSubmit(data: PrivacyFormValues) {
    setIsLoading(true);

    try {
      await handleSettingsSubmit(data, "privacy");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Privacy</h3>
        <p className="text-sm text-muted-foreground">
          Manage your privacy settings and control how your data is used
        </p>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Profile Privacy</h4>
              <p className="text-sm text-muted-foreground">
                Control who can see your profile and content
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="profileVisibility"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Profile Visibility</FormLabel>
                  <FormDescription>
                    Who can see your profile information
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="public" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Public - Anyone can view your profile
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="followers" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Followers only - Only users who follow you can view
                          your profile
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="private" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Private - Only you can view your profile
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
              name="activityVisibility"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Activity Visibility
                    </FormLabel>
                    <FormDescription>
                      Allow others to see your activity on posts and comments
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Data Privacy</h4>
              <p className="text-sm text-muted-foreground">
                Control how your data is stored and used
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="readingHistory"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Save Reading History
                    </FormLabel>
                    <FormDescription>
                      Save your reading history to improve recommendations
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataCollection"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Data Collection</FormLabel>
                    <FormDescription>
                      Allow collection of usage data to improve our services
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="analyticsConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Analytics Consent
                    </FormLabel>
                    <FormDescription>
                      Allow us to use analytics cookies to understand site usage
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Cookie Preferences</h4>
              <p className="text-sm text-muted-foreground">
                Manage which cookies you allow us to use
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="cookiePreferences"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Cookie Settings</FormLabel>
                  <FormDescription>
                    Choose which types of cookies you accept
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="essential" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Essential only - Only cookies required for the site to
                          function
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="functional" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Functional - Cookies for site functionality and
                          preferences
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All cookies - Including analytics and advertising
                          cookies
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Your Data</h4>
              <p className="text-sm text-muted-foreground">
                Manage and export your data
              </p>
            </div>
            <Separator />

            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-medium">Download your data</h5>
                <p className="text-sm text-muted-foreground">
                  Get a copy of all the data we have about you
                </p>
              </div>
              <Button variant="outline">Request data</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-medium">Delete account</h5>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive">Delete account</Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="min-w-[120px]"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
