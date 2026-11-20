import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Download, ExternalLink, ChevronDown } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const CountdownSection: React.FC = () => {
  // Target Wedding Date: July 24, 2027 at 20:00 (Marrakech, Morocco) - month 6 is July (0-indexed)
  const targetDate = new Date(2027, 6, 24, 20, 0, 0);

  const calculateTime = () => {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-6 px-3 sm:px-4 text-center" dir="rtl">
      {/* Ornate Gold Moroccan Arch Card in Warm Royal Ivory Parchment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[430px] rounded-2xl border-2 border-[#C59B27]/40 bg-[#FAF5EC] p-6 sm:p-7 shadow-parchment-card overflow-hidden"
      >
        {/* Subtle Moroccan geometric pattern overlay */}
        <div className="absolute inset-0 moroccan-mesh-pattern opacity-40 pointer-events-none" />

        {/* Moroccan Arch Header with Animated SVG Star Dividers */}
        <div className="relative z-10 flex items-center justify-center gap-3 mb-2 text-[#C59B27]">
          <span className="text-xs font-amiri">۞</span>
          <div className="w-16 h-px bg-gradient-to-l from-[#C59B27] to-transparent" />
          
          {/* Animated 8-pointed SVG Star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="w-5 h-5 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#C59B27]" strokeWidth="1.2">
              <polygon points="12,1 15,9 23,12 15,15 12,23 9,15 1,12 9,9" />
              <circle cx="12" cy="12" r="2.5" fill="#C59B27" />
            </svg>
          </motion.div>

          <div className="w-16 h-px bg-gradient-to-r from-[#C59B27] to-transparent" />
          <span className="text-xs font-amiri">۞</span>
        </div>

        {/* Arabic Title */}
        <h2 className="relative z-10 font-amiri text-3xl sm:text-4xl text-[#133B32] font-bold drop-shadow-sm">
          العد التنازلي لليلة العمر
        </h2>

        {/* Wedding Date Subtitle in Standard Numerals */}
        <p className="relative z-10 mt-1 text-xs sm:text-sm font-readex text-[#7D5A44] font-medium">
          السبت 24 يوليوز 2027 • على الساعة 20:00
        </p>

        {/* 4-Column RTL Counter in Standard Numerals (0-9) with tabular-nums inside Gold-Bordered Boxes */}
        <div className="relative z-10 mt-7 grid grid-cols-4 items-center justify-center gap-2 sm:gap-3 px-1">
          {/* Days (يوم) */}
          <div className="flex flex-col items-center bg-[#F3EAE0] border border-[#C59B27]/40 rounded-xl p-2.5 shadow-sm">
            <div className="font-amiri text-2xl sm:text-3xl font-bold text-[#133B32] tracking-tight tabular-nums">
              {timeLeft.days}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs font-readex text-[#C59B27] font-bold">
              يوم
            </div>
          </div>

          {/* Hours (ساعة) */}
          <div className="flex flex-col items-center bg-[#F3EAE0] border border-[#C59B27]/40 rounded-xl p-2.5 shadow-sm">
            <div className="font-amiri text-2xl sm:text-3xl font-bold text-[#133B32] tracking-tight tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs font-readex text-[#C59B27] font-bold">
              ساعة
            </div>
          </div>

          {/* Minutes (دقيقة) */}
          <div className="flex flex-col items-center bg-[#F3EAE0] border border-[#C59B27]/40 rounded-xl p-2.5 shadow-sm">
            <div className="font-amiri text-2xl sm:text-3xl font-bold text-[#133B32] tracking-tight tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs font-readex text-[#C59B27] font-bold">
              دقيقة
            </div>
          </div>

          {/* Seconds (ثانية) */}
          <div className="flex flex-col items-center bg-[#F3EAE0] border border-[#C59B27]/40 rounded-xl p-2.5 shadow-sm">
            <div className="font-amiri text-2xl sm:text-3xl font-bold text-[#B8860B] tracking-tight tabular-nums animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs font-readex text-[#C59B27] font-bold">
              ثانية
            </div>
          </div>
        </div>

        {/* Add to Calendar Luxury Button & Dropdown Options */}
        <div className="relative z-10 mt-6 pt-2">
          <button
            type="button"
            onClick={() => setShowCalendarOptions(!showCalendarOptions)}
            className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-[#C59B27]/70 bg-[#F3EAE0] hover:bg-[#E8DDD1] text-[#133B32] text-xs font-readex font-bold transition-all shadow-sm cursor-pointer active:scale-98"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>حفظ الموعد في التقويم</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#C59B27] transition-transform duration-300 ${
                showCalendarOptions ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {showCalendarOptions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3"
              >
                <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                  {/* Google Calendar Direct Link */}
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#133B32] text-[#FFF7D9] border border-[#C59B27]/50 text-[11px] font-readex font-bold hover:brightness-110 shadow-sm transition-all"
                  >
                    <span>تقويم Google</span>
                    <ExternalLink className="w-3 h-3 text-[#C59B27]" />
                  </a>

                  {/* Apple / Outlook / ICS Download */}
                  <button
                    type="button"
                    onClick={downloadIcsFile}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#133B32] text-[#FFF7D9] border border-[#C59B27]/50 text-[11px] font-readex font-bold hover:brightness-110 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Apple / iCal</span>
                    <Download className="w-3 h-3 text-[#C59B27]" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Dua / Blessing */}
        <p className="relative z-10 mt-6 text-xs font-amiri text-[#7D5A44] italic font-medium">
          «بَارَكَ اللَّهُ لَهُمَا وَبَارَكَ عَلَيْهِمَا وَجَمَعَ بَيْنَهُمَا فِي خَيْرٍ»
        </p>
      </motion.div>
    </section>
  );
};
