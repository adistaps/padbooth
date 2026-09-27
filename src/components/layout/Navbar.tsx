'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronDown, LayoutGrid, Plus, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  return <SiteHeader />
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)

  // Deteksi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper untuk memeriksa rute aktif
  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* 1. HEADER UTAMA (Satu baris floating kapsul warna Putih Bersih) */}
      <header
        className={`fixed top-4 left-0 right-0 z-40 px-4 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
          }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-white/95 border border-neutral-200/80 px-6 py-2.5 shadow-xl backdrop-blur-md transition-all">

          {/* Logo Brand Padbooth */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Padbooth home"
          >
            <div className="relative h-9 w-28">
              <Image
                src="/logo.webp"
                alt="Padbooth Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigasi Desktop dengan Indikator Smooth & Hover */}
          <nav className="hidden items-center gap-1 text-[14px] font-medium text-neutral-700 md:flex" aria-label="Main navigation">

            {/* About us */}
            <a
              href="#about"
              className="relative px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 hover:bg-neutral-100 hover:text-neutral-900"
            >
              About us
            </a>

            {/* Lokasi */}
            <a
              href="#lokasi"
              className="relative px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 hover:bg-neutral-100 hover:text-neutral-900"
            >
              Lokasi
            </a>

            {/* Dropdown Let's Connect */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setConnectOpen(!connectOpen)}
                aria-expanded={connectOpen}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out flex items-center gap-1 focus:outline-none ${connectOpen
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
              >
                Let&apos;s connect
                <ChevronDown size={13} className={`transition-transform duration-200 ${connectOpen ? 'rotate-180' : ''}`} />
              </button>

              {connectOpen && (
                <div className="absolute left-0 mt-3 w-48 rounded-2xl border border-neutral-100 bg-white p-2 shadow-2xl z-50">
                  <a
                    href="#paket-event"
                    onClick={() => setConnectOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200"
                  >
                    Paket event <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#kemitraan"
                    onClick={() => setConnectOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200"
                  >
                    Kemitraan <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>

            {/* Download Foto */}
            <span className="px-3.5 py-1.5 flex items-center gap-1.5 text-neutral-400">
              Download foto
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
                soon
              </span>
            </span>

            {/* Contact us */}
            <a
              href="#contact"
              className="relative px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 hover:bg-neutral-100 hover:text-neutral-900"
            >
              Contact us
            </a>
          </nav>

          {/* Tombol Grid Menu Kanan */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-all hover:bg-neutral-100"
            aria-label="Open full menu"
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </header>

      {/* 2. TOMBOL SCROLLED KANAN ATAS (Latar Putih saat Halaman Di-scroll) */}
      <div
        className={`fixed top-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
      >
        <a
          href="#contact"
          className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/95 px-5 py-2.5 text-xs font-semibold text-neutral-900 shadow-xl hover:bg-neutral-100 transition-all"
        >
          Contact us <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/95 px-4 py-2.5 text-xs font-bold tracking-wider text-neutral-900 uppercase shadow-xl hover:bg-neutral-100 transition-all"
        >
          <span>MENU</span>
          <LayoutGrid size={16} />
        </button>
      </div>

      {/* 3. FLYOUT PANEL DRAWER / MODAL MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs p-3 sm:p-5">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setMenuOpen(false)} />

          {/* Floating Card Drawer Putih */}
          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-7 text-neutral-900 shadow-2xl transition-all">

            {/* Top Bar Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
              <a href="#top" className="flex items-center" onClick={() => setMenuOpen(false)}>
                <div className="relative h-9 w-28">
                  <Image
                    src="/logo.webp"
                    alt="Padbooth Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Links Utama */}
            <nav className="my-auto flex flex-col gap-4 py-4 text-2xl font-bold">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-300"
              >
                About us
              </a>

              <a
                href="#lokasi"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-300"
              >
                Lokasi
              </a>

              {/* Accordion Expandable */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setConnectOpen(!connectOpen)}
                  className="flex items-center justify-between rounded-2xl px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all focus:outline-none"
                >
                  <span>Let&apos;s connect</span>
                  <Plus size={20} className={`text-neutral-400 transition-transform duration-200 ${connectOpen ? 'rotate-45' : ''}`} />
                </button>

                {connectOpen && (
                  <div className="mt-2 flex flex-col gap-2 pl-6 text-lg font-medium">
                    <a
                      href="#paket-event"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-3 py-1.5 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      Paket event
                    </a>
                    <a
                      href="#kemitraan"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-3 py-1.5 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      Kemitraan
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between rounded-2xl px-4 py-2 text-neutral-400">
                <span>Download foto</span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-500">soon</span>
              </div>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-300"
              >
                Contact us
              </a>
            </nav>

            {/* Footer Modal Drawer */}
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-neutral-600">
                <a href="https://wa.me/6289700060959" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
                  WhatsApp
                </a>
                <span>•</span>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-neutral-900">
                  Email
                </a>
                <span>•</span>
                <a href="#" className="hover:text-neutral-900">
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export function WhatsAppButton({ label = 'Booking sekarang' }: { label?: string }) {
  const defaultText = 'Halo Padbooth! Saya mau booking Padbooth Service.'
  return (
    <a
      className="button button-coral"
      href={`https://wa.me/6289700060959?text=${encodeURIComponent(defaultText)}`}
    >
      {label} <ArrowUpRight size={16} />
    </a>
  )
}