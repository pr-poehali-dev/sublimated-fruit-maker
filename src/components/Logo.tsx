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
    <div className={`${iconSizeClasses[size]} relative flex items-center justify-center`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-20 blur-xl"></div>
      <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-2 shadow-lg flex items-center justify-center w-full h-full">
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <div className="text-white font-bold text-center leading-none" style={{ fontSize: size === 'xl' ? '3rem' : size === 'lg' ? '2rem' : size === 'md' ? '1.5rem' : '1rem' }}>
            К<span className="text-secondary">Ф</span>
          </div>
        </div>
      </div>
    </div>
  );

  const LogoText = () => (
    <div className={`${textSizeClasses[size]} font-bold tracking-tight`}>
      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Крио<span className="text-accent">Фрут</span>
      </span>
    </div>
  );

  if (variant === 'icon') {
    return showBackground ? (
      <Card className="p-4 inline-block">
        <LogoIcon />
      </Card>
    ) : (
      <LogoIcon />
    );
  }

  if (variant === 'text') {
    return showBackground ? (
      <Card className="p-4 inline-block">
        <LogoText />
      </Card>
    ) : (
      <LogoText />
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center gap-4 ${showBackground ? 'bg-card p-6 rounded-2xl shadow-lg' : ''}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};
