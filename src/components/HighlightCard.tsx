import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

// title ke basis pe image map
const bgImageMap: Record<string, string> = {
  "Quick Approval": "/images/quick.jpg",
  "Minimal Documentation": "/images/docs.jpg",
  "Trusted Support": "/images/support.png",
};

const HighlightCard = ({ title, description, icon: Icon }: HighlightCardProps) => {
  return (
    <div
className="transition-all duration-300 
 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundImage: `url(${bgImageMap[title]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* glass / overlay */}
      <div className="flex flex-col items-center text-center p-6 bg-white/75 backdrop-blur-sm h-full">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-highlight/10">
          <Icon className="h-7 w-7 text-highlight" />
        </div>

        <h3 className="text-base font-semibold text-foreground mb-2">
          {title}
        </h3>
      

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

      </div>
    </div>
  );
};

export default HighlightCard;
