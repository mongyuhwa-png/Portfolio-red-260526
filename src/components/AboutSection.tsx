import React, { useState } from "react";
import { Award, Briefcase, GraduationCap, Code2, Sparkles } from "lucide-react";
import { PORTFOLIO_OWNER, SKILL_GROUPS } from "../data";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("timeline");

  const timelineData = [
    {
      year: "2023 - Present",
      role: "Freelance Digital Colorist",
      company: "Independent (Warsaw & Seoul)",
      desc: "영화, 글로벌 프리미엄 브랜드 패션 캠페인, 아티스트 뮤직비디오 포스트 프로덕션 컬러리스트 작업 총괄."
    },
    {
      year: "2019 - 2023",
      role: "Lead Colorist",
      company: "Spectrum Post-Production (Warsaw)",
      desc: "DaVinci Resolve Studio 시스템을 활용한 장편 영화 컬러그레이딩, DCTL 제작 및 워크플로우 관리 리딩."
    },
    {
      year: "2016 - 2019",
      role: "Assistant Colorist / DIT",
      company: "Glow Production Suite (Gdansk)",
      desc: "카메라 센서별 리니어 데이터 디코딩, 컬러 캘리브레이션 및 포스트 프로덕션 기본 컨트라스트 기초 조각 수립."
    }
  ];

  const educationData = [
    {
      year: "2012 - 2016",
      school: "Lodz National Film School",
      major: "Director of Photography & Post-Production",
      desc: "체계적인 광원 및 예술적 색상 배합 원리 오피셜 수학, 시네마 카메라 컬러 기하학 최우수 연구 수상."
    },
    {
      year: "2021",
      school: "DaVinci Resolve Certified Specialist",
      major: "Blackmagic Design",
      desc: "블랙매직 디자인 공식 하이엔드 시스템 워크플로우 및 디지털 컬러리스트 마스터 아키텍쳐 공식 라이선스 인증."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#0C0C0C] overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Decorative background grid and coral accent circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF6B6B]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium Designer Profile / Visual Illustration Avatar */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden border border-[#262626] bg-[#121212] rounded-sm shadow-xl">
              
              {/* Silhouette portrait with abstract aesthetic overlay */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Zuzanna Woźniczka Digital Colorist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              
              {/* Custom tech-accent SVG grid layered over the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-[#FF6B6B]/20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end select-none">
                <span className="font-mono text-[10px] text-[#FF6B6B] tracking-[0.3em] uppercase block mb-1">
                  WARSAW & SEOUL
                </span>
                <span className="font-sans font-medium text-sm text-white tracking-widest lowercase">
                  zuzanna woźniczka
                </span>
              </div>
            </div>

            {/* Frame geometric outline (Zuzawozniczka design reference detail) */}
            <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-[#FF6B6B]/30 -z-10 rounded-sm group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Right Column: Bio details, tabs, skills */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-8">
            
            {/* Title */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#FF6B6B] tracking-[0.3em] uppercase">
                ABOUT ME
              </span>
              <h2 className="font-serif italic font-light text-3xl sm:text-5xl tracking-tight text-white">
                The Emotional Gradient
              </h2>
            </div>

            {/* High Impact Philosophy Quote */}
            <div className="border-l-2 border-[#FF6B6B] pl-5 py-2">
              <blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed font-sans block">
                "디지털 컬러그레이딩은 프레임 안에 머무는 영상 소스의 단순 연출을 넘어, 프레임 너머의 관객에게 스며드는 색채적 감흥의 깊이를 조각하는 영역입니다."
              </blockquote>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-[#8e8e93] leading-relaxed font-light">
              시네마 규격의 완벽한 감성 화질과 세밀한 컨트라스트의 조화를 집요하게 구현합니다. 영화 가공 및 전문 포스트 브랜드 광고 스위트 작업을 통해, 시각 언어만으로 독보적인 이야기 구조를 지탱하고 깊은 몰입을 극대화합니다.
            </p>

            {/* Interactive Timeline vs Education Tabs */}
            <div className="border-b border-[#262626] flex gap-6 font-mono text-xs mt-4">
              <button
                onClick={() => setActiveTab("timeline")}
                className={`pb-3 border-b-2 tracking-widest uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                  activeTab === "timeline" ? "border-[#FF6B6B] text-[#FF6B6B] font-bold" : "border-transparent text-[#8e8e93] hover:text-white"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-3 border-b-2 tracking-widest uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                  activeTab === "education" ? "border-[#FF6B6B] text-[#FF6B6B] font-bold" : "border-transparent text-[#8e8e93] hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </button>
            </div>

            {/* Tab lists */}
            <div className="space-y-6 pt-2">
              {activeTab === "timeline" ? (
                timelineData.map((item, index) => (
                  <div key={index} className="group relative flex gap-4 pl-4 border-l border-[#262626] pb-1">
                    <div className="absolute top-1.5 -left-[4.5px] w-2 h-2 rounded-full bg-[#FF6B6B] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#FF6B6B] tracking-widest">{item.year}</span>
                      <h4 className="text-white text-sm font-semibold tracking-wide">
                        {item.role} <span className="text-[#8e8e93] font-normal">• {item.company}</span>
                      </h4>
                      <p className="text-xs text-[#8e8e93] leading-relaxed font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                educationData.map((item, index) => (
                  <div key={index} className="group relative flex gap-4 pl-4 border-l border-[#262626] pb-1">
                    <div className="absolute top-1.5 -left-[4.5px] w-2 h-2 rounded-full bg-[#FF6B6B] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#FF6B6B] tracking-widest">{item.year}</span>
                      <h4 className="text-white text-sm font-semibold tracking-wide">
                        {item.major} <span className="text-[#8e8e93] font-normal">• {item.school}</span>
                      </h4>
                      <p className="text-xs text-[#8e8e93] leading-relaxed font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Tech Stack Skill Groupings */}
            <div className="mt-6 flex flex-col gap-4 pt-6 border-t border-[#262626]/40">
              <span className="font-mono text-xs text-white/50 tracking-wider">
                CORE STACK & TOOLS (핵심 스킬)
              </span>
              <div className="flex flex-col gap-5">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <p className="font-mono text-[10px] text-[#8e8e93] uppercase tracking-wider">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-[#121212] hover:bg-[#FF6B6B] text-[#A0A0A0] hover:text-black hover:border-[#FF6B6B] text-xs font-mono px-4 py-2 border border-[#262626] rounded-sm transition-all duration-300 pointer-events-auto select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
