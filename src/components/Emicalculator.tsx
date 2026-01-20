import { useState } from "react";
import { Link } from "react-router-dom";

const EmiCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;

  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <section className="bg-white/20 backdrop-blur-sm mt-8 py-8">
      <div className="section-container">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
            EMI Calculator
          </h2>
          <p className="text-center text-black-600 mb-4">
            Estimate your monthly loan EMI easily
          </p>

          {/* Loan Amount */}
          <div className="mb-6">
            <label className="flex justify-between text-1sm font-medium text-black">
              <span>Loan Amount</span>
              <span>₹ {amount.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="w-full mt-2 accent-slate-900"
            />
          </div>

          {/* Interest Rate */}
          <div className="mb-6">
            <label className="flex justify-between text-1sm font-medium text-black">
              <span>Interest Rate (%)</span>
              <span>{rate}%</span>
            </label>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full mt-2 accent-slate-900"
            />
          </div>

          {/* Tenure */}
          <div className="mb-8">
            <label className="flex justify-between text-1sm font-medium text-black">
              <span>Tenure (Years)</span>
              <span>{tenure} yrs</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(+e.target.value)}
              className="w-full mt-2 accent-slate-900"
            />
          </div>

          {/* Result */}
          <div className="rounded-xl bg-slate-100 p-6 text-center">
            <p className="text-1sm text-slate-600">Your Monthly EMI</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">
              ₹ {isFinite(emi) ? Math.round(emi).toLocaleString() : 0}
            </p>

            <p className="mt-4 text-center text-1sm text-slate-600">
  Calculated your EMI?{" "}
  <Link to="/apply" className="font-semibold text-slate-900 underline">
    Apply in 1 minute
  </Link>
</p>

            
          </div>
        </div>
      
    </section>
  );
};

export default EmiCalculator;
