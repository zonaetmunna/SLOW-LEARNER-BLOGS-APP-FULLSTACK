"use client"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const Card3D = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring smoothing
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Calculate mouse position relative to card center (in -0.5 to 0.5 range)
    const xValue = (e.clientX - rect.left - width / 2) / width
    const yValue = (e.clientY - rect.top - height / 2) / height
    
    // Update motion values (scale for more subtle effect)
    x.set(xValue * 10)
    y.set(yValue * -10)
  }
  
  // Reset on mouse leave
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Early return for SSR
  if (!isMounted) {
    return (
      <div className={cn("relative", containerClassName)}>
        <div className={cn("group/card rounded-xl bg-transparent", className)}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative perspective-800", containerClassName)} ref={ref}>
      <motion.div
        className={cn("group/card relative rounded-xl bg-transparent transition-all duration-200", className)}
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  )
}
