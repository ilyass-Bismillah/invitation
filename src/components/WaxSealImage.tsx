import React, { useEffect, useState } from 'react';

// In-memory module-level cache so offscreen transparency extraction executes only once
let cachedTransparentSeal: string | null = null;

interface WaxSealImageProps {
  className?: string;
  alt?: string;
}

export const WaxSealImage: React.FC<WaxSealImageProps> = ({
  className = 'w-28 h-28 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.85)]',
  alt = 'Royal Moroccan Wax Seal',
}) => {
  const [src, setSrc] = useState<string>(cachedTransparentSeal || '');

  useEffect(() => {
    if (cachedTransparentSeal) {
      setSrc(cachedTransparentSeal);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/wax-seal.jpg';

    img.onload = () => {
      try {
        // Optimal 600x600 canvas for fast pixel processing and ultra-crisp retina display
        const targetSize = 600;
        const canvas = document.createElement('canvas');
        canvas.width = targetSize;
        canvas.height = targetSize;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          setSrc('/images/wax-seal.jpg');
          return;
        }

        ctx.drawImage(img, 0, 0, targetSize, targetSize);
        const imgData = ctx.getImageData(0, 0, targetSize, targetSize);
        const data = imgData.data;

        // Pixel-level black background extraction with smooth anti-aliased edge feathering
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Perceived luminance: 0.299*R + 0.587*G + 0.114*B
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          if (lum < 28) {
            // Pure black background -> 100% transparent
            data[i + 3] = 0;
          } else if (lum <= 55) {
            // Anti-aliased feathering threshold for smooth organic edges
            const featherRatio = (lum - 28) / 27;
            data[i + 3] = Math.round(data[i + 3] * featherRatio);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentDataUrl = canvas.toDataURL('image/png');
        cachedTransparentSeal = transparentDataUrl;
        setSrc(transparentDataUrl);
      } catch {
        setSrc('/images/wax-seal.jpg');
      }
    };

    img.onerror = () => {
      setSrc('/images/wax-seal.jpg');
    };
  }, []);

  if (!src) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-24 h-24 rounded-full bg-[#D4AF37]/15 animate-pulse" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} select-none pointer-events-none`}
    />
  );
};

export default WaxSealImage;
