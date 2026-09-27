'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, X, ExternalLink } from 'lucide-react';
import {
  Stories,
  StoriesContent,
  Story,
  StoryOverlay,
} from '@/components/ui/stories-carousel';

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface StoryItem {
  id: number;
  username: string;
  author: string;
  avatar: string;
  poster: string;
  video: string;
  reelUrl: string;
}

// 5 Data Reels dengan video lokal dari /public/video/v1.mp4 - v5.mp4
const storiesData: StoryItem[] = [
  {
    id: 1,
    username: '@padbooth.wsb',
    author: 'Newspaper Photobooth',
    avatar: '/logo.webp',
    poster: '/frame (3).jpg',
    video: '/video/v1.mp4',
    reelUrl: 'https://www.instagram.com/reel/DargEyIpoQA/',
  },
  {
    id: 2,
    username: '@padbooth.wsb',
    author: 'Self Photo Kiosk',
    avatar: '/logo.webp',
    poster: '/frame (8).jpg',
    video: '/video/v2.mp4',
    reelUrl: 'https://www.instagram.com/reel/DbaMnr_JKmF/',
  },
  {
    id: 3,
    username: '@padbooth.wsb',
    author: 'Double U Cafe & Padbooth',
    avatar: '/logo.webp',
    poster: '/frame (9).jpg',
    video: '/video/v3.mp4',
    reelUrl: 'https://www.instagram.com/reel/Ddvx6CvBSH1/',
  },
  {
    id: 4,
    username: '@padbooth.wsb',
    author: 'Photobooth Date',
    avatar: '/logo.webp',
    poster: '/product4.jpg',
    video: '/video/v4.mp4',
    reelUrl: 'https://www.instagram.com/reel/DZb-y6Npbth/',
  },
  {
    id: 5,
    username: '@padbooth.wsb',
    author: 'Padbooth Wonosobo',
    avatar: '/logo.webp',
    poster: '/product5.jpg',
    video: '/video/v5.mp4',
    reelUrl: 'https://www.instagram.com/reel/DZUD7nqh_YH/',
  },
];

export function VideoSection() {
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  // Kunci scroll halaman saat modal terbuka (khusus di smartphone)
  useEffect(() => {
    if (activeStory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStory]);

  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">

      {/* Header — Tagline */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <a
            href="https://www.instagram.com/padbooth.wsb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-[#e1306c] transition-colors"
          >
            <InstagramIcon size={14} className="text-[#e1306c]" />
            <span>Follow @padbooth.wsb</span>
            <span className="p-1.5 rounded-full bg-neutral-100 text-neutral-800">
              <Play fill="currentColor" size={10} />
            </span>
          </a>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          Good times<br />
          <em className="italic font-normal">look like this.</em>
        </h2>
        <p className="text-sm md:text-base text-neutral-500 mt-2">
          Keseruan pengunjung Padbooth di Instagram Reels & Stories.
        </p>
      </div>

      {/* Carousel Stories — Py Padding Cukup Agar Card Tidak Terpotong saat Touch/Hover */}
      <div className="px-6 max-w-7xl mx-auto py-2">
        <Stories className="py-4 md:py-6 overflow-visible">
          <StoriesContent className="py-2 overflow-visible">
            {storiesData.map((story) => (
              <Story
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="relative h-[280px] w-[158px] sm:h-[320px] sm:w-[180px] md:h-[380px] md:w-[215px] rounded-2xl overflow-hidden group shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03] bg-neutral-900 select-none"
              >
                {/* Gambar Thumbnail Preview Langsung dari Frame Video MP4 */}
                <video
                  src={`${story.video}#t=0.001`}
                  preload="metadata"
                  muted
                  playsInline
                  aria-hidden="true"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none z-0"
                />

                {/* Gradient Overlay */}
                <StoryOverlay />

                {/* Tombol Play di Tengah */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-90 group-hover:opacity-100 transition-all">
                  <span className="p-3.5 rounded-full bg-black/60 text-white backdrop-blur-md transform group-hover:scale-110 transition-transform shadow-lg">
                    <Play fill="currentColor" size={22} className="translate-x-0.5" />
                  </span>
                </div>

                {/* Instagram Top Badge Icon */}
                <div className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white group-hover:bg-[#e1306c] transition-colors">
                  <InstagramIcon size={14} />
                </div>

                {/* Instagram Author Info (Avatar + Handle) */}
                <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center gap-2.5">
                  <div className="shrink-0 p-[2px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-sm">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white bg-neutral-100">
                      <Image
                        src={story.avatar}
                        alt={story.author}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white leading-tight truncate drop-shadow">
                      {story.username}
                    </p>
                    <p className="text-[0.68rem] text-white/80 leading-tight truncate">
                      {story.author}
                    </p>
                  </div>
                </div>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </div>

      {/* ── VIDEO BARU DIRENDER DI DOM & DIPUTAR SAAT TOMBOL PLAY DIKLIK ── */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveStory(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[380px] h-[80vh] sm:h-[85vh] max-h-[680px] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Header */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
                    <Image src={activeStory.avatar} alt={activeStory.author} fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">{activeStory.username}</p>
                  <p className="text-[0.68rem] text-white/80 leading-tight">{activeStory.author}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveStory(null)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors border border-white/10"
                aria-label="Tutup Player"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player — HANYA DIRENDER DI SINI SAAT DIKLIK (LOKAL FILE /video/v1.mp4 - v5.mp4) */}
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <video
                src={activeStory.video}
                poster={activeStory.poster}
                autoPlay
                controls
                loop
                aria-label={activeStory.author}
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Bar Link */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-xs font-semibold border border-white/10">
              <span className="text-white/90">Padbooth Reels</span>
              <a
                href={activeStory.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#f472b6] hover:text-white transition-colors"
              >
                <span>Lihat di Instagram</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}