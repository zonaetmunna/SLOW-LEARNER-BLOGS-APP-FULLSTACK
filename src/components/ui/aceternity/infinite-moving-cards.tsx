"use client"
import { cn } from "@/lib/utils"
import { motion, useAnimationFrame, useInView, useMotionValue, useSpring } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: React.ReactNode[]
  direction?: "left" | "right"
  speed?: "slow" | "medium" | "fast"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(containerRef, { once: false, margin: "-20%" })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const calculateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    calculateWidth()
    window.addEventListener("resize", calculateWidth)
    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [containerRef])

  useEffect(() => {
    if (containerWidth === 0) return

    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return 50
        case "medium":
          return 30
        case "fast":
          return 15
        default:
          return 30
      }
    }

    setDuration(containerWidth / getSpeed())
  }, [containerWidth, speed])

  const x = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 120 }
  const springX = useSpring(x, springConfig)

  useAnimationFrame((time, delta) => {
    if (!isInView || !containerRef.current || !isMounted) return

    const directionMultiplier = direction === "left" ? -1 : 1
    const baseSpeed = directionMultiplier * delta * 0.05

    x.set(x.get() + baseSpeed)

    if (direction === "left" && x.get() < -containerWidth) {
      x.set(0)
    } else if (direction === "right" && x.get() > 0) {
      x.set(-containerWidth)
    }
  })

  if (!isMounted) {
    return (
      <div ref={containerRef} className={cn("flex overflow-hidden relative", className)}>
        <div className="flex gap-4 py-4 min-w-full">
          {items.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[350px] max-w-full">
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={cn("flex overflow-hidden relative", className)}>
      <motion.div
        style={{ x: springX }}
        className="flex gap-4 py-4 min-w-full"
        {...(pauseOnHover && { whileHover: { scale: 0.98 } })}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-[350px] max-w-full">
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`duplicate-${idx}`} className="flex-shrink-0 w-[350px] max-w-full">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
