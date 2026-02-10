import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'primary' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'none',
  padding = 'lg',
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    primary: 'bg-primary-50',
    none: '',
  };

  const paddingStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  return (
    <section className={`${bgStyles[background]} ${paddingStyles[padding]} ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
