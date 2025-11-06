import React from 'react';

interface BatikBackgroundProps {
  children: React.ReactNode;
  pattern?: 'mega-mendung' | 'kawung' | 'songket';
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

/**
 * BatikBackground Component
 * Background wrapper dengan pattern batik tradisional
 *
 * @example
 * <BatikBackground pattern="mega-mendung" overlay overlayOpacity={0.9}>
 *   <div>Your content here</div>
 * </BatikBackground>
 */
export const BatikBackground: React.FC<BatikBackgroundProps> = ({
  children,
  pattern = 'mega-mendung',
  overlay = true,
  overlayOpacity = 0.95,
  className = '',
}) => {
  const patternClasses = {
    'mega-mendung': 'bg-batik-mega-mendung',
    'kawung': 'bg-kawung-pattern',
    'songket': 'bg-songket-pattern',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Background Pattern Layer */}
      <div
        className={`
          absolute inset-0
          ${patternClasses[pattern]}
          bg-cover bg-center
        `}
        aria-hidden="true"
      />

      {/* Overlay for content readability */}
      {overlay && (
        <div
          className="absolute inset-0 bg-[var(--color-krem-lontar)]"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BatikBackground;
