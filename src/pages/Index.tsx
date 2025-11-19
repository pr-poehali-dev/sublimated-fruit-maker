import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16 space-y-24">
        <header className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Презентация логотипа
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            КриоФрут
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Бренд натуральных сублимированных фруктов с органическим дизайном
          </p>
        </header>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Основной логотип</h2>
            <p className="text-muted-foreground">Полная версия с иконкой и названием</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-12 flex items-center justify-center bg-white hover:shadow-xl transition-shadow">
              <Logo variant="full" size="lg" />
            </Card>
            <Card className="p-12 flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 hover:shadow-xl transition-shadow">
              <Logo variant="full" size="lg" />
            </Card>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Вариации размеров</h2>
            <p className="text-muted-foreground">Адаптивные версии для разных носителей</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-shadow">
              <Badge>Маленький</Badge>
              <Logo variant="full" size="sm" />
            </Card>
            <Card className="p-8 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-shadow border-2 border-primary/20">
              <Badge variant="secondary">Средний</Badge>
              <Logo variant="full" size="md" />
            </Card>
            <Card className="p-8 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-shadow">
              <Badge>Большой</Badge>
              <Logo variant="full" size="lg" />
            </Card>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Только иконка</h2>
            <p className="text-muted-foreground">Компактная версия для соцсетей и фавиконки</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="text-center space-y-4">
              <Logo variant="icon" size="sm" />
              <p className="text-sm text-muted-foreground">32x32</p>
            </div>
            <div className="text-center space-y-4">
              <Logo variant="icon" size="md" />
              <p className="text-sm text-muted-foreground">64x64</p>
            </div>
            <div className="text-center space-y-4">
              <Logo variant="icon" size="lg" />
              <p className="text-sm text-muted-foreground">128x128</p>
            </div>
            <div className="text-center space-y-4">
              <Logo variant="icon" size="xl" />
              <p className="text-sm text-muted-foreground">256x256</p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Только текст</h2>
            <p className="text-muted-foreground">Типографическая версия для заголовков</p>
          </div>
          
          <Card className="p-16 flex flex-col items-center justify-center gap-12 hover:shadow-xl transition-shadow">
            <Logo variant="text" size="sm" />
            <Logo variant="text" size="md" />
            <Logo variant="text" size="lg" />
          </Card>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Цветовая палитра</h2>
            <p className="text-muted-foreground">Природные оттенки бренда</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-full h-32 bg-primary rounded-xl shadow-lg"></div>
              <div className="text-center">
                <h3 className="font-bold text-lg">Свежая зелень</h3>
                <p className="text-sm text-muted-foreground">Основной цвет</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">#10b981</code>
              </div>
            </Card>
            
            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-full h-32 bg-secondary rounded-xl shadow-lg"></div>
              <div className="text-center">
                <h3 className="font-bold text-lg">Сочный апельсин</h3>
                <p className="text-sm text-muted-foreground">Вторичный цвет</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">#f97316</code>
              </div>
            </Card>
            
            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-full h-32 bg-accent rounded-xl shadow-lg"></div>
              <div className="text-center">
                <h3 className="font-bold text-lg">Ягодный фиолет</h3>
                <p className="text-sm text-muted-foreground">Акцентный цвет</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">#8b5cf6</code>
              </div>
            </Card>
          </div>
        </section>

        <footer className="text-center pt-12 pb-8 space-y-4 border-t border-border">
          <Logo variant="full" size="md" />
          <p className="text-sm text-muted-foreground">
            Натуральные сублимированные фрукты премиум качества
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
