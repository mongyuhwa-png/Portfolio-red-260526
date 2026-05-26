import React, { useState } from "react";
import { Mail, MapPin, Globe, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "Branding", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("모든 필수 입력 부분을 기입해 주세요.");
      return;
    }
    setSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const projectTypes = ["Commercial Grading", "Feature Narrative", "Music Videos", "LUT / DCTL Suite", "Other Projects"];

  return (
    <footer
      id="contact"
      className="relative pt-24 pb-12 bg-[#0A0A0A] overflow-hidden noise-bg border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Giant Hero headline statement for high sensory impact */}
        <div className="mb-16 md:mb-24 select-none">
          <p className="font-mono text-xs text-[#FF6B6B] tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH WITH ME
          </p>
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tighter uppercase max-w-5xl">
            LET’S CREATE SOMETHING <span className="text-[#FF6B6B]">EXTRAORDINARY</span>
          </h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#1a1a1a]">
          
          {/* Left Block: Contact Details & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div className="space-y-8">
              <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed font-light max-w-sm">
                새로운 프로젝트 제안, 협업 문의, 혹은 단순한 생각 공유 모두 언제나 환영합니다. 아래 채널을 이용하거나 메시지를 남겨주세요.
              </p>

              {/* Detail channels */}
              <div className="space-y-6">
                
                {/* Email (with Copy Action) */}
                <div className="group flex items-start gap-4 p-4 bg-[#121212] border border-[#1a1a1a] rounded-sm hover:border-[#FF6B6B]/40 transition-colors">
                  <div className="p-2.5 bg-[#1e1e1e] rounded-sm text-[#FF6B6B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase block mb-1">
                      EMAIL ME DIRECTLY
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={`mailto:${PORTFOLIO_OWNER.email}`}
                        className="text-white hover:text-[#FF6B6B] font-mono text-sm break-all transition-colors cursor-pointer"
                      >
                        {PORTFOLIO_OWNER.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 hover:bg-[#1e1e1e] rounded-full text-[#8e8e93] hover:text-[#FF6B6B] transition-all cursor-pointer"
                        title="Copy Email address"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[#121212] border border-[#1a1a1a] rounded-sm">
                  <div className="p-2.5 bg-[#1e1e1e] rounded-sm text-[#FF6B6B]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase block mb-1">
                      CURRENT BASE
                    </span>
                    <span className="text-white text-sm font-semibold">{PORTFOLIO_OWNER.location}</span>
                  </div>
                </div>

                {/* Website URL */}
                <div className="flex items-start gap-4 p-4 bg-[#121212] border border-[#1a1a1a] rounded-sm">
                  <div className="p-2.5 bg-[#1e1e1e] rounded-sm text-[#FF6B6B]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase block mb-1">
                      OFFICIAL HOSTNAME
                    </span>
                    <a
                      href={`http://${PORTFOLIO_OWNER.websiteUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF6B6B] text-sm font-mono transition-all flex items-center gap-1.5"
                    >
                      {PORTFOLIO_OWNER.websiteUrl}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro credit panel */}
            <div className="hidden lg:block space-y-2">
              <span className="font-mono text-[10px] text-white/40 block">CURRENT TIME ZONE</span>
              <span className="text-xs text-[#8e8e93]">Seoul, Republic of Korea (GMT+9) — 10:00 AM ~ 07:00 PM</span>
            </div>
          </div>

          {/* Right Block: Fully Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-sm relative">
            {formSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-12 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">메시지가 발송되었습니다!</h3>
                  <p className="text-sm text-[#8e8e93] max-w-md mx-auto leading-relaxed">
                    작성해 주신 이메일(<span className="text-white font-mono">{formData.email}</span>) 주소를 바탕으로 내용 검토 후 최대한 신속 연구하여 48시간 이내에 직접 메일 회신 드리겠습니다.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", projectType: "Branding", message: "" });
                  }}
                  className="mt-4 text-xs font-mono tracking-widest text-[#FF6B6B] hover:underline uppercase cursor-pointer"
                >
                  NEW MESSAGE SEND (새 메시지 작성) ↺
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-medium text-lg text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                  <span>SEND ME A MESSAGE (문의하기)</span>
                </h3>

                {/* Grid inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-[#A0A0A0] uppercase tracking-wider">
                      Your Name (성함/회사명) <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. 홍길동"
                      className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#FF6B6B] text-sm text-white px-4 py-3 rounded-sm placeholder:text-[#555] transition-colors outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-[#A0A0A0] uppercase tracking-wider">
                      Your Email (이메일 주소) <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@brand.com"
                      className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#FF6B6B] text-sm text-white px-4 py-3 rounded-sm placeholder:text-[#555] transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Project selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-[#A0A0A0] uppercase tracking-wider">
                    INTERESTED IN (프로젝트 관심 카테고리)
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-2 text-[11px] font-mono rounded-sm transition-all border cursor-pointer ${
                          formData.projectType === type
                            ? "bg-[#FF6B6B] text-black border-[#FF6B6B] font-semibold"
                            : "bg-[#0A0A0A] text-[#8e8e93] border-[#262626] hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-[#A0A0A0] uppercase tracking-wider">
                    YOUR MESSAGE BRIEF (문의 상세 내용) <span className="text-[#FF6B6B]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="프로젝트 일정, 예산 범위, 필요하신 비주얼 디자인이나 콘텐츠 범위에 대해 간략히 설명해 주세요."
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#FF6B6B] text-sm text-white px-4 py-3 rounded-sm placeholder:text-[#555] transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-[#FF6B6B] hover:bg-[#ff8585] text-black font-semibold text-xs tracking-widest uppercase font-mono py-4 rounded-sm transition-all transform active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer legal credits */}
        <div className="pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 font-mono text-[10px] text-[#8e8e93]">
          <p>© 2026 ZUZANNA WOŹNICZKA & SONGHEE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#work" className="hover:text-white transition-colors">WORK ARCHIVE</a>
            <a href="#about" className="hover:text-white transition-colors">BIOGRAPHY</a>
            <a href="#navbar" className="hover:text-[#FF6B6B] transition-colors uppercase">BACK TO TOP ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
