
import { useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import SuccessMessage from "@/components/SuccessMessage";
import ParticlesBackground from "@/components/ParticlesBackground";
import { WaitlistFormData } from "@/utils/webhook";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<WaitlistFormData | null>(null);
  
  // This would be your Discord webhook URL - typically you'd store this in an environment variable
  // For this example, we'll use a placeholder URL that you would replace with your actual webhook
  const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/your-webhook-id/your-webhook-token";
  
  const handleSuccess = (formData: WaitlistFormData) => {
    setSubmittedData(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 p-4 relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
            AXIOM
          </h1>
          <p className="text-lg text-gray-300">
            The next generation platform for innovators and creators
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto animate-fade-in">
          {isSubmitted && submittedData ? (
            <SuccessMessage email={submittedData.email} />
          ) : (
            <WaitlistForm onSuccess={handleSuccess} webhookUrl={DISCORD_WEBHOOK_URL} />
          )}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AXIOM. All rights reserved.</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
