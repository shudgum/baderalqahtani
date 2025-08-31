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
          <svg className="w-full h-8 fill-current text-muted/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        );
      case "diagonal":
        return (
          <div className="w-full h-8 bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3 transform -skew-y-1"></div>
        );
      case "dots":
        return (
          <div className="flex justify-center items-center h-8 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/40"
              ></div>
            ))}
          </div>
        );
      case "gradient":
        return (
          <div className="w-full h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {renderVariant()}
    </div>
  );
}