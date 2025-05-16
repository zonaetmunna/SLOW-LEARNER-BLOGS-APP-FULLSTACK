"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
  animate?: boolean
  duration?: number
  animationType?: "flow" | "pulse" | "disco"
  fontSize?: string
  fontWeight?: string
}

export const GradientText = ({
  text,
  className,
  gradient = "from-primary via-purple-500 to-blue-500",
  animate = true,
  duration = 3,
  animationType = "flow",
  fontSize = "text-4xl",
  fontWeight = "font-bold",
}: GradientTextProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [gradientAngle, setGradientAngle] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!animate || animationType !== "disco") return

    const interval = setInterval(() => {
      setGradientAngle((prev) => (prev + 15) % 360)
    }, 100)

    return () => clearInterval(interval)
  }, [animate, animationType])

  if (!isMounted) {
    return (
      <span className={cn(fontSize, fontWeight, "text-primary", className)}>
        {text}
      </span>
    )
  }

  // Define animation based on type
  let animation = {}
  let backgroundClassName = ""

  switch (animationType) {
    case "flow":
      animation = {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }
      backgroundClassName = "bg-[length:200%_auto]"
      break
    case "pulse":
      animation = {
        opacity: [0.8, 1, 0.8],
        scale: [0.98, 1, 0.98],
      }
      backgroundClassName = ""
      break
    case "disco":
      backgroundClassName = "transition-all duration-100"
      break
    default:
      backgroundClassName = ""
  }

  return (
    <motion.span
      className={cn(
        fontSize,
        fontWeight,
        "inline-block bg-clip-text text-transparent",
        backgroundClassName,
        !animate && `bg-gradient-to-r ${gradient}`,
        className
      )}
      style={
        animationType === "disco"
          ? {
              background: `linear-gradient(${gradientAngle}deg, var(--primary-color), #a855f7, #3b82f6)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }
          : {}
      }
      animate={animate && animationType !== "disco" ? animation : undefined}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  )
} 