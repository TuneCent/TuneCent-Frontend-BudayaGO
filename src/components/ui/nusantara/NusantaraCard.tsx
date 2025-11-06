import React from 'react';

interface NusantaraCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'bordered';
  hoverable?: boolean;
  pattern?: 'kawung' | 'songket' | 'none';
}

/**
 * NusantaraCard Component
 * Card component dengan sentuhan budaya Indonesia
 *
 * @example
 * <NusantaraCard variant="premium" pattern="songket">
 *   <h3>Judul Kartu</h3>
 *   <p>Konten...</p>
 * </NusantaraCard>
 */
export const NusantaraCard: React.FC<NusantaraCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverable = true,
  pattern = 'none',
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';

  const variantClasses = {
    default: 'bg-[var(--color-krem-lontar)] border border-[var(--color-coklat-jati)]/20 shadow-md',
    premium: 'bg-gradient-to-br from-[var(--color-emas-nusantara)]/20 to-[var(--color-oranye-terracotta)]/10 border-2 border-[var(--color-emas-nusantara)]/40 shadow-lg',
    bordered: 'bg-white border-2 border-[var(--color-coklat-jati)] border-ukiran shadow-wayang',
  };

  const hoverClasses = hoverable
    ? 'hover:-translate-y-2 hover:shadow-xl cursor-pointer'
    : '';

  const patternClasses = {
    kawung: 'bg-kawung-pattern',
    songket: 'bg-songket-pattern',
    none: '',
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${hoverClasses}
        ${patternClasses[pattern]}
        ${className}
        p-6
      `}
    >
      {children}
    </div>
  );
};

export default NusantaraCard;
