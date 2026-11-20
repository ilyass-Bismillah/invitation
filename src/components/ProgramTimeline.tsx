import React from 'react';
import { motion } from 'framer-motion';
import { ProgramEvent } from '../types';

export const ProgramTimeline: React.FC = () => {
  const scheduleEvents: ProgramEvent[] = [
    {
      time: '20:00',
      title: 'الاستقبال الملكي',
      description: 'استقبال الضيوف بالتمر والحليب، الشاي المغربي الأصيل والحلويات التقليدية على إيقاعات الدقة المراكشية.',
    },
    {
      time: '21:30',
      title: 'الزفة والطلعة المغربية',
      description: 'دخول العروسين بالعمارية الملكية وسط الزغاريد والأجواء الاحتفالية الأصيلة.',
    },
    {
      time: '23:00',
      title: 'مأدبة العشاء الفاخرة',
      description: 'تشكيلة من أرقى أطباق الضيافة المغربية العريقة على موائد القصر العامرة.',
    },
    {
      time: '00:30',
      title: 'سهرة الطرب الأندلسي والشعبي',
      description: 'ليلة فنية لا تُنسى تجمع بين أصالة الطرب الأندلسي وبهجة الإيقاع الشعبي المغربي حتى الهزيع الأخير من الليل.',
    },
  ];

  return (
    <section className="relative py-4 px-3 sm:px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[430px] rounded-2xl border-2 border-[#C59B27]/40 bg-[#FAF5EC] p-6 sm:p-7 shadow-parchment-card"
      >
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-[11px] font-readex tracking-widest text-[#C59B27] font-bold">
            برنامج الأمسية المغربية الأصيلة
          </p>
          <h2 className="font-amiri text-3xl sm:text-4xl text-[#133B32] font-bold mt-1">
            مراسم الحفل الملكي
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto mt-2.5" />
        </div>

        {/* Photorealistic Royal Moroccan Palace Pavilion Image (Framed in Moroccan Gold Arch) */}
        <div className="relative mx-auto mb-8 rounded-xl overflow-hidden border-2 border-[#C59B27]/40 shadow-sm">
          <img
            src="/images/moroccan-venue.jpg"
            alt="صرح قصر الرياض الملكي بمراكش"
            className="w-full h-48 sm:h-52 object-cover object-center filter contrast-[1.02]"
          />
          <div className="bg-[#133B32]/95 border-t border-[#C59B27]/40 px-3 py-2 text-center">
            <p className="text-[11px] font-readex text-[#FFF7D9] font-semibold">
              قصر الرياض الملكي • مراكش الحمراء
            </p>
          </div>
        </div>

        {/* Vertical Timeline with Custom Gold Geometric Star Markers */}
        <div className="relative pr-4 sm:pr-6 space-y-7 text-right">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute right-7 sm:right-9 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#C59B27] via-[#C59B27]/50 to-transparent pointer-events-none" />

          {scheduleEvents.map((event, idx) => (
            <motion.div
              key={event.time}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative flex items-start gap-3 sm:gap-4 group"
            >
              {/* Custom Gold Geometric Khatam Star Marker */}
              <div className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full bg-[#133B32] border border-[#C59B27] flex items-center justify-center text-[#C59B27] shadow-sm">
                <span className="text-xs font-amiri leading-none">۞</span>
              </div>

              {/* Event Content Card */}
              <div className="flex-1 bg-[#F3EAE0]/80 border border-[#C59B27]/30 rounded-xl p-3.5 transition-all group-hover:border-[#C59B27]/60 group-hover:bg-[#F3EAE0]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-amiri font-bold text-lg text-[#133B32]">
                    {event.title}
                  </h3>
                  <span className="font-readex text-xs font-bold px-2 py-0.5 rounded-full bg-[#133B32] text-[#FFF7D9] border border-[#C59B27]/40 tracking-wider">
                    {event.time}
                  </span>
                </div>
                <p className="text-xs font-readex text-[#2A231D]/80 leading-relaxed mt-1">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
