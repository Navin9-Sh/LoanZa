import LoanCard from "@/components/LoanCard";
import { User, Home, Briefcase, GraduationCap, Car } from "lucide-react";
import EmiCalculator from "@/components/Emicalculator";

const Services = () => {
  const loanTypes = [
    {
      icon: User,
      title: "Personal Loan",
      description:
        "Flexible personal loans for your immediate needs — medical expenses, travel, wedding, or any personal requirement.",
      eligibility: [
        "Age: 21-60 years",
        "Salaried or self-employed",
        "Minimum income: ₹15,000/month",
      ],
    },
    {
      icon: Home,
      title: "Home Loan",
      description:
        "Make your dream home a reality with competitive interest rates and longer repayment tenures.",
      eligibility: [
        "Age: 23-65 years",
        "Stable income source",
        "Good credit score (650+)",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Loan",
      description:
        "Grow your business with quick financing. Suitable for working capital, expansion, or equipment purchase.",
      eligibility: [
        "Business vintage: 2+ years",
        "Annual turnover: ₹10 lakh+",
        "Valid business registration",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description:
        "Invest in your future with education loans for higher studies in India or abroad.",
      eligibility: [
        "Admission confirmation required",
        "Co-applicant (parent/guardian)",
        "Covers tuition + living expenses",
      ],
    },
    {
      icon: Car,
      title: "Vehicle Loan",
      description:
        "Finance your new or used car, two-wheeler, or commercial vehicle with easy EMI options.",
      eligibility: [
        "Age: 21-65 years",
        "Valid driving license",
        "Minimum income: ₹12,000/month",
      ],
    },
  ];

  return (
    <section
  className="relative bg-cover bg-center -mt-16"
  style={{
    backgroundImage: "url('/images/services.jpg')",
  }}
>
  {/* Overlay for readability (NO BLUR) */}
<div className="bg-slate-50/80">
    <div className="section-container section-padding">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Loan Services
        </h1>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto leading-relaxed">
          We assist with a variety of loan types to meet your financial needs.
          Choose the right loan for you and apply with confidence.
        </p>
      </div>

      {/* Loan Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loanTypes.map((loan, index) => (
          <LoanCard key={index} {...loan} />
        ))}
      </div>

      {/* EMI Calculator Section */}
      <EmiCalculator />


      {/* Note Section */}
      <div className="mt-12 rounded-lg border border-slate-300 bg-white/95 p-6 text-center">
        <p className="text-sm text-slate-700">
          <strong className="text-slate-900">Note:</strong> LoanZa is a loan
          assistance service. Final loan approval and terms are subject to
          the lending partner's policies and your eligibility.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
