import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position relative to window for interactive glow
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      const offsetPos = workSection.offsetTop - 85;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] px-6 md:px-12 pt-24 noise-bg"
    >
      {/* Interactive Mesh Gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 107, 107, 0.12) 0%, rgba(10, 10, 10, 0) 80%)`
        }}
      />

      {/* Decorative Floating Mesh Grid Lines (Zuza style minimalist structure) */}
      <div className="absolute inset-x-0 top-0 h-full w-full opacity-20 pointer-events-none border-x border-[#262626] max-w-7xl mx-auto flex justify-between">
        <div className="w-[1px] bg-gradient-to-b from-[#262626] via-transparent to-[#262626]" />
        <div className="hidden md:block w-[1px] bg-gradient-to-b from-[#262626] via-transparent to-[#121212]" />
        <div className="hidden md:block w-[1px] bg-gradient-to-b from-[#262626] via-transparent to-[#121212]" />
        <div className="w-[1px] bg-gradient-to-b from-[#262626] via-transparent to-[#262626]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10 flex flex-col justify-center flex-grow py-12">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 mb-6 self-start bg-[#121212] border border-[#262626] px-3.5 py-1.5 rounded-full select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B6B]"></span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#FF6B6B] font-medium uppercase">
            AVAILABLE FOR CONTRACTS • SEOUL
          </span>
        </div>

        {/* Huge Typographic Headlines */}
        <div className="flex flex-col gap-1 md:gap-3 select-none">
          <h1 className="font-sans font-medium text-white text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[0.85] tracking-tight text-left lowercase">
            turning frames
          </h1>
          <h1 className="font-serif italic font-light text-[#FF6B6B] text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8.5rem] leading-[0.85] tracking-wide text-left md:pl-24 transition-all duration-500">
            INTO EMOTIONS
          </h1>
        </div>

        {/* Sub-slogan Explainer Block */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-base sm:text-lg md:text-xl text-[#A0A0A0] leading-relaxed font-light font-sans max-w-md md:max-w-2xl">
              안녕하세요, 프리랜서 디지털 컬러리스트 <span className="text-white font-medium hover:text-[#FF6B6B] transition-colors cursor-pointer decoration-[#FF6B6B]/40 underline underline-offset-4">zuzanna woźniczka</span>(이송희)입니다. 영화, 드라마 및 글로벌 패션 광고 촬영본을 다듬어 감정을 극대화하는 영사 가공(Color Grading)을 설계합니다.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleScrollToWork}
                className="group relative inline-flex items-center gap-3 bg-[#FF6B6B] hover:bg-[#ff8585] text-black px-6 py-3.5 font-mono text-xs tracking-widest font-semibold uppercase rounded-sm overflow-hidden transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-[#FF6B6B]/15"
              >
                <span>explore selection</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 bg-transparent text-white border border-[#262626] hover:border-white px-6 py-3.5 font-mono text-xs tracking-widest font-medium uppercase rounded-sm transition-all duration-300 cursor-pointer"
              >
                <span>send message</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Sidebar (Senior touch) */}
          <div className="lg:col-span-5 flex lg:justify-end gap-12 font-mono mt-4 lg:mt-0 pt-6 lg:pt-0 border-t border-[#262626]/40 lg:border-t-0">
            <div className="flex flex-col gap-1">
              <span className="text-[#FF6B6B] text-[10px] uppercase tracking-widest font-semibold block mb-1">
                SPECIALITY
              </span>
              <span className="text-white text-xs lowercase tracking-wider">feature grading</span>
              <span className="text-white text-xs lowercase tracking-wider">commercials & music videos</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#FF6B6B] text-[10px] uppercase tracking-widest font-semibold block mb-1">
                ZONE BASE
              </span>
              <span className="text-white text-xs lowercase tracking-wider">warsaw, poland</span>
              <span className="text-white text-xs lowercase tracking-wider">seoul, republic of korea</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Scroll Down Metaphor */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 select-none pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#8e8e93] uppercase animate-pulse">
          SCROLL TO EXPLORE
        </span>
        <div className="w-12 h-[1px] bg-[#262626]" />
      </div>
    </section>
  );
}
