import { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Check, Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type ContentType = 'caption' | 'story' | 'post' | 'vlog' | 'reel' | 'video-idea';
type Platform = 'instagram' | 'youtube' | 'linkedin' | 'x' | 'facebook';

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

export function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<ContentType>('caption');
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Please enter a prompt',
        description: 'Describe your photo or idea to generate content.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedContent('');

    try {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { prompt: prompt.trim(), contentType, platform },
      });

      if (error) {
        throw new Error(error.message || 'Failed to generate content');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (data?.content) {
        setGeneratedContent(data.content);
        toast({
          title: 'Content generated!',
          description: 'Your AI-powered content is ready.',
        });
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: 'Generation failed',
        description: error instanceof Error ? error.message : 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
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
              <h2 className="text-lg font-semibold text-foreground">AI Content Generator</h2>
              <p className="text-sm text-muted-foreground">Powered by advanced AI models</p>
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
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
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

        {/* Loading State */}
        {isGenerating && !generatedContent && (
          <div className="border-t border-border/50 bg-muted/20 p-8 animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">AI is crafting your content...</p>
                <p className="text-sm text-muted-foreground">This usually takes a few seconds</p>
              </div>
            </div>
          </div>
        )}

        {/* Output Section */}
        {generatedContent && !isGenerating && (
          <div className="border-t border-border/50 bg-muted/20 p-6 sm:p-8 animate-fade-in">
            {/* AI Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                <Sparkles className="w-3 h-3" />
                AI Generated
              </span>
            </div>

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
