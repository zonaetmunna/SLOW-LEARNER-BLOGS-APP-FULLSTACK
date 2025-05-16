"use client";

import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";

interface ToasterProviderProps {
  children: ReactNode;
}

/**
 * Provider component that wraps the application with the Toaster component
 * This allows toast notifications to be used anywhere in the application
 */
export function ToasterProvider({ children }: ToasterProviderProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
