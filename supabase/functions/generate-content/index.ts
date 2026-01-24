import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GenerateRequest {
  prompt: string;
  contentType: 'caption' | 'story' | 'post' | 'vlog' | 'reel' | 'video-idea';
  platform: 'instagram' | 'youtube' | 'linkedin' | 'x' | 'facebook';
}

const contentTypePrompts: Record<string, string> = {
  caption: "Create a short, engaging social media caption (2-4 sentences max) with relevant emojis and 3-5 hashtags.",
  story: "Create an engaging social media story narrative (a personal, conversational story format, about 100-150 words) with emojis.",
  post: "Create a full social media post (300-400 words) with a hook, body content, call-to-action, and relevant hashtags.",
  vlog: "Create a detailed vlog script with sections: [INTRO], [MAIN CONTENT with 3-4 segments], and [OUTRO]. Include timing cues and talking points.",
  reel: "Create a short-form video script (15-60 seconds) with exact timing cues [0-3s], [3-7s], etc., visual directions, and audio/music suggestions.",
  "video-idea": "Generate 5-8 creative video ideas with titles and brief descriptions. Format as a numbered list with emoji headers."
};

const platformPrompts: Record<string, string> = {
  instagram: "Optimize for Instagram: use visual language, trending hashtags, and encourage saves/shares. Keep it aesthetic and engaging.",
  youtube: "Optimize for YouTube: include subscribe CTAs, encourage comments, and use a conversational tone. Add 'SUBSCRIBE 🔔' reminders.",
  linkedin: "Optimize for LinkedIn: keep it professional yet personable, focus on value and insights, use minimal emojis, encourage engagement through thoughtful questions.",
  x: "Optimize for X/Twitter: be concise (under 280 characters if caption), punchy, use 1-2 hashtags max, encourage retweets and replies.",
  facebook: "Optimize for Facebook: be relatable and shareable, encourage reactions and shares, use a friendly conversational tone."
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, contentType, platform }: GenerateRequest = await req.json();

    if (!prompt || !contentType || !platform) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: prompt, contentType, platform" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are SocialGen AI, an expert social media content creator. You create engaging, viral-worthy content tailored to specific platforms and content types.

Your content should be:
- Authentic and relatable
- Optimized for engagement (likes, comments, shares, saves)
- Using appropriate emojis and formatting
- Including relevant hashtags where appropriate
- Matching the tone and style of the target platform

${contentTypePrompts[contentType]}

${platformPrompts[platform]}

Important guidelines:
- Never use placeholder text like [insert X here]
- Make content feel personal and genuine
- Include calls-to-action when appropriate
- Use trending formats and styles
- Be creative and original`;

    const userPrompt = `Create ${contentType} content for ${platform} based on this idea/photo description:

"${prompt}"

Generate engaging, ready-to-post content that captures the essence of this idea.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.8,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content generated");
    }

    return new Response(
      JSON.stringify({ content, model: data.model }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Generate content error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to generate content" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
