import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Sparkles } from 'lucide-react';

export const VenueAndDressCode: React.FC = () => {
  return (
    <section className="relative py-2 px-3 sm:px-4 space-y-4" dir="rtl">
      <div className="mx-auto max-w-[430px] space-y-4">
        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-[#C59B27]/35 bg-[#FAF5EC] p-5 sm:p-6 shadow-parchment-card"
        >
          <div className="flex items-center gap-2 text-xs font-readex text-[#133B32] mb-1.5 font-bold">
            <div className="w-6 h-6 rounded-full bg-[#133B32]/10 flex items-center justify-center text-[#C59B27]">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
            </div>
            <span>مكان الحفل المبارك</span>
          </div>
          <h4 className="font-amiri font-bold text-xl text-[#133B32]">
            قصر الرياض الملكي
          </h4>
          <p className="text-xs font-readex text-[#7D5A44] mt-1 font-medium">
            طريق النخيل — مراكش، المملكة المغربية
          </p>

          <div className="mt-4">
            <a
              href="https://maps.google.com/?q=Palais+Namaskar+Marrakech+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#133B32] to-[#1B5246] hover:brightness-110 text-xs font-readex font-bold text-[#FFF7D9] border border-[#C59B27]/60 transition-all cursor-pointer shadow-sm active:scale-98"
            >
              <span>فتح الموقع على الخريطة</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B27]" />
            </a>
          </div>
        </motion.div>

        {/* Dress Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border-2 border-[#C59B27]/35 bg-[#FAF5EC] p-5 sm:p-6 shadow-parchment-card"
        >
          <div className="flex items-center gap-2 text-xs font-readex text-[#133B32] mb-1.5 font-bold">
            <div className="w-6 h-6 rounded-full bg-[#133B32]/10 flex items-center justify-center text-[#C59B27]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            </div>
            <span>اللباس الرسمي (Dress Code)</span>
          </div>
          <h4 className="font-amiri font-bold text-lg text-[#133B32]">
            الأصالة المغربية والوقار الملكي
          </h4>
          <p className="text-xs font-readex text-[#2A231D]/85 mt-2 leading-relaxed">
            نُرحب بكم باللباس التقليدي المغربي الأصيل (القفطان، التكشيطة، الجبادور) أو البدلة الرسمية الأنيقة.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
