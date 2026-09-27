'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

export function AboutCard() {
  const headlineText = "Life has no rewind so catch your moment at padbooth"
  const words = headlineText.split(" ")

  // Variasi Animasi Reveal Word
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="relative w-full bg-white py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">

        {/* ================= BAGIAN ATAS: HEADLINE ================= */}
        <div className="mb-10 sm:mb-14 md:mb-20 text-left lg:text-left">
          <motion.h2
            className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.15] text-neutral-900 flex flex-wrap justify-start lg:justify-start gap-x-2.5 sm:gap-x-3 gap-y-1.5 sm:gap-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* ================= BAGIAN BAWAH: LAYOUT OVERLAP ================= */}
        <div className="relative flex flex-col lg:block w-full lg:mt-24">

          {/* ================= MASKOT (Overlapping dengan Card di Mobile) ================= */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-4 xl:-left-8 z-20 w-[220px] h-[280px] sm:w-[320px] sm:h-[400px] lg:w-[420px] lg:h-[150%] mx-auto lg:mx-0 -mb-14 sm:-mb-16 lg:mb-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full relative"
            >
              <Image
                src="/mascot.webp"
                alt="Mascot Padbooth"
                fill
                className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
                priority
              />
            </motion.div>
          </div>

          {/* ================= CARD PUTIH ================= */}
          <div className="relative z-10 w-full bg-white rounded-[2rem] md:rounded-[3rem] p-6 pt-14 sm:p-10 sm:pt-20 lg:py-10 lg:pr-14 lg:pl-[380px] xl:pl-[420px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-neutral-100 flex flex-col justify-center min-h-[260px] lg:min-h-[300px]">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Judul PADBOOTH: Rata Kiri di Mobile */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black tracking-wide text-[#8E211E] mb-3 text-left uppercase">
                PADBOOTH
              </h3>

              {/* Deskripsi: Rata Kiri di Mobile */}
              <div className="space-y-2.5 text-neutral-800 font-bold text-sm sm:text-base leading-relaxed max-w-2xl text-left mb-6">
                <p>
                  Padbooth adalah layanan photobooth modern di Wonosobo yang hadir di berbagai kafe & resto favorit untuk mengabadikan setiap momen dan cerita berharga Anda.
                </p>
                <p>
                  Beroperasi secara profesional sejak 2025, kami menghadirkan frame kekinian, hasil foto berkualitas, serta pengalaman berfoto yang mudah dan menyenangkan.
                </p>
              </div>

              {/* Tombol Selengkapnya: Rata Kiri di Mobile */}
              <div className="flex justify-start">
                <a
                  href="#paket-event"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#8E211E] px-6 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-[#8E211E]/20 hover:bg-[#6A1816] hover:shadow-[#6A1816]/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
                >
                  <span className="tracking-wide text-white">Selengkapnya</span>
                  <div className="bg-white/20 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={14} strokeWidth={2.5} className="text-white" />
                  </div>
                </a>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}