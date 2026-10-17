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
  Coffee
} from 'lucide-react';

export default function UpcomingHighlight() {
  const registerUrl = "https://pay.nomodapp.com/en/l/64930238ae254a08";

  return (
    <section id="upcoming" className="pt-12 pb-14 md:pt-16 md:pb-20 bg-[#21162F] text-white relative overflow-hidden selection:bg-ja-purple/30 selection:text-white">
      {/* Soft atmospheric background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ja-purple/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4F327C]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Top Section Header */}
        <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-5 gap-4">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ja-purple/20 border border-ja-purple/30 text-ja-purple text-xs font-semibold tracking-widest uppercase mb-3">
              Upcoming Workshop
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal tracking-tight">
              Classroom To Career 🚀
            </h2>
            <p className="text-ja-purple text-base md:text-lg font-medium mt-1">
              Your Journey to Workplace Readiness
            </p>
          </div>
          <div className="md:max-w-md text-sm md:text-base text-white/80 leading-relaxed">
            Ready to turn classroom learning into workplace confidence? Join a practical, interactive 3-hour workshop for teens, students, fresh graduates and young adults preparing for their first role—with learning, fun activities and confidence building.
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Program (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Speakers Block */}
            <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Mic className="w-5 h-5 text-ja-purple" />
                <h3 className="font-serif text-lg md:text-xl text-white font-medium">
                  Featured Speakers & Topics
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Speaker 1 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🎤 Nadeem Lutfullah</span>
                    </div>
                    <p className="text-xs text-ja-purple font-medium mb-2.5">
                      Career Development Specialist and Trainer
                    </p>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      <strong className="text-white font-medium">Topic:</strong> Building a professional résumé and overcoming challenges on your path to career readiness and growth.
                    </p>
                  </div>
                </div>

                {/* Speaker 2 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base font-semibold text-white">🎤 Sudha Pallem</span>
                    </div>
                    <p className="text-xs text-ja-purple font-medium mb-2.5">
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
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Date</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">31 October</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Time</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">10:00 AM – 1:00 PM</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 sm:col-span-2 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-ja-purple/20 text-ja-purple border border-ja-purple/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-wider block">Venue</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-0.5">
                    Al Twar Library, Dubai
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar: Pricing & Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/5 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-center">
              <div className="flex flex-col justify-center py-1">
                <span className="text-xs text-white/50 block">Registration Fee</span>
                <span className="text-lg md:text-xl font-bold text-ja-purple">AED 99/-</span>
              </div>
              <div className="flex flex-col justify-center py-1 border-y sm:border-y-0 sm:border-x border-white/10">
                <span className="text-xs text-white/50 block">Refreshments</span>
                <span className="text-xs md:text-sm font-semibold text-white flex items-center justify-center gap-1 mt-0.5">
                  <Coffee className="w-3.5 h-3.5 text-ja-purple" /> Included
                </span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-xs text-white/50 block">Parent Accompaniment</span>
                <span className="text-xs md:text-sm font-semibold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                  <Users className="w-3.5 h-3.5" /> 1 Parent Allowed Free
                </span>
              </div>
            </div>

            {/* Parent Notice & Tag CTA Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm bg-ja-purple/15 p-3.5 rounded-xl border border-ja-purple/30">
              <div className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>👨‍👩‍👧 Participants can be accompanied by one parent.</span>
              </div>
              <div className="flex items-center gap-1.5 text-ja-purple font-medium">
                <Share2 className="w-4 h-4 shrink-0" />
                <span>Tag a young adult or parent who would love to join!</span>
              </div>
            </div>

            {/* Registration Actions & Direct Booking Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4 text-ja-purple" />
                <span>
                  Register via WhatsApp: {' '}
                  <a 
                    href="https://wa.me/971528394207?text=Hi%20JA%20Events%2C%20I%20would%20like%20to%20register%20for%20Classroom%20to%20Career"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ja-purple font-semibold hover:underline"
                  >
                    +971 52 839 4207
                  </a>
                </span>
              </div>

              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ja-purple hover:bg-ja-purple/85 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm shrink-0 shadow-lg shadow-ja-purple/30 hover:scale-[1.02]"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: JA Events JPG Feature (No Slideshow) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Poster Card Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 group">
              <img
                src="/JA events.jpeg"
                alt="Classroom to Career - JA Events"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Embedded Registration Form Card */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest text-ja-purple font-semibold mb-1">
                Official Registration
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                Secure Your Spot Online
              </h4>
              <p className="text-xs text-white/70 mb-4 max-w-sm">
                Complete your registration and payment safely via Nomod for AED 99/-. Refreshments and materials included.
              </p>
              
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-[#21162F] font-bold text-sm hover:bg-ja-lavender transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Complete Registration Form</span>
                <ExternalLink className="w-4 h-4 text-ja-purple" />
              </a>

              <p className="text-[11px] text-white/50 font-serif italic mt-3">
                “Don’t miss the opportunity to learn and prepare for your career!”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
