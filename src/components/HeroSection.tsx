import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  // 6 subtle floating warm-gold lantern sparks
  const sparks = [
    { id: 1, left: '18%', top: '35%', delay: 0, size: 'w-1.5 h-1.5', duration: 3.8 },
    { id: 2, left: '78%', top: '25%', delay: 1.2, size: 'w-2 h-2', duration: 4.5 },
    { id: 3, left: '32%', top: '55%', delay: 0.6, size: 'w-1 h-1', duration: 3.2 },
    { id: 4, left: '65%', top: '45%', delay: 1.8, size: 'w-1.5 h-1.5', duration: 4.1 },
    { id: 5, left: '48%', top: '20%', delay: 2.3, size: 'w-2 h-2', duration: 3.6 },
    { id: 6, left: '85%', top: '60%', delay: 0.9, size: 'w-1 h-1', duration: 4.8 },
  ];

  return (
    <section className="relative pt-6 pb-10 px-3 sm:px-4 text-center overflow-hidden" dir="rtl">
      {/* Classical Moroccan Horseshoe Archway Container in Warm Royal Ivory Parchment */}
      <div className="relative mx-auto max-w-[430px] rounded-t-[215px] border-2 border-[#C59B27]/40 shadow-parchment-card overflow-hidden bg-[#FAF5EC]">

        {/* Photorealistic Twilight Royal Riad Courtyard Image (Full Artwork Showcase) */}
        <div className="relative w-full h-[430px] sm:h-[470px] overflow-hidden">
          <img
            src="/images/riad-courtyard.jpg"
            alt="بهو قصر الرياض الملكي بمراكش عند الغسق"
            className="w-full h-full object-cover object-center filter contrast-[1.03]"
          />

          {/* Gentle Top Vignette to enhance the upper arch curvature */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Ultra-Soft Low Bottom Fade (starts only in bottom ~18% to preserve lanterns & pool) */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF5EC] via-[#FAF5EC]/70 to-transparent pointer-events-none" />

          {/* Floating Warm-Gold Lantern Spark Motes */}
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ y: 0, opacity: 0, scale: 0.8 }}
              animate={{
                y: [-10, -55],
                opacity: [0, 0.85, 0],
                scale: [0.8, 1.2, 0.6],
              }}
              transition={{
                duration: spark.duration,
                delay: spark.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              style={{ left: spark.left, top: spark.top }}
              className={`absolute ${spark.size} rounded-full bg-[#FFF7D9] shadow-lantern-spark pointer-events-none`}
            />
          ))}
        </div>

        {/* Content Container: Editorial Royal Stationery Typography */}
        <div className="relative z-10 px-5 sm:px-6 pt-2 pb-8 bg-[#FAF5EC]">

          {/* Traditional Islamic Bismillah in Majestic Amiri Calligraphy */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="font-amiri text-2xl sm:text-3xl text-[#133B32] tracking-wide mb-2 font-bold"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>

          {/* Quranic Verse */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-amiri text-xs sm:text-sm text-[#7D5A44] max-w-xs mx-auto leading-relaxed mb-4 italic"
          >
            «وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»
          </motion.p>

          {/* Thin Gold Ornamental Divider with Moroccan 8-pointed Star */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-16 h-px bg-gradient-to-l from-[#C59B27]/60 to-transparent" />
            <span className="text-[#C59B27] font-amiri text-sm">۞</span>
            <div className="w-16 h-px bg-gradient-to-r from-[#C59B27]/60 to-transparent" />
          </div>

          {/* Authentic Moroccan Family Invitation Text */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-[13px] font-readex text-[#7D5A44] font-medium leading-relaxed max-w-sm mx-auto"
          >
            بكل فرح وسرور، تتشرف عائلتا العروسين بدعوتكم لمشاركتنا فرحة العمر بمناسبة حفل زفاف مهدي وكنزة
          </motion.p>

          {/* Couple's Names: مهدي & كنزة in Grand Gold Amiri Typography (text-5xl) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="my-6 space-y-2"
          >
            <h1 className="font-amiri text-5xl sm:text-6xl text-[#133B32] font-bold tracking-normal leading-tight drop-shadow-[0_1px_2px_rgba(197,155,39,0.35)]">
              مهدي
            </h1>
            <div className="flex items-center justify-center gap-3 my-1.5">
              <div className="w-14 h-px bg-gradient-to-l from-[#C59B27]/70 to-transparent" />
              <span className="font-amiri text-2xl sm:text-3xl text-[#C59B27] font-bold">۞ و ۞</span>
              <div className="w-14 h-px bg-gradient-to-r from-[#C59B27]/70 to-transparent" />
            </div>
            <h1 className="font-amiri text-5xl sm:text-6xl text-[#133B32] font-bold tracking-normal leading-tight drop-shadow-[0_1px_2px_rgba(197,155,39,0.35)]">
              كنزة
            </h1>
          </motion.div>

          {/* Date & Location Pill with Standard Numerals */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 pt-5 border-t border-[#C59B27]/30 text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F3EAE0] border border-[#C59B27]/60 shadow-sm text-center">
              <span className="text-xs text-[#C59B27] font-amiri">۞</span>
              <span className="text-sm sm:text-base font-readex font-bold text-[#133B32]">
                السبت 24 يوليوز 2027 • مراكش
              </span>
              <span className="text-xs text-[#C59B27] font-amiri">۞</span>
            </div>
            <p className="text-xs font-readex text-[#7D5A44] mt-2 font-semibold">
              قصر الرياض الملكي • طريق النخيل
            </p>
          </motion.div>

          {/* Traditional Geometric Khatam Divider */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[#C59B27] text-xs">
            <span className="font-amiri">۞</span>
            <div className="w-12 h-px bg-[#C59B27]/40" />
            <span className="font-amiri text-sm">✦</span>
            <div className="w-12 h-px bg-[#C59B27]/40" />
            <span className="font-amiri">۞</span>
          </div>
        </div>
      </div>
    </section>
  );
};
