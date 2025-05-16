"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/context/theme-context";
import {
  Bell,
  CalendarClock,
  ClipboardList,
  CreditCard,
  ExternalLink,
  FileText,
  FireExtinguisherIcon,
  HelpCircle,
  LogOut,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Sparkles,
  Star,
  Sun,
  User,
  UserPlus,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  // Current date to determine which day of the week it is
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.

  // Navigate to wallet page
  const handleWalletClick = () => {
    router.push("/dashboard/wallet"); // Change this path to your actual wallet page path
  };

  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between bg-background border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {/* Left side - Your existing code */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4 mx-2" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5" />
        </Button>
      </div>

      {/* Middle - Search bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="pl-8 h-9"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-muted-foreground">
              <span className="text-xs">Ctrl</span> +{" "}
              <span className="text-xs">K</span>
            </kbd>
          </div>
        </div>
      </div>

      {/* Right side - Sparkle/level indicator, notification, badges and avatar */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="rounded-full bg-green-500 text-white hover:bg-green-600"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          <span className="font-medium">Level Up with Plus</span>
        </Button>

        <Button
          onClick={() => router.push("/dashboard/notifications")}
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
            1
          </span>
        </Button>

        <div className="flex gap-2 items-center">
          {/* Current streak with dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Badge
                variant="outline"
                className="flex gap-1 items-center px-2 py-1 rounded-full border-orange-200 bg-orange-50 text-orange-600 cursor-pointer hover:bg-orange-100"
              >
                <FireExtinguisherIcon className="h-3 w-3 text-orange-500" />
                <span>1</span>
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <div className="p-4 bg-card">
                <div className="flex justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-xs text-muted-foreground">
                      Current streak
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold flex items-center justify-center">
                      6{" "}
                      <Star className="h-4 w-4 ml-1 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Longest streak
                    </div>
                  </div>
                </div>

                {/* Week progress */}
                <div className="flex justify-between mb-2 mt-6">
                  {days.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full mb-1
                          ${
                            index < today
                              ? "bg-pink-500 text-white"
                              : index === today
                              ? "bg-pink-500 text-white relative"
                              : "bg-gray-200 dark:bg-gray-700"
                          }
                        `}
                      >
                        {index === today && (
                          <div className="absolute -bottom-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-pink-500"></div>
                        )}
                      </div>
                      <span className="text-xs">{day}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <div className="text-sm">Total reading days: 125</div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Asia/Dhaka
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">
                      Get notified to keep your streak
                    </div>
                    <div className="w-8 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm" className="px-4">
                      Enable notification
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                    >
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Wallet - clickable to navigate */}
          <Badge
            variant="outline"
            className="flex gap-1 items-center px-2 py-1 rounded-full border-orange-200 bg-orange-50 text-orange-600 cursor-pointer hover:bg-orange-100"
            onClick={handleWalletClick}
          >
            <Wallet className="h-3 w-3 text-orange-500" />
            <span>$100</span>
          </Badge>

          {/* Points */}
          <Badge
            variant="outline"
            className="flex gap-1 items-center px-2 py-1 rounded-full border-purple-200 bg-purple-50 text-purple-600"
          >
            <div className="h-2 w-2 rounded-full bg-purple-400"></div>
            <span>10</span>
          </Badge>
        </div>

        {/* Avatar with dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 border cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <div className="flex items-center justify-start gap-2 p-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-0.5">
                <p className="text-sm font-medium">MD Zonaet munna</p>
                <p className="text-xs text-muted-foreground">@mdzonaetmunna</p>
              </div>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => router.push("/dashboard/settings/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Your profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleWalletClick}>
                <Wallet className="mr-2 h-4 w-4" />
                <span>Core wallet</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/dashboard/settings/devcard")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                <span>DevCard</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuLabel className="font-normal">
              <div className="flex justify-between items-center">
                <span>Theme</span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-background"
                    onClick={() => setTheme("system")}
                  >
                    <div className="h-4 w-4 rounded-full bg-foreground dark:bg-background border-2 border-foreground dark:border-background overflow-hidden">
                      <div className="h-full w-1/2 bg-background dark:bg-foreground"></div>
                    </div>
                  </Button>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings/security")}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings/subscriptions")}
            >
              <CalendarClock className="mr-2 h-4 w-4" />
              <span>Subscriptions</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings/invite")}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite friends</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings/changelog")}
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              <span>Changelog</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings/advertise")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Advertise</span>
              <ExternalLink className="ml-auto h-3 w-3" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Docs</span>
              <ExternalLink className="ml-auto h-3 w-3" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Support</span>
              <ExternalLink className="ml-auto h-3 w-3" />
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-red-500 focus:text-red-500 focus:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
