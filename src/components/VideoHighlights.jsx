import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import Sparkle from './Sparkle';

const youtubeVideos = [
  {
    id: 'QKNgwkxmv3g',
    title: 'Chess Tournament by JA Events',
    subtitle: 'Youth Championship & Strategic Play',
    tag: 'CHESS COMPETITION',
    category: 'Tournament',
    url: 'https://youtu.be/QKNgwkxmv3g?si=PdXnUpyQDjicRT3v',
    embedUrl: 'https://www.youtube-nocookie.com/embed/QKNgwkxmv3g',
    thumbnail: 'https://i.ytimg.com/vi/QKNgwkxmv3g/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/QKNgwkxmv3g/hqdefault.jpg',
    description:
      'Experience the thrill of strategy and skill at the JA Events Chess Tournament. Young minds, passionate competitors, and rising talents come together to think, compete, and celebrate mastery over the chessboard.',
    highlights: ['Strategic Masterclasses', 'Youth Talent Showcase', 'Trophies & Recognition'],
    badge: 'FEATURED TOURNAMENT',
  },
  {
    id: 'rw-FubATuH0',
    title: 'Women Entrepreneurs Exhibition',
    subtitle: 'Celebrating Women-Led Business & Creative Vision',
    tag: 'EXHIBITION & MARKET',
    category: 'Exhibition',
    url: 'https://youtu.be/rw-FubATuH0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/rw-FubATuH0',
    thumbnail: 'https://i.ytimg.com/vi/rw-FubATuH0/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/rw-FubATuH0/hqdefault.jpg',
    description:
      'A vibrant showcase organized by JA Events dedicated to women entrepreneurs, innovators, and artisans in Dubai. Discover handmade treasures, bespoke culinary creations, and business brilliance.',
    highlights: ['50+ Female Founders', 'Artisan Showcases', 'Community Connection'],
    badge: 'LIVE SHOWCASE',
  },
  {
    id: '_iRBNKeOqd4',
    title: 'Women Entrepreneurs Exhibition Highlights',
    subtitle: 'Atmosphere, Energy & Memorable Impressions',
    tag: 'COMMUNITY HIGHLIGHTS',
    category: 'Highlights',
    url: 'https://youtu.be/_iRBNKeOqd4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_iRBNKeOqd4',
    thumbnail: 'https://i.ytimg.com/vi/_iRBNKeOqd4/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/_iRBNKeOqd4/hqdefault.jpg',
    description:
      'Dynamic glimpses into the shared laughter, vibrant crowds, and energetic spirit that made the Women Entrepreneurs Exhibition an unforgettable day of empowerment and celebration.',
    highlights: ['Crowd Energy', 'Networking Moments', 'Inspiring Encounters'],
    badge: 'EVENT RECAP',
  },
];

function YouTubeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function VideoHighlights() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlayingTheater, setIsPlayingTheater] = useState(false);

  const activeVideo = youtubeVideos[activeVideoIndex];

  const handleSelectVideo = (index) => {
    setActiveVideoIndex(index);
    setIsPlayingTheater(true);
  };

  return (
    <section
      id="videos"
      className="relative bg-[#1C1229] text-white selection:bg-ja-purple/30 selection:text-white py-16 lg:py-24 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-ja-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#4F327C]/25 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative top border glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ja-purple/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-ja-purple uppercase">
                Moments in Motion
              </span>
              <Sparkle size={14} absolute={false} className="text-ja-purple" />
            </div>
            <h2 className="text-[clamp(32px,4.5vw,58px)] font-sans font-semibold text-white leading-[1.08] tracking-tight">
              Watch Our Events{' '}
              <span className="font-serif italic text-ja-purple font-normal">In Action.</span>
            </h2>
            <p className="mt-4 text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
              Step straight onto the floor. Feel the focus of tournament contenders and the infectious
              spark of entrepreneurial community gatherings organized by JA Events across Dubai.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@eventswithja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg group"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>

        {/* Spotlight Theater Player */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl lg:rounded-[32px] overflow-hidden bg-white/5 border border-white/15 shadow-2xl backdrop-blur-xl mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Player / Preview Frame (7 cols) */}
            <div className="lg:col-span-7 relative bg-black w-full aspect-video lg:aspect-auto min-h-[240px] sm:min-h-[300px] lg:min-h-full overflow-hidden flex items-center justify-center">
              {isPlayingTheater ? (
                <iframe
                  key={activeVideo.id}
                  src={`${activeVideo.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] group cursor-pointer" onClick={() => setIsPlayingTheater(true)}>
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    onError={(e) => {
                      e.target.src = activeVideo.fallbackThumbnail;
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-ja-purple/90 text-white shadow-[0_0_40px_rgba(118,83,173,0.7)] backdrop-blur-sm border border-white/30"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        className="absolute inset-0 rounded-full border border-ja-purple"
                      />
                      <Play className="w-7 h-7 lg:w-8 lg:h-8 fill-current translate-x-0.5" />
                    </motion.div>
                  </div>

                  {/* Badge on Top Left */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest text-ja-lavender uppercase">
                      {activeVideo.tag}
                    </span>
                  </div>

                  {/* Watch on YouTube direct pill on Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-red-600/90 text-white backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-wider flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <YouTubeIcon className="w-3.5 h-3.5" />
                      <span>Open on YouTube ↗</span>
                    </a>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 pointer-events-none z-10">
                    <span className="font-semibold tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Click to play video
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Details & Meta (5 cols) */}
            <div className="lg:col-span-5 p-5 lg:p-6 flex flex-col justify-between bg-gradient-to-br from-white/[0.07] to-transparent">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-ja-purple uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {activeVideo.badge}
                  </span>
                  <span className="text-[11px] text-white/40 font-mono font-medium">
                    0{activeVideoIndex + 1} / 0{youtubeVideos.length}
                  </span>
                </div>

                <h3 className="font-serif text-xl lg:text-2xl text-white font-normal mb-1 leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-xs font-medium text-ja-lavender/90 mb-3 italic">
                  {activeVideo.subtitle}
                </p>

                <p className="text-xs lg:text-sm text-white/75 leading-relaxed mb-4">
                  {activeVideo.description}
                </p>

                {/* Video Highlights Pills */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white/50 block">
                    What You'll Experience:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeVideo.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[11px] border border-white/10"
                      >
                        <CheckCircle2 className="w-3 h-3 text-ja-purple" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsPlayingTheater(!isPlayingTheater)}
                  className="px-4 py-2 rounded-full bg-ja-purple hover:bg-ja-purple/90 text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition-all shadow-md hover:shadow-ja-purple/30"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {isPlayingTheater ? 'Reload Video' : 'Play in Theater'}
                </button>

                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition-colors border border-white/15"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Card Interactive Showcase Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {youtubeVideos.map((video, idx) => {
            const isSelected = activeVideoIndex === idx;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => handleSelectVideo(idx)}
                className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-ja-purple/20 border-ja-purple shadow-[0_10px_35px_rgba(118,83,173,0.35)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08] shadow-lg'
                }`}
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    onError={(e) => {
                      e.target.src = video.fallbackThumbnail;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Indicator Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-ja-purple/90 text-white flex items-center justify-center shadow-lg border border-white/30">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-bold tracking-widest text-white uppercase">
                      {video.tag}
                    </span>
                  </div>

                  {/* Now Playing or Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ja-purple text-white text-[9px] font-bold tracking-wider uppercase shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Active
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium mb-1.5 leading-snug group-hover:text-ja-lavender transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-xs text-white/65 line-clamp-2 leading-relaxed mb-4">
                      {video.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                    <button
                      type="button"
                      className="text-ja-purple group-hover:text-white font-bold tracking-wider text-[11px] uppercase flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isSelected ? 'Playing Above' : 'Switch Video'}</span>
                      <span>→</span>
                    </button>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-white/50 hover:text-white text-[11px] font-medium flex items-center gap-1 transition-colors"
                    >
                      <YouTubeIcon className="w-3 h-3 text-red-500" />
                      <span>Direct Link ↗</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Footer */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase text-center sm:text-left">
            Experience the atmosphere. <span className="text-ja-purple">Share the journey.</span>
          </p>

          <a
            href="https://www.youtube.com/@eventswithja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-ja-purple relative group inline-flex items-center gap-2 transition-colors"
          >
            <span>Explore All Videos on JA Events Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-ja-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
