import React from 'react';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';
type LogoVariant = 'full' | 'icon' | 'text' | 'variant1' | 'variant2' | 'variant3';

interface ComfortTextileLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const sizeConfig = {
  sm: { width: 120, height: 40, iconSize: 40, fontSize: 12 },
  md: { width: 200, height: 60, iconSize: 60, fontSize: 16 },
  lg: { width: 320, height: 100, iconSize: 100, fontSize: 24 },
  xl: { width: 480, height: 150, iconSize: 150, fontSize: 32 }
};

export const ComfortTextileLogo: React.FC<ComfortTextileLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = ''
}) => {
  const config = sizeConfig[size];

  const IconVariant1 = () => (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="50" cy="50" r="45" fill="hsl(var(--primary))" />
      <path
        d="M30 50 L45 65 L70 35"
        stroke="hsl(var(--cream))"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="50" cy="50" r="45" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" />
    </svg>
  );

  const IconVariant2 = () => (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <rect x="10" y="10" width="80" height="80" rx="12" fill="hsl(var(--primary))" />
      <path d="M25 35 L75 35" stroke="hsl(var(--cream))" strokeWidth="2" opacity="0.7" />
      <path d="M25 50 L75 50" stroke="hsl(var(--cream))" strokeWidth="2" opacity="0.7" />
      <path d="M25 65 L75 65" stroke="hsl(var(--cream))" strokeWidth="2" opacity="0.7" />
      <text x="50" y="55" fill="hsl(var(--cream))" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="Montserrat, sans-serif">CT</text>
    </svg>
  );

  const IconVariant3 = () => (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="50" cy="50" r="42" fill="url(#gradient-v3)" />
      <path d="M35 30 Q50 40 65 30" stroke="hsl(var(--cream))" strokeWidth="3" fill="none" />
      <path d="M35 45 Q50 55 65 45" stroke="hsl(var(--cream))" strokeWidth="3" fill="none" />
      <path d="M35 60 Q50 70 65 60" stroke="hsl(var(--cream))" strokeWidth="3" fill="none" />
      <defs>
        <linearGradient id="gradient-v3" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>
  );

  const LogoTextVariant1 = () => (
    <div className="flex flex-col justify-center leading-none">
      <div 
        style={{ 
          fontSize: `${config.fontSize * 1.6}px`,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          color: 'hsl(var(--primary))',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Комфорт
      </div>
      <div 
        style={{ 
          fontSize: `${config.fontSize * 1.1}px`,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          color: 'hsl(var(--accent))',
          letterSpacing: '0.2em'
        }}
      >
        текстиль
      </div>
    </div>
  );

  const LogoTextVariant2 = () => (
    <div className="flex items-center gap-1">
      <div 
        style={{ 
          fontSize: `${config.fontSize * 1.8}px`,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          color: 'hsl(var(--primary))'
        }}
      >
        КОМФОРТ
      </div>
      <div className="w-0.5 h-8 bg-primary/50 mx-1"></div>
      <div 
        style={{ 
          fontSize: `${config.fontSize * 1.8}px`,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          color: 'hsl(var(--accent))'
        }}
      >
        Текстиль
      </div>
    </div>
  );

  const LogoTextVariant3 = () => (
    <div className="text-center">
      <div 
        style={{ 
          fontSize: `${config.fontSize * 1.4}px`,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          color: 'hsl(var(--primary))',
          letterSpacing: '-0.02em'
        }}
      >
        Комфорт Текстиль
      </div>
      <div 
        className="w-full h-0.5 mt-1"
        style={{
          background: 'linear-gradient(to right, transparent, hsl(var(--accent)), transparent)'
        }}
      ></div>
    </div>
  );

  if (variant === 'variant1') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <IconVariant1 />
        <LogoTextVariant1 />
      </div>
    );
  }

  if (variant === 'variant2') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <IconVariant2 />
        <LogoTextVariant2 />
      </div>
    );
  }

  if (variant === 'variant3') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <IconVariant3 />
        <LogoTextVariant3 />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={className}>
        <IconVariant1 />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <LogoTextVariant1 />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <IconVariant1 />
      <LogoTextVariant1 />
    </div>
  );
};

export default ComfortTextileLogo;
