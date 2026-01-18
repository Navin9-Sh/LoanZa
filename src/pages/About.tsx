import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="section-padding -mt-28 pt-6">
      <div className="section-container">
   


{/* Editorial About Section – Image Free */}
<div className="relative my-24 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-12">

  {/* Abstract shapes */}
  <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
      About Loanza
    </p>

    <h2 className="text-4xl font-extrabold leading-tight text-slate-900">
      Loans don’t have to be confusing.
      <br />
      <span className="text-orange-500">We exist to simplify them.</span>
    </h2>

    <p className="mt-6 text-lg leading-relaxed text-slate-600">
      At Loanza, we focus on clarity over complexity. Our role is to guide you
      through loan options honestly, explain every step transparently, and help
      you move forward with confidence.
    </p>

    <p className="mt-4 leading-relaxed text-slate-600">
      We are not lenders. We are advisors, connectors, and problem-solvers —
      committed to making the loan journey stress-free and trustworthy.
    </p>
  </div>
</div>


          {/* WHY PEOPLE TRUST LOANZA (UNIQUE SECTION) */}
          <section className="mb-16 rounded-xl bg-slate-50 p-0 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Why People Trust LoanZa?
            </h2>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-emerald-600">10,000+</p>
                <p className="mt-2 text-slate-600">Loan enquiries handled</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-emerald-600">24–48 hrs</p>
                <p className="mt-2 text-slate-600">Average response time</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-emerald-600">100%</p>
                <p className="mt-2 text-slate-600">Transparent process</p>
              </div>
            </div>
          </section>

          {/* VALUES */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
<div className="text-center p-6 rounded-xl bg-surface-elevated border border-highlight/20 
 transition-all duration-300 ease-out 
 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-highlight/10">
                  <Heart className="h-6 w-6 text-highlight" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Customer First
              </h3>
              <p className="text-sm text-muted-foreground">
                Your needs and concerns always come first. We listen, understand,
                and act accordingly.
              </p>
            </div>

<div className="text-center p-6 rounded-xl bg-surface-elevated border border-highlight/20 
 transition-all duration-300 ease-out 
 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Transparency
              </h3>
              <p className="text-sm text-muted-foreground">
                No hidden charges, no surprises. We explain everything upfront so
                you can make informed decisions.
              </p>
            </div>

<div className="text-center p-6 rounded-xl bg-surface-elevated border border-highlight/20 
 transition-all duration-300 ease-out 
 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <Users className="h-6 w-6 text-orange" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Trust
              </h3>
              <p className="text-sm text-muted-foreground">
                We've built our reputation on trust. Your information is safe
                with us, and we deliver on our promises.
              </p>
            </div>
          </div>

          {/* MISSION LINE (HUMAN TOUCH) */}
          <p className="mb-12 text-center italic text-slate-600">
            “Our mission is simple — make loans easy, transparent, and
            stress-free for everyone.”
          </p>

          {/* Closing Note – Calm, Confident, Trust-First */}
<div className="rounded-xl border border-border bg-gray-200 p-10 text-center">
  <p className="text-lg font-semibold text-foreground mb-3">
    Built on clarity. Guided by trust.
  </p>

  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
    LoanZa is not a bank or a direct lender. We operate independently to help
    you understand loan options clearly, evaluate them responsibly, and move
    forward with confidence. Our focus is not on pushing products, but on
    ensuring you make informed financial decisions.
  </p>

  <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
    Every recommendation we make is guided by transparency, simplicity, and
    respect for your long-term financial well-being.
  </p>

  <p className="mt-6 font-medium text-foreground">
    — The LoanZa Team
  </p>
</div>
      </div>
    </div>  
  );
};

export default About;
