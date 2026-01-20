import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface LoanCardProps {
  title: string;
  description: string;
  eligibility: string[];
  icon: LucideIcon;
}

const LoanCard = ({ title, description, eligibility, icon: Icon }: LoanCardProps) => {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white p-8 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl">
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl 
    bg-slate-100 text-slate-900 
    group-hover:bg-orange-100 group-hover:text-orange-600 
    transition-colors">
      

        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      
      <p className="text-2sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="mb-5">
        <p className="text-1xs font-medium text-foreground mb-2">Eligibility:</p>
        <ul className="space-y-1">
          {eligibility.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-highlight flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <span className="absolute right-4 top-4 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
      Popular
      </span>,
      
      <Button asChild variant="orange" className="w-full">
        <Link to="/apply">Apply Now</Link>
      </Button>
    </div>
  );
};

export default LoanCard;
