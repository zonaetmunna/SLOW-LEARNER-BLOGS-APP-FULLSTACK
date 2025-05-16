"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export const ShimmerButton = ({
  shimmerColor = "hsl(var(--primary)/0.4)",
  shimmerSize = "0.1em",
  shimmerDuration = "2s",
  borderRadius = "9999px",
  background = "transparent",
  children,
  className,
  containerClassName,
  ...props
}: ShimmerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!buttonRef.current) return
    const updatePosition = (e: MouseEvent) => {
      const rect = buttonRef.current!.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    if (isHovering) {
      buttonRef.current.addEventListener("mousemove", updatePosition)
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", updatePosition)
      }
    }
  }, [isHovering])

  if (!isMounted) {
    return (
      <div className={cn("relative", containerClassName)}>
        <button className={cn("relative", className)} {...props}>
          {children}
        </button>
      </div>
    )
  }

  return (
    <div className={cn("relative p-[1px] overflow-hidden group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          isHovering ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          "transition-all duration-500"
        )}
        style={{
          background,
          borderRadius,
        }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(${shimmerSize} circle at ${position.x}px ${position.y}px, ${shimmerColor}, transparent)`,
            animation: `${shimmerDuration} shimmer infinite`,
          }}
        />
      </div>

      <button
        ref={buttonRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn(
          "relative z-10 border border-primary/20 group-hover:border-primary/50 transition-all duration-500",
          className
        )}
        style={{
          borderRadius,
          background,
        }}
        {...props}
      >
        {children}
      </button>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  )
} 