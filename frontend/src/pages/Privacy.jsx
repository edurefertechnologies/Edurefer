import logo from "../assets/Images/Edurefer Logo.png"

export default function Privacy() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-r
      from-slate-950
      to-[#000814]
      text-white
      px-4
      py-10
      flex
      justify-center
    ">

      <div className="w-full max-w-4xl">

        <div className="
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-3xl
          p-6
          md:p-10
          shadow-2xl
        ">

          {/* Logo */}

          <div className="text-center mb-8">

            <img src={logo} alt="EduRefer Logo" className="
                w-28
                md:w-36
                mx-auto
                p-2
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-blue-600
                hover:scale-110
                transition
                duration-300
                shadow-lg
              " />

            <h1 className="
              text-3xl
              md:text-5xl
              font-bold
              mt-5
            ">
              Privacy Policy
            </h1>

          </div>

          <p className="
            text-slate-300
            leading-8
            mb-8
          ">
            At EduRefer, we respect your privacy and are committed to
            protecting your personal information and data.
          </p>

          <Section title="1. Information We Collect" text="
            We collect your name, email address, username and account
            information during registration and use of our platform.
            " />

          <Section title="2. How We Use Your Data" text="
            Your information is used to manage your account,
            track referrals, process purchases, and improve our services.
            " />

          <Section title="3. Payment Information" text="
            All payments are securely processed through Razorpay.
            EduRefer does not store your card details, banking information,
            or payment credentials.
            " />

          <Section title="4. Data Sharing" text="
            We do not sell, rent, or share your personal information
            with third parties except where necessary for payment
            processing and legal compliance.
            " />

          <Section title="5. Security" text="
            We implement appropriate security measures to safeguard
            your personal information against unauthorized access
            and misuse.
            " />

          <Section title="6. Changes" text="
            This Privacy Policy may be updated periodically.
            Continued use of EduRefer indicates acceptance of any updates.
            " />

          <div className="
            mt-10
            text-center
            text-slate-400
          ">
            Last Updated: 2026
          </div>

        </div>

      </div>

    </div>
  )
}

function Section({ title, text }) {

  return (

    <div className="mb-8">

      <h2 className="
        text-xl
        md:text-2xl
        font-semibold
        mb-3
      ">
        {title}
      </h2>

      <p className="
        text-slate-300
        leading-8
      ">
        {text}
      </p>

    </div>
  )
}