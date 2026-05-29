const faqs = [

  {
    question: "How do referrals work?",
    answer:
      "You receive referral rewards when someone purchases through your referral link.",
  },

  {
    question: "When can I withdraw?",
    answer:
      "Minimum withdrawal amount is ₹600.",
  },

  {
    question: "How do I receive payment?",
    answer:
      "Payments are sent directly to your UPI ID.",
  },

]

export default function FAQ() {
  return (

    <section
      id="faq"
      className="
        mt-20
        py-20
      "
    >

      {/* SECTION TITLE */}

      <div className="text-center mb-14">

        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-slate-900
          mb-5
        ">
          Frequently Asked Questions
        </h2>

        <p className="
          text-slate-500
          text-lg
          max-w-2xl
          mx-auto
        ">
          Everything you need to know
          about EduRefer and the referral
          reward system.
        </p>

      </div>

      {/* FAQ GRID */}

      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="
              bg-white/80
              backdrop-blur-md
              rounded-[28px]
              p-8
              shadow-xl
              border
              border-slate-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            {/* QUESTION */}

            <h3 className="
              text-2xl
              font-bold
              text-slate-900
              mb-5
              leading-snug
            ">
              {faq.question}
            </h3>

            {/* ANSWER */}

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
            ">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}