import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'

const eventFeatures = [
  'Unlimited prints (Cetak sepuasnya selama acara)',
  'Custom frame eksklusif sesuai tema acara',
  'Akses softfile via QR code (foto, GIF, & live video)',
  '2–3 orang crew profesional standby',
  'Backdrop/latar belakang polos (opsional)',
  'Properti foto lucu & menarik',
  'Professional studio lighting & kamera HD',
]

export function EventPackageSection() {
  const waEventText = encodeURIComponent('Halo Padbooth! Saya mau tanya soal Paket Event.')
  const waEventUrl = `https://wa.me/6289700060959?text=${waEventText}`

  return (
    <section id="paket-event" className="relative w-full bg-white py-16 md:py-24 scroll-mt-20 overflow-hidden">

      {/* ── ABSTRACT BACKGROUND SVG ELEMENTS ── */}
      {/* 1. Organic Soft Gradient Glow (Top Left) */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-[#8E211E]/10 via-rose-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 2. Abstract Starburst / Sparkle SVG (Top Right) */}
      <svg
        className="absolute top-12 right-12 md:right-24 w-16 h-16 text-[#8E211E]/15 animate-pulse pointer-events-none -z-10"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
      </svg>

      {/* 3. Decorative Dotted Grid Pattern SVG (Left behind image) */}
      <svg
        className="absolute bottom-10 left-6 md:left-16 w-36 h-36 text-neutral-200 opacity-60 pointer-events-none -z-10"
        fill="none"
      >
        <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>

      {/* 4. Abstract Concentric Curved Waves / Rings SVG (Bottom Right) */}
      <svg
        className="absolute -bottom-10 -right-10 w-72 h-72 text-[#8E211E]/10 pointer-events-none -z-10"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="150" cy="150" r="40" />
        <circle cx="150" cy="150" r="70" strokeDasharray="6 6" />
        <circle cx="150" cy="150" r="100" />
        <circle cx="150" cy="150" r="130" strokeDasharray="8 8" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Padbooth <em className="italic font-normal text-neutral-600">Event.</em>
            </h2>
          </div>
        </div>

        {/* Layout Utama 2 Kolom (Foto Kiri + Detail Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">

          {/* Kolom Kiri: Gambar event.png Tanpa Terpotong (object-contain) */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[540px] flex items-center justify-center p-2">
            {/* Background Ambient Glow behind photobooth */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#8E211E]/10 to-rose-200/20 blur-2xl -z-10" />

            <Image
              src="/event.webp"
              alt="Padbooth Event"
              fill
              className="object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>

          {/* Kolom Kanan: Detail Informasi & Fasilitas */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Title & Info */}
            <h3 className="text-3xl font-extrabold text-neutral-900">Sewa Photobooth Event</h3>
            <p className="text-neutral-600 text-sm mt-2">
              Durasi sewa disesuaikan dengan kebutuhan konsumen & rundown acara.
            </p>

            {/* Price Badge */}
            <div className="py-2 my-5">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono block mb-1 font-bold">
                Mulai dari
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900">
                Rp 1.300.000
              </div>
            </div>

            {/* List Fasilitas */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
                Fasilitas Lengkap Paket Event:
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                {eventFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#8E211E] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol Action */}
            <div>
              <a
                href={waEventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#8E211E] hover:bg-[#731a18] text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-sm shadow-[#8E211E]/20"
              >
                <span className="text-white font-semibold">Booking Sekarang</span>
                <ArrowUpRight size={18} className="text-white" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}