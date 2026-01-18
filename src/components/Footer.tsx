import { Link } from "react-router-dom";
import { Phone, Mail, MapPin ,MessageCircle} from "lucide-react";



const Footer = () => {
  return (
<footer className="bg-slate-900 text-slate-200">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
                    {/* LOGO */}
                <Link to="/" className="flex items-center gap-2">
          {/* Icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400 text-white font-extrabold">
          LZ
        </div>


          {/* Brand */}
          <span className="relative text-xl font-extrabold tracking-wide text-slate-900">
            <span className="text-xl font-extrabold text-slate-100">LoanZa</span>
            <sup className="text-xs ml-0.5 text-slate-500">®</sup>
          </span>
        </Link>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for hassle-free loan assistance. We help you find the right loan 
              with minimal documentation and quick approvals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Loan Services
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Apply for Loan
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>

  <ul className="space-y-3 text-slate-400">
    {/* Phone */}
    <li>
      <a
        href="tel:+919876543210"
        className="flex items-center gap-3 hover:text-white transition-colors"
      >
        <span>📞</span>
        <span>+91  84213 76852 </span>
      </a>
    </li>

    {/* Email */}
    <li>
      <a
        href="mailto:loanzaof@gmail.com"
        className="flex items-center gap-3 hover:text-white transition-colors"
      >
        <span>✉️</span>
        <span>loanzaoof@gmail.com</span>
      </a>
    </li>

    {/* Location */}
    <li>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Mumbai,+Maharashtra,+India"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-white transition-colors"
      >
        <span>📍</span>
        <span>Mumbai, Maharashtra, India</span>
      </a>
    </li>
    {/* Whatsapp */}
    {/* WhatsApp */}
<li>
  <a
    href="https://wa.me/ 8421376852 ?text=Hi,%20I%20want%20to%20apply%20for%20a%20loan."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-white transition-colors"
  >
    <MessageCircle className="h-5 w-5 text-green-400" />
    <span>WhatsApp: +91  84213 76852 </span>
  </a>
</li>


  </ul>
</div>

        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} LoanZa. All rights reserved. | 
            Loan assistance services only. We are not a direct lender.
          </p>
          <p className="mt-4 text-xs text-slate-500 text-center">
            Designed & Developed with care for seamless loan assistance.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
