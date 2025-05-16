"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const MovingCards = ({
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
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 40
      case "medium":
        return 20
      case "fast":
        return 10
      default:
        return 20
    }
  }

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem)
      })
      setStart(true)
    }
  }

  const directionValue = direction === "left" ? "-" : "+"

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}>
      <motion.ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={
          {
            "--animation-duration": `${scrollerRef.current ? scrollerRef.current.children.length * getSpeed() : 0}s`,
            "--animation-direction": `${directionValue}`,
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <li key={idx} className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0">
            {item}
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
