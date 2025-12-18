import { ComfortTextileLogo } from "@/components/ComfortTextileLogo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-background to-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(156,123,95,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(200,180,160,0.06),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-20 space-y-32 relative">
        
        <header className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-scale-in">
            <Badge variant="secondary" className="mb-6 text-sm px-6 py-2 shadow-md border border-border/50 backdrop-blur-sm">
              Премиальный текстиль для одежды
            </Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
            Комфорт Текстиль
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Высококачественные ткани премиум-класса для создания идеальной одежды
          </p>
        </header>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Основной логотип</h2>
            <p className="text-lg text-muted-foreground">Полная версия с символом качества</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-16 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border border-border/30 hover:border-primary/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <ComfortTextileLogo variant="full" size="lg" />
              </div>
            </Card>
            <Card className="p-16 flex items-center justify-center bg-gradient-to-br from-beige/30 via-cream/50 to-beige/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border border-border/30 hover:border-accent/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <ComfortTextileLogo variant="full" size="lg" />
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Вариации размеров</h2>
            <p className="text-lg text-muted-foreground">Адаптивные версии для разных форматов</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-border/30 hover:border-primary/30 group">
              <Badge className="shadow-md">Компактный</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <ComfortTextileLogo variant="full" size="sm" />
              </div>
            </Card>
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border-2 border-primary/30 shadow-lg group">
              <Badge variant="secondary" className="shadow-md border border-primary/20">Основной</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <ComfortTextileLogo variant="full" size="md" />
              </div>
            </Card>
            <Card className="p-10 flex flex-col items-center justify-center gap-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-border/30 hover:border-accent/30 group">
              <Badge className="shadow-md">Увеличенный</Badge>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <ComfortTextileLogo variant="full" size="lg" />
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Символ бренда</h2>
            <p className="text-lg text-muted-foreground">Знак качества для ярлыков и этикеток</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
          
          <Card className="p-16 bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-sm border border-border/30 shadow-xl">
            <div className="flex flex-wrap items-end justify-center gap-16">
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <ComfortTextileLogo variant="icon" size="sm" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">40×40</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <ComfortTextileLogo variant="icon" size="md" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">60×60</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <ComfortTextileLogo variant="icon" size="lg" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">100×100</p>
              </div>
              <div className="text-center space-y-6 group">
                <div className="group-hover:animate-float">
                  <ComfortTextileLogo variant="icon" size="xl" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">150×150</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Типографика</h2>
            <p className="text-lg text-muted-foreground">Текстовая версия для заголовков и упаковки</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
          
          <Card className="p-20 flex flex-col items-center justify-center gap-16 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-sm border border-border/30">
            <div className="hover:scale-105 transition-transform duration-300">
              <ComfortTextileLogo variant="text" size="sm" />
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent"></div>
            <div className="hover:scale-105 transition-transform duration-300">
              <ComfortTextileLogo variant="text" size="md" />
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent"></div>
            <div className="hover:scale-105 transition-transform duration-300">
              <ComfortTextileLogo variant="text" size="lg" />
            </div>
          </Card>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Наши текстильные материалы</h2>
            <p className="text-lg text-muted-foreground">Премиальные ткани высочайшего качества</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-primary/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/64f859aa-6e15-4a6d-8a77-04572b8f4b73.jpg" 
                  alt="Текстура премиального текстиля" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Натуральный хлопок</h3>
                <p className="text-sm text-muted-foreground">Мягкая текстура премиум-класса</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-primary/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/6be7e855-3ccc-4805-b760-e59cf0eff84a.jpg" 
                  alt="Элегантные складки ткани" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Элегантный лён</h3>
                <p className="text-sm text-muted-foreground">Изысканная драпировка</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-primary/30">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c7923747-6d9b-46f4-9d19-9746a5ef14f8/files/ba01ea0e-b747-4b0e-b0f9-1b34a9a4dd2a.jpg" 
                  alt="Рулоны премиального текстиля" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Широкий выбор</h3>
                <p className="text-sm text-muted-foreground">Богатая цветовая палитра</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Преимущества нашего текстиля</h2>
            <p className="text-lg text-muted-foreground">Почему выбирают Комфорт Текстиль</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-primary/30">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Премиум качество</h3>
              <p className="text-sm text-muted-foreground">Только высококачественные натуральные материалы</p>
            </Card>

            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-accent/30">
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Максимальный комфорт</h3>
              <p className="text-sm text-muted-foreground">Мягкие и приятные к телу ткани</p>
            </Card>

            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-primary/30">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Экологичность</h3>
              <p className="text-sm text-muted-foreground">Безопасные природные материалы</p>
            </Card>

            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-accent/30">
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Проверенное качество</h3>
              <p className="text-sm text-muted-foreground">Все материалы сертифицированы</p>
            </Card>
          </div>
        </section>

        <section className="space-y-16 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Цветовая палитра бренда</h2>
            <p className="text-lg text-muted-foreground">Естественные и элегантные оттенки</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-primary/40">
              <div className="w-full h-40 bg-primary rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Тёплый коричневый</h3>
                <p className="text-sm text-muted-foreground">Основной</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#9c7b5f</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-accent/40">
              <div className="w-full h-40 bg-accent rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Мягкий голубой</h3>
                <p className="text-sm text-muted-foreground">Акцент</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#8ca3b0</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border border-border/30 hover:border-beige/60">
              <div className="w-full h-40 bg-beige rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Нежный беж</h3>
                <p className="text-sm text-muted-foreground">Вторичный</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#d9cbb8</code>
              </div>
            </Card>
            
            <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group bg-white/95 backdrop-blur-sm border-2 border-cream/60 shadow-lg">
              <div className="w-full h-40 bg-cream rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300 border-4 border-white"></div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Кремовый</h3>
                <p className="text-sm text-muted-foreground">Светлый</p>
                <code className="text-xs bg-muted/50 px-3 py-1.5 rounded-md mt-2 inline-block font-mono">#f5f0ea</code>
              </div>
            </Card>
          </div>
        </section>

        <footer className="text-center pt-12 pb-8 space-y-6 border-t border-border/50 animate-fade-in">
          <ComfortTextileLogo variant="full" size="md" />
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Комфорт Текстиль — премиальные ткани для создания качественной и удобной одежды
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-beige"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
