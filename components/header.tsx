"use client"

import * as React from "react"
import Link from "next/link"
import { Menu} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#learning-paths", label: "Learning Paths" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200",
        isScrolled && "shadow-sm"
      )}
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md"
          aria-label="Pathwise - Go to homepage"
        >
          <span className="text-xl sm:text-2xl font-bold text-primary">Pathwise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Sign Up Button */}
        <div className="hidden md:flex">
          <Button asChild>
            <Link 
              href="/signup"
              aria-label="Sign up for Pathwise account"
            >
              Sign Up
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] sm:w-[320px]"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-4 mt-8" id="mobile-navigation">
              <Link
                href="/"
                className="flex items-center space-x-2 mb-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Pathwise - Go to homepage"
              >
                <span className="text-2xl font-bold text-primary">Pathwise</span>
              </Link>
              
              <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-4 border-t">
                <Button asChild className="w-full">
                  <Link 
                    href="/signup" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Sign up for Pathwise account"
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
} 