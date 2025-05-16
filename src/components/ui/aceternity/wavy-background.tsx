"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]
  const waveRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={cn("relative flex flex-col items-center justify-center", containerClassName)} {...props}>
        <div className={cn("relative z-10", className)}>{children}</div>
      </div>
    )
  }

  return (
    <div className={cn("relative flex flex-col items-center justify-center", containerClassName)} {...props}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          ref={waveRef}
          className="absolute inset-0 z-0"
          style={{
            filter: `blur(${blur}px)`,
          }}
        >
          {waveColors.map((color, i) => (
            <WaveSvg key={i} fill={color} opacity={waveOpacity} speed={speed} offset={i * 0.7} width={waveWidth} />
          ))}
        </motion.div>
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

const WaveSvg = ({
  fill,
  opacity,
  speed,
  offset,
  width,
}: {
  fill: string
  opacity: number
  speed: "slow" | "fast"
  offset: number
  width?: number
}) => {
  const baseSpeed = speed === "slow" ? 15 : 8
  const animationDuration = baseSpeed + offset
  const animationDelay = offset

  return (
    <motion.div
      className="absolute inset-0 h-full w-full"
      style={{
        y: offset * 100,
      }}
      animate={{
        y: [offset * 100, offset * -100],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: animationDuration,
        delay: animationDelay,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 1000 1000" className="h-full w-full" style={{ width: width ? `${width}%` : "100%" }}>
        <path
          d="M0,800 C150,700 350,650 500,750 C650,850 850,800 1000,700 V1000 H0 V800 Z"
          fill={fill}
          fillOpacity={opacity}
        />
      </svg>
    </motion.div>
  )
}
