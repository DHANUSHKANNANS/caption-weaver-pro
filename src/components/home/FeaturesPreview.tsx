import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Target, 
  Palette, 
  Globe, 
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Sparkles,
    title: 'Context-Aware Generation',
    description: 'Our AI understands your content topic and generates relevant, engaging captions.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get perfectly crafted content in seconds, not hours. Save time for what matters.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Target,
    title: 'Multiple Content Types',
    description: 'From short captions to full vlog scripts - we\'ve got all your content needs covered.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Globe,
    title: 'Platform Optimized',
    description: 'Content tailored for Instagram, YouTube, LinkedIn, X, and Facebook.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Palette,
    title: 'Topic Detection',
    description: 'Automatic detection of 10+ content categories for precise, relevant output.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Regeneration',
    description: 'Not satisfied? Regenerate until you find the perfect content for your post.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

export function FeaturesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose SocialGen AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your content creation effortless and effective.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 card-elevated"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/features">
            <Button variant="outline" size="lg" className="group">
              View All Features
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
