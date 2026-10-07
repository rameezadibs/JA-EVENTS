import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const eventTypes = [
  "A Competition",
  "A Creative Workshop",
  "A Corporate Experience",
  "Something Completely New"
];

export default function ContactFooter() {
  const [selectedType, setSelectedType] = useState("");

  // Background radial glow strength on scroll
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const radialGlowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.45]);

  // Custom cursor logic for desktop
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHoveringOption, setIsHoveringOption] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 50);
      cursorY.set(e.clientY - 50);
      
      const target = e.target.closest('[data-hover-cursor]');
      setIsHoveringOption(!!target);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" ref={containerRef} className="relative bg-[#FCFAFE] text-ja-charcoal selection:bg-ja-purple/20 overflow-hidden">
      
      {/* Custom Cursor (Desktop) */}
      <motion.div 
        className="fixed top-0 left-0 w-[100px] h-[100px] bg-ja-purple/95 backdrop-blur-md rounded-full pointer-events-none z-[100] flex items-center justify-center text-white mix-blend-normal hidden lg:flex shadow-2xl"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ scale: isHoveringOption ? 1 : 0, opacity: isHoveringOption ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase">LET'S TALK</span>
      </motion.div>

      {/* Decorative Continuous Line from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-ja-purple/30 z-10 flex flex-col items-center">
        <motion.div 
          className="w-full bg-ja-purple origin-top h-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Radial Background Glow */}
      <motion.div 
        style={{ opacity: radialGlowOpacity }} 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,83,173,0.12)_0%,transparent_70%)] pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-36 lg:pt-48 pb-20 relative z-10">
        
        {/* Headline */}
        <div className="text-center flex flex-col items-center max-w-[1200px] mx-auto mb-16 sm:mb-24">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-ja-purple mb-8 flex items-center gap-2">
            LET'S CREATE TOGETHER
          </div>

          <h2 className="text-[clamp(32px,8vw,145px)] font-sans font-semibold leading-[0.95] tracking-tighter text-ja-charcoal">
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block">Have an idea?</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="block font-serif italic text-ja-purple font-normal mt-2">
              Let's make it happen.
            </motion.span>
          </h2>
        </div>

        {/* Playful Floating Options */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-[10px] font-bold tracking-[0.25em] text-ja-charcoal/40 uppercase mb-12">WHAT ARE WE CREATING?</div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-[900px] text-center">
             {eventTypes.map((type) => {
               const isSelected = selectedType === type;
               return (
                 <button
                   key={type}
                   onClick={() => setSelectedType(type)}
                   data-hover-cursor
                   className={`relative text-2xl lg:text-[34px] font-serif transition-all duration-300 px-4 py-2 ${
                     isSelected ? 'text-ja-purple italic font-semibold' : 'text-ja-charcoal/60 hover:text-ja-purple hover:scale-102'
                   }`}
                 >
                   {type}
                   {/* Underline for active / hover */}
                   <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-ja-purple/60 origin-left transition-transform duration-300 ${
                     isSelected ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                   }`} />
                 </button>
               );
             })}
          </div>
        </div>

        {/* Direct Contact Option */}
        <div className="text-center flex flex-col items-center">
           <div className="text-[9px] font-bold tracking-[0.3em] text-ja-charcoal/40 uppercase mb-3">PREFER TO TALK DIRECTLY?</div>
           <a 
             href={`https://wa.me/971528394207${selectedType ? `?text=Hi%20JA%20Events!%20I'm%20interested%20in%20planning%20${encodeURIComponent(selectedType)}.` : ''}`} 
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm sm:text-base font-bold tracking-[0.25em] text-ja-purple hover:text-[#25D366] uppercase relative group inline-flex items-center gap-2 transition-colors px-8 py-4 rounded-full bg-ja-purple/10 border border-ja-purple/20 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 shadow-md"
           >
              CHAT ON WHATSAPP ↗
           </a>
        </div>

      </div>

      {/* FOOTER TRANSITION SHAPE */}
      <div className="relative w-full z-10 pointer-events-none mt-6">
         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] lg:h-[70px] text-[#24152F] drop-shadow-reverse" preserveAspectRatio="none">
            <path d="M0 120 C 400 0, 1040 0, 1440 120 V 120 H 0 Z" fill="currentColor"/>
         </svg>
      </div>

      {/* FOOTER SECTION */}
      <footer className="relative bg-[#24152F] text-white pt-10 pb-12 z-10">
         <div className="container mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Huge statement */}
            <div className="text-left mb-24 overflow-hidden select-none">
               <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-8">JA EVENTS</div>
               <h2 className="text-[clamp(44px,10vw,160px)] font-sans font-bold leading-[0.9] tracking-tighter flex flex-col gap-2">
                  <span>CREATE.</span>
                  <span className="text-white/60">CONNECT.</span>
                  <span className="font-serif italic text-ja-purple font-normal">REMEMBER.</span>
               </h2>
            </div>

            {/* Middle Nav and Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
               
               <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-6">EXPLORE</div>
                  <ul className="space-y-4">
                     <li><a href="#home" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">HOME</a></li>
                     <li><a href="#upcoming" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">UPCOMING</a></li>
                     <li><a href="#about" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">ABOUT</a></li>
                     <li><a href="#experiences" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">EXPERIENCES</a></li>
                     <li><a href="#videos" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">VIDEOS</a></li>
                     <li><a href="#gallery" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">GALLERY</a></li>
                     <li><a href="#voices" className="text-sm font-semibold tracking-wider text-white/80 hover:text-white transition-colors">VOICES</a></li>
                  </ul>
               </div>

               <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-6">GET IN TOUCH</div>
                  <ul className="space-y-4 text-sm font-semibold tracking-wider text-white/80">
                     <li>
                        <a href="https://wa.me/971528394207" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                           +971 52 839 4207
                        </a>
                     </li>
                     <li>
                        <a href="mailto:jaevents2022@gmail.com" className="hover:text-white transition-colors">
                           jaevents2022@gmail.com
                        </a>
                     </li>
                     <li className="text-white/40 font-normal">
                        DUBAI, UNITED ARAB EMIRATES
                     </li>
                  </ul>
               </div>

               <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-6">FOLLOW US</div>
                  <ul className="space-y-4">
                     <li>
                        <a href="https://www.instagram.com/eventswithja" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           INSTAGRAM ↗
                        </a>
                     </li>
                     <li>
                        <a href="https://www.facebook.com/eventswithja" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           FACEBOOK ↗
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/company/jaeventsuae/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           LINKEDIN ↗
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/@eventswithja" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-[0.15em] text-white/80 hover:text-white transition-colors group flex items-center gap-2">
                           YOUTUBE ↗
                        </a>
                     </li>
                  </ul>
               </div>

            </div>

            {/* Giant Monogram Element */}
            <div className="flex justify-center mb-24 relative">
               <motion.div 
                 className="relative cursor-pointer select-none"
               >
                  <h3 className="text-[120px] lg:text-[220px] font-serif text-white/10 font-bold leading-none tracking-tight">
                     JA
                  </h3>
               </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
               <div className="flex items-center gap-4">
                  <span>© {new Date().getFullYear()} JA EVENTS</span>
                  <span>•</span>
                  <a href="#privacy" className="hover:text-white transition-colors">
                     PRIVACY POLICY
                  </a>
               </div>
               <div className="text-center font-normal tracking-[0.1em] text-white/30 hidden md:block">
                  CREATING EXPERIENCES THAT STAY WITH YOU
               </div>
               <button 
                 onClick={scrollToTop}
                 className="flex items-center gap-2 hover:text-white transition-colors"
               >
                  BACK TO TOP 
                  <motion.span 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                     ↑
                  </motion.span>
               </button>
            </div>

         </div>

      </footer>

    </section>
  );
}
