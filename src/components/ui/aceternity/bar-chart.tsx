"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

interface BarChartItem {
  name: string
  value: number
  color?: string
}

interface BarChartProps {
  data: BarChartItem[]
  className?: string
  barClassName?: string
  showAnimation?: boolean
  showValues?: boolean
  showLabels?: boolean
  maxValue?: number
  height?: number
  color?: string
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  className,
  barClassName,
  showAnimation = true,
  showValues = true,
  showLabels = true,
  maxValue,
  height = 300,
  color = "hsl(var(--primary))"
}) => {
  const [chartData, setChartData] = useState<BarChartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setChartData(data)
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [data])

  // Calculate the maximum value for scaling
  const calculateMaxValue = () => {
    if (maxValue) return maxValue
    return Math.max(...data.map(item => item.value)) * 1.2 // Add 20% padding
  }

  const max = calculateMaxValue()

  return (
    <div className={cn("w-full h-full flex flex-col", className)}>
      <div className="flex-1 flex items-end space-x-2">
        {chartData.map((item, index) => {
          const barHeight = (item.value / max) * 100
          return (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center justify-end h-full"
            >
              <motion.div
                className={cn(
                  "w-full rounded-t-md relative group",
                  barClassName,
                  item.color ? `bg-[${item.color}]` : "bg-primary/90"
                )}
                style={{ 
                  height: showAnimation ? 0 : `${barHeight}%`,
                  backgroundColor: item.color || color 
                }}
                animate={
                  showAnimation && isLoaded
                    ? { height: `${barHeight}%` }
                    : {}
                }
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>

                {/* Value label */}
                {showValues && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium"
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
                  >
                    {item.value}
                  </motion.div>
                )}
              </motion.div>

              {/* Bar label */}
              {showLabels && (
                <motion.div
                  className="text-[10px] sm:text-xs mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-1"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: (index * 0.1) + 0.7 }}
                >
                  {item.name}
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 