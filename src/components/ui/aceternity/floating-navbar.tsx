"use client"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCurrency } from "@/lib/context/currency-context"
import { useLanguage } from "@/lib/context/language-context"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { DollarSign, Menu, Palmtree, User } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { useEffect, useState } from "react"

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, availableLanguages, t } = useLanguage()
  const { currency, setCurrency, availableCurrencies } = useCurrency()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto w-fit z-[5000] flex justify-center",
          isScrolled
            ? "bg-background/80 border border-border backdrop-blur-md rounded-full shadow-lg"
            : "bg-transparent",
          className,
        )}
      >
        <div className="flex items-center justify-between px-4 md:px-8 h-16">
          <Link href="/" className="flex items-center gap-2 mr-6">
            <Palmtree className="h-6 w-6" />
            <span className={cn("font-bold text-xl", isScrolled ? "text-foreground" : "text-white")}>
              Paradise Resort
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-6">
            <LanguageSelector 
              className={cn(isScrolled ? "text-foreground" : "text-white")}
              buttonVariant="ghost"
              buttonSize="icon"
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white")}>
                  <DollarSign className="h-5 w-5" />
                  <span className="sr-only">{t("common.currency")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(availableCurrencies).map(([code, curr]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setCurrency(code)}
                    className={cn("flex items-center gap-2", currency === code ? "bg-muted" : "")}
                  >
                    <span>{curr.symbol}</span>
                    <span>{curr.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white")}>
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t("common.profile")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login">{t("common.login")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">{t("common.register")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-bookings">{t("common.my_bookings")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("md:hidden", isScrolled ? "text-foreground" : "text-white")}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="text-base font-medium hover:text-primary flex items-center gap-2"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4" asChild>
                    <Link href="/booking">{t("common.book_now")}</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
