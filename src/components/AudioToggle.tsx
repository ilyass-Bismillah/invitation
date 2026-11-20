import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { moroccanAudio } from '../utils/romanticAudio';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(moroccanAudio.getIsPlaying());

  useEffect(() => {
    // Subscribe to real-time audio state changes from anywhere in the app
    const unsubscribe = moroccanAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    moroccanAudio.toggle();
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      dir="rtl"
      aria-label={isPlaying ? 'كتم العزف الأندلسي' : 'تشغيل العزف الأندلسي'}
      className="fixed top-4 right-4 z-40 group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF5EC]/95 border border-[#C59B27]/70 shadow-md backdrop-blur-md text-[#133B32] hover:border-[#C59B27] hover:bg-[#F3EAE0] transition-all cursor-pointer select-none"
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-3 bg-[#C59B27] animate-pulse rounded-full" />
            <span className="w-0.5 h-2 bg-[#C59B27] animate-pulse rounded-full delay-75" />
            <span className="w-0.5 h-3.5 bg-[#C59B27] animate-pulse rounded-full delay-150" />
          </div>
          <span className="text-[11px] font-readex font-bold text-[#133B32]">
            عود أندلسي
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#C59B27]" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#7D5A44]" />
          <span className="text-[11px] font-readex font-medium text-[#7D5A44] group-hover:text-[#133B32]">
            تشغيل العود
          </span>
        </>
      )}
    </button>
  );
};
