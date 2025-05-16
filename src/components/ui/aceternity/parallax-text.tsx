"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface ParallaxTextProps {
  children: React.ReactNode | string
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  overflow?: boolean
}

export const ParallaxText = ({
  children,
  className,
  speed = 0.5,
  direction = "up",
  overflow = false,
}: ParallaxTextProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transformation values based on direction
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [0, -50 * speed] : direction === "right" ? [0, 50 * speed] : [0, 0]
  )

  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [0, -50 * speed] : direction === "down" ? [0, 50 * speed] : [0, 0]
  )

  if (!isMounted) {
    return (
      <div
        ref={ref}
        className={cn(overflow ? "overflow-visible" : "overflow-hidden", className)}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(overflow ? "overflow-visible" : "overflow-hidden", className)}
    >
      <motion.div
        style={{
          x: xTransform,
          y: yTransform,
        }}
        transition={{ type: "spring", damping: 15 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
} 