"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Check,
  Sparkles,
} from "lucide-react";

// ── SUB-KOMPONEN: BENTO CARD ──
export function BentoCard({
  className = "",
  title,
  description,
  imageSrc,
}: {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#8E211E]/30 w-[240px] sm:w-[280px] md:w-auto shrink-0 snap-start"
      )}
    >
      <div className="relative h-32 sm:h-36 w-full shrink-0 overflow-hidden bg-neutral-200">
        <Image
          src={imageSrc}
          alt={typeof title === "string" ? title : "Bento image"}
          fill
          sizes="(max-width: 768px) 60vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-20 isolate mt-[-36px] p-3.5 backdrop-blur-xl bg-white/80 border-t border-white/60 text-neutral-900 shadow-sm flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-extrabold tracking-tight text-neutral-900 leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs font-normal text-neutral-600 leading-normal line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── KOMPONEN UTAMA PARTNERSHIP SECTION ──
export function PartnershipSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const waLiteUrl = `https://wa.me/6289700060959?text=${encodeURIComponent(
    "Halo Padbooth! Saya tertarik dengan Paket Kemitraan Lite."
  )}`;
  const waSpaceUrl = `https://wa.me/6289700060959?text=${encodeURIComponent(
    "Halo Padbooth! Saya tertarik dengan Paket Kemitraan Space."
  )}`;
  const waEnterpriseUrl = `https://wa.me/6289700060959?text=${encodeURIComponent(
    "Halo Padbooth! Saya tertarik dengan Paket Kemitraan Enterprise."
  )}`;

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 280;
    const gap = 16;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / (cardWidth + gap));
    setActiveCardIndex(Math.min(Math.max(index, 0), 2));
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 280;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveCardIndex(index);
  };

  return (
    <section
      id="kemitraan"
      className="w-full bg-white py-12 md:py-20 border-t border-neutral-100 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              Jadilah Mitra{" "}
              <em className="italic font-normal text-neutral-600">Padbooth.</em>
            </h2>
          </div>
        </div>

        {/* ── BAGIAN 1: 3 BENTO CARDS ── */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none mb-10 -mx-5 px-5 md:mx-0 md:px-0">
          <BentoCard
            title="Aplikasi Monitoring Owner"
            description="Pantau jumlah transaksi, omzet harian, dan sisa kertas foto secara real-time langsung dari smartphone Anda."
            imageSrc="/cardpart1.webp"
          />
          <BentoCard
            title="Marketing & Promo Support"
            description="Dipromosikan langsung di akun utama Padbooth untuk menarik antusiasme pengunjung di awal pembukaan."
            imageSrc="/cardpart2.webp"
          />
          <BentoCard
            title="Garansi & Dukungan Teknis"
            description="Garansi spare part utama (kamera/printer) 3 bulan pertama serta dukungan teknis remote untuk software."
            imageSrc="/cardpart3.webp"
          />
        </div>

        {/* ── BAGIAN 2: PRICING CARDS ── */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0"
        >

          {/* CARD 1: PADBOOTH LITE */}
          <div className="w-[85vw] sm:w-[320px] md:w-full md:max-w-none shrink-0 md:shrink snap-center md:snap-none relative p-[1.5px] rounded-2xl overflow-hidden group h-full">
            <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,#e5e5e5_0%,#e5e5e5_40%,#8E211E_60%,#e5e5e5_80%,#e5e5e5_100%)] opacity-70" />

            <div className="relative bg-white rounded-[15px] p-5 sm:p-6 h-full flex flex-col justify-between z-10 border border-neutral-100 shadow-sm">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                  Padbooth Lite
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                  Lahan: 1.2×1.2 m s.d. 1.5×1.5 m
                </p>

                <div className="mt-4 py-3 border-y border-neutral-100">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase tracking-wider">
                    Estimasi Investasi
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-0.5">
                    Rp 28jt{" "}
                    <span className="text-xs font-normal text-neutral-500">
                      – 45jt
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
                  Paket space terbatas & box fleksibel. Sangat cocok bagi pemula bisnis photobooth.
                </p>

                <div className="mt-5 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                    Fasilitas Utama:
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>1 unit mesin slim-cabinet Padbooth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>Kamera DSLR profesional & lighting studio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>Sistem pembayaran QRIS & e-wallet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>Software (free 1 bln), monitor & PC printer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>10 custom frame & starter kertas foto</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={waLiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-300 shadow-sm"
                >
                  <span className="text-white font-semibold">Tanya Lebih Lanjut (Lite)</span>
                  <ArrowUpRight size={14} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: PADBOOTH SPACE */}
          <div className="w-[85vw] sm:w-[320px] md:w-full md:max-w-none shrink-0 md:shrink snap-center md:snap-none relative p-[2px] rounded-2xl overflow-hidden group h-full shadow-lg shadow-[#8E211E]/10">
            <div className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,#8E211E_0%,#ff7b72_25%,#8E211E_50%,#3d0706_75%,#8E211E_100%)]" />

            <div className="relative bg-white rounded-[14px] p-5 sm:p-6 h-full flex flex-col justify-between z-10 border border-neutral-100">

              <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-[#8E211E] text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
                <Flame size={12} className="fill-white" />
                <span>Recommended</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                  Padbooth Space
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                  Lahan: 2×2 m s.d. 3×3 m
                </p>

                <div className="mt-4 py-3 border-y border-neutral-100">
                  <span className="text-[10px] font-mono text-[#8E211E] block uppercase tracking-wider font-bold">
                    Estimasi Investasi
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#8E211E] mt-0.5">
                    Rp 50jt{" "}
                    <span className="text-xs font-normal text-neutral-500">
                      – 60jt
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
                  Bilik foto (booth) tertutup untuk privasi ekstra & ambience studio estetik.
                </p>

                <div className="mt-5 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                    Fasilitas Utama:
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8E211E] shrink-0 mt-0.5" />
                      <span className="font-semibold text-neutral-900">
                        Seluruh fasilitas Paket Lite
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8E211E] shrink-0 mt-0.5" />
                      <span>Konstruksi booth premium (tirai & bg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8E211E] shrink-0 mt-0.5" />
                      <span>Neon signage & identitas visual eksklusif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8E211E] shrink-0 mt-0.5" />
                      <span>Rak properti foto lebih besar & lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8E211E] shrink-0 mt-0.5" />
                      <span>Bantuan negosiasi tempat ke lokasi / mall</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={waSpaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#8E211E] hover:bg-[#731a18] text-white py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-300 shadow-sm shadow-[#8E211E]/20"
                >
                  <span className="text-white font-semibold">Tanya Lebih Lanjut (Space)</span>
                  <ArrowUpRight size={14} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3: ENTERPRISE (MAROON BACKGROUND) */}
          <div className="w-[85vw] sm:w-[320px] md:w-full md:max-w-none shrink-0 md:shrink snap-center md:snap-none relative p-[2px] rounded-2xl overflow-hidden group h-full shadow-lg shadow-[#8E211E]/20">
            <div className="absolute inset-0 bg-[#8E211E]" />

            <div className="relative bg-[#8E211E] rounded-[14px] p-5 sm:p-6 h-full flex flex-col justify-between z-10 text-white">

              <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-white text-[#8E211E] px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide shadow-sm">
                <Sparkles size={12} className="fill-[#8E211E] text-[#8E211E]" />
                <span>Kustom</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Enterprise
                </h3>
                <p className="text-[11px] font-mono text-red-200/90 mt-0.5">
                  Kebutuhan kustom & multi-lokasi
                </p>

                <div className="mt-4 py-3 border-y border-white/20">
                  <span className="text-[10px] font-mono text-red-200 block uppercase tracking-wider font-bold">
                    Estimasi Investasi
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    Hubungi kami
                  </div>
                </div>

                <p className="text-xs text-red-100/90 mt-4 leading-relaxed">
                  Solusi kemitraan skala besar yang disesuaikan penuh dengan kebutuhan spesifik event atau bisnis Anda.
                </p>

                <div className="mt-5 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Fasilitas Utama:
                  </h4>
                  <ul className="space-y-2 text-xs text-red-50">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>Semua fitur & fasilitas lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>Custom Branding & Layout Builder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>Sistem Voucher & Analytics Dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>Dukungan teknis prioritas (24/7 Support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>Pengembangan fitur khusus & unlimited devices</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={waEnterpriseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#8E211E] py-3 px-4 rounded-xl font-bold text-xs transition-all duration-300 shadow-md"
                >
                  <span className="text-[#8E211E] font-bold">Hubungi Sales</span>
                  <ArrowUpRight size={14} className="text-[#8E211E]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── DOTS INDICATOR KHUSUS TAMPILAN PONSEL ── */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                activeCardIndex === index
                  ? "w-6 bg-[#8E211E]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}