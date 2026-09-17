import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className = '',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'btn-shimmer bg-gradient-to-r from-orange-500 via-brand-orange to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:shadow-glow-orange-lg shadow-md shadow-orange-500/25 border border-orange-400/40 hover:-translate-y-0.5 transition-all duration-200',
    secondary:
      'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-glow-blue shadow-md shadow-blue-600/15 border border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200',
    outline:
      'bg-white hover:bg-orange-50/40 text-slate-800 border border-slate-200 shadow-sm hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 transition-all duration-200',
    ghost: 'text-slate-600 hover:text-brand-orange hover:bg-orange-50/50 transition-colors',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
