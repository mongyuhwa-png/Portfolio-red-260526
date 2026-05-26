import React, { useState, useEffect } from "react";
import { MoveRight, X, ExternalLink, Plus } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile for disabling mouse tracking
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track global client x/y viewport coordinates for the floating tooltip
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Derive categories
  const categories = ["ALL", "Commercial", "Narrative", "Music Video", "Documentary"];

  const filteredProjects = selectedCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project: Project) => {
    setActiveProjectModal(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setActiveProjectModal(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 bg-[#0A0A0A] border-t border-[#121212] noise-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Sidebar Panel) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
            <span className="font-sans font-medium text-xs tracking-[0.25em] text-[#8e8e93] uppercase ltr">
              selection
            </span>
            <div className="space-y-4">
              <h2 className="font-serif italic font-light text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                Selected Works
              </h2>
              <p className="text-xs text-[#8e8e93] leading-relaxed font-light font-sans max-w-sm">
                A selection of digital color-grading and cinematic projects encompassing global commercials, short narratives, and stylized artist music videos.
              </p>
            </div>

            {/* Premium Vertical Category Filter Tabs */}
            <div className="flex flex-col gap-2 pt-6 border-t border-[#1a1a1a] max-w-xs">
              <span className="font-mono text-[9px] text-[#A0A0A0] tracking-[0.3em] uppercase mb-2">
                filter category
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-[11px] tracking-[0.2em] font-sans py-2.5 pl-3 border-l transition-all duration-300 uppercase cursor-pointer ${
                    selectedCategory === cat
                      ? "border-[#FF6B6B] text-[#FF6B6B] font-medium bg-[#FF6B6B]/5"
                      : "border-transparent text-[#8e8e93] hover:text-white hover:border-[#262626]"
                  }`}
                >
                  {cat === "ALL" ? "all categories" : cat}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex flex-col gap-1 text-[11px] font-mono text-[#444] pt-8">
              <span>WORK STATION // DAVINCI RESOLVE</span>
              <span>LUT SYSTEM // DCTL EMULATIONS</span>
            </div>
          </div>

          {/* Right Column (Scrollable Row List) */}
          <div className="lg:col-span-8 flex flex-col w-full">
            <div className="border-t border-[#1a1a1a] w-full">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => !isMobile && setHoveredProject(project)}
                  onMouseLeave={() => !isMobile && setHoveredProject(null)}
                  onClick={() => handleOpenModal(project)}
                  className="group relative border-b border-[#161616] py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-[#FF6B6B] cursor-pointer"
                >
                  {/* Default simple text row view (Fades or transforms nicely on row-hover) */}
                  <div className="flex items-center gap-6 sm:gap-10 project-default-row z-10 w-full md:w-auto">
                    <span className="font-mono text-[11px] text-[#444] group-hover:text-[#FF6B6B] transition-colors duration-300">
                      0{index + 1}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 sm:gap-4">
                      <h3 className="font-sans font-medium text-2xl sm:text-3.5xl text-white tracking-tight group-hover:text-transparent group-hover:select-none transition-colors duration-200 uppercase">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[9px] text-[#555] tracking-widest uppercase block md:inline group-hover:opacity-0 transition-opacity">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 z-10 w-full md:w-auto justify-between md:justify-end">
                    <span className="font-mono text-[11px] text-[#444] group-hover:text-white transition-colors">
                      {project.year}
                    </span>
                    <div className="p-2 border border-[#1a1a1a] rounded-full text-[#444] group-hover:text-[#FF6B6B] group-hover:border-[#FF6B6B] group-hover:bg-[#FF6B6B]/5 transition-all duration-300">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Infinite scrolling ticker overlay — replaces the row title on hover */}
                  {!isMobile && (
                    <div className="absolute inset-x-0 top-0 h-full bg-[#0A0A0A] flex items-center z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 select-none overflow-hidden">
                      {/* Side vignettes to blend marquee edges */}
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
                      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
                      
                      <div className="flex w-full whitespace-nowrap">
                        <div className="animate-marquee flex gap-12 font-sans font-medium text-2.5xl sm:text-3.5xl text-[#FF6B6B] uppercase tracking-wide py-2 pr-12">
                          {Array(11).fill(`${project.title} •`).join(" ")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Empty filter category fallback */}
            {filteredProjects.length === 0 && (
              <div className="w-full text-center py-24 border border-dashed border-[#1a1a1a] rounded bg-[#121212]/10 mt-1">
                <p className="font-mono text-xs text-[#8e8e93] tracking-widest">
                  NO CHOSEN SAMPLES FOUND FOR THIS GROUP
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating frame image overlay that slides gently near the cursor */}
      {!isMobile && hoveredProject && (
        <div
          className="pointer-events-none fixed z-[9999] w-72 sm:w-[22rem] h-44 sm:h-52 overflow-hidden rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#161616] flex items-center justify-center bg-[#121212]"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y + 24}px`,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <img
            src={hoveredProject.imageUrl}
            alt={hoveredProject.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.05] saturate-[1.05]"
          />
        </div>
      )}

      {/* Modern Case Study slider modal for details */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-end bg-black/85 backdrop-blur-md transition-all duration-500">
          <div
            className="absolute inset-0"
            onClick={handleCloseModal}
          />
          
          <div className="relative w-full max-w-3xl h-full bg-[#0E0E0E] border-l border-[#1a1a1a] flex flex-col justify-between overflow-y-auto shadow-2xl z-10 transition-transform duration-500 ease-in-out">
            
            {/* Header control */}
            <div className="px-6 md:px-12 py-6 border-b border-[#1a1a1a] flex items-center justify-between bg-[#0E0E0E] sticky top-0 z-20">
              <span className="font-mono text-[10px] text-[#FF6B6B] tracking-[0.25em] uppercase">
                color grade record / {activeProjectModal.id}
              </span>
              <button
                onClick={handleCloseModal}
                className="group p-2 -mr-2 text-[#8e8e93] hover:text-[#FF6B6B] hover:bg-[#1a1a1a] rounded-full transition-all cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Core Modal Contents */}
            <div className="flex-grow px-6 md:px-12 py-8 md:py-12 space-y-8">
              
              {/* Expanded Visual Showcase */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#262626] bg-[#121212] rounded-sm">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#FF6B6B]/5 mix-blend-multiply" />
              </div>

              {/* Title & Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                
                {/* Main casestudy title */}
                <div className="md:col-span-8 space-y-4">
                  <h3 className="font-serif italic font-light text-3xl sm:text-4xl text-white">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-[10px] text-[#FF6B6B] font-mono tracking-widest uppercase">
                    📁 client grading sample // {activeProjectModal.category}
                  </p>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed font-light pt-2 font-sans">
                    {activeProjectModal.description} 본 시나리오는 디렉터의 콘셉트에 부합하도록 정밀한 색채 렌더링 과정을 거쳤습니다. 노이즈 및 입자를 조율하고, 광량 표현을 극대화하여 시네마틱한 가치를 주조했습니다.
                  </p>
                </div>

                {/* Sidebar Project Meta details */}
                <div className="md:col-span-4 bg-[#121212] border border-[#1a1a1a] p-5 rounded space-y-4 font-mono text-[11px]">
                  <div>
                    <span className="text-[#8e8e93] block uppercase tracking-wider mb-0.5">CLIENT BRAND</span>
                    <span className="text-white font-medium">{activeProjectModal.client}</span>
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-3">
                    <span className="text-[#8e8e93] block uppercase tracking-wider mb-0.5">TIMELINE</span>
                    <span className="text-white font-medium">{activeProjectModal.year}</span>
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-3">
                    <span className="text-[#8e8e93] block uppercase tracking-wider mb-1">DCTL CHANNELS</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeProjectModal.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#262626] text-white text-[9px] px-1.5 py-0.5 rounded-sm whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Detailed Context Narrative of Color Design process */}
              <div className="space-y-6 pt-6 border-t border-[#1a1a1a] font-sans">
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm tracking-wider uppercase">💡 Grading Challenge & Concept</h4>
                  <p className="text-xs text-[#8e8e93] leading-relaxed font-light">
                    독자가 복잡한 정보 덩어리를 피로감 없이 편하게 습득할 수 있도록 시각 계층을 극단적인 대비 구도로 세분화했습니다. 영상 가공 전문가로서의 섬세하고 서술적인 보이스가 각각의 단면마다 명확하게 숨 쉬도록 커스텀 LUT 설계와 정밀 콘트라스트 커브 조율 레이아웃을 전개했습니다.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm tracking-wider uppercase">✨ Cinematic Core Outcome</h4>
                  <p className="text-xs text-[#8e8e93] leading-relaxed font-light">
                    코럴 엑센트 색상을 디테일 캡처와 아크릴릭 레이어링에 세부 도입하여, 다크 테마 고유의 차분하고 높은 몰입도가 고조됩니다. 디지털 미디어의 포스트 프로세싱 뎁스에서 이상적인 감성 화질을 주조하였습니다.
                  </p>
                </div>
              </div>

            </div>

            {/* Footer buttons */}
            <div className="px-6 md:px-12 py-6 border-t border-[#1a1a1a] bg-[#121212]/80 backdrop-blur-sm flex flex-wrap gap-4 items-center justify-between sticky bottom-0 z-20">
              <p className="text-[10px] font-mono text-[#8e8e93]">
                © {activeProjectModal.year} ZUZANNA COLORIST ARCHIVE CO.
              </p>
              <a
                href={activeProjectModal.liveUrl}
                onClick={(e) => {
                  e.preventDefault();
                  alert("포트폴리오의 실물 비디오 인베드 및 LUT 아카이브를 연결하는 주소 경로입니다.");
                }}
                className="inline-flex items-center gap-1.5 bg-[#FF6B6B] hover:bg-[#ff8585] text-black font-semibold text-xs tracking-wider uppercase font-mono px-4 py-2.5 rounded transition-all"
              >
                <span>watch reel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
