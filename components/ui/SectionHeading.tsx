import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'blue' | 'orange' | 'cyan' | 'neutral';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'cyan',
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignment} ${className}`}>
      {badge && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-offwhite leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
