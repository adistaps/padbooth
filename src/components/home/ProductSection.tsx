import Image from 'next/image'

const features = [
  '3 times photos / session',
  '1 pc 4R or 2 pcs cutstrip print out',
  'All the soft files can be downloaded',
  'Payment using QRIS',
]

const bottomPhotos = [
  {
    title: "Product 1",
    src: "/product2.webp",
    rotate: "-rotate-2 hover:rotate-0",
  },
  {
    title: "Product 2",
    src: "/product3.webp",
    rotate: "rotate-1 hover:rotate-0",
  },
  {
    title: "Product 3",
    src: "/product4.webp",
    rotate: "-rotate-1 hover:rotate-0",
  },
  {
    title: "Product 4",
    src: "/product5.webp",
    rotate: "rotate-2 hover:rotate-0",
  },
]

export function ProductSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* ── Decorative Abstract Icons & Stars ── */}

      {/* 1. Halftone dotted star — top-left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 z-10 pointer-events-none select-none opacity-80">
        <svg viewBox="0 0 220 220" className="w-full h-full">
          <defs>
            <pattern id="dot-pattern" patternUnits="userSpaceOnUse" width="8" height="8">
              <circle cx="4" cy="4" r="2.5" fill="#7dd3fc" />
            </pattern>
            <clipPath id="star-clip">
              <polygon points="110,5 135,80 215,80 152,125 175,200 110,155 45,200 68,125 5,80 85,80" />
            </clipPath>
          </defs>
          <rect width="220" height="220" fill="url(#dot-pattern)" clipPath="url(#star-clip)" />
        </svg>
      </div>

      {/* 2. Abstract Organic Soft Blob — behind machine photo */}
      <div className="absolute top-8 right-8 md:right-20 lg:right-28 w-60 h-60 md:w-96 md:h-96 z-0 pointer-events-none select-none opacity-50">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#bae6fd]">
          <path d="M44.7,-64.1C57.4,-57.4,66.8,-44.6,72.4,-30.3C78,-16,79.8,-0.1,76.5,14.6C73.2,29.3,64.8,42.8,53.4,52.9C42,63,27.5,69.7,12.2,71.7C-3.1,73.7,-19.2,71,-33.6,63.9C-48,56.8,-60.7,45.3,-68.1,30.8C-75.5,16.3,-77.6,-1.2,-73.4,-16.9C-69.2,-32.6,-58.7,-46.5,-45.5,-53.1C-32.3,-59.7,-16.1,-59,-0.3,-58.6C15.6,-58.2,32,-50.8,44.7,-64.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* 3. Floating 4-pointed Sparkle Star — center top near title */}
      <div className="absolute top-12 left-[44%] w-8 h-8 md:w-11 md:h-11 z-10 pointer-events-none select-none text-[#b91c1c] animate-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>

      {/* 4. Small Pink Sparkle Star — left side near features */}
      <div className="absolute top-60 left-10 md:left-16 w-6 h-6 md:w-8 md:h-8 z-10 pointer-events-none select-none text-[#fb7185] opacity-80">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>

      {/* 5. 5-pointed Retro Star — top right */}
      <div className="absolute top-6 right-6 w-9 h-9 md:w-12 md:h-12 z-10 pointer-events-none select-none text-[#f472b6] opacity-75">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
        </svg>
      </div>


      {/* ── Main Product Section ── */}
      <div className="relative w-full">

        {/* Content: left text + right machine photo */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 pb-2 md:pt-12 md:pb-4">

          {/* Left / Middle: Typography & Features Container */}
          <div className="flex flex-col items-start shrink-0">

            {/* Typography Group: Self, PHOTO KIOSK, Servies */}
            <div className="inline-flex flex-col items-start leading-none">
              {/* Self — cursive italic */}
              <span
                className="block text-[#b91c1c] leading-none"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                  marginBottom: '-0.1em',
                  marginLeft: '0.05em',
                }}
              >
                Self
              </span>

              {/* PHOTO KIOSK — heavy bold, strictly 1 line */}
              <h2
                className="block text-[#b91c1c] uppercase leading-none tracking-tight whitespace-nowrap"
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 6.8vw, 6.2rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                PHOTO KIOSK
              </h2>

              {/* Servies — cursive italic, right aligned to PHOTO KIOSK right boundary */}
              <span
                className="block text-[#b91c1c] leading-none self-end text-right whitespace-nowrap"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
                  marginTop: '-0.25em',
                }}
              >
                Servies
              </span>
            </div>

            {/* Bullet Features — under Servies, aligned right next to photo machine */}
            <ul className="mt-6 md:mt-8 space-y-2 text-neutral-900 text-xs sm:text-sm md:text-[0.92rem] font-bold self-end text-left pr-2 md:pr-6">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right: Machine Image — product1.png */}
          <div
            className="relative shrink-0 w-full lg:w-auto flex items-end justify-center lg:justify-end"
            style={{ height: 'clamp(320px, 45vw, 520px)', width: 'clamp(280px, 40vw, 540px)' }}
          >
            <Image
              src="/product1.webp"
              alt="Self Photo Kiosk Machine"
              fill
              sizes="(max-width: 1024px) 85vw, 45vw"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>

      {/* ── Bottom: 4 Sample Product Cards (Selalu Horizontal 4 Kolom & Tanpa Deskripsi) ── */}
      <div className="relative z-20 bg-white pt-2 pb-10 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
            {bottomPhotos.map((photo, idx) => (
              <div
                key={idx}
                className={`relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl bg-neutral-100 overflow-hidden shadow-sm hover:shadow-md ${photo.rotate} transition-transform duration-300 group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 25vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}