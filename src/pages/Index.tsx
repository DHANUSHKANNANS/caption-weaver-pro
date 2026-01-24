import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { TrustedBy } from '@/components/home/TrustedBy';
import { GeneratorSection } from '@/components/home/GeneratorSection';
import { FeaturesPreview } from '@/components/home/FeaturesPreview';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <GeneratorSection />
      <FeaturesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
