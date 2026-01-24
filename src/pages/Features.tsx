import { Layout } from '@/components/layout/Layout';
import { 
  Sparkles, 
  Zap, 
  Target, 
  Palette, 
  Globe, 
  RefreshCw,
  MessageSquare,
  Video,
  FileText,
  Lightbulb,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Facebook,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const mainFeatures = [
  {
    icon: Sparkles,
    title: 'AI-Powered Context Detection',
    description: 'Our intelligent system analyzes your prompt and automatically detects the topic - whether it\'s food, travel, fitness, tech, or any of our 10+ categories. This ensures every piece of content is relevant and engaging.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Generation',
    description: 'No more staring at blank screens. Get professionally crafted content in under a second. Perfect for busy creators who need quality content at scale.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Optimization',
    description: 'Each platform has its unique style and character limits. Our AI automatically adapts your content for Instagram, YouTube, LinkedIn, X, and Facebook.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Target,
    title: 'Engagement-Focused Output',
    description: 'Every caption includes strategic emoji placement, trending hashtags, and call-to-actions designed to maximize engagement and reach.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

const contentTypes = [
  {
    icon: MessageSquare,
    title: 'Captions',
    description: 'Short, punchy captions perfect for image posts',
  },
  {
    icon: FileText,
    title: 'Stories',
    description: 'Engaging narrative content for social media stories',
  },
  {
    icon: FileText,
    title: 'Posts',
    description: 'Full-length posts with hooks, body, and CTAs',
  },
  {
    icon: Video,
    title: 'Vlog Scripts',
    description: 'Complete video scripts with intro, sections, and outro',
  },
  {
    icon: Video,
    title: 'Reel Scripts',
    description: 'Short-form video scripts with timing cues',
  },
  {
    icon: Lightbulb,
    title: 'Video Ideas',
    description: 'Creative video concepts and content calendars',
  },
];

const platforms = [
  { icon: Instagram, name: 'Instagram', color: 'text-pink-500' },
  { icon: Youtube, name: 'YouTube', color: 'text-red-500' },
  { icon: Linkedin, name: 'LinkedIn', color: 'text-blue-600' },
  { icon: Twitter, name: 'X (Twitter)', color: 'text-foreground' },
  { icon: Facebook, name: 'Facebook', color: 'text-blue-500' },
];

const topics = [
  '🚗 Automotive', '🍕 Food & Dining', '✈️ Travel', '👗 Fashion',
  '💪 Fitness', '💻 Technology', '🌿 Nature', '🎵 Music',
  '🐾 Pets', '💼 Business', '🎉 Celebrations', '☀️ Lifestyle'
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 gradient-hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Powerful Features for{' '}
              <span className="gradient-text">Modern Creators</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to create engaging social media content that resonates with your audience.
            </p>
            <Link to="/">
              <Button size="lg" className="gradient-bg shadow-soft hover:shadow-glow">
                Try It Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border/50 card-elevated"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              6 Content Types, One Tool
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From quick captions to detailed video scripts, we've got every content format covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 flex items-start gap-4 card-elevated"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <type.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Optimized for Every Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each platform has unique requirements. We tailor your content accordingly.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border/50 card-elevated"
              >
                <platform.icon className={`w-6 h-6 ${platform.color}`} />
                <span className="font-medium text-foreground">{platform.name}</span>
                <Check className="w-4 h-4 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              12 Content Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI automatically detects your content topic for perfectly relevant captions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card rounded-full border border-border/50 text-sm font-medium text-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Start generating engaging social media content in seconds.
          </p>
          <Link to="/">
            <Button size="lg" className="gradient-bg shadow-soft hover:shadow-glow">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
