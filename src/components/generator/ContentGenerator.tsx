import { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Check, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { generateContent, ContentType, Platform, getTopicFromPrompt } from '@/lib/contentGenerator';
import { useToast } from '@/hooks/use-toast';

const contentTypes: { value: ContentType; label: string; icon: string }[] = [
  { value: 'caption', label: 'Caption', icon: '📝' },
  { value: 'story', label: 'Story', icon: '📖' },
  { value: 'post', label: 'Post', icon: '📄' },
  { value: 'vlog', label: 'Vlog Script', icon: '🎬' },
  { value: 'reel', label: 'Reel Script', icon: '🎥' },
  { value: 'video-idea', label: 'Video Idea', icon: '💡' },
];

const platforms: { value: Platform; label: string; icon: string }[] = [
  { value: 'instagram', label: 'Instagram', icon: '📸' },
  { value: 'youtube', label: 'YouTube', icon: '▶️' },
  { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { value: 'x', label: 'X (Twitter)', icon: '🐦' },
  { value: 'facebook', label: 'Facebook', icon: '👍' },
];

const topicLabels: Record<string, { label: string; color: string }> = {
  car: { label: '🚗 Automotive', color: 'bg-red-100 text-red-700' },
  food: { label: '🍕 Food & Dining', color: 'bg-orange-100 text-orange-700' },
  travel: { label: '✈️ Travel', color: 'bg-blue-100 text-blue-700' },
  fashion: { label: '👗 Fashion', color: 'bg-pink-100 text-pink-700' },
  fitness: { label: '💪 Fitness', color: 'bg-green-100 text-green-700' },
  tech: { label: '💻 Technology', color: 'bg-purple-100 text-purple-700' },
  nature: { label: '🌿 Nature', color: 'bg-emerald-100 text-emerald-700' },
  music: { label: '🎵 Music', color: 'bg-indigo-100 text-indigo-700' },
  pets: { label: '🐾 Pets', color: 'bg-amber-100 text-amber-700' },
  business: { label: '💼 Business', color: 'bg-slate-100 text-slate-700' },
  celebration: { label: '🎉 Celebration', color: 'bg-rose-100 text-rose-700' },
  lifestyle: { label: '☀️ Lifestyle', color: 'bg-cyan-100 text-cyan-700' },
  general: { label: '✨ General', color: 'bg-gray-100 text-gray-700' },
};

export function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<ContentType>('caption');
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [generatedContent, setGeneratedContent] = useState('');
  const [detectedTopic, setDetectedTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: 'Please enter a prompt',
        description: 'Describe your photo or idea to generate content.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const topic = getTopicFromPrompt(prompt);
      setDetectedTopic(topic);
      const content = generateContent(prompt, contentType, platform);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    toast({
      title: 'Copied to clipboard!',
      description: 'Your content is ready to paste.',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
        {/* Input Section */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-soft">
              <Wand2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Content Generator</h2>
              <p className="text-sm text-muted-foreground">Describe your idea and we'll create the perfect content</p>
            </div>
          </div>

          {/* Prompt Input */}
          <div className="space-y-4">
            <Textarea
              placeholder="Describe your photo or idea... (e.g., 'sunset beach vacation photo', 'new coffee shop visit', 'morning gym workout selfie')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] resize-none bg-muted/50 border-border/50 focus:border-primary/50 transition-colors"
            />

            {/* Options Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                  Content Type
                </label>
                <Select value={contentType} onValueChange={(v) => setContentType(v as ContentType)}>
                  <SelectTrigger className="w-full bg-muted/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <span className="flex items-center gap-2">
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                  Platform
                </label>
                <Select value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
                  <SelectTrigger className="w-full bg-muted/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        <span className="flex items-center gap-2">
                          <span>{p.icon}</span>
                          <span>{p.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:self-end">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full sm:w-auto gradient-bg shadow-soft hover:shadow-glow transition-all duration-300 px-8"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        {generatedContent && (
          <div className="border-t border-border/50 bg-muted/20 p-6 sm:p-8 animate-fade-in">
            {/* Topic Badge */}
            {detectedTopic && (
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${topicLabels[detectedTopic]?.color || topicLabels.general.color}`}>
                  {topicLabels[detectedTopic]?.label || topicLabels.general.label}
                </span>
              </div>
            )}

            {/* Generated Content */}
            <div className="bg-card rounded-xl border border-border/50 p-4 sm:p-6 mb-4">
              <pre className="whitespace-pre-wrap font-sans text-foreground text-sm sm:text-base leading-relaxed">
                {generatedContent}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleCopy}
                className="flex-1 sm:flex-none"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={handleRegenerate}
                disabled={isGenerating}
                className="flex-1 sm:flex-none"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                Regenerate
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
