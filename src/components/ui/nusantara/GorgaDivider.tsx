import React from 'react';

interface GorgaDividerProps {
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

/**
 * GorgaDivider Component
 * Divider dengan motif Gorga Batak tradisional
 *
 * @example
 * <GorgaDivider spacing="lg" />
 */
export const GorgaDivider: React.FC<GorgaDividerProps> = ({
  className = '',
  spacing = 'md',
}) => {
  const spacingClasses = {
    sm: 'my-8',
    md: 'my-12',
    lg: 'my-16',
  };

  return (
    <div
      className={`
        divider-gorga
        ${spacingClasses[spacing]}
        ${className}
      `}
      role="separator"
      aria-hidden="true"
    />
  );
};

export default GorgaDivider;
