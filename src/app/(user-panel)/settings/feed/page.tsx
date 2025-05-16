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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const feedFormSchema = z.object({
  contentAlgorithm: z.enum(["personalized", "chronological", "popular"], {
    required_error: "Please select how content should be sorted.",
  }),
  hideReadArticles: z.boolean().default(false),
  minReadTime: z.enum(["all", "1min", "3min", "5min", "10min"], {
    required_error: "Please select minimum read time.",
  }),
  showBookmarks: z.boolean().default(true),
  showMyNetwork: z.boolean().default(true),
  showCommentActivity: z.boolean().default(true),
  showRelatedArticles: z.boolean().default(true),
  enablePushNotifications: z.boolean().default(true),
});

type FeedFormValues = z.infer<typeof feedFormSchema>;

// This can come from your database or API
const defaultValues: FeedFormValues = {
  contentAlgorithm: "personalized",
  hideReadArticles: false,
  minReadTime: "all",
  showBookmarks: true,
  showMyNetwork: true,
  showCommentActivity: true,
  showRelatedArticles: true,
  enablePushNotifications: true,
};

export default function FeedSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FeedFormValues>({
    resolver: zodResolver(feedFormSchema),
    defaultValues,
  });

  function onSubmit(data: FeedFormValues) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      toast.success("Feed settings saved");
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Feed Settings</h3>
        <p className="text-sm text-muted-foreground">
          Customize how content appears in your feed
        </p>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium">Content Preferences</h4>
              <p className="text-sm text-muted-foreground">
                Control what content appears in your feed
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="contentAlgorithm"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Feed Algorithm</FormLabel>
                  <FormDescription>
                    Choose how posts should be ordered in your feed
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="personalized" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Personalized - Show content based on your interests
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="chronological" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Chronological - Show newest content first
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="popular" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Popular - Show most popular content first
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
              name="minReadTime"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Minimum Read Time</FormLabel>
                  <FormDescription>
                    Filter articles by estimated read time
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All articles
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1min" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          At least 1 minute
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="3min" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          At least 3 minutes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="5min" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          At least 5 minutes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="10min" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          At least 10 minutes
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
              name="hideReadArticles"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Hide Read Articles
                    </FormLabel>
                    <FormDescription>
                      Don&apos;t show articles you&apos;ve already read
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
              <h4 className="text-base font-medium">Feed Components</h4>
              <p className="text-sm text-muted-foreground">
                Control which components appear in your feed
              </p>
            </div>
            <Separator />

            <FormField
              control={form.control}
              name="showBookmarks"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Bookmarks Section
                    </FormLabel>
                    <FormDescription>
                      Show bookmarked articles section on home page
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
              name="showMyNetwork"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Network Activity
                    </FormLabel>
                    <FormDescription>
                      Show content from your network in the feed
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
              name="showCommentActivity"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Comment Activity
                    </FormLabel>
                    <FormDescription>
                      Show comments and discussions in the feed
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
              name="showRelatedArticles"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Related Articles
                    </FormLabel>
                    <FormDescription>
                      Show related article suggestions in your feed
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
              name="enablePushNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Push Notifications
                    </FormLabel>
                    <FormDescription>
                      Receive notifications for important feed updates
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
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
