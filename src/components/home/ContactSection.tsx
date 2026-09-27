import Image from 'next/image'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const waUrl = 'https://wa.me/6289700060959?text=Halo%20Padbooth!%20Saya%20mau%20tanya-tanya.'

  return (
    <section id="contact" className="w-full bg-[#fdf2f2] py-12 md:py-20 border-t border-rose-100 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Kolom Kiri: Gambar logo3d.png */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[240px] sm:min-h-[340px]">
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[360px]">
              <Image
                src="/logo3d.png"
                alt="Padbooth 3D Logo"
                fill
                className="object-contain object-center drop-shadow-md"
                priority
              />
            </div>
          </div>

          {/* Kolom Kanan: Konten Informasi Kontak */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Header / Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Connect with <br className="hidden sm:inline" />
              <span className="text-[#8E211E]">Padbooth Team</span>
            </h2>

            <p className="text-neutral-600 text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
              Ada pertanyaan seputar sewa photobooth event, paket kemitraan, atau kolaborasi khusus? Tim kami siap membantu mewujudkan momen terbaik Anda.
            </p>

            {/* Daftar Info Kontak Vertikal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 py-4 border-y border-rose-200/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100/80 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#8E211E]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block font-semibold">WhatsApp</span>
                  <p className="text-xs sm:text-sm font-bold text-neutral-800">0897-0060-959</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100/80 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#8E211E]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block font-semibold">Lokasi</span>
                  <p className="text-xs sm:text-sm font-bold text-neutral-800">Wonosobo, Jateng</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100/80 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#8E211E]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block font-semibold">Layanan</span>
                  <p className="text-xs sm:text-sm font-bold text-neutral-800">24/7 Response</p>
                </div>
              </div>
            </div>

            {/* Tombol CTA dengan Font Putih */}
            <div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8E211E] hover:bg-[#731a18] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#8E211E]/20"
              >
                <span className="text-white font-semibold">Hubungi Kami</span>
                <ArrowUpRight size={16} className="text-white" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}