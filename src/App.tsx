import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MoroccanDoorEntrance } from './components/MoroccanDoorEntrance';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { ProgramTimeline } from './components/ProgramTimeline';
import { VenueAndDressCode } from './components/VenueAndDressCode';
import { RsvpSection } from './components/RsvpSection';
import { AudioToggle } from './components/AudioToggle';
import { moroccanAudio } from './utils/romanticAudio';
import { RotateCcw } from 'lucide-react';
import { ViewStage } from './types';

export const App: React.FC = () => {
  // viewStage: 'doors' (Act 1: 3D Doors overlay) -> 'invitation' (Revealed Royal Suite)
  const [viewStage, setViewStage] = useState<ViewStage>('doors');

  // Antique Gold Scroll Progress Tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Prevent background scrolling while the doors are closed
  useEffect(() => {
    if (viewStage === 'doors') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [viewStage]);

  const handleSequenceComplete = () => {
    setViewStage('invitation');
  };

  const handleReplayDoors = () => {
    moroccanAudio.stop();
    window.scrollTo({ top: 0, behavior: 'instant' });
    setViewStage('doors');
  };

  return (
    <div
      className="min-h-screen bg-[#1C1612] flex justify-center items-start text-[#2A231D] selection:bg-[#C59B27]/30 selection:text-[#133B32] relative overflow-hidden"
      dir="rtl"
    >
      {/* Desktop Ambient Warm-Bronze & Soft Door Reflection Backdrop */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none opacity-20 filter blur-3xl scale-125"
        style={{
          backgroundImage: 'url(/images/moroccan-door.jpg)',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#1C1612]/85 via-[#1C1612]/90 to-[#1C1612] pointer-events-none" />

      {/* Mobile-first centered stationery container (max-w-[480px] on desktop over warm #1C1612 backdrop, 100vw on mobile) */}
      <div className="w-full max-w-[480px] min-h-screen bg-[#FAF5EC] paper-grain shadow-stationery relative flex flex-col border-x border-[#C59B27]/25 z-10">
        
        {/* Antique Gold Royal Scroll Progress Hairline (RTL origin-right) */}
        <motion.div
          className="sticky top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#FFF7D9] to-[#D4AF37] origin-right z-30 shadow-[0_1px_4px_rgba(212,175,55,0.4)] pointer-events-none"
          style={{ scaleX }}
        />

        {/* ========================================================
           ROYAL MOROCCAN 3D DOORS ENTRANCE OVERLAY
           Sits directly over HeroSection until user taps to open.
           When tapped, the 3D doors swing open directly revealing HeroSection.
           On animation complete, it unmounts smoothly with zero extra clicks.
           ======================================================== */}
        <AnimatePresence>
          {viewStage === 'doors' && (
            <motion.div
              key="moroccan-door-entrance"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              }}
              className="fixed inset-0 z-50 flex justify-center pointer-events-auto"
            >
              <div className="w-full max-w-[480px] h-[100dvh] relative overflow-hidden bg-transparent">
                <MoroccanDoorEntrance onSequenceComplete={handleSequenceComplete} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
           THE ROYAL MOROCCAN RIAD WEDDING INVITATION SUITE
           Rendered directly underneath the doors!
           (NO Navbar, NO Header, NO Brand Logo - Pure bespoke stationery)
           ======================================================== */}
        <main className="w-full relative pb-10">
          {/* Minimal floating Moroccan oud music toggle pill */}
          <AudioToggle />

          {/* Section 1: Candlelit Riad Courtyard Hero with Archway & Floating Lantern Particles */}
          <HeroSection />

          {/* Section 2: Moroccan Stucco Pillars & Lanterns Countdown */}
          <CountdownSection />

          {/* Section 3: The Authentic Moroccan Wedding Program Timeline */}
          <ProgramTimeline />

          {/* Section 4: Venue Location & Moroccan Royal Dress Code */}
          <VenueAndDressCode />

          {/* Section 5: Minimalist Gold-Underlined RSVP Card & Digital Pass */}
          <RsvpSection onReplayDoors={handleReplayDoors} />

          {/* Subtle Floating Replay Button in Bottom Left Corner */}
          <div className="fixed bottom-4 left-4 z-40">
            <button
              type="button"
              onClick={handleReplayDoors}
              title="إعادة عرض البوابة الملكية"
              aria-label="إعادة عرض البوابة"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1C1612]/90 border border-[#D4AF37]/60 shadow-lg backdrop-blur-md text-[#FAF5EC] hover:border-[#D4AF37] hover:bg-[#2A2019] transition-all cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37] group-hover:-rotate-90 transition-transform duration-500" />
              <span className="text-[11px] font-readex font-bold text-[#FAF5EC]">
                إعادة عرض البوابة
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
