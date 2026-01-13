import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="section-padding -mt-10 pt-16">
      <div className="section-container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            About LoanZa
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in navigating the loan process.
          </p>
        </div>
        

        {/* Introduction */}
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              LoanZa was started with a simple goal: to help everyday people
              access loans without the confusion and hassle that often comes
              with the process. We understand that applying for a loan can be
              overwhelming, especially when you're not sure where to start or
              what documents you need.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-12">
              That's where we come in. We work as a bridge between you and trusted
              lending partners, guiding you through the entire process — from
              understanding your eligibility to submitting your application.
              Our team takes pride in being honest, transparent, and always
              putting your needs first.
            </p>
          </div>

          {/* WHY PEOPLE TRUST LOANZA (UNIQUE SECTION) */}
          <section className="mb-16 rounded-xl bg-slate-50 p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Why People Trust LoanZa
            </h2>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
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
            <div className="text-center p-6 rounded-xl bg-surface-elevated border border-highlight/20">
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

            <div className="text-center p-6 rounded-xl bg-surface-elevated border border-primary/20">
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

            <div className="text-center p-6 rounded-xl bg-surface-elevated border border-orange/20">
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

          {/* Closing Note */}
          <div className="rounded-xl border border-border bg-muted p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              We're not a bank or a direct lender. We're a team that genuinely
              wants to help you find the right loan for your situation. If you
              have questions or need guidance, don't hesitate to reach out —
              we're here to help.
            </p>
            <p className="mt-4 font-medium text-foreground">
              — The LoanZa Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
