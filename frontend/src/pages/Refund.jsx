import logo from "../assets/Images/Edurefer Logo.png"

export default function Refund() {

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

            <img
              src={logo}
              alt="EduRefer Logo"
              className="
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
              "
            />

            <h1 className="
              text-3xl
              md:text-5xl
              font-bold
              mt-5
            ">
              Refund Policy
            </h1>

          </div>

          <p className="
            text-slate-300
            leading-8
            mb-8
          ">
            All products sold on EduRefer are digital products.
            Please read our refund policy carefully before making a purchase.
          </p>

          <Section
            title="1. No Refund Policy"
            text="
            Once a digital product has been purchased and delivered,
            the order is considered final and non-refundable.
            "
          />

          <Section
            title="2. Exceptions"
            text="
            Refunds may only be considered in cases of duplicate
            payments, accidental multiple charges, or verified
            technical errors during payment processing.
            "
          />

          <Section
            title="3. Fraud Policy"
            text="
            Any misuse of the platform, fraudulent activities,
            fake referrals, chargeback abuse, or policy violations
            may result in cancellation of earnings and suspension
            of the user account.
            "
          />

          <Section
            title="4. Contact"
            text="
            For refund-related concerns or payment issues,
            please contact EduRefer support within 24 hours
            of the transaction.
            "
          />

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