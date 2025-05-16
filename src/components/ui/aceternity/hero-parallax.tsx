"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const HeroParallax = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  image,
  className,
}: {
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  image: string
  className?: string
}) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 }

  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.3]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.9]), springConfig)

  return (
    <div ref={ref} className={cn("relative h-screen w-full overflow-hidden", className)}>
      <motion.div
        style={{
          scale,
          opacity,
          y: translateY,
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />

      <div className="relative z-20 flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container flex flex-col items-center justify-center text-center p-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {primaryAction && (
              <Button size="lg" asChild>
                <Link href={primaryAction.href}>{primaryAction.text}</Link>
              </Button>
            )}
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-white hover:bg-white/30"
                asChild
              >
                <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
