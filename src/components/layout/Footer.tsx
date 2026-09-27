"use client"

import Image from 'next/image'
import Link from 'next/link'
import { RuixenGradientFooter } from '@/components/ui/ruixen-gradient-footer'

export function SiteFooter() {
  return (
    <RuixenGradientFooter gradientHeight="35vh" className="bg-white border-t border-neutral-100">
      <div className="mx-auto w-full max-w-7xl px-6 pt-12">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-6">

          {/* Brand Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90" aria-label="Padbooth home">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.webp"
                  alt="Padbooth Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              Make memories, print the moment.
            </p>
          </div>

          {/* Links Section (Menggunakan Logic & Data Bawaan) */}
          <nav className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-wider sm:grid-cols-2 lg:col-span-4">

            {/* Kolom 1: Explore */}
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Explore</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#about" className="text-neutral-600 transition-colors hover:text-neutral-900">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="text-neutral-600 transition-colors hover:text-neutral-900">
                    Lokasi
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-600 transition-colors hover:text-neutral-900">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 2: Let's Connect */}
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Let&apos;s connect</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#paket-event" className="text-neutral-600 transition-colors hover:text-neutral-900">
                    Paket event
                  </a>
                </li>
                <li>
                  <a href="#kemitraan" className="text-neutral-600 transition-colors hover:text-neutral-900">
                    Kemitraan
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6289700060959?text=Halo%20Padbooth!%20Saya%20mau%20tanya-tanya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-200/80 pt-6 pb-4 font-mono text-xs uppercase tracking-wider text-neutral-500 sm:flex-row">
          <span>Wonosobo, Jawa Tengah — 2026</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems normal
          </span>
          <span>© Padbooth</span>
        </div>
      </div>
    </RuixenGradientFooter>
  )
}