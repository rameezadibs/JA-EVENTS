import { useEffect } from 'react';
import { 
  ArrowLeft, 
  HelpCircle,
  ExternalLink,
  Phone
} from 'lucide-react';
import UpcomingHighlight from './UpcomingHighlight';
import ContactFooter from './ContactFooter';
import WhatsAppButton from './WhatsAppButton';
import { navigateTo } from '../utils/navigation';

export default function UpcomingEventsPage() {
  const payUrl = "https://pay.nomodapp.com/en/l/64930238ae254a08";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const originalTitle = document.title;
    document.title = "Upcoming Events | Classroom To Career Workshop — JA Events Dubai";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const faqs = [
    {
      q: "Who is this workshop designed for?",
      a: "Teens, high schoolers, university students, fresh graduates, and young adults preparing for their first job, internship, or interview."
    },
    {
      q: "Can parents attend with their child?",
      a: "Yes! Every registered participant is warmly invited to be accompanied by one parent at no extra charge."
    },
    {
      q: "Where is the workshop held and is parking available?",
      a: "It takes place at the prestigious Al Twar Library in Dubai, with convenient parking and metro access nearby."
    },
    {
      q: "How do I secure and confirm my seat?",
      a: "Seats are limited. Complete the official Google Form or complete payment of AED 99 online via Nomod. Our team will verify and send instant confirmation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1026] text-white selection:bg-ja-purple/30 selection:text-white relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-ja-purple/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#4F327C]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#1A1026]/90 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className="flex items-center gap-3 group"
          >
            <img src="/logo.png" alt="JA Events Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="font-serif text-lg font-bold text-white tracking-wide hidden sm:inline">JA Events</span>
          </a>

          {/* Nav Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigateTo('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all border border-white/15"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <a
              href={payUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-ja-purple hover:bg-ja-purple/90 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Book Seat (AED 99)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>


      {/* The Core Exclusive Upcoming Event Showcase Section */}
      <UpcomingHighlight />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-ja-purple mb-2 block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-white/60 mt-2">
            Everything you need to know about attending Classroom to Career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-ja-purple shrink-0 mt-0.5" />
                  <h4 className="text-base font-bold text-white leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-10 max-w-xl mx-auto text-center bg-ja-purple/20 border border-ja-purple/30 rounded-2xl p-5">
          <p className="text-sm text-white/90 mb-3">
            Still have questions or need group registrations for schools / institutions?
          </p>
          <a
            href="https://wa.me/971528394207?text=Hi%20JA%20Events%2C%20I%20have%20a%20question%20about%20Classroom%20to%20Career"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-ja-purple px-5 py-2.5 rounded-full hover:bg-ja-purple/90 transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            Chat on WhatsApp: +971 52 839 4207
          </a>
        </div>
      </section>

      {/* Return Home Button Bar */}
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto text-center border-t border-white/10">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 hover:scale-[1.02]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to JA Events Home</span>
        </button>
      </section>

      {/* Full Footer */}
      <ContactFooter />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
