import { Card } from "@/components/ui/card";

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
}

export const Logo = ({ variant = 'full', size = 'md', showBackground = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-96'
  };

  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
    xl: 'text-7xl'
  };

  const LogoIcon = () => (
    <div className={`${iconSizeClasses[size]} relative flex items-center justify-center group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-[30%] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="relative bg-gradient-to-br from-primary via-accent/80 to-secondary rounded-[30%] p-2 shadow-2xl flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-300 border border-white/20">
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-gold/60 rounded-full blur-sm"></div>
          <div className="text-white font-bold text-center leading-none tracking-tight" style={{ 
            fontSize: size === 'xl' ? '3rem' : size === 'lg' ? '2rem' : size === 'md' ? '1.5rem' : '1rem',
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            К<span className="text-gold">Ф</span>
          </div>
        </div>
      </div>
    </div>
  );

  const LogoText = () => (
    <div className={`${textSizeClasses[size]} font-bold tracking-tight group`}>
      <span 
        className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent inline-block group-hover:scale-105 transition-transform duration-300" 
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '-0.02em'
        }}
      >
        Крио<span className="relative">
          Фрут
          <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
        </span>
      </span>
    </div>
  );

  if (variant === 'icon') {
    return showBackground ? (
      <Card className="p-4 inline-block bg-white/50 backdrop-blur-sm border border-border/50 shadow-xl">
        <LogoIcon />
      </Card>
    ) : (
      <LogoIcon />
    );
  }

  if (variant === 'text') {
    return showBackground ? (
      <Card className="p-4 inline-block bg-white/50 backdrop-blur-sm border border-border/50 shadow-xl">
        <LogoText />
      </Card>
    ) : (
      <LogoText />
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center gap-4 ${showBackground ? 'bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-border/50' : ''}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};