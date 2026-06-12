import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="
      mt-20
      bg-slate-950
      border-t
      border-slate-800
      text-slate-300
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-12
      ">

        <div className="
          grid
          md:grid-cols-3
          gap-10
        ">

          {/* BRAND */}

          <div>

            <h2 className="
              text-2xl
              font-bold
              text-white
              mb-3
            ">
              EduRefer
            </h2>

            <p className="
              text-slate-400
              leading-7
            ">
              India's smart referral platform.
              Earn rewards by referring digital
              products and grow your income.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="
              text-white
              font-semibold
              mb-4
            ">
              Quick Links
            </h3>

            <div className="
              flex
              flex-col
              gap-3
            ">

              <Link
                to="/terms"
                className="hover:text-blue-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/privacy"
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/refund"
                className="hover:text-blue-400 transition"
              >
                Refund Policy
              </Link>

              <Link
                to="/contact"
                className="hover:text-blue-400 transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="
              text-white
              font-semibold
              mb-4
            ">
              Contact
            </h3>

            <div className="
              flex
              flex-col
              gap-3
            ">

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>solutions@edurefertech.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 96075 22003</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Pune, Maharashtra, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="
          border-t
          border-slate-800
          mt-10
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        ">

          <p className="
            text-sm
            text-slate-500
          ">
            © 2026 EduRefer Technologies.
            All Rights Reserved.
          </p>

          <p className="
            text-sm
            text-slate-500
          ">
            Made with ❤️ in India
          </p>

        </div>

      </div>

    </footer>

  );
}