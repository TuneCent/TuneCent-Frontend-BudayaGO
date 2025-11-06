import React from 'react';
import Image from 'next/image';

interface NusantaraIconProps {
  name: 'angklung-note' | 'wayang-user' | 'joglo-home' | 'anyaman-wallet' |
        'melati-heart' | 'gamelan-icon' | 'mahkota-crown';
  size?: number;
  className?: string;
  alt?: string;
}

/**
 * NusantaraIcon Component
 * Wrapper untuk custom icon set Nusantara
 *
 * @example
 * <NusantaraIcon name="gamelan-icon" size={32} />
 */
export const NusantaraIcon: React.FC<NusantaraIconProps> = ({
  name,
  size = 24,
  className = '',
  alt,
}) => {
  const iconPath = `/assets/icons/nusantara/${name}.svg`;
  const altText = alt || name.replace('-', ' ');

  return (
    <Image
      src={iconPath}
      alt={altText}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default NusantaraIcon;
