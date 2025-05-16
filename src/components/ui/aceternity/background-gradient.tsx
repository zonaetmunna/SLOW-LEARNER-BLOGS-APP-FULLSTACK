"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children: ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-[22px] z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          animate ? "bg-gradient-to-r from-primary/80 to-secondary/80 animate-pulse" : "bg-gradient-to-r from-primary/50 to-secondary/50",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[22px] z-[2]",
          animate ? "bg-gradient-to-r from-primary to-secondary group-hover:opacity-90 transition duration-500" : "bg-gradient-to-r from-primary/80 to-secondary/80"
        )}
      />
      <div className={cn("rounded-[20px] relative z-[3]", className)}>
        {children}
      </div>
    </div>
  )
} 