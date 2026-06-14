import logo from "../assets/Images/Edurefer Logo.webp"

export default function Terms() {

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

  <div className="
        w-full
        max-w-4xl
      ">

    <div className="
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-3xl
          p-6
          md:p-10
          shadow-2xl
          animate-[fadeIn_.8s_ease]
        ">

      {/* LOGO */}

      <div className="
            text-center
            mb-8
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
          Terms & Conditions
        </h1>

      </div>

      <p className="
            text-slate-300
            leading-8
            mb-8
          ">
        Welcome to EduRefer.
        By using our platform,
        you agree to the following terms and conditions.
      </p>

      <Section title="1. Use of Platform" text="
            You must provide accurate information during registration.
            Any misuse, fraudulent activity or policy violation may result
            in suspension or permanent termination of your account.
            " />

      <Section title="2. Products" text="
            All digital products available on EduRefer are non-refundable
            once purchased and delivered.
            " />

      <Section title="3. Referral Earnings" text="
            Users earn ₹300 for every successful referral purchase.
            Fake referrals, self-referrals, or fraudulent activities
            are strictly prohibited.
            " />

      <Section title="4. Withdrawals" text="
            Minimum withdrawal amount is ₹600.
            Payments are processed to the UPI ID or payment details
            provided by the user.
            " />

      <Section title="5. Account Suspension" text="
            EduRefer reserves the right to suspend or terminate
            accounts involved in suspicious, fraudulent, or abusive activity.
            " />

      <Section title="6. Changes" text="
            EduRefer may update these terms and conditions at any time
            without prior notice.
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