import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loan Services", path: "/services" },
    { name: "Apply", path: "/apply" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🎯 HEADER MODE
  const showTransparent = isHome && !scrolled;

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-100/100 backdrop-blur-md border-b border-blue-100">

    
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
         <Link to="/" className="flex items-center gap-2">
  {/* Icon */}
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400 text-white font-extrabold">
  LZ
</div>


  {/* Brand */}
  <span className="relative text-xl sm:text-xl font-extrabold tracking-wide text-slate-900">
    <span className="text-xl font-extrabold text-slate-800">LoanZa</span>
    <sup className="text-2xs ml-0.5 text-slate-500">®</sup>
  </span>
</Link>


          {/* DESKTOP NAV */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-4 py-2 text-2  ccsm font-medium transition-colors ${
  isActive(link.path)
    ? "bg-accent text-accent-foreground"
    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
}`}

              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Button asChild variant="orange">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
  className={`flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
    showTransparent
      ? "text-slate-900 hover:bg-slate-200/60"
      : "text-slate-900 hover:bg-slate-100"
  }`}
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-label="Toggle menu"
>
  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
</button>

        </div>

        {/* MOBILE NAV */}
        {isMobileMenuOpen && (
          <nav className="border-t border-slate-200 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Button asChild variant="orange" className="w-full">
                  <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
