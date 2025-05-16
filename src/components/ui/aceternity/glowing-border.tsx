"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface GlowingBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  glowColor?: string
  borderRadius?: string
  borderWidth?: string
  animationDuration?: number
  glowOpacity?: number
  hoverEffect?: boolean
  glowSize?: string
}

export const GlowingBorder = ({
  children,
  className,
  containerClassName,
  glowColor = "hsl(var(--primary)/0.6)",
  borderRadius = "0.75rem",
  borderWidth = "2px",
  animationDuration = 2,
  glowOpacity = 0.5,
  hoverEffect = true,
  glowSize = "10px",
}: GlowingBorderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !hoverEffect) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovering, hoverEffect])

  if (!isMounted) {
    return (
      <div className={cn("relative", containerClassName)}>
        <div
          style={{ borderRadius }}
          className={cn("relative border", className)}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-inherit z-0"
        style={{
          borderRadius,
          background: hoverEffect
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent ${glowSize})`
            : `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          backgroundSize: hoverEffect ? "auto" : "200% 100%",
          opacity: isHovering || !hoverEffect ? glowOpacity : 0,
        }}
        animate={!hoverEffect ? { backgroundPosition: ["0% 0%", "200% 0%"] } : undefined}
        transition={!hoverEffect
          ? {
              backgroundPosition: {
                duration: animationDuration,
                repeat: Infinity,
                ease: "linear",
              },
            }
          : { opacity: { duration: 0.3 } }}
      />

      {/* Content */}
      <div
        style={{ borderRadius, borderWidth }}
        className={cn(
          "relative z-10 border border-border bg-background transition-colors duration-300",
          isHovering && "border-primary/50",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
} 