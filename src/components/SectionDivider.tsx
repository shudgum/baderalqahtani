import { ChevronDown } from "lucide-react";

interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "dots" | "gradient";
  className?: string;
}

export function SectionDivider({ variant = "wave", className = "" }: SectionDividerProps) {
  const renderVariant = () => {
    switch (variant) {
      case "wave":
        return (
          <svg className="w-full h-16 fill-current text-muted/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="animate-gradient-x"></path>
          </svg>
        );
      case "diagonal":
        return (
          <div className="w-full h-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 transform -skew-y-1 animate-gradient-x"></div>
        );
      case "dots":
        return (
          <div className="flex justify-center items-center h-16 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        );
      case "gradient":
        return (
          <div className="w-full h-16 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-gradient-x"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {renderVariant()}
      <div className="absolute inset-0 flex justify-center items-center">
        <ChevronDown className="h-6 w-6 text-primary/50 animate-bounce" />
      </div>
    </div>
  );
}