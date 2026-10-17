import { 
  Calendar, 
  MapPin, 
  Clock, 
  ExternalLink,
  Users,
  Mic,
  GraduationCap,
  Phone,
  Share2,
  CheckCircle2,
  Coffee,
  FileSpreadsheet,
  CreditCard,
  ArrowRight
} from 'lucide-react';

export default function UpcomingHighlight() {
  const payUrl = "https://pay.nomodapp.com/en/l/64930238ae254a08";
  const googleFormUrl = "https://forms.gle/gak79kXwzfC16nUdA";

  return (
    <section id="upcoming" className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#21162F] text-white relative overflow-hidden selection:bg-ja-purple/30 selection:text-white border-y border-white/10">
      
      {/* Soft Purple Ambient Glows */}
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-ja-purple/20 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] bg-[#4F327C]/30 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-ja-purple/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Top Banner Ribbon */}
      <div className="w-full bg-ja-purple/20 border-b border-white/10 py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider text-white">
          <span>EXCLUSIVE WORKSHOP IN DUBAI • LIMITED SEATS AVAILABLE</span>
          <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-ja-purple/40 text-white text-[10px] font-bold uppercase border border-ja-purple/50">Fast Filling</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8 sm:pt-12">
        
        {/* Editorial Top Section Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-7 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ja-purple/25 border border-ja-purple/40 text-white text-xs font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(118,83,173,0.3)]">
              <span className="w-2 h-2 rounded-full bg-ja-purple animate-ping" />
              <span>EXCLUSIVE UPCOMING EVENT</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white font-normal tracking-tight">
              Classroom To Career
            </h2>
            <p className="text-ja-purple text-base sm:text-lg md:text-xl font-semibold mt-1">
              Your Journey to Workplace Readiness
            </p>
          </div>

          <div className="md:max-w-md text-sm md:text-base text-white/80 leading-relaxed bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
            Ready to turn classroom learning into workplace confidence? Join a practical, interactive 3-hour workshop for teens, students, fresh graduates and young adults preparing for their first role—with learning, fun activities and confidence building.
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Program (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Speakers Block */}
            <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-ja-purple" />
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium">
                    Featured Speakers & Mentors
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ja-purple bg-ja-purple/20 px-2.5 py-0.5 rounded-full border border-ja-purple/30">
                  Interactive Sessions
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Speaker 1 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between hover:border-ja-purple/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🎤 Nadeem Lutfullah</span>
                    </div>
                    <p className="text-xs text-ja-purple font-semibold mb-2.5">
                      Career Development Specialist and Trainer
                    </p>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      <strong className="text-white font-medium">Topic:</strong> Building a professional résumé and overcoming challenges on your path to career readiness and growth.
                    </p>
                  </div>
                </div>

                {/* Speaker 2 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between hover:border-ja-purple/50 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🎤 Sudha Pallem</span>
                    </div>
                    <p className="text-xs text-ja-purple font-semibold mb-2.5">
                      Image Consultant & Trainer
                    </p>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      <strong className="text-white font-medium">Topic:</strong> Dress for Success: The Professional Edge.
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
                  <p className="text-sm md:text-base font-bold text-white mt-0.5">31 October</p>
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
                    Al Twar Library, Dubai
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar: Pricing & Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
              <div className="flex flex-col justify-center py-1">
                <span className="text-xs text-white/50 block">Registration Fee</span>
                <span className="text-xl md:text-2xl font-extrabold text-ja-purple">AED 99/-</span>
              </div>
              <div className="flex flex-col justify-center py-1 border-y sm:border-y-0 sm:border-x border-white/10">
                <span className="text-xs text-white/50 block">Refreshments</span>
                <span className="text-xs md:text-sm font-semibold text-white flex items-center justify-center gap-1.5 mt-0.5">
                  <Coffee className="w-4 h-4 text-ja-purple" /> Included
                </span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-xs text-white/50 block">Parent Accompaniment</span>
                <span className="text-xs md:text-sm font-semibold text-white flex items-center justify-center gap-1.5 mt-0.5">
                  <Users className="w-4 h-4 text-ja-purple" /> 1 Parent Free
                </span>
              </div>
            </div>

            {/* Parent Notice & Tag CTA Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm bg-ja-purple/20 p-4 rounded-xl border border-ja-purple/30">
              <div className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-ja-purple shrink-0" />
                <span>👨‍👩‍👧 Participants can be accompanied by one parent.</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80 font-medium">
                <Share2 className="w-4 h-4 text-ja-purple shrink-0" />
                <span>Tag a young adult or parent who would love to join!</span>
              </div>
            </div>

            {/* Dual Registration Action Hub */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/15 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
                  Instant Registration Options
                </span>
                <span className="text-[11px] text-white/60">Choose your preferred method</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Option 1: Google Form */}
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-4 rounded-xl bg-ja-purple hover:bg-ja-purple/85 border border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-lg text-white"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-white/20 text-white">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Register via Google Form
                    </h5>
                    <p className="text-[11px] text-white/80 mt-0.5">
                      Quick sign-up & participant details form
                    </p>
                  </div>
                </a>

                {/* Option 2: Direct Payment via Nomod */}
                <a
                  href={payUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-lg text-white"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-ja-purple/30 text-white">
                      <CreditCard className="w-5 h-5 text-ja-purple" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Pay & Confirm Seat (AED 99)
                    </h5>
                    <p className="text-[11px] text-white/70 mt-0.5">
                      Direct online checkout via Nomod
                    </p>
                  </div>
                </a>
              </div>

              {/* WhatsApp fallback */}
              <div className="flex items-center justify-between text-xs text-white/70 pt-1">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-ja-purple" />
                  Need help registering?
                </span>
                <a 
                  href="https://wa.me/971528394207?text=Hi%20JA%20Events%2C%20I%20would%20like%20to%20register%20for%20Classroom%20to%20Career"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ja-purple font-semibold hover:underline"
                >
                  WhatsApp +971 52 839 4207 →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: JA Events JPG Feature & Registration Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Poster Card Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(118,83,173,0.35)] border border-white/20 bg-black/40 group">
              <div className="absolute top-3 left-3 z-20">
                <span className="px-3 py-1 rounded-full bg-ja-deep/90 backdrop-blur-md border border-ja-purple/40 text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                  Dubai Official
                </span>
              </div>
              <img
                src="/JA events.jpeg"
                alt="Classroom to Career - JA Events"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Interactive Registration Action Hub */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center flex flex-col items-center shadow-xl">
              <span className="text-[11px] uppercase tracking-widest text-ja-purple font-extrabold mb-1 flex items-center gap-1.5">
                Seats Are Limited
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                Join Classroom to Career Today
              </h4>
              <p className="text-xs text-white/75 mb-5 max-w-sm leading-relaxed">
                Fill the official registration form to submit participant details and prepare your youth for professional confidence.
              </p>
              
              {/* Primary Google Form Button */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-ja-purple hover:bg-ja-purple/90 text-white font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(118,83,173,0.4)] hover:scale-[1.02] mb-3"
              >
                <span>Fill Google Registration Form</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

              {/* Direct Payment Link */}
              <a
                href={payUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Pay AED 99 Online (Nomod)</span>
                <ExternalLink className="w-3.5 h-3.5 text-ja-purple" />
              </a>

              <p className="text-[11px] text-white/50 font-serif italic mt-4">
                “Don’t miss the opportunity to learn and prepare for your career!”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
