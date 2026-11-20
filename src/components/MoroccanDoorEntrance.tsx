import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { moroccanAudio } from '../utils/romanticAudio';

interface MoroccanDoorEntranceProps {
  onSequenceComplete: () => void;
}

export const MoroccanDoorEntrance: React.FC<MoroccanDoorEntranceProps> = ({ onSequenceComplete }) => {
  const [isOpening, setIsOpening] = useState(false);
  const safetyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }
    };
  }, []);

  const transitionConfig = {
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Start acoustic Oud ambient audio
    moroccanAudio.play();

    // Safety fallback: ensure onSequenceComplete is always called after door swing
    safetyTimerRef.current = window.setTimeout(() => {
      onSequenceComplete();
    }, 1500);
  };

  return (
    <div
      onClick={!isOpening ? handleOpen : undefined}
      className="relative w-full h-full min-h-[100dvh] max-h-[100dvh] overflow-hidden select-none perspective-1600 cursor-pointer bg-transparent"
      dir="rtl"
    >
      {/* =============================================================
          SEAMLESS 3D SPLIT-DOOR PHYSICS
          Rendered as ONE single unified image split cleanly down the middle:
          Left Door Panel  = Exactly left 50% of /images/moroccan-door.jpg
          Right Door Panel = Exactly right 50% of /images/moroccan-door.jpg
          Swings open in 3D directly revealing HeroSection underneath!
          ============================================================= */}
      <div
        className="absolute inset-0 z-20 perspective-1600 flex pointer-events-none"
        dir="ltr"
      >
        {/* LEFT CARVED CEDAR DOOR (Physical Left Door Panel) */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpening ? -105 : 0 }}
          transition={transitionConfig}
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          className={`relative w-[calc(50%+0.5px)] h-full overflow-hidden transition-shadow duration-700 ${isOpening ? 'shadow-[25px_0_45px_rgba(0,0,0,0.85)]' : ''
            }`}
        >
          {/* Displays ONLY the left 50% with object-top for full arch view */}
          <img
            src="/images/moroccan-door.jpg"
            alt="الباب المغربي الأيسر"
            className="absolute top-0 left-0 w-[200%] max-w-none h-full object-cover object-top pointer-events-none"
          />
        </motion.div>

        {/* RIGHT CARVED CEDAR DOOR (Physical Right Door Panel) */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpening ? 105 : 0 }}
          transition={transitionConfig}
          onAnimationComplete={() => {
            if (isOpening) {
              onSequenceComplete();
            }
          }}
          style={{
            transformOrigin: 'right center',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          className={`relative w-1/2 h-full overflow-hidden transition-shadow duration-700 ${isOpening ? 'shadow-[-25px_0_45px_rgba(0,0,0,0.85)]' : ''
            }`}
        >
          {/* Displays ONLY the right 50% with object-top for full arch view */}
          <img
            src="/images/moroccan-door.jpg"
            alt="الباب المغربي الأيمن"
            style={{ left: '-100%' }}
            className="absolute top-0 w-[200%] max-w-none h-full object-cover object-top pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Subtle Warm Lantern & Outer Edge Vignette for Moroccan Wood & Brass Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none z-25" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none z-25" />

      {/* =============================================================
          DOOR STATIONERY LAYER (Fades smoothly as doors start swinging)
          - Refined floating calligraphy lowered into dark cedar-wood arch area
          - Real Macro Photograph of the Handmade Gold Wax Seal dead-center
          - Breathable glowing prompt below
          ============================================================= */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeIn' }}
            className="absolute inset-0 z-40 pointer-events-none select-none"
            dir="rtl"
          >
            {/* Top Floating Calligraphy - Lowered into the dark cedar-wood arch area with soft dark radial backdrop */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-[18%] sm:top-[20%] inset-x-0 flex flex-col items-center text-center px-4"
            >
              <div className="py-3 px-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(15,10,5,0.72)_0%,transparent_75%)] flex flex-col items-center">
                <span className="text-xs sm:text-sm font-readex font-bold tracking-[0.25em] text-[#F3E5AB] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-1">
                  دعوة زفاف ملكية
                </span>
                <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-[#FFFDF9] tracking-wide drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] leading-tight">
                  مهدي & كنزة
                </h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-12 h-px bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
                  <span className="text-[#F3E5AB] text-xs font-amiri">۞</span>
                  <div className="w-12 h-px bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
                </div>
              </div>
            </motion.div>


            {/* Bottom Subtle Prompt (Positioned cleanly near the bottom with dark radial glow) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-8 sm:bottom-12 inset-x-0 flex flex-col items-center text-center px-4 cursor-pointer pointer-events-auto"
              onClick={handleOpen}
            >
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="py-3 px-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(15,10,5,0.68)_0%,transparent_75%)] flex flex-col items-center gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] text-xs">✦</span>
                  <span className="text-xs sm:text-sm font-readex font-medium text-[#F3E5AB] tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    اضغط لفتح الباب
                  </span>
                  <span className="text-[#D4AF37] text-xs">✦</span>
                </div>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoroccanDoorEntrance;
