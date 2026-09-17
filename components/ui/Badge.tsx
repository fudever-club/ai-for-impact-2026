import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'orange' | 'cyan' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-brand-blue/15 text-brand-cyan border-brand-blue/30',
    orange: 'bg-brand-orange/15 text-brand-orange border-brand-orange/40',
    cyan: 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40',
    neutral: 'bg-white/10 text-brand-muted border-white/15',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border backdrop-blur-md ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
