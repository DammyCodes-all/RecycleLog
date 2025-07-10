import { Trash2 } from "lucide-react";

const BinPulseLoader = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      {/* Main loader container */}
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-ping"></div>

        {/* Middle pulsing ring */}
        <div className="absolute w-20 h-20 bg-primary/30 rounded-full animate-ping animation-delay-75"></div>

        {/* Inner bouncing container */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-forest rounded-full flex items-center justify-center animate-bounce shadow-lg">
          {/* Trash bin icon */}
          <Trash2
            size={24}
            className="text-white drop-shadow-sm"
            strokeWidth={2.5}
          />
        </div>

        {/* Subtle glow effect */}
        <div className="absolute w-16 h-16 bg-primary/40 rounded-full blur-md"></div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <p className="text-forest font-semibold text-lg animate-pulse">
          Loading Smart Bins...
        </p>
        <div className="flex space-x-1 justify-center mt-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default BinPulseLoader;
