import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden gradient-hero-bg">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Content Generation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Create Viral Social Media Content{' '}
            <span className="gradient-text">In Seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Generate context-aware captions, stories, posts, and video scripts tailored to your content. 
            Just describe your idea and let AI do the magic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="gradient-bg shadow-soft hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Start Generating Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-border/50 hover:bg-muted/50"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">10+</span>
              </div>
              <p className="text-sm text-muted-foreground">Content Topics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">5</span>
              </div>
              <p className="text-sm text-muted-foreground">Platforms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">6</span>
              </div>
              <p className="text-sm text-muted-foreground">Content Types</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
