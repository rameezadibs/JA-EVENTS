import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy,
  Phone,
  Share2,
  CheckCircle2
} from 'lucide-react';

export default function UpcomingHighlight() {
  const posterPath = "/chess-tournament-december-2026.png";

  return (
    <section id="upcoming" className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#21162F] text-white relative overflow-hidden selection:bg-ja-purple/30 selection:text-white border-y border-white/10">
      
      {/* Soft Purple Ambient Glows */}
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-ja-purple/20 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] bg-[#4F327C]/30 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-ja-purple/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Top Banner Ribbon */}
      <div className="w-full bg-ja-purple/20 border-b border-white/10 py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider text-white">
          <span>JA EVENTS IN COLLABORATION WITH SIGNATURE CHESS CLUB • CHESS TOURNAMENT</span>
          <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-ja-purple/40 text-white text-[10px] font-bold uppercase border border-ja-purple/50">Coming Soon</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8 sm:pt-12">
        
        {/* Editorial Top Section Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-7 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ja-purple/25 border border-ja-purple/40 text-white text-xs font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(118,83,173,0.3)]">
              <span className="w-2 h-2 rounded-full bg-ja-purple animate-ping" />
              <span>UPCOMING EVENT</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white font-normal tracking-tight">
              Chess Tournament
            </h2>
            <p className="text-ja-purple text-base sm:text-lg md:text-xl font-semibold mt-1">
              JA Events in collaboration with Signature Chess Club
            </p>
          </div>

          <div className="md:max-w-md text-sm md:text-base text-white/80 leading-relaxed bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
            JA Events, in collaboration with Signature Chess Club, invites chess enthusiasts to come together for an exciting tournament built around strategy, focus and competition.
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Program (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Tournament Highlights Block */}
            <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-ja-purple" />
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium">
                    Tournament Overview
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ja-purple bg-ja-purple/20 px-2.5 py-0.5 rounded-full border border-ja-purple/30">
                  Signature Chess Club
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Feature 1 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between hover:border-ja-purple/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🏆 Strategy & Focus</span>
                    </div>
                    <p className="text-xs text-ja-purple font-semibold mb-2.5">
                      Competitive & Engaging Play
                    </p>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Bringing chess enthusiasts together across Dubai for high-energy matches, tactical thinking, and memorable sportsmanship.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between hover:border-ja-purple/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🤝 Collaboration</span>
                    </div>
                    <p className="text-xs text-ja-purple font-semibold mb-2.5">
                      Official Joint Tournament
                    </p>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Presented by JA Events in proud collaboration with Signature Chess Club at Al Mankhool Library, Dubai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Specs Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5 hover:border-ja-purple/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <Calendar className="w-5 h-5 text-ja-purple" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Date</span>
                  <p className="text-sm md:text-base font-bold text-white mt-0.5">17 December 2026</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5 hover:border-ja-purple/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <Clock className="w-5 h-5 text-ja-purple" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Time</span>
                  <p className="text-sm md:text-base font-bold text-white mt-0.5">10:00 AM – 1:00 PM</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 sm:col-span-2 flex items-start gap-3.5 hover:border-ja-purple/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <MapPin className="w-5 h-5 text-ja-purple" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Venue</span>
                  <p className="text-sm md:text-base font-bold text-white mt-0.5">
                    Al Mankhool Library, Dubai
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar: Sponsorship & Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <div className="flex flex-col justify-center py-1">
                <span className="text-xs text-white/50 block">Sponsorship</span>
                <span className="text-xs md:text-sm font-semibold text-white flex items-center justify-center gap-1.5 mt-0.5">
                  Sponsors Welcome
                </span>
              </div>
              <div className="flex flex-col justify-center py-1 border-t sm:border-t-0 sm:border-l border-white/10">
                <span className="text-xs text-white/50 block">Status</span>
                <span className="text-xs md:text-sm font-semibold text-white flex items-center justify-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-ja-purple" /> More Details Coming Soon!
                </span>
              </div>
            </div>

            {/* Notice & Tag CTA Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm bg-ja-purple/20 p-4 rounded-xl border border-ja-purple/30">
              <div className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-ja-purple shrink-0" />
                <span>♟️ JA Events in collaboration with Signature Chess Club.</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80 font-medium">
                <Share2 className="w-4 h-4 text-ja-purple shrink-0" />
                <span>Sponsors Welcome • Inquire Today</span>
              </div>
            </div>

            {/* Registration Action Hub */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/15 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
                  Registration & Inquiries
                </span>
                <span className="text-[11px] text-white/60">Opening Soon</span>
              </div>

              {/* Disabled CTA matching existing button styling */}
              <button
                type="button"
                disabled
                className="w-full p-4 rounded-xl bg-ja-purple/80 text-white font-bold text-sm border border-white/20 shadow-lg cursor-not-allowed opacity-90 flex items-center justify-center gap-2 select-none"
              >
                <span>More Details Coming Soon</span>
              </button>

              {/* WhatsApp & Phone contact fallback */}
              <div className="flex items-center justify-between text-xs text-white/70 pt-1">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-ja-purple" />
                  Connect: Angel Joe
                </span>
                <a 
                  href="https://wa.me/971528394207?text=Hi%20JA%20Events%2C%20I%20would%20like%20more%20details%20about%20the%20Chess%20Tournament"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ja-purple font-semibold hover:underline"
                >
                  +971 52 839 4207 →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Chess Tournament Artwork Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Poster Card Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(118,83,173,0.35)] border border-white/20 bg-black/40 group">
              <div className="absolute top-3 left-3 z-20">
                <span className="px-3 py-1 rounded-full bg-ja-deep/90 backdrop-blur-md border border-ja-purple/40 text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                  Dubai Official
                </span>
              </div>
              <img
                src={posterPath}
                alt="JA Events and Signature Chess Club Chess Tournament – 17 December 2026 at Al Mankhool Library, Dubai"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            {/* Interactive Tournament Card */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center flex flex-col items-center shadow-xl">
              <span className="text-[11px] uppercase tracking-widest text-ja-purple font-extrabold mb-1 flex items-center gap-1.5">
                Upcoming Tournament
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                Chess Tournament
              </h4>
              <p className="text-xs text-white/75 mb-5 max-w-sm leading-relaxed">
                JA Events, in collaboration with Signature Chess Club, invites chess enthusiasts to come together for an exciting tournament built around strategy, focus and competition.
              </p>
              
              {/* Primary Disabled CTA Button */}
              <button
                type="button"
                disabled
                className="w-full py-3.5 px-5 rounded-xl bg-ja-purple/80 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(118,83,173,0.4)] cursor-not-allowed opacity-90 mb-3 select-none"
              >
                <span>More Details Coming Soon</span>
              </button>

              <div className="text-xs text-white/70 flex items-center justify-center gap-1.5 mt-1">
                <Phone className="w-3.5 h-3.5 text-ja-purple" />
                <span>Connect: Angel Joe</span>
                <a 
                  href="https://wa.me/971528394207?text=Hi%20JA%20Events%2C%20I%20would%20like%20more%20details%20about%20the%20Chess%20Tournament"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ja-purple font-semibold hover:underline ml-1"
                >
                  +971 52 839 4207
                </a>
              </div>

              <p className="text-[11px] text-white/50 font-serif italic mt-4">
                Sponsors Welcome
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
