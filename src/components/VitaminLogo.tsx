import { Card } from "@/components/ui/card";

interface VitaminLogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
}

export const VitaminLogo = ({ variant = 'full', size = 'md', showBackground = false }: VitaminLogoProps) => {
  const sizeClasses = {
    sm: 'w-40',
    md: 'w-56',
    lg: 'w-80',
    xl: 'w-[28rem]'
  };

  const iconSizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-40 h-40'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const LogoIcon = () => (
    <div className={`${iconSizeClasses[size]} relative flex items-center justify-center group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-primary to-secondary rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
      
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-gold/5 to-white border-2 border-gold/30 shadow-2xl group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="relative w-[85%] h-[85%] rounded-full border-2 border-gold/20 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[30%] h-[30%] rounded-full bg-gradient-to-br from-primary to-primary/80 absolute top-[15%] left-[20%] shadow-lg"></div>
            <div className="w-[35%] h-[35%] rounded-full bg-gradient-to-br from-secondary to-secondary/80 absolute bottom-[15%] right-[18%] shadow-lg"></div>
            <div className="w-[25%] h-[25%] rounded-full bg-gradient-to-br from-accent to-accent/80 absolute top-[40%] right-[25%] shadow-lg"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-gold font-bold" style={{ 
              fontSize: size === 'xl' ? '2.5rem' : size === 'lg' ? '1.8rem' : size === 'md' ? '1.2rem' : '0.7rem',
              fontFamily: 'Montserrat, sans-serif',
              textShadow: '0 2px 8px rgba(255,215,0,0.3)'
            }}>
              В
            </div>
          </div>
        </div>
        
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
      </div>
    </div>
  );

  const LogoText = () => (
    <div className={`${textSizeClasses[size]} font-bold tracking-tight group`}>
      <div className="flex flex-col gap-1">
        <span 
          className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent inline-block group-hover:scale-105 transition-transform duration-300" 
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.01em'
          }}
        >
          Витамин
        </span>
        <span 
          className="text-muted-foreground inline-block group-hover:scale-105 transition-transform duration-300" 
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontSize: size === 'xl' ? '2rem' : size === 'lg' ? '1.5rem' : size === 'md' ? '1rem' : '0.7rem',
            letterSpacing: '0.05em',
            fontWeight: 400
          }}
        >
          в капсуле
        </span>
      </div>
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
