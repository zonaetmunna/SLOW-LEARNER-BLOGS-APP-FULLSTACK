"use client"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type React from "react"
import { useEffect, useState } from "react"

export const Spotlight = ({
  children,
  className,
  fill = "white",
}: {
  children: React.ReactNode
  className?: string
  fill?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isMounted, setIsMounted] = useState(false)
  
  const gradientBackground = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      ${fill} 0%,
      transparent 80%
    )
  `

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  if (!isMounted) {
    return <div className={cn("relative", className)}>{children}</div>
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: gradientBackground,
        }}
      />
      {children}
    </div>
  )
}
