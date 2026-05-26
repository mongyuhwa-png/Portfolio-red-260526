import React, { useState, useEffect } from "react";

// Project Type Definition matching types.ts
interface WorkProject {
  id: string;
  title: string;
  category: string;
  year: string;
  aspect: string; // for irregular grid heights
  translateY?: string; // desktop stagger effect
}

interface WorksItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "works" | "about">("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeThumbnailId, setActiveThumbnailId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 8 Curated Content Design projects for Songhee Lee (HOME View)
  const homeProjects: WorkProject[] = [
    {
      id: "01",
      title: "THE ERA OF MINIMALISM",
      category: "BRAND ARCHITECTURE",
      year: "2026",
      aspect: "aspect-[16/10]",
      translateY: "md:translate-y-0"
    },
    {
      id: "02",
      title: "HYPER-IDENTITY FOR AURA",
      category: "DIGITAL CAMPAIGN",
      year: "2025",
      aspect: "aspect-[4/5]",
      translateY: "md:translate-y-24"
    },
    {
      id: "03",
      title: "THE DAILY ARTS MANUAL",
      category: "EDITORIAL PRINT",
      year: "2025",
      aspect: "aspect-[4/3]",
      translateY: "md:-translate-y-12"
    },
    {
      id: "04",
      title: "LUXURY APOTHECARY",
      category: "PACKAGING & BRANDING",
      year: "2025",
      aspect: "aspect-[16/7]",
      translateY: "md:translate-y-12"
    },
    {
      id: "05",
      title: "EDITORIAL MUSE GRID",
      category: "GRID METRICS",
      year: "2024",
      aspect: "aspect-[16/10]",
      translateY: "md:translate-y-0"
    },
    {
      id: "06",
      title: "SEOUL FASHION CRUSADE",
      category: "CAMPAIGN GRAPHICS",
      year: "2024",
      aspect: "aspect-square",
      translateY: "md:translate-y-20"
    },
    {
      id: "07",
      title: "KINETIC TEXT MESSAGING",
      category: "MOTION SYSTEM",
      year: "2024",
      aspect: "aspect-[16/9]",
      translateY: "md:-translate-y-6"
    },
    {
      id: "08",
      title: "MODERN NARRATIVE LAB",
      category: "CONTENT STRATEGY",
      year: "2023",
      aspect: "aspect-[21/9]",
      translateY: "md:translate-y-12"
    }
  ];

  // 19 Curated works for Songhee Lee (WORKS View)
  const worksData: WorksItem[] = [
    {
      id: "01",
      title: "청정원 안주야 TVC",
      client: "청정원",
      category: "VIDEO",
      year: "2022",
      image: "https://images.unsplash.com/photo-1544025313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "02",
      title: "청정원 호밍스만두 TVC",
      client: "청정원",
      category: "VIDEO",
      year: "2022",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "03",
      title: "에이스침대 디지털 캠페인",
      client: "에이스침대",
      category: "BANNERS",
      year: "2021",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "04",
      title: "SNS 퍼포먼스 광고",
      client: "아데나소프트웨어",
      category: "BANNERS",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "05",
      title: "이벤트 프로모션 랜딩페이지",
      client: "아데나소프트웨어",
      category: "ADS",
      year: "2024",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "06",
      title: "전시 부스 디자인",
      client: "아데나소프트웨어",
      category: "ADS",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "07",
      title: "구글 DA 광고 소재",
      client: "아데나소프트웨어",
      category: "BANNERS",
      year: "2024",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "08",
      title: "키비주얼 디자인",
      client: "아데나소프트웨어",
      category: "ADS",
      year: "2025",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "09",
      title: "THE ERA OF MINIMALISM TVC",
      client: "MINIMAL CO",
      category: "VIDEO",
      year: "2026",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "10",
      title: "HYPER-IDENTITY LAUNCH CAMPAIGN",
      client: "AURA CORP",
      category: "BANNERS",
      year: "2025",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "11",
      title: "THE DAILY ARTS FILM REEL",
      client: "SEOUL ARTS CENTER",
      category: "VIDEO",
      year: "2025",
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "12",
      title: "LUXURY APOTHECARY MOOD FILM",
      client: "APOTHECARY SEOUL",
      category: "VIDEO",
      year: "2025",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "13",
      title: "EDITORIAL MUSE METRICS GRID",
      client: "MUSE MAGAZINE",
      category: "ADS",
      year: "2024",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "14",
      title: "SEOUL FASHION WEEK BANNERS",
      client: "SEOUL CITY",
      category: "BANNERS",
      year: "2024",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "15",
      title: "KINETIC TYPOGRAPHY SIGNAGE",
      client: "MOTION LABS",
      category: "ADS",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "16",
      title: "NARRATIVE LAB GRAPHICS",
      client: "NARRATIVE SEOUL",
      category: "ADS",
      year: "2023",
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "17",
      title: "COSMECEUTICAL DIGITAL VIDEO",
      client: "DERMA SPA",
      category: "VIDEO",
      year: "2023",
      image: "https://images.unsplash.com/photo-1544025313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "18",
      title: "AURA SMART SYSTEM UI PROD",
      client: "AURA INC",
      category: "ADS",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "19",
      title: "REDEFINING CHROMA DISPLAY",
      client: "CHROMA BROADCAST",
      category: "BANNERS",
      year: "2022",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Mouse Move tracking for fixed hover preview box
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMenuLinkClick = (selector: string, targetView?: "home" | "works" | "about", targetCategory?: string) => {
    setIsMenuOpen(false);
    if (targetView) {
      setView(targetView);
      if (targetCategory) {
        setSelectedCategory(targetCategory);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("home");
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setView("home");
    setSelectedCategory("ALL");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredWorks = selectedCategory === "ALL" 
    ? worksData 
    : worksData.filter((work) => work.category === selectedCategory);

  const activeHoverProject = worksData.find((w) => w.id === activeThumbnailId);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#E50914] font-sans antialiased uppercase select-none">
      
      {/* SECTION 1: FIXED NAVIGATION BAR */}
      <nav id="navbar" className="fixed top-0 left-0 w-full h-[60px] z-50 flex items-center justify-between px-6 md:px-12 bg-black/80 backdrop-blur-sm border-b border-[#E50914]/10">
        <span 
          onClick={handleLogoClick}
          className="font-extrabold text-[14px] tracking-widest text-[#E50914] cursor-pointer"
        >
          SONGHEE
        </span>
        
        {/* Nav right menu trigger */}
        <button 
          id="menu-trigger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[24px] font-light text-[#E50914] cursor-pointer focus:outline-none select-none transition-transform duration-300 hover:scale-110"
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? "×" : "+"}
        </button>
      </nav>

      {/* SIDEBAR DRAWER MENU BACKDROP */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* SIDEBAR DRAWER MENU BODY */}
      <div 
        id="side-drawer"
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[360px] bg-[#E50914] text-[#000000] z-50 p-6 sm:p-8 flex flex-col justify-between transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6 text-[32px] sm:text-[38px] font-thin text-black hover:opacity-75 focus:outline-none select-none transition-transform duration-300 hover:rotate-90 cursor-pointer"
          aria-label="Close Navigation"
        >
          ×
        </button>

        {/* Navigation Categories container */}
        <div className="flex flex-col gap-8 mt-16 text-left select-none">
          {/* HOME */}
          <button 
            onClick={() => { setView("home"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-[34px] sm:text-[38px] font-black tracking-tight text-black hover:italic text-left leading-none transition-all cursor-pointer"
          >
            HOME
          </button>

          {/* WORKS nested structure */}
          <div className="flex flex-col">
            <button 
              onClick={() => { setView("works"); setSelectedCategory("ALL"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-[34px] sm:text-[38px] font-black tracking-tight text-black hover:italic text-left leading-none transition-all cursor-pointer"
            >
              WORKS
            </button>
            <div className="flex flex-col gap-3 pl-5 mt-4 border-l border-black/25">
              <button 
                onClick={() => { setView("works"); setSelectedCategory("VIDEO"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-[12px] sm:text-[13px] font-bold text-black/90 hover:text-black tracking-[3px] text-left uppercase cursor-pointer"
              >
                VIDEO
              </button>
              <button 
                onClick={() => { setView("works"); setSelectedCategory("BANNERS"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-[12px] sm:text-[13px] font-bold text-black/90 hover:text-black tracking-[3px] text-left uppercase cursor-pointer"
              >
                BANNERS
              </button>
              <button 
                onClick={() => { setView("works"); setSelectedCategory("ADS"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-[12px] sm:text-[13px] font-bold text-black/90 hover:text-black tracking-[3px] text-left uppercase cursor-pointer"
              >
                ADS
              </button>
            </div>
          </div>

          {/* INFO */}
          <button 
            onClick={() => { setView("about"); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-[34px] sm:text-[38px] font-black tracking-tight text-black hover:italic text-left leading-none transition-all cursor-pointer"
          >
            INFO
          </button>
        </div>

        {/* Drawer Bottom Social Links */}
        <div className="flex flex-col gap-2.5 text-[10px] font-bold tracking-[3px] text-black pt-6 border-t border-black/15 select-none">
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:underline text-left uppercase">
            BEHANCE
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-left uppercase">
            INSTAGRAM
          </a>
        </div>
      </div>

      {/* MOUSE-FOLLOWING FLOATING THUMBNAIL PREVIEW (WORKS page only) */}
      {view === "works" && activeThumbnailId && activeHoverProject && (
        <div
          className="fixed pointer-events-none z-50 w-[200px] h-[130px] bg-[#141414] border border-[#E50914] overflow-hidden flex flex-col justify-between p-3 shadow-2xl transition-transform duration-75"
          style={{
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y + 20}px`,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {/* Diagnostic design overlays for raw cinema styling */}
          <div className="absolute inset-0 z-0">
            <img
              src={activeHoverProject.image}
              alt="Grade Preview Thumbnail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-[1.8] brightness-[0.55] opacity-90 transition-opacity duration-300"
            />
            {/* Dark gradient mapping to guarantee #E50914 color readouts */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
          </div>

          <div className="absolute inset-x-0 top-0 h-2 flex justify-between pointer-events-none opacity-40 z-10">
            <span className="border-t border-l border-[#E50914] w-1.5 h-1.5" />
            <span className="border-t border-r border-[#E50914] w-1.5 h-1.5" />
          </div>

          {/* Top text inside thumbnail box */}
          <div className="flex justify-between items-start font-mono text-[8px] tracking-widest text-[#E50914] font-bold z-10">
            <span>[{activeHoverProject.id}]</span>
            <span>{activeHoverProject.category}</span>
          </div>

          {/* Center visual inside thumbnail box */}
          <div className="flex flex-col items-center justify-center text-center flex-grow z-10">
            <div className="w-6 h-6 border border-[#E50914]/40 rounded-full flex items-center justify-center animate-spin-slow mb-0.5">
              <span className="text-[5px] font-mono">+</span>
            </div>
          </div>

          {/* Bottom metadata inside thumbnail box */}
          <div className="flex justify-between items-end text-[7px] font-mono tracking-widest text-[#E50914]/80 z-10">
            <span>PREVIEW</span>
            <span>© {activeHoverProject.year}</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2 flex justify-between pointer-events-none opacity-40 z-10">
            <span className="border-b border-l border-[#E50914] w-1.5 h-1.5" />
            <span className="border-b border-r border-[#E50914] w-1.5 h-1.5" />
          </div>
        </div>
      )}

      {/* DYNAMIC VIEW CONTAINER */}
      {view === "home" ? (
        /* HOME VIEW */
        <main className="w-full pt-[140px] px-6 md:px-12 flex flex-col gap-[160px]">
          
          {/* SECTION 2: HERO AREA */}
          <section id="hero" className="w-full flex flex-col items-center justify-center text-center select-none">
            <span className="font-semibold text-[11px] tracking-[3px] text-[#E50914] block mb-6">
              WHERE CONTENT BECOMES A LANGUAGE
            </span>
            <h1 className="font-black text-[12vw] sm:text-[10vw] md:text-[8.5rem] lg:text-[11vw] leading-[0.9] tracking-tight-extreme text-[#E50914]">
              TURNING IDEAS
            </h1>
            <h1 className="font-black text-[12vw] sm:text-[10vw] md:text-[8.5rem] lg:text-[11vw] leading-[0.9] tracking-tight-extreme text-[#E50914] italic">
              INTO VISUALS
            </h1>
          </section>

          {/* SECTION 3: WORK SELECTION GRID */}
          <section id="work" className="w-full">
            {/* Header Row */}
            <div className="flex justify-between items-center border-b border-[#E50914]/20 pb-4 mb-10 text-[11px] font-normal tracking-widest text-[#E50914]">
              <span>SELECTION</span>
              <span>8</span>
            </div>

            {/* Staggered Bento Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[120px] items-start">
              {homeProjects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => { window.location.href = `work-detail.html?id=${parseInt(project.id, 10)}`; }}
                  className={`group flex flex-col ${project.translateY} transition-all duration-500 cursor-pointer`}
                >
                  {/* Image Placeholder Frame - Dark Gray Box with Red Border */}
                  <div className={`relative ${project.aspect} w-full bg-[#141414] border border-[#E50914] overflow-hidden transition-all duration-500 ease-out hover:border-[#E50914]/80 hover:brightness-125 hover:scale-[1.01] flex flex-col justify-between p-4 sm:p-6`}>
                    
                    {/* Subtle Blueprint Layout Reticles */}
                    <div className="absolute inset-x-0 top-0 h-4 flex justify-between pointer-events-none opacity-30">
                      <span className="border-t border-l border-[#E50914] w-2 h-2" />
                      <span className="border-t border-r border-[#E50914] w-2 h-2" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-4 flex justify-between pointer-events-none opacity-30">
                      <span className="border-b border-l border-[#E50914] w-2 h-2" />
                      <span className="border-b border-r border-[#E50914] w-2 h-2" />
                    </div>
                    
                    {/* Diagnostic lines inside image frame */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                      <div className="w-full h-[1px] bg-[#E50914]" />
                      <div className="h-full w-[1px] bg-[#E50914] absolute" />
                    </div>

                    {/* Card Header information */}
                    <div className="flex justify-between items-start font-mono text-[10px] tracking-widest text-[#E50914]/80 z-10">
                      <span>[{project.id}]</span>
                      <span>{project.category}</span>
                    </div>

                    {/* Card Center Geometric Aesthetic Icon */}
                    <div className="flex flex-col items-center justify-center gap-1.5 opacity-10 group-hover:opacity-35 transition-opacity duration-500">
                      <div className="w-10 h-10 border border-[#E50914] rounded-full flex items-center justify-center animate-spin-slow">
                        <span className="text-[8px] font-mono">+</span>
                      </div>
                      <span className="font-mono text-[8px] tracking-[4px]">CROP GUIDE</span>
                    </div>

                    {/* Card Footer information */}
                    <div className="flex justify-between items-end text-[10px] tracking-widest text-[#E50914]/80 z-10 pt-8 border-t border-[#E50914]/5">
                      <span>35MM / 24FPS</span>
                      <span>© {project.year}</span>
                    </div>

                  </div>

                  {/* Typography info below placeholder */}
                  <div className="mt-4 flex justify-between items-baseline text-[11px] tracking-widest">
                    <h3 className="font-black text-base tracking-tight-heading text-[#E50914]">
                      {project.title}
                    </h3>
                    <span className="opacity-70 text-[10px]">{project.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: "SEE MORE" LINK */}
          <section id="see-more" className="w-full flex justify-center text-center py-6 mt-[-40px]">
            <button
              onClick={() => {
                setView("works");
                setSelectedCategory("ALL");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-bold text-xs tracking-widest text-[#E50914] underline underline-offset-4 decoration-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              SEE ALL WORKS
            </button>
          </section>

          {/* SECTION 5: TAGLINE SECTION */}
          <section id="tagline" className="w-full py-24 border-t border-b border-[#E50914]/20 select-none">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4 text-center">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.3] text-[#E50914] tracking-tight-heading">
                CONTENT DESIGN FOR BRAND,
              </p>
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.3] text-[#E50914] tracking-tight-heading">
                CAMPAIGN AND DIGITAL ADS.
              </p>
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.3] text-[#E50914] tracking-tight-heading">
                BASED IN SEOUL, SOUTH KOREA.
              </p>
            </div>
          </section>

        </main>
      ) : view === "works" ? (
        /* WORKS LIST VIEW */
        <main className="w-full pt-[140px] px-6 md:px-12 flex flex-col gap-12">
          
          {/* Header Banner Area */}
          <section id="works-header" className="w-full flex flex-col items-start select-none">
            <span className="font-mono text-[11px] tracking-[4px] text-[#E50914] block mb-2 opacity-80">
              ALL
            </span>
            <div className="relative inline-block w-full">
              <h1 className="font-black text-[12vw] sm:text-[10vw] md:text-[80px] lg:text-[100px] leading-none tracking-tight-extreme text-[#E50914] select-none mb-4">
                WORKS
              </h1>
            </div>

            {/* Custom Interactive Category Filter Bar */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pb-6 border-b border-[#E50914]/20 w-full text-[11px] font-mono tracking-widest text-[#E50914]/50 mt-4 mb-2">
              <button 
                onClick={() => setSelectedCategory("ALL")}
                className={`hover:text-[#E50914] transition-colors cursor-pointer ${selectedCategory === "ALL" ? "text-[#E50914] font-black" : ""}`}
              >
                [ALL]
              </button>
              <button 
                onClick={() => setSelectedCategory("VIDEO")}
                className={`hover:text-[#E50914] transition-colors cursor-pointer ${selectedCategory === "VIDEO" ? "text-[#E50914] font-black" : ""}`}
              >
                [VIDEO]
              </button>
              <button 
                onClick={() => setSelectedCategory("BANNERS")}
                className={`hover:text-[#E50914] transition-colors cursor-pointer ${selectedCategory === "BANNERS" ? "text-[#E50914] font-black" : ""}`}
              >
                [BANNERS]
              </button>
              <button 
                onClick={() => setSelectedCategory("ADS")}
                className={`hover:text-[#E50914] transition-colors cursor-pointer ${selectedCategory === "ADS" ? "text-[#E50914] font-black" : ""}`}
              >
                [ADS]
              </button>
            </div>
          </section>

          {/* Interactive Lists Table */}
          <section id="works-list" className="w-full flex flex-col select-none mb-24">
            {filteredWorks.map((work) => (
              <div 
                key={work.id}
                onClick={() => { window.location.href = `work-detail.html?id=${parseInt(work.id, 10)}`; }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-[12px] cursor-pointer transition-all duration-300 border-b border-[#E50914]/5 hover:bg-[#E50914]/5 px-4 -mx-4 uppercase"
                onMouseEnter={() => setActiveThumbnailId(work.id)}
                onMouseLeave={() => setActiveThumbnailId(null)}
              >
                {/* Left Part: Title / Client */}
                <div className="flex items-baseline gap-2.5 flex-grow truncate mr-4">
                  <span className="font-bold text-[16px] text-[#E50914] group-hover:text-white transition-colors duration-300">
                    {work.title}
                  </span>
                  <span className="text-[#E50914]/30 font-light text-sm select-none">/</span>
                  <span className="font-normal text-[14px] text-[#E50914]/80 group-hover:text-white/90 transition-colors duration-300">
                    {work.client}
                  </span>
                </div>

                {/* Right Part: Category & Year */}
                <div className="flex items-center gap-16 text-right flex-shrink-0 mt-2 sm:mt-0">
                  <span className="font-normal text-[12px] tracking-widest text-[#E50914]/80 w-[140px] text-right group-hover:text-white/80 transition-colors duration-300 hidden sm:inline">
                    {work.category}
                  </span>
                  <span className="font-normal text-[12px] tracking-widest text-[#E50914]/80 w-[60px] text-right group-hover:text-white/90 transition-colors duration-300">
                    {work.year}
                  </span>
                </div>
              </div>
            ))}

            {filteredWorks.length === 0 && (
              <div className="py-24 text-center text-[#E50914]/50 font-mono text-sm">
                NO PROJECTS REGISTERED UNDER [{selectedCategory}]
              </div>
            )}
          </section>

        </main>
      ) : (
        /* ABOUT (INFO) VIEW */
        <main className="w-full pt-[140px] px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Split columns grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full">
            
            {/* Left Column (35% on large screen) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative w-full aspect-square bg-[#E50914] overflow-hidden border border-[#E50914]">
                <img 
                  src="https://images.unsplash.com/photo-1544025313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" 
                  alt="Zuzanna portrait" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-[1.8] brightness-[0.75] mix-blend-multiply opacity-100 object-center transition-transform duration-500 hover:scale-105"
                />
                
                {/* CSS Halftone/Stripe/Scanline overlay resembling screenshot vertical scanline pattern */}
                <div 
                  className="absolute inset-0 mix-blend-multiply pointer-events-none opacity-45" 
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #000 50%, transparent 50%), linear-gradient(0deg, #000 50%, transparent 50%)',
                    backgroundSize: '2px 4px'
                  }}
                />

                <div className="absolute inset-x-0 top-0 h-4 flex justify-between pointer-events-none opacity-40">
                  <span className="border-t border-l border-black w-2 h-2 m-2"></span>
                  <span className="border-t border-r border-black w-2 h-2 m-2"></span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-4 flex justify-between pointer-events-none opacity-40">
                  <span className="border-b border-l border-black w-2 h-2 m-2"></span>
                  <span className="border-b border-r border-black w-2 h-2 m-2"></span>
                </div>
              </div>
            </div>

            {/* Right Column (65% on large screen) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              {/* Upper area: Brand Philosophy */}
              <div className="flex flex-col items-start">
                <span className="text-[11px] font-mono tracking-[4px] text-[#E50914] block mb-4 opacity-80">
                  INFO
                </span>
                <h2 className="font-black text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.1] tracking-tight text-[#E50914] uppercase max-w-[680px]">
                  MY PROCESS IS GROUNDED<br />
                  IN CONVERSATION.<br />
                  UNDERSTANDING THE VISUAL<br />
                  INTENTION, RHYTHM AND<br />
                  EMOTIONAL TONE OF A PROJECT<br />
                  ALWAYS COMES FIRST.
                </h2>
                
                <div className="mt-8 mb-12">
                  <button 
                    onClick={() => { setView("works"); setSelectedCategory("ALL"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="inline-block bg-[#E50914] text-black font-mono font-bold text-[11px] tracking-[2px] px-6 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase"
                  >
                    CHECK CLIENTS
                  </button>
                </div>
              </div>

              {/* Middle area: Sub Philosophy */}
              <div className="border-t border-[#E50914]/10 pt-8 mb-8">
                <p className="font-normal text-[17px] sm:text-[20px] leading-[1.4] text-[#E50914]/95 uppercase max-w-[640px]">
                  IN THE GRADING ROOM, I FOCUS<br />
                  ON TEXTURE AND DENSITY,<br />
                  ALWAYS LETTING THE IMAGE<br />
                  BREATHE AND SPEAK FOR ITSELF.
                </p>
              </div>

              {/* Bottom area: Standard descriptions */}
              <div className="flex flex-col gap-8 max-w-[680px]">
                {/* Paragraph 1 */}
                <p className="text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#E50914] normal-case">
                  Warsaw. My background in graphic design and visual arts — completed in Barcelona — together with years spent exploring street photography, shaped my sensibility for color, rhythm, and composition. Photography taught me to find balance in chaos and emotion in light — the invisible craft behind each frame.
                </p>

                {/* Section B / 2 */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono tracking-[3px] opacity-60">NEW DIRECTIONS</span>
                  <p className="text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#E50914] normal-case">
                    Recently, I've expanded my path into new business management — a natural extension of my curiosity and love for human connection. Whether in the grading suite or at a film festival, I find inspiration in conversation, collaboration, and the constant exchange of ideas that fuel my creativity and keep my process evolving.
                  </p>
                </div>

                {/* Section C / 3 */}
                <div className="flex flex-col gap-1.5 border-b border-[#E50914]/10 pb-12">
                  <span className="text-[10px] font-mono tracking-[3px] opacity-60">PATH TO COLOR</span>
                  <p className="text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#E50914] normal-case">
                    Before focusing on color, I worked in 2D motion graphics, where precision and patience became second nature. As a colorist, I'm drawn to the dialogue between image and emotion, collaborating closely with directors and cinematographers to translate vision into mood and intention into color.
                  </p>
                </div>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mt-8 select-none">
                <span className="text-[10px] font-mono tracking-[3px] opacity-60">CONTACT</span>
                <div className="flex flex-col gap-2 text-[26px] sm:text-[36px] md:text-[44px] font-black tracking-tighter leading-none text-[#E50914]">
                  <div className="uppercase">SONG HEE</div>
                  <a href="mailto:GRADE@GMAIL.COM" className="hover:text-white transition-colors duration-300">
                    GRADE@GMAIL.COM
                  </a>
                  <a href="tel:+48661676540" className="hover:text-white transition-colors duration-300">
                    +48 661 676 540
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bracketed Social Links footer line */}
          <div className="flex justify-between items-center w-full mt-24 border-t border-[#E50914]/10 pt-6 select-none pb-6 text-[11px] font-bold tracking-[2px]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-[#E50914] px-5 py-1.5 hover:bg-[#E50914] hover:text-black transition-all">
              INSTAGRAM
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="border border-[#E50914] px-5 py-1.5 hover:bg-[#E50914] hover:text-black transition-all">
              VIMEO
            </a>
          </div>

        </main>
      )}

      {/* SECTION 6: CTA BAR */}
      <section id="cta" className="w-full mt-[120px] border-t border-[#E50914] bg-[#000000] px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-semibold text-[10px] tracking-widest text-[#E50914]">
            READY TO WORK ON YOUR NEXT LOOK
          </span>
          <a
            href="mailto:SONGHEEGRADE@GMAIL.COM"
            className="font-black text-lg sm:text-2xl lg:text-3xl tracking-tight-heading text-[#E50914] hover:opacity-85 transition-opacity uppercase"
          >
            SONGHEEGRADE@GMAIL.COM
          </a>
        </div>
        <div className="font-semibold text-[10px] tracking-widest text-[#E50914] md:text-right uppercase">
          PSFC FREELANCE COLORIST
        </div>
      </section>

      {/* SECTION 7: FOOTER (RED BACKGROUND SECTION) */}
      <footer id="footer" class="w-full bg-[#E50914] text-[#000000] px-6 md:px-12 pt-20 pb-8 flex flex-col gap-24">
        
        {/* Footer Top Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[12px] font-bold tracking-widest select-none">
          <div className="flex flex-col gap-3">
            <span className="opacity-60 text-[10px] font-mono tracking-[3px]">MENU</span>
            <div class="flex flex-col gap-1.5">
              <button onClick={() => { setView("works"); setSelectedCategory("ALL"); window.scrollTo({ top: 0, behavior: "smooth" }); }} class="text-left font-black hover:opacity-75 cursor-pointer">WORKS</button>
              <button onClick={() => { setView("works"); setSelectedCategory("VIDEO"); window.scrollTo({ top: 0, behavior: "smooth" }); }} class="text-left font-black hover:opacity-75 cursor-pointer">VIDEO</button>
              <button onClick={() => { setView("works"); setSelectedCategory("BANNERS"); window.scrollTo({ top: 0, behavior: "smooth" }); }} class="text-left font-black hover:opacity-75 cursor-pointer">BANNERS</button>
              <button onClick={() => { setView("works"); setSelectedCategory("ADS"); window.scrollTo({ top: 0, behavior: "smooth" }); }} class="text-left font-black hover:opacity-75 cursor-pointer">ADS</button>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <span className="opacity-60 text-[10px] font-mono tracking-[3px]">SOCIAL</span>
            <div className="flex flex-col gap-1.5 select-none">
              <button onClick={() => { setView("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-left font-black hover:opacity-75 cursor-pointer">INFO</button>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-black hover:opacity-75 text-left">INSTAGRAM</a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="font-black hover:opacity-75 text-left">VIMEO</a>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:text-right">
            <span className="opacity-60 text-[10px] font-mono tracking-[3px]">LOCATION</span>
            <span class="font-black uppercase">WORLDWIDE / BARCELONA / WARSAW</span>
          </div>
        </div>

        {/* Footer Monstrous Typographic Display: SONG [portrait] HEE */}
        <div className="w-full flex items-center justify-center overflow-hidden tracking-tighter select-none font-black text-[#000000]">
          <div class="flex items-center justify-center leading-[0.8] text-[15vw] sm:text-[18vw] md:text-[15.5vw] lg:text-[18vw] xl:text-[23vw]">
            <span>SONG</span>
            
            {/* Embedded high-end contrast-blended portrait photo box tilted to mimic a backslash \ */}
            <div className="w-[8vw] h-[11vw] min-w-[50px] min-h-[70px] max-w-[170px] max-h-[238px] mx-2 md:mx-6 inline-block align-middle bg-black overflow-hidden relative border border-black group rotate-[8deg]">
              <img
                src="https://images.unsplash.com/photo-1544025313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                alt="Songhee Portrait Silhouette"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.8] brightness-[0.75] mix-blend-multiply opacity-100 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <span>HEE</span>
          </div>
        </div>

        {/* Footer Bottom Metadata Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest font-bold border-t border-black/10 pt-6">
          <span>COPYRIGHT © 2025 SONG HEE</span>
          <span>DESIGN&DEV @TOTALNIE.JULIANNA</span>
        </div>

      </footer>

    </div>
  );
}
