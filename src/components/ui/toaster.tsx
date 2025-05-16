"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group p-4 font-sans flex border text-sm rounded-lg shadow-lg items-center gap-3 bg-background border-border",
          title: "font-medium",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-foreground",
          error: "border-red-500 text-red-500",
          success: "border-green-500 text-green-500",
          warning: "border-yellow-500 text-yellow-500",
        },
      }}
    />
  );
}
