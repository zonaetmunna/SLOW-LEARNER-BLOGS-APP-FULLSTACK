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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase, lowercase, number and special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const securityFormSchema = z.object({
  twoFactorAuth: z.boolean(),
  emailNotifications: z.boolean(),
  sessionTimeout: z.boolean(),
});

type PasswordFormValues = z.infer<typeof passwordFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;

// This can come from your database or API
const securityDefaultValues: SecurityFormValues = {
  twoFactorAuth: false,
  emailNotifications: true,
  sessionTimeout: false,
};

export default function SettingsSecurityPage() {
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [securityLoading, setSecurityLoading] = useState(false);

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: securityDefaultValues,
  });

  function onPasswordSubmit(data: PasswordFormValues) {
    setPasswordLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setPasswordLoading(false);
      toast.success("Password updated successfully");
      passwordForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }, 1000);
  }

  function onSecuritySubmit(data: SecurityFormValues) {
    setSecurityLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setSecurityLoading(false);
      toast.success("Security settings updated");
    }, 1000);
  }

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your password and security settings
        </p>
      </div>

      <div className="space-y-6">
        <h4 className="text-base font-medium">Change Password</h4>
        <Separator />

        <Form {...passwordForm}>
          <form
            onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
            className="space-y-8"
          >
            <FormField
              control={passwordForm.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={passwordForm.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      autoComplete="new-password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 8 characters and include
                    uppercase, lowercase, number, and special character.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={passwordForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      autoComplete="new-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                className="min-w-[120px]"
                disabled={passwordLoading}
              >
                {passwordLoading ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="space-y-6">
        <h4 className="text-base font-medium">Security Settings</h4>
        <Separator />

        <Form {...securityForm}>
          <form
            onSubmit={securityForm.handleSubmit(onSecuritySubmit)}
            className="space-y-8"
          >
            <FormField
              control={securityForm.control}
              name="twoFactorAuth"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Two-Factor Authentication
                    </FormLabel>
                    <FormDescription>
                      Add an extra layer of security to your account
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
              control={securityForm.control}
              name="emailNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Security Notifications
                    </FormLabel>
                    <FormDescription>
                      Receive email notifications about security events
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
              control={securityForm.control}
              name="sessionTimeout"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Auto Logout</FormLabel>
                    <FormDescription>
                      Automatically log out after 1 hour of inactivity
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

            <div className="flex justify-end">
              <Button
                type="submit"
                className="min-w-[120px]"
                disabled={securityLoading}
              >
                {securityLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
