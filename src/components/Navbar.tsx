import React, { useState, useEffect } from "react";
import { PORTFOLIO_OWNER } from "../data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section check based on scroll height
      const sections = ["hero", "work", "about", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPos = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "work", label: "WORK" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" }
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-[#262626] py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans font-medium text-sm tracking-[0.2em] text-white hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer lowercase"
        >
          zuzanna woźniczka
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-[11px] tracking-[0.25em] font-sans lowercase group cursor-pointer"
            >
              <span className="flex items-center gap-2 py-2">
                <span
                  className={`w-1 h-1 rounded-full bg-[#FF6B6B] transition-all duration-300 ${
                    activeSection === item.id ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60"
                  }`}
                />
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === item.id ? "text-white font-medium" : "text-[#8e8e93] hover:text-white"
                  }`}
                >
                  {item.id === "work" ? "selection" : item.id === "contact" ? "enquire" : item.id}
                </span>
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4 group cursor-pointer z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
              mobileMenuOpen ? "rotate-45 translate-y-[2px]" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[2px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-[#0A0A0A] z-40 flex flex-col justify-center px-10 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 text-left mt-[-10vh]">
          <p className="font-mono text-xs text-[#8e8e93] tracking-[0.3em] uppercase mb-4">
            Navigation Menu
          </p>
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display font-bold text-4xl tracking-tight text-left text-white hover:text-[#FF6B6B] transition-all duration-300 flex items-center gap-4 group"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <span className="text-[#FF6B6B] font-mono text-sm">0{index + 1}.</span>
              <span>{item.label}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          ))}
        </div>
        <div className="absolute bottom-12 left-10 flex flex-col gap-2">
          <p className="font-mono text-xs text-[#8e8e93]">LOCATION</p>
          <p className="text-sm font-semibold">{PORTFOLIO_OWNER.location}</p>
          <p className="font-mono text-xs text-[#8e8e93] mt-4">GET IN TOUCH</p>
          <a
            href={`mailto:${PORTFOLIO_OWNER.email}`}
            className="text-sm text-[#FF6B6B] underline"
          >
            {PORTFOLIO_OWNER.email}
          </a>
        </div>
      </div>
    </header>
  );
}
