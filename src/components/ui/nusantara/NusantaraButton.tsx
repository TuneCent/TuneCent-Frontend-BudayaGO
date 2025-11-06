import React from 'react';

interface NusantaraButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'premium';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * NusantaraButton Component
 * Button dengan gradient dan styling khas Indonesia
 *
 * @example
 * <NusantaraButton variant="primary" size="lg" onClick={handleClick}>
 *   Mulai Berkarya
 * </NusantaraButton>
 */
export const NusantaraButton: React.FC<NusantaraButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 border-none cursor-pointer';

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)]
      text-[var(--color-putih-kapas)]
      shadow-md
      hover:scale-105 hover:shadow-xl
    `,
    secondary: `
      bg-[var(--color-coklat-jati)]
      text-[var(--color-putih-kapas)]
      shadow-md
      hover:bg-[var(--color-coklat-jati)]/90 hover:shadow-lg
    `,
    outline: `
      bg-transparent
      text-[var(--color-coklat-jati)]
      border-2 border-[var(--color-coklat-jati)]
      hover:bg-[var(--color-coklat-jati)] hover:text-[var(--color-putih-kapas)]
    `,
    premium: `
      bg-gradient-to-r from-[var(--color-emas-nusantara)] to-[var(--color-oranye-terracotta)]
      text-[var(--color-hitam-ebony)]
      shadow-lg
      hover:scale-105 hover:shadow-xl
      relative overflow-hidden
      before:absolute before:inset-0 before:bg-songket-pattern before:opacity-20
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none'
    : '';

  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${widthClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  );
};

export default NusantaraButton;
