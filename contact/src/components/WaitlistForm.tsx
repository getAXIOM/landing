
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { sendToDiscordWebhook, WaitlistFormData } from "@/utils/webhook";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistFormProps {
  onSuccess: (formData: WaitlistFormData) => void;
  webhookUrl: string;
}

const WaitlistForm = ({ onSuccess, webhookUrl }: WaitlistFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: "",
    firstName: "",
    lastName: "",
    discordUsername: "",
    imageUrl: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.discordUsername) {
      newErrors.discordUsername = "Discord username is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const success = await sendToDiscordWebhook(webhookUrl, formData);
      
      if (success) {
        onSuccess(formData);
      } else {
        toast({
          title: "Submission Error",
          description: "Failed to send your information. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg bg-gray-900 border border-gray-700">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gray-100">AXIOM Waitlist</CardTitle>
        <CardDescription className="text-center text-gray-400">
          Join our waitlist to know when AXIOM has important updates, BETA testing, bonuses, and more!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`bg-gray-800 text-gray-100 ${errors.email ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className={`bg-gray-800 text-gray-100 ${errors.firstName ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className={`bg-gray-800 text-gray-100 ${errors.lastName ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="discordUsername" className="text-gray-300">Discord Username</Label>
            <Input
              id="discordUsername"
              name="discordUsername"
              type="text"
              placeholder="username#1234"
              value={formData.discordUsername}
              onChange={handleChange}
              className={`bg-gray-800 text-gray-100 ${errors.discordUsername ? "border-red-500" : "border-gray-700"}`}
            />
            {errors.discordUsername && (
              <p className="text-sm text-red-500">{errors.discordUsername}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="imageUrl" className="text-gray-300">Image URL (Optional)</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.imageUrl}
              onChange={handleChange}
              className="bg-gray-800 text-gray-100 border-gray-700"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gray-700 hover:bg-gray-600 text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-gray-400">
        We respect your privacy and will never share your information.
      </CardFooter>
    </Card>
  );
};

export default WaitlistForm;
