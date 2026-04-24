import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/methodology", label: "Methodology" },
  { href: "/track-record", label: "Track Record" },
  { href: "/products", label: "Products" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", isScrolled ? "glass-panel py-3" : "bg-transparent py-5")}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 relative group">
            <div className="relative w-14 h-14 overflow-hidden rounded-lg">
              <img src={`${import.meta.env.BASE_URL}atlas-logo.svg`} alt="Atlas Signals Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-serif font-semibold text-xl tracking-wider text-foreground group-hover:gold-gradient-text transition-all">ATLAS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-primary relative py-1", location === link.href ? "text-primary" : "text-muted-foreground")}>
                {link.label}
                {location === link.href && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/products">
              <Button variant="gold" size="sm" className="rounded-full px-6">Get Access</Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-foreground z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-6 px-6 flex flex-col h-[100dvh] overflow-y-auto">
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                  <Link href={link.href} className={cn("text-2xl font-serif flex items-center justify-between border-b border-border/50 pb-4", location === link.href ? "gold-gradient-text" : "text-foreground")}>
                    {link.label}
                    <ChevronRight size={20} className="text-muted-foreground" />
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col gap-4">
                <Link href="/products"><Button variant="gold" className="w-full h-14 text-lg rounded-xl">Get Access Now</Button></Link>
                <Link href="/track-record"><Button variant="outline" className="w-full h-14 text-lg rounded-xl border-primary/30 text-primary">View Track Record</Button></Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
