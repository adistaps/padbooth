import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin, Plus } from 'lucide-react'

const locations = [
  { name: 'Kopi Kulo Wonosobo', address: 'Jl. A. Yani, Wonosobo', color: 'blue' },
  { name: 'Kedai 28', address: 'Jl. Pasukan Ronggolawe', color: 'coral' },
  { name: 'Resto pilihanmu', address: 'Coming to a spot near you', color: 'cream' },
  { name: 'Spot Tambahan', address: 'Segera Hadir di Kota Anda', color: 'cream' },
]

export function LocationSection() {
  return (
    /* Full-width wrapper putih tanpa batas layar */
    <section id="lokasi" className="relative w-full bg-white py-12 overflow-hidden scroll-mt-20">
      {/* Container konten utama */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            {/* Judul Utama */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Come say <em className="italic font-normal">hi.</em>
            </h2>
          </div>

          {/* Tombol Kanan Atas */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#8E211E] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-[#741b18] transition-colors self-start md:self-auto shadow-sm"
          >
            <span className="text-white font-medium">Tanya Lokasi Lain</span>
            <span className="bg-[#741b18] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* Scroll Horizontal Container */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 scrollbar-none snap-x snap-mandatory pr-28 sm:pr-36 md:pr-48 lg:pr-56">
            {locations.map((location, index) => (
              <article
                key={location.name}
                className="group bg-white rounded-[2rem] p-3 flex flex-col justify-between border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 w-[260px] sm:w-[320px] md:w-[360px] shrink-0 snap-start"
              >
                {/* Area Gambar / Visual Box */}
                <div className="relative aspect-[4/3] w-full rounded-2xl bg-[#e3e3e3] overflow-hidden p-4">
                  {/* Badge Nomor di Atas */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-neutral-800">
                      <MapPin size={12} />
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Info (Informasi Nama & Alamat) */}
                <div className="bg-white rounded-2xl p-4 mt-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 line-clamp-1">
                      {location.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {location.address}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-1 text-xs font-bold text-neutral-800 uppercase tracking-wider pl-2 shrink-0">
                    <span className="hidden sm:inline">VIEW</span>
                    <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mascot Fixed on Right — Berada di luar area scroll, tidak bergerak saat card di-scroll */}
        <div className="absolute bottom-0 -right-4 sm:-right-6 md:-right-8 lg:-right-12 w-36 sm:w-48 md:w-60 lg:w-72 aspect-[4/5] z-20 pointer-events-none select-none translate-y-2 sm:translate-y-4">
          <Image
            src="/mascot.webp"
            alt="Padbooth Mascot"
            fill
            sizes="(max-width: 768px) 45vw, 30vw"
            className="object-contain object-bottom drop-shadow-xl pointer-events-none select-none -scale-x-100"
            priority
          />
        </div>

      </div>
    </section>
  )
}