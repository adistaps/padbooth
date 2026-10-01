import Image from 'next/image'

const benefits = [
  {
    title: 'Mengabadikan Jutaan Momen Sejak 2022',
    description: 'Lebih dari 1 juta kenangan indah telah tercipta dan terabadikan secara presisi lewat setiap jepretan mesin Padbooth.',
    imageSrc: '/product1.webp',
  },
  {
    title: 'Fleksibilitas Photobox Outdoor & Indoor',
    description: 'Konsep booth modern tanpa batasan ruang yang memungkinkan kamu mengambil foto full-body dari ujung rambut hingga ujung kaki.',
    imageSrc: '/product2.webp',
  },
  {
    title: 'Kualitas Cetak & Visual Sempurna',
    description: 'Selalu diperbarui dengan teknologi terkini untuk menjamin hasil jepretan tajam serta kualitas cetak foto premium yang tahan lama.',
    imageSrc: '/product3.webp',
  },
  {
    title: 'Pengalaman Berfoto Seru & Modern',
    description: 'Hadir dengan teknologi antarmuka yang interaktif, menciptakan momen berfoto yang unik dan berkesan bersama teman maupun pasangan.',
    imageSrc: '/product4.webp',
  },
  {
    title: 'Inovasi Asli Kebanggaan Anak Bangsa',
    description: 'Kami bangga menjadi pelopor produk lokal Indonesia yang terus berinovasi untuk memajukan industri photo booth modern.',
    imageSrc: '/product5.webp',
  },
]

export function BenefitSection() {
  return (
    <section id="benefit" className="w-full bg-white py-12 sm:py-16 md:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-x-12 md:gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-sm border border-neutral-200/60">
                <Image
                  src={benefit.imageSrc}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content Box */}
              <div className="mt-3.5 sm:mt-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#8E211E] transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
