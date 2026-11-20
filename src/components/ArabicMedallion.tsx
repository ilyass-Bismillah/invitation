import React from 'react';
import { WaxSealImage } from './WaxSealImage';

interface ArabicMedallionProps {
  onClick?: () => void;
  isOpening?: boolean;
}

export const ArabicMedallion: React.FC<ArabicMedallionProps> = ({ onClick, isOpening }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isOpening}
      className="relative group cursor-pointer focus:outline-none flex items-center justify-center"
      aria-label="فتح الباب الملكي"
    >
      <WaxSealImage
        className="w-28 h-28 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.85)] scale-110"
        alt="Royal Moroccan Wax Seal"
      />
    </button>
  );
};

export default ArabicMedallion;
