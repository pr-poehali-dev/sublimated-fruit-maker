import { VitaminLogo } from "@/components/VitaminLogo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,111,79,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 py-20 space-y-32 relative">
        
        <header className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-scale-in">
            <Badge variant="secondary" className="mb-6 text-sm px-6 py-2 shadow-md border border-border/50 backdrop-blur-sm">
              Премиальная презентация бренда
            </Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
            Витамин в капсуле
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-secondary mx-auto rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Натуральные сублимированные фрукты премиум-класса
          </p>
        </header>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Основной логотип</h2>
            <p className="text-lg text-muted-foreground">Полная версия с символом капсулы и фруктами</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-16 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border border-border/30 hover:border-gold/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <VitaminLogo variant="full" size="lg" />
              </div>
            </Card>
            <Card className="p-16 flex items-center justify-center bg-gradient-to-br from-primary/8 via-gold/5 to-secondary/8 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border border-border/30 hover:border-gold/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <VitaminLogo variant="full" size="lg" />
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Вариации размеров</h2>
            <p className="text-lg text-muted-foreground">Адаптивные версии для разных форматов</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-border/30 hover:border-primary/30 group">
              <Badge className="shadow-md">Компактный</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <VitaminLogo variant="full" size="sm" />
              </div>
            </Card>
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-2 border-gold/30 shadow-lg group">
              <Badge variant="secondary" className="shadow-md border border-gold/20">Основной</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <VitaminLogo variant="full" size="md" />
              </div>
            </Card>
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 group">
              <Badge className="shadow-md">Увеличенный</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <VitaminLogo variant="full" size="lg" />
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Символ бренда</h2>
            <p className="text-lg text-muted-foreground">Капсула с фруктами для соцсетей и приложений</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <Card className="p-16 bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-sm border border-border/30 shadow-xl">
            <div className="flex flex-wrap items-end justify-center gap-16">
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <VitaminLogo variant="icon" size="sm" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">40×40</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <VitaminLogo variant="icon" size="md" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">80×80</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <VitaminLogo variant="icon" size="lg" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">140×140</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <VitaminLogo variant="icon" size="xl" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">240×240</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Типографика</h2>
            <p className="text-lg text-muted-foreground">Текстовая версия для заголовков и рекламы</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <Card className="p-20 flex flex-col items-center justify-center gap-16 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-sm border border-border/30">
            <div className="hover:scale-105 transition-transform duration-300">
              <VitaminLogo variant="text" size="sm" />
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent"></div>
            <div className="hover:scale-105 transition-transform duration-300">
              <VitaminLogo variant="text" size="md" />
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent"></div>
            <div className="hover:scale-105 transition-transform duration-300">
              <VitaminLogo variant="text" size="lg" />
            </div>
          </Card>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Фруктовые образы</h2>
            <p className="text-lg text-muted-foreground">Натуральные сублимированные фрукты в деталях</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-gold/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/b7c2856e-0841-49b3-a698-c2b369d58c22.jpg" 
                  alt="Сублимированные фрукты" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Яркие ломтики</h3>
                <p className="text-sm text-muted-foreground">Натуральные цвета и текстуры</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-gold/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/48338606-ef66-43cf-801b-ea39680951e7.jpg" 
                  alt="Капсула с фруктами" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Витамины в капсуле</h3>
                <p className="text-sm text-muted-foreground">Концепция продукта</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-gold/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/2cd6e32b-3838-4dda-8130-47b87d8a42d1.jpg" 
                  alt="Фруктовый паттерн" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Премиум паттерн</h3>
                <p className="text-sm text-muted-foreground">Элегантная композиция</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Цветовая палитра</h2>
            <p className="text-lg text-muted-foreground">Премиальные природные оттенки</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm border border-border/30 hover:border-primary/40">
              <div className="w-full h-40 bg-primary rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Благородная зелень</h3>
                <p className="text-sm text-muted-foreground">Основной</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#2d6f4f</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm border border-border/30 hover:border-secondary/40">
              <div className="w-full h-40 bg-secondary rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Яркий апельсин</h3>
                <p className="text-sm text-muted-foreground">Вторичный</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#ff8000</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm border border-border/30 hover:border-accent/40">
              <div className="w-full h-40 bg-accent rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Нобл есс фиолет</h3>
                <p className="text-sm text-muted-foreground">Акцент</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#9966cc</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm border-2 border-gold/40 shadow-lg">
              <div className="w-full h-40 bg-gold rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Золотой акцент</h3>
                <p className="text-sm text-muted-foreground">Премиум</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#ffd700</code>
              </div>
            </Card>
          </div>
        </section>

        <footer className="text-center pt-12 pb-8 space-y-6 border-t border-border/50 animate-fade-in">
          <VitaminLogo variant="full" size="md" />
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Натуральные сублимированные фрукты в удобной капсуле — вся польза природы в премиальной упаковке
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
