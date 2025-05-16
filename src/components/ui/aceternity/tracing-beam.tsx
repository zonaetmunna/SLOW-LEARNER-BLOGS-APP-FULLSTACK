"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && ref.current) {
      const handleScroll = () => {
        const { y } = ref.current!.getBoundingClientRect()
        setPosition({ x: 0, y })
      }
      handleScroll()
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMounted])

  // Don't render the beam during SSR
  if (!isMounted) return <div className={cn("relative", className)}>{children}</div>

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        style={{
          translateY: position.y >= 0 ? 0 : position.y,
          height: position.y >= 0 ? "100%" : `calc(100% - ${position.y}px)`,
        }}
      />
      <motion.div
        className="absolute left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
        animate={{
          top: [0, 300, 1000],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
} 