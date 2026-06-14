import aboutImage from "../assets/Images/about.webp"
import { Link } from "react-router-dom"

export default function About() {
  return (

    <section
      id="about"
      className="
        mt-20
        bg-white
        rounded-[32px]
        p-8
        md:p-16
        shadow-2xl
        overflow-hidden
      "
    >

      <div className="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-14
      ">

        {/* LEFT CONTENT */}

        <div className="
          flex-1
          text-center
          lg:text-left
        ">

          <span className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-blue-100
            text-blue-600
            font-semibold
            mb-5
          ">
            About Us
          </span>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            leading-tight
            mb-8
          ">
            Empowering Students
            <br />
            Through Learning &
            Earning
          </h2>

          <p className="
            text-slate-600
            text-lg
            leading-relaxed
            mb-6
          ">
            EduRefer is a modern
            student-focused platform
            designed to help learners
            grow their careers while
            earning through referrals.
          </p>

          <p className="
            text-slate-600
            text-lg
            leading-relaxed
            mb-6
          ">
            We provide career starter kits,
            placement resources, resume
            guidance and digital learning
            products specially made for
            students and freshers.
          </p>

          <p className="
            text-slate-600
            text-lg
            leading-relaxed
            mb-10
          ">
            Our mission is to make
            learning practical,
            affordable and rewarding
            for every student across India.
          </p>

          {/* BUTTON */}

          <Link
            to="/register"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-emerald-500
              to-blue-600
              text-white
              font-bold
              text-lg
              shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          >
            Join EduRefer
          </Link>

        </div>

        {/* RIGHT IMAGE */}

        <div className="
          flex-1
          flex
          justify-center
        ">

          <div className="
            relative
            max-w-md
            w-full
          ">

            {/* GLOW EFFECT */}

            <div className="
              absolute
              inset-0
              bg-gradient-to-br
              from-sky-400
              to-emerald-400
              blur-3xl
              opacity-20
              rounded-full
            "></div>

            {/* IMAGE CARD */}

            <div className="
              relative
              bg-white
              rounded-[32px]
              overflow-hidden
              shadow-2xl
              hover:-translate-y-2
              transition
              duration-500
            ">

              <img
                src={aboutImage}
                alt="About EduRefer"
                className="
                  w-full
                  h-full
                  object-contain
                  hover:scale-105
                  transition
                  duration-700
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}