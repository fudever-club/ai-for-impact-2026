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
    blue: 'bg-blue-50 text-blue-700 border-blue-200/80 shadow-xs font-semibold',
    orange: 'bg-orange-50 text-brand-orange border-orange-200/90 shadow-xs font-bold',
    cyan: 'bg-sky-50 text-sky-700 border-sky-200/80 shadow-xs font-semibold',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border backdrop-blur-md ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
