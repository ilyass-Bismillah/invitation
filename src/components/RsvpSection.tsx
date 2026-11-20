import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw, Heart, QrCode } from 'lucide-react';
import { RsvpFormData } from '../types';

interface RsvpSectionProps {
  onReplayDoors: () => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ onReplayDoors }) => {
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    attendance: 'attending',
    guestCount: 1,
    companionName: '',
    blessingMessage: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('يرجى كتابة الاسم الكامل لتسجيل حضوركم في ديوان التشريفات.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative pt-6 pb-20 px-3 sm:px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[430px] rounded-2xl border-2 border-[#C59B27]/40 bg-[#FAF5EC] p-6 sm:p-7 shadow-parchment-card"
      >
        {/* Card Header */}
        <div className="text-center mb-8">
          <p className="text-[11px] font-readex tracking-widest text-[#C59B27] font-bold">
            بطاقة تأكيد الحضور
          </p>
          <h2 className="font-amiri text-3xl sm:text-4xl text-[#133B32] font-bold mt-1">
            يسعدنا تشريفكم
          </h2>
          <p className="text-xs font-readex text-[#7D5A44] mt-2 font-medium">
            يرجى التكرم بتأكيد الحضور قبل فاتح ماي 2027
          </p>
          <div className="w-14 h-px bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto mt-3" />
        </div>

        {/* Embedded RSVP Form or Digital Royal Pass */}
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ========================================================
               PERSONALIZED DIGITAL MOROCCAN ROYAL INVITATION PASS
               ======================================================== */
            <motion.div
              key="royal-pass"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border-2 border-[#C59B27] bg-[#F3EAE0] p-6 text-center shadow-lg overflow-hidden"
            >
              {/* Corner Zellij Embellishments */}
              <div className="absolute top-2 right-2 text-[#C59B27] text-xs font-amiri opacity-60">۞</div>
              <div className="absolute top-2 left-2 text-[#C59B27] text-xs font-amiri opacity-60">۞</div>
              <div className="absolute bottom-2 right-2 text-[#C59B27] text-xs font-amiri opacity-60">۞</div>
              <div className="absolute bottom-2 left-2 text-[#C59B27] text-xs font-amiri opacity-60">۞</div>

              {/* Pass Emblem */}
              <div className="w-16 h-16 rounded-full bg-[#133B32] border-2 border-[#C59B27] text-[#C59B27] mx-auto flex items-center justify-center shadow-md mb-3">
                <Check className="w-8 h-8 text-[#FFF7D9]" />
              </div>

              {/* Pass Title & QR Verification Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#133B32]/10 border border-[#C59B27]/40 text-[10px] font-readex font-bold text-[#133B32] uppercase tracking-wider mb-2">
                <QrCode className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>بطاقة الدخول الملكية المعتمدة</span>
              </div>

              <h3 className="font-amiri text-2xl sm:text-3xl text-[#133B32] font-bold">
                {formData.attendance === 'attending'
                  ? 'مرحباً بكم في حفل زفاف مهدي & كنزة'
                  : 'نشكركم على إبلاغنا، وسنفتقد وجودكم'}
              </h3>

              <div className="my-4 py-3 px-4 rounded-xl bg-[#FAF5EC] border border-[#C59B27]/30 text-right space-y-1.5 text-xs font-readex">
                <div className="flex justify-between items-center text-[#133B32] font-bold">
                  <span>اسم الضيف الكريم:</span>
                  <span className="font-amiri text-base">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center text-[#7D5A44]">
                  <span>حالة الحضور:</span>
                  <span className="font-bold text-[#133B32]">
                    {formData.attendance === 'attending' ? 'مؤكد (سأحضر بكل سرور)' : 'معتذر'}
                  </span>
                </div>
                {formData.attendance === 'attending' && (
                  <div className="flex justify-between items-center text-[#7D5A44]">
                    <span>عدد المقاعد:</span>
                    <span className="font-bold text-[#133B32]">{formData.guestCount} {formData.guestCount === 1 ? 'ضيف' : 'ضيوف'}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[#7D5A44]">
                  <span>التاريخ والمكان:</span>
                  <span>السبت 24 يوليوز 2027 • قصر الرياض</span>
                </div>
              </div>

              <p className="text-xs font-readex text-[#7D5A44] leading-relaxed">
                {formData.attendance === 'attending'
                  ? 'تم تسجيل بياناتكم بنجاح في ديوان التشريفات. نتطلع بشوق لمشاركتكم هذه الليلة المباركة!'
                  : 'شاكرين ومقدرين لكم تمنياتكم الصادقة للعروسين مهدي وكنزة.'}
              </p>

              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-readex font-bold text-[#C59B27] hover:text-[#133B32] underline underline-offset-4 cursor-pointer"
                >
                  تعديل بيانات الحضور
                </button>
              </div>
            </motion.div>
          ) : (
            /* ========================================================
               ACTIVE MINIMALIST GOLD-UNDERLINED RSVP FORM
               ======================================================== */
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-readex text-[#133B32] font-bold mb-1">
                  الاسم الكامل للضيف الكريم <span className="text-[#C59B27]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="مثال: لالة مريم وسيدي رشيد"
                  className="w-full bg-transparent border-b border-[#C59B27]/40 focus:border-[#C59B27] py-2.5 text-sm font-readex text-[#2A231D] placeholder-[#A49488] focus:outline-none transition-colors"
                />
              </div>

              {/* Attendance Decision Pill Buttons */}
              <div className="pt-1">
                <label className="block text-xs font-readex text-[#133B32] font-bold mb-3">
                  تأكيد تلبية الدعوة
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`py-3 px-2 rounded-xl border text-xs font-readex transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      formData.attendance === 'attending'
                        ? 'border-[#C59B27] bg-[#133B32] text-[#FFF7D9] font-bold shadow-md shadow-[#133B32]/15 ring-1 ring-[#C59B27]'
                        : 'border-[#C59B27]/30 bg-[#F3EAE0] text-[#7D5A44] hover:border-[#C59B27]/60'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27]/40" />
                    <span>سأحضر بكل سرور</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declined' })}
                    className={`py-3 px-2 rounded-xl border text-xs font-readex transition-all cursor-pointer ${
                      formData.attendance === 'declined'
                        ? 'border-[#7D5A44] bg-[#E8DDD1] text-[#2A231D] font-bold ring-1 ring-[#7D5A44]'
                        : 'border-[#C59B27]/30 bg-[#F3EAE0] text-[#7D5A44] hover:border-[#C59B27]/60'
                    }`}
                  >
                    <span>أعتذر عن الحضور</span>
                  </button>
                </div>
              </div>

              {/* Attending Details: Standard Numerals 1, 2, 3, 4 */}
              {formData.attendance === 'attending' && (
                <div className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-readex text-[#133B32] font-bold mb-2">
                      عدد المرافقين
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData({ ...formData, guestCount: num })}
                          className={`h-11 rounded-xl border text-sm font-readex font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                            formData.guestCount === num
                              ? 'border-[#C59B27] bg-[#133B32] text-[#FFF7D9] shadow-sm ring-1 ring-[#C59B27]'
                              : 'border-[#C59B27]/30 bg-[#F3EAE0] text-[#7D5A44] hover:border-[#C59B27]/60'
                          }`}
                        >
                          <span>{num}</span>
                          <span className="text-[10px] font-normal">{num === 1 ? 'ضيف' : 'ضيوف'}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.guestCount > 1 && (
                    <div>
                      <label className="block text-xs font-readex text-[#133B32] font-bold mb-1">
                        الاسم الكامل للمرافقين (اختياري)
                      </label>
                      <input
                        type="text"
                        value={formData.companionName}
                        onChange={(e) => setFormData({ ...formData, companionName: e.target.value })}
                        placeholder="أسماء الضيوف المرافقين"
                        className="w-full bg-transparent border-b border-[#C59B27]/40 focus:border-[#C59B27] py-2 text-sm font-readex text-[#2A231D] placeholder-[#A49488] focus:outline-none transition-colors"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Blessing Message for Mehdi & Kenza */}
              <div>
                <label className="block text-xs font-readex text-[#133B32] font-bold mb-1">
                  كلمة تهنئة للعروسين مهدي وكنزة (اختياري)
                </label>
                <textarea
                  rows={2}
                  value={formData.blessingMessage}
                  onChange={(e) => setFormData({ ...formData, blessingMessage: e.target.value })}
                  placeholder="بارك الله لهما وبارك عليهما... ألف مبروك لمهدي وكنزة"
                  className="w-full bg-transparent border-b border-[#C59B27]/40 focus:border-[#C59B27] py-2 text-sm font-readex text-[#2A231D] placeholder-[#A49488] focus:outline-none resize-none transition-colors"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-[#B8860B] font-readex font-medium">{errorMessage}</p>
              )}

              {/* Shimmering Royal Emerald & Gold Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden py-4 px-6 rounded-xl border-2 border-[#C59B27] bg-gradient-to-r from-[#133B32] via-[#1B5246] to-[#133B32] hover:brightness-110 text-[#FFF7D9] font-amiri font-bold text-lg tracking-wide shadow-lg shadow-[#133B32]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  {/* Subtle Shimmer Overlay */}
                  <div className="absolute inset-0 shimmer-gold pointer-events-none" />

                  {isSubmitting ? (
                    <span className="relative z-10 font-readex text-sm font-semibold">جارٍ تسجيل الحضور في الديوان الملكي...</span>
                  ) : (
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-[#C59B27] text-xl font-amiri">۞</span>
                      <span>تأكيد الحضور</span>
                      <span className="text-[#C59B27] text-xl font-amiri">۞</span>
                    </div>
                  )}
                </button>
                <p className="text-[11px] font-readex text-[#7D5A44] mt-2">
                  يصل تأكيد حضوركم مباشرة إلى ديوان تشريفات الحفل
                </p>
              </div>
            </form>
          )}
        </AnimatePresence>

        {/* Discreet "إعادة عرض البوابة" (Replay Entrance) in Arabic */}
        <div className="mt-12 pt-6 border-t border-[#C59B27]/25 text-center">
          <button
            type="button"
            onClick={onReplayDoors}
            className="inline-flex items-center gap-2 text-xs font-readex font-bold text-[#C59B27] hover:text-[#133B32] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>إعادة عرض البوابة</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
