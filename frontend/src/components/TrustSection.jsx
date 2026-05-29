import {
  ShieldCheck,
  GraduationCap,
  Zap,
  WalletCards,
} from "lucide-react"

const features = [

  {
    icon: <GraduationCap size={40} />,
    title: "Student Focused Resources",
  },

  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Razorpay Payments",
  },

  {
    icon: <Zap size={40} />,
    title: "Instant Digital Access",
  },

  {
    icon: <WalletCards size={40} />,
    title: "Referral Reward System",
  },

]

export default function TrustSection() {
  return (

    <section className="
      mt-20
      py-20
      px-6
      rounded-[32px]
      bg-gradient-to-br
      from-slate-900
      to-slate-800
      text-white
      overflow-hidden
      relative
    ">

      {/* BACKGROUND GLOW */}

      <div className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-sky-500/20
        blur-3xl
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-emerald-500/20
        blur-3xl
        rounded-full
      "></div>

      <div className="relative z-10">

        {/* TITLE */}

        <div className="text-center mb-14">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mb-5
          ">
            Why Choose EduRefer?
          </h2>

          <p className="
            text-slate-300
            text-lg
            max-w-2xl
            mx-auto
          ">
            Modern learning resources,
            secure payments and rewarding
            referral opportunities for students.
          </p>

        </div>

        {/* GRID */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                bg-white
                text-slate-900
                rounded-3xl
                p-8
                text-center
                shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* ICON */}

              <div className="
                flex
                justify-center
                mb-6
                text-blue-600
              ">
                {feature.icon}
              </div>

              {/* TITLE */}

              <h3 className="
                text-xl
                font-bold
                leading-relaxed
              ">
                {feature.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}