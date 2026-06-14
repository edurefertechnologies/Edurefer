import logo from "../assets/Images/Edurefer Logo.webp";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

export default function Contact() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-r
      from-slate-950
      to-[#000814]
      text-white
      px-4
      py-10
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* HEADER */}

        <div className="
          text-center
          mb-12
        ">

          <img src={logo} alt="EduRefer Logo" className="
              w-28
              md:w-36
              mx-auto
              p-2
              rounded-xl
              bg-gradient-to-r
              from-green-500
              to-blue-600
              shadow-lg
              hover:scale-110
              transition
            " />

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
          ">
            Contact Us
          </h1>

          <p className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
          ">
            Have questions about EduRefer?
            We'd love to hear from you.
            Get in touch with our team.
          </p>

        </div>

        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">

          {/* CONTACT INFO */}

          <div className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
          ">

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">
              Get In Touch
            </h2>

            <div className="
              flex
              flex-col
              gap-6
            ">

              <div className="
                flex
                items-center
                gap-4
              ">
                <Mail className="text-blue-400" />
                <div>
                  <p className="font-semibold">
                    Email
                  </p>
                  <p className="text-slate-400">
                    solutions@edurefertech.com
                  </p>
                </div>
              </div>

              <div className="
                flex
                items-center
                gap-4
              ">
                <Phone className="text-green-400" />
                <div>
                  <p className="font-semibold">
                    Phone
                  </p>
                  <p className="text-slate-400">
                    +91 96075-22003
                  </p>
                </div>
              </div>

              <div className="
                flex
                items-center
                gap-4
              ">
                <MapPin className="text-red-400" />
                <div>
                  <p className="font-semibold">
                    Location
                  </p>
                  <p className="text-slate-400">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
          ">

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">
              Send Message
            </h2>

            <form className="
                flex
                flex-col
                gap-5
              ">

              <input type="text" placeholder="Your Name" className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                " />

              <input type="email" placeholder="Your Email" className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                " />

              <textarea rows="5" placeholder="Your Message" className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:border-blue-500
                " />

              <button type="submit" className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-green-500
                  to-blue-600
                  py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition
                ">
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}