import Image from 'next/image'
import { Sparkles } from 'lucide-react'

// Layout items organized into 4 vertical columns to match exact reference grid
const galleryColumns = [
  // Column 1
  [
    {
      title: "Traditional Elegance",
      src: "/frame3.webp",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Intimate Moments",
      src: "/frame8.webp",
      aspect: "aspect-[3/4]",
    },
  ],
  // Column 2
  [
    {
      title: "Camera & Sunflowers",
      src: "/frame9.webp",
      aspect: "aspect-[16/9]",
    },
    {
      title: "Golden Hour Glow",
      src: "/product2.webp",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Cultural Portrait",
      src: "/product3.webp",
      aspect: "aspect-[4/3]",
    },
  ],
  // Column 3
  [
    {
      title: "Royal Sunset",
      src: "/product4.webp",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Coastal Breeze",
      src: "/frame8.webp",
      aspect: "aspect-[3/4]",
    },
  ],
  // Column 4
  [
    {
      title: "Dramatic Profile",
      src: "/frame3.webp",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Outdoor Adventures",
      src: "/frame9.webp",
      aspect: "aspect-[3/4]",
    },
  ],
]

export function GallerySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Proof that<br />
              <span className="italic font-normal text-neutral-600">fun happened.</span>
            </h2>
          </div>
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 animate-pulse" />
        </div>

        {/* Masonry Layout Matching Reference Image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3 md:gap-4">
              {col.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className={`group relative overflow-hidden rounded-2xl bg-neutral-100 ${img.aspect} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}