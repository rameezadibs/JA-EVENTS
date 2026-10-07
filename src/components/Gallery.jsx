import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Play, Film, ExternalLink } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_kshlcrkshlcrkshl', category: 'WORKSHOP', alt: 'JA Events Workshop', note: 'THE START OF SOMETHING NEW' },
  { id: 2, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_x6f9w2x6f9w2x6f9', category: 'COMPETITION', alt: 'JA Events Competition', note: 'STRATEGY IN MOTION' },
  { id: 3, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_m9nv7lm9nv7lm9nv', category: 'ACHIEVEMENT', alt: 'JA Events Achievement', note: 'AGAINST THE CLOCK' },
  { id: 4, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_sp3bj4sp3bj4sp3b', category: 'CREATIVITY', alt: 'JA Events Creativity', note: 'EXPRESSION & IMAGINATION' },
  { id: 5, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_abxhlpabxhlpabxh', category: 'CONNECTION', alt: 'JA Events Connection', note: 'TEAM SPIRIT & UNITY' },
  { id: 6, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_re1xsbre1xsbre1x', category: 'FOCUS', alt: 'JA Events Focus', note: 'PRECISION & MASTERY' },
  { id: 7, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_tjk5rxtjk5rxtjk5', category: 'MOMENT', alt: 'JA Events Moment', note: 'WHEN IT CLICKS' },
  { id: 8, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_qdfsrtqdfsrtqdfs', category: 'SPEED', alt: 'JA Events Energy', note: 'HIGH ENERGY' },
  { id: 9, type: 'photo', src: 'https://res.cloudinary.com/knenwmhg/image/upload/f_auto,q_auto/Gemini_Generated_Image_q9k7f3q9k7f3q9k7', category: 'IMAGINATION', alt: 'JA Events Experience', note: 'EVERY DETAIL MATTERS' },
  {
    id: 10,
    type: 'video',
    src: 'https://i.ytimg.com/vi/QKNgwkxmv3g/maxresdefault.jpg',
    category: 'CHESS VIDEO',
    alt: 'Chess Tournament by JA Events',
    note: 'CHESS TOURNAMENT IN ACTION',
    youtubeId: 'QKNgwkxmv3g',
    youtubeUrl: 'https://youtu.be/QKNgwkxmv3g?si=PdXnUpyQDjicRT3v'
  },
  {
    id: 11,
    type: 'video',
    src: 'https://i.ytimg.com/vi/rw-FubATuH0/maxresdefault.jpg',
    category: 'EXHIBITION VIDEO',
    alt: 'Women Entrepreneurs Exhibition',
    note: 'CELEBRATING FEMALE FOUNDERS',
    youtubeId: 'rw-FubATuH0',
    youtubeUrl: 'https://youtu.be/rw-FubATuH0'
  },
  {
    id: 12,
    type: 'video',
    src: 'https://i.ytimg.com/vi/_iRBNKeOqd4/maxresdefault.jpg',
    category: 'HIGHLIGHTS VIDEO',
    alt: 'Women Entrepreneurs Exhibition Highlights',
    note: 'COMMUNITY SPIRIT & ENERGY',
    youtubeId: '_iRBNKeOqd4',
    youtubeUrl: 'https://youtu.be/_iRBNKeOqd4'
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorText, setCursorText] = useState(null);
  const [filter, setFilter] = useState('ALL');

  // Custom Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'PHOTOS') return item.type === 'photo';
    if (filter === 'VIDEOS') return item.type === 'video';
    return true;
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 60);
      cursorY.set(e.clientY - 60);
      
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor'));
      } else {
        setCursorText(null);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Lightbox Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedId) return;
      if (e.key === 'Escape') setSelectedId(null);
      
      const currentIndex = filteredItems.findIndex(p => p.id === selectedId);
      if (e.key === 'ArrowRight' && currentIndex < filteredItems.length - 1) {
        setSelectedId(filteredItems[currentIndex + 1].id);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedId(filteredItems[currentIndex - 1].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, filteredItems]);

  const selectedItem = galleryItems.find(p => p.id === selectedId);

  return (
    <section id="gallery" className="relative bg-[#FCFAFE] text-ja-charcoal selection:bg-ja-purple/20 overflow-hidden pb-12">
      
      {/* Custom Cursor (Desktop) */}
      <motion.div 
        className="fixed top-0 left-0 w-[120px] h-[120px] bg-white/90 backdrop-blur-sm rounded-full pointer-events-none z-[100] hidden lg:flex flex-col items-center justify-center text-ja-purple mix-blend-normal shadow-xl border border-ja-purple/20"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ scale: cursorText ? 1 : 0, opacity: cursorText ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-center px-4 leading-tight">
          {cursorText}
        </span>
      </motion.div>

      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-ja-purple uppercase">Our Gallery</span>
            </div>
            <h2 className="text-[clamp(36px,4.5vw,64px)] font-sans font-semibold text-ja-charcoal leading-[1.05] tracking-tight">
              A thousand little moments.<br/>
              <span className="font-serif italic text-ja-purple font-normal">One beautiful story.</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Filter Buttons */}
            <div className="flex items-center p-1 bg-ja-lavender/50 rounded-full border border-ja-purple/15 text-xs font-bold tracking-wider">
              {[
                { label: 'ALL', count: 12 },
                { label: 'PHOTOS', count: 9 },
                { label: 'VIDEOS', count: 3 }
              ].map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setFilter(tab.label)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-200 text-[11px] ${
                    filter === tab.label
                      ? 'bg-ja-purple text-white shadow-sm'
                      : 'text-ja-charcoal/70 hover:text-ja-purple'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* UNIFORM BALANCED 3-COLUMN GRID */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, i) => {
            const isDimmed = hoveredId && hoveredId !== item.id;
            const isVideo = item.type === 'video';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[280px] sm:h-[320px]"
                onClick={() => setSelectedId(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor={isVideo ? "PLAY VIDEO" : "VIEW"}
              >
                <motion.div 
                  className="w-full h-full relative overflow-hidden bg-[#F4EFFA]"
                  animate={{ opacity: isDimmed ? 0.4 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block" 
                  />

                  {/* Video Play Badge Center */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-ja-purple/90 text-white flex items-center justify-center shadow-xl border border-white/30 group-hover:scale-115 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-current translate-x-0.5 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-sm backdrop-blur-md border ${
                      isVideo 
                        ? 'bg-ja-purple/80 text-white border-white/30' 
                        : 'bg-white/20 text-white border-white/20'
                    }`}>
                      {isVideo ? (
                        <span className="flex items-center gap-1.5">
                          <Film className="w-3 h-3" />
                          {item.category}
                        </span>
                      ) : (
                        item.category
                      )}
                    </span>
                  </div>

                  {/* Hover Details */}
                  <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col gap-1 z-10 pointer-events-none">
                     {item.note && <span className="text-white font-serif italic text-base lg:text-lg">{item.note}</span>}
                     {isVideo && <span className="text-white/80 text-xs font-semibold">Click to play video inside lightbox</span>}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="container mx-auto px-6 lg:px-12 mt-10 pt-6 border-t border-ja-purple/10 flex flex-col sm:flex-row items-center justify-between gap-6">
         <p className="text-[10px] font-bold tracking-[0.35em] text-ja-charcoal/40 uppercase text-center sm:text-left">
           The moments change. <span className="text-ja-purple">The feeling stays.</span>
         </p>
         <div className="flex items-center gap-4">
            <a 
              href="#videos" 
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-ja-purple hover:text-ja-deep transition-colors inline-flex items-center gap-2"
            >
              WATCH HIGHLIGHTS THEATER ↓
            </a>
         </div>
      </div>

      {/* LIGHTBOX PORTAL */}
      <AnimatePresence>
        {selectedItem && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }} 
             transition={{ duration: 0.3 }}
             className="fixed inset-0 z-[200] bg-[rgba(18,10,28,0.98)] flex flex-col justify-center items-center backdrop-blur-xl"
           >
             <button 
               onClick={() => setSelectedId(null)} 
               className="absolute top-8 right-8 text-white/50 hover:text-white text-[10px] tracking-[0.3em] font-bold z-10 uppercase transition-colors p-4"
             >
                CLOSE ✕
             </button>
             
             <div className="relative w-full max-w-[100vw] lg:max-w-[85vw] h-[60vh] lg:h-[75vh] flex items-center justify-center mt-6 px-4">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const currentIdx = filteredItems.findIndex(p => p.id === selectedId);
                    setSelectedId(filteredItems[Math.max(0, currentIdx - 1)].id); 
                  }} 
                  className="absolute left-4 lg:-left-12 text-white/30 hover:text-white text-4xl hidden md:block transition-colors p-4"
                >‹</button>
                
                {selectedItem.type === 'video' ? (
                  <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative bg-black/90 border border-white/20">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedItem.youtubeId}?autoplay=1&rel=0`}
                      title={selectedItem.alt}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <motion.img 
                    src={selectedItem.src} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                    alt={selectedItem.alt}
                  />
                )}
                
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const currentIdx = filteredItems.findIndex(p => p.id === selectedId);
                    setSelectedId(filteredItems[Math.min(filteredItems.length - 1, currentIdx + 1)].id); 
                  }} 
                  className="absolute right-4 lg:-right-12 text-white/30 hover:text-white text-4xl hidden md:block transition-colors p-4"
                >›</button>
             </div>

             <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="mt-6 lg:mt-8 text-center px-6 flex flex-col items-center"
             >
                <div className="text-[9px] font-bold tracking-[0.4em] uppercase text-ja-purple mb-2 inline-flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-ja-purple" /> {selectedItem.category} <div className="w-4 h-[1px] bg-ja-purple" />
                </div>
                {selectedItem.note && (
                  <div className="text-sm lg:text-lg text-white/90 font-serif italic max-w-[500px] mx-auto tracking-wide">
                    {selectedItem.note}
                  </div>
                )}

                {selectedItem.type === 'video' && (
                  <a
                    href={selectedItem.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold tracking-wider transition-colors shadow-lg"
                  >
                    <span>Watch directly on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <div className="mt-4 text-white/20 text-[10px] font-bold tracking-[0.3em]">
                  {String(filteredItems.findIndex(p => p.id === selectedId) + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                </div>
             </motion.div>
           </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
