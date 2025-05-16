"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const notificationsFormSchema = z.object({
  email: z.object({
    newArticles: z.boolean(),
    weeklyDigest: z.boolean(),
    mentions: z.boolean(),
    newFollowers: z.boolean(),
    productUpdates: z.boolean(),
  }),
  push: z.object({
    newArticles: z.boolean(),
    newDiscussions: z.boolean(),
    mentions: z.boolean(),
    newFollowers: z.boolean(),
    upvotes: z.boolean(),
  }),
  browser: z.object({
    newArticles: z.boolean(),
    newDiscussions: z.boolean(),
    mentions: z.boolean(),
  }),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

// This can come from your database or API
const defaultValues: NotificationsFormValues = {
  email: {
    newArticles: true,
    weeklyDigest: true,
    mentions: true,
    newFollowers: false,
    productUpdates: true,
  },
  push: {
    newArticles: false,
    newDiscussions: true,
    mentions: true,
    newFollowers: false,
    upvotes: true,
  },
  browser: {
    newArticles: true,
    newDiscussions: false,
    mentions: true,
  },
};

export default function NotificationsSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationsFormValues) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      toast.success("Notification preferences saved");
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Choose what notifications you receive and how they are delivered
        </p>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Configure email notifications
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="email.newArticles"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Articles</FormLabel>
                    <FormDescription>
                      Get notified when new articles are published from sources
                      you follow
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
              name="email.weeklyDigest"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Weekly Digest</FormLabel>
                    <FormDescription>
                      Receive a weekly email of the best articles and
                      discussions
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
              name="email.mentions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Mentions</FormLabel>
                    <FormDescription>
                      Get notified when someone mentions you in a comment or
                      post
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
              name="email.newFollowers"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Followers</FormLabel>
                    <FormDescription>
                      Get notified when someone follows you
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
              name="email.productUpdates"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Product Updates</FormLabel>
                    <FormDescription>
                      Get notified about new features and improvements
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
              <h4 className="text-base font-medium">Push Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Configure push notifications on mobile devices
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="push.newArticles"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Articles</FormLabel>
                    <FormDescription>
                      Get push notifications for new articles
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
              name="push.newDiscussions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Discussions</FormLabel>
                    <FormDescription>
                      Get push notifications for new discussions
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
              name="push.mentions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Mentions</FormLabel>
                    <FormDescription>
                      Get push notifications when someone mentions you
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
              <h4 className="text-base font-medium">Browser Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Configure browser notifications when using the web app
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="browser.newArticles"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Articles</FormLabel>
                    <FormDescription>
                      Get browser notifications for new articles
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
              name="browser.newDiscussions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New Discussions</FormLabel>
                    <FormDescription>
                      Get browser notifications for new discussions
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
              name="browser.mentions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Mentions</FormLabel>
                    <FormDescription>
                      Get browser notifications when someone mentions you
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

          <div className="flex justify-end">
            <Button
              type="submit"
              className="min-w-[120px]"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save preferences"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
