
import { Check } from "lucide-react";

interface SuccessMessageProps {
  email: string;
}

const SuccessMessage = ({ email }: SuccessMessageProps) => {
  return (
    <div className="animate-fade-up w-full max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
          <Check className="h-8 w-8 text-gray-300" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-100">You're on the list!</h2>
        
        <p className="text-gray-300">
          Thanks for joining the AXIOM waitlist. We've sent a confirmation to <span className="font-medium">{email}</span>
        </p>
        
        <div className="mt-6 text-sm text-gray-400">
          We'll notify you when we have important updates, BETA testing opportunities, and more!
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
