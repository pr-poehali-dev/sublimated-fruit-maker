import React from 'react';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';
type LogoVariant = 'full' | 'icon' | 'text';

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

  const TextileIcon = () => (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <rect width="100" height="100" rx="20" fill="url(#gradient-bg)" />
      
      <path
        d="M25 35 Q50 25 75 35"
        stroke="hsl(var(--cream))"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M25 45 Q50 35 75 45"
        stroke="hsl(var(--cream))"
        strokeWidth="3"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M25 55 Q50 45 75 55"
        stroke="hsl(var(--cream))"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M25 65 Q50 55 75 65"
        stroke="hsl(var(--cream))"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
      
      <circle cx="50" cy="50" r="18" fill="hsl(var(--accent))" opacity="0.3" />
      <circle cx="50" cy="50" r="12" fill="hsl(var(--cream))" />
      
      <path
        d="M45 50 L50 55 L55 48"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      <defs>
        <linearGradient id="gradient-bg" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>
  );

  const LogoText = ({ sizeClass }: { sizeClass: string }) => (
    <div className="flex flex-col justify-center leading-tight">
      <div 
        className={`font-bold tracking-tight`}
        style={{ 
          fontSize: `${config.fontSize * 1.4}px`,
          fontFamily: 'Montserrat, sans-serif',
          color: 'hsl(var(--primary))'
        }}
      >
        КОМФОРТ
      </div>
      <div 
        className={`font-medium tracking-wide`}
        style={{ 
          fontSize: `${config.fontSize * 0.85}px`,
          fontFamily: 'Montserrat, sans-serif',
          color: 'hsl(var(--muted-foreground))',
          letterSpacing: '0.15em'
        }}
      >
        ТЕКСТИЛЬ
      </div>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={className}>
        <TextileIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <LogoText sizeClass={size} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-${size === 'sm' ? '2' : size === 'md' ? '3' : '4'} ${className}`}>
      <TextileIcon />
      <LogoText sizeClass={size} />
    </div>
  );
};

export default ComfortTextileLogo;
