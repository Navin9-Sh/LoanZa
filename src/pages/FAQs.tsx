import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <div className="section-padding -mt-10 pt-20">
      <div className="section-container max-w-4xl">

        {/* Page Header */}
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked Questions About Loan Approval
          </h1>
          <p className="mt-4 text-slate-600">
            Find answers to common questions about loans and the application process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What documents are required for a loan?
            </AccordionTrigger>
            <AccordionContent>
              Typically, you will need identity proof, address proof, income documents,
              and bank statements. Exact requirements depend on the loan type.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does loan approval take?
            </AccordionTrigger>
            <AccordionContent>
              Most loan applications are reviewed within 24–48 hours, subject to
              document verification and eligibility checks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What is the minimum CIBIL score required?
            </AccordionTrigger>
            <AccordionContent>
              A CIBIL score of 650 or above is generally preferred. However, eligibility
              may vary based on loan type and lender policies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I prepay my loan?
            </AccordionTrigger>
            <AccordionContent>
              Yes, most loans allow prepayment. Prepayment charges, if any, depend on
              the lender’s terms and conditions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What if my loan application is rejected?
            </AccordionTrigger>
            <AccordionContent>
              If your application is rejected, we help you understand the reason and
              guide you on improving eligibility or choosing alternative options.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Are there any hidden charges?
            </AccordionTrigger>
            <AccordionContent>
              No. We believe in complete transparency. All applicable charges are
              explained clearly before you proceed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-gray-200 to-orange-100 px-8 py-12 text-center text-black">
          <h2 className="text-2xl font-bold">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-black-100">
            Our team is here to help. Get in touch with us for personalized assistance.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <a href="https://wa.me/8421376852"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
                Chat on WhatsApp
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <a href="tel:+918421376852">
                📞 Call Us Now
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;
