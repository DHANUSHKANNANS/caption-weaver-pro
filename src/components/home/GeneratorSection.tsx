import { ContentGenerator } from '@/components/generator/ContentGenerator';

export function GeneratorSection() {
  return (
    <section id="generator" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Try It Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your prompt below and watch as AI creates engaging, platform-optimized content for you.
          </p>
        </div>
        
        <ContentGenerator />
      </div>
    </section>
  );
}
