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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { handleSettingsSubmit } from "@/lib/form-helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import * as z from "zod";

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
  fontSize: z.enum(["default", "compact", "comfortable"], {
    required_error: "Please select a font size.",
  }),
  reduceMotion: z.boolean(),
  reduceBrightColors: z.boolean(),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

// This can come from your database or API
const defaultValues: AppearanceFormValues = {
  theme: "system",
  fontSize: "default",
  reduceMotion: false,
  reduceBrightColors: false,
};

export default function AppearanceSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AppearanceFormValues) {
    setIsLoading(true);

    try {
      await handleSettingsSubmit(data, "appearance");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize how the app looks and feels
        </p>
      </div>
      <Separator />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-6"
          >
            <TabsContent value="general" className="space-y-6">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Theme</FormLabel>
                    <FormDescription>
                      Select the theme for the dashboard.
                    </FormDescription>
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 gap-4"
                        >
                          <FormItem>
                            <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                              <FormControl>
                                <RadioGroupItem
                                  value="light"
                                  className="sr-only"
                                />
                              </FormControl>
                              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                                <div className="space-y-2 rounded-sm bg-[#f8fafc] p-2">
                                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-2 w-[80px] rounded-lg bg-[#e4e8ec]" />
                                    <div className="h-2 w-[100px] rounded-lg bg-[#e4e8ec]" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-[#e4e8ec]" />
                                    <div className="h-2 w-[100px] rounded-lg bg-[#e4e8ec]" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-[#e4e8ec]" />
                                    <div className="h-2 w-[100px] rounded-lg bg-[#e4e8ec]" />
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center justify-center gap-1.5 p-1 text-center text-sm font-medium">
                                <FiSun className="h-4 w-4" />
                                Light
                              </span>
                            </FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                              <FormControl>
                                <RadioGroupItem
                                  value="dark"
                                  className="sr-only"
                                />
                              </FormControl>
                              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                    <div className="h-2 w-[80px] rounded-lg bg-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-slate-600" />
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center justify-center gap-1.5 p-1 text-center text-sm font-medium">
                                <FiMoon className="h-4 w-4" />
                                Dark
                              </span>
                            </FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                              <FormControl>
                                <RadioGroupItem
                                  value="system"
                                  className="sr-only"
                                />
                              </FormControl>
                              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                                <div className="space-y-2 rounded-sm bg-gradient-to-br from-[#f8fafc] to-slate-950 p-2">
                                  <div className="space-y-2 rounded-md bg-gradient-to-br from-white to-slate-800 p-2 shadow-sm">
                                    <div className="h-2 w-[80px] rounded-lg bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-gradient-to-br from-white to-slate-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                  </div>
                                  <div className="flex items-center space-x-2 rounded-md bg-gradient-to-br from-white to-slate-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                    <div className="h-2 w-[100px] rounded-lg bg-gradient-to-br from-[#e4e8ec] to-slate-600" />
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center justify-center gap-1.5 p-1 text-center text-sm font-medium">
                                <FiMonitor className="h-4 w-4" />
                                System
                              </span>
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fontSize"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Font Size</FormLabel>
                    <FormDescription>
                      Choose how dense you want the text to be.
                    </FormDescription>
                    <Tabs
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="w-full"
                    >
                      <TabsList className="grid w-full max-w-[400px] grid-cols-3">
                        <TabsTrigger value="compact">Compact</TabsTrigger>
                        <TabsTrigger value="default">Default</TabsTrigger>
                        <TabsTrigger value="comfortable">
                          Comfortable
                        </TabsTrigger>
                      </TabsList>
                      <div className="mt-4 h-32 border rounded-md p-4">
                        <TabsContent value="compact" className="font-sm h-full">
                          <p className="mb-2">This is compact text size.</p>
                          <p>
                            It allows more content to fit on the screen, but
                            might be harder to read for some users.
                          </p>
                        </TabsContent>
                        <TabsContent value="default" className="h-full">
                          <p className="mb-2">This is the default text size.</p>
                          <p>
                            It provides a balanced reading experience for most
                            users.
                          </p>
                        </TabsContent>
                        <TabsContent
                          value="comfortable"
                          className="font-lg h-full"
                        >
                          <p className="mb-2">This is comfortable text size.</p>
                          <p>
                            It&apos;s easier to read but shows less content at
                            once.
                          </p>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-6">
              <div>
                <h4 className="text-base font-medium">Accessibility</h4>
                <p className="text-sm text-muted-foreground">
                  Customize accessibility settings to improve your reading
                  experience
                </p>
              </div>
              <Separator />

              <FormField
                control={form.control}
                name="reduceMotion"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Reduce motion</FormLabel>
                      <FormDescription>
                        Reduce motion in animations across the application
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
                name="reduceBrightColors"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Reduce bright colors
                      </FormLabel>
                      <FormDescription>
                        Soften bright colors to reduce eye strain
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
            </TabsContent>

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
      </Tabs>
    </div>
  );
}
