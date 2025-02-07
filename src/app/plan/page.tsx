"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface TravelPlan {
  itinerary: string;
  error?: string;
}

export default function PlanPage() {
  const [prompt, setPrompt] = useState("");
  const [plan, setPlan] = useState<TravelPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      toast({
        title: "Configuration Error",
        description: "Please set your Gemini API key in the environment variables.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      setPlan(null);

      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const promptText = `Create a detailed travel itinerary based on the following request. Include daily activities, recommended places to visit, and dining suggestions. Format the response in a clear, easy-to-read structure.\n\nRequest: ${prompt}`;

      const result = await model.generateContent(promptText);
      const response = await result.response;
      const text = response.text();

      setPlan({
        itinerary: text,
      });
    } catch (error) {
      console.error("Error generating travel plan:", error);
      
      setPlan({
        itinerary: "",
        error: "Failed to generate travel plan. Please try again.",
      });

      toast({
        title: "Error",
        description: "Failed to generate travel plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#004D40]">
      {/* Header */}
      <header className="bg-[#004D40] text-white border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">JourneyGenie</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl font-bold mb-4">Create Your Perfect Journey</h1>
            <p className="text-lg text-white/80">
              Tell us about your dream trip and let our AI create a personalized itinerary for you
            </p>
          </div>
          
          {/* Form Section */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium text-gray-900">
                  Describe your ideal trip
                </label>
                <Textarea
                  id="prompt"
                  placeholder="E.g., I want to plan a 5-day trip to Japan in spring, focusing on cultural experiences and local cuisine. My budget is $2000, and I prefer a mix of popular attractions and off-the-beaten-path experiences..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] resize-none"
                />
                <p className="text-sm text-gray-500">
                  Include details like duration, destination, interests, budget, and any specific preferences.
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading || !prompt.trim()}
                className="w-full bg-[#9EE66B] hover:bg-[#8CD65B] text-black font-medium"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating your perfect journey...
                  </>
                ) : (
                  "Generate Travel Plan"
                )}
              </Button>
            </form>

            {/* Results Section */}
            {plan && (
              <div className="mt-8">
                {plan.error ? (
                  <div className="p-4 rounded-lg bg-red-50 text-red-600">
                    {plan.error}
                  </div>
                ) : (
                  <div className="prose prose-stone max-w-none">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Travel Plan</h2>
                    <div className="rounded-lg border bg-gray-50 p-6">
                      <div className="whitespace-pre-wrap text-gray-700">{plan.itinerary}</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 