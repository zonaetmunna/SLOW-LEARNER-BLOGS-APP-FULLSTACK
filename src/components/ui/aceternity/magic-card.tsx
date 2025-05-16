"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export const MagicCard = ({
  children,
  className,
  cardClassName,
}: {
  children: React.ReactNode
  className?: string
  cardClassName?: string
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()

    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(var(--card-rgb), 0.15),
    transparent 80%
  )`

  if (!isMounted) {
    return (
      <div className={cn("relative", className)}>
        <div className={cn("rounded-xl border border-border", cardClassName)}>{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn("relative", className)}
      style={
        {
          "--card-rgb": "14, 165, 233",
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ background }}
      />
      <div className={cn("rounded-xl border border-border relative z-10", cardClassName)}>{children}</div>
    </div>
  )
}
