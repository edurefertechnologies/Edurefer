import {
  useEffect,
  useState,
} from "react"

import {
  useNavigate,
} from "react-router-dom"

import DashboardNavbar
from "../components/DashboardNavbar"

import Footer
from "../components/Footer"

import aboutImage
from "../assets/Images/about.png"

export default function About() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [username, setUsername] =
    useState("User")

  const [cartCount, setCartCount] =
    useState(0)

  // =========================
  // PAGE LOAD
  // =========================

  useEffect(() => {

    const token =
      localStorage.getItem(
        "edurefer_token"
      )

    if (!token) {

      navigate("/login")

      return
    }

    // USERNAME

    const user =
      localStorage.getItem(
        "username"
      ) || "User"

    setUsername(user)

    // CART COUNT

    const cart =
      JSON.parse(
        localStorage.getItem(
          "edurefer_cart"
        )
      ) || []

    let total = 0

    cart.forEach((item) => {

      total +=
        item.quantity || 1

    })

    setCartCount(total)

    // SCROLL TOP

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  return (

    <div className="
      min-h-screen

      bg-gradient-to-b
      from-slate-50
      via-sky-50
      to-emerald-50

      overflow-x-hidden
    ">

      {/* NAVBAR */}

      <DashboardNavbar
        cartCount={cartCount}
        username={username}
      />

      {/* MAIN */}

      <main className="
        max-w-7xl
        mx-auto

        px-4
        md:px-6
        lg:px-8

        py-8
        md:py-10
      ">

        {/* HERO */}

        <section className="
          text-center

          py-14
          md:py-24
        ">

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-7xl

            font-bold

            leading-tight

            mb-6

            bg-gradient-to-r
            from-emerald-500
            to-blue-600

            bg-clip-text
            text-transparent
          ">

            Empowering Students
            <br />

            Through Learning
            & Earning 🚀

          </h1>

          <p className="
            text-base
            md:text-2xl

            text-slate-600

            max-w-3xl
            mx-auto
          ">

            EduRefer helps students
            grow careers with practical
            digital resources and
            referral-based rewards.

          </p>

        </section>

        {/* ABOUT SECTION */}

        <section className="
          grid
          lg:grid-cols-2

          gap-10
          lg:gap-16

          items-center

          mb-24
        ">

          {/* TEXT */}

          <div>

            <h2 className="
              text-3xl
              md:text-5xl

              font-bold

              text-slate-900

              mb-8
            ">

              Who We Are

            </h2>

            <div className="
              space-y-6

              text-slate-600

              text-base
              md:text-lg

              leading-relaxed
            ">

              <p>

                EduRefer is a modern
                educational and earning
                platform specially built
                for students, freshers,
                and learners who want
                to improve careers while
                earning rewards.

              </p>

              <p>

                We provide premium
                career kits, resume
                resources, placement
                guidance, and digital
                learning tools designed
                for the real-world
                industry environment.

              </p>

              <p>

                Our platform combines
                education with opportunity,
                allowing users to refer
                products and earn rewards
                through a secure and
                student-friendly system.

              </p>

            </div>

          </div>

          {/* IMAGE */}

          <div className="
            relative
          ">

            <div className="
              absolute
              inset-0

              bg-gradient-to-r
              from-emerald-400
              to-blue-500

              blur-3xl
              opacity-20

              rounded-full
            "></div>

            <img
              src={aboutImage}
              alt="About EduRefer"

              className="
                relative

                w-full

                rounded-[32px]

                shadow-2xl

                hover:scale-[1.02]

                transition
                duration-500
              "
            />

          </div>

        </section>

        {/* MISSION */}

        <section className="
          mb-24
        ">

          <div className="
            text-center

            mb-14
          ">

            <h2 className="
              text-4xl
              md:text-5xl

              font-bold

              text-slate-900

              mb-5
            ">

              Our Mission

            </h2>

            <p className="
              text-slate-600

              text-base
              md:text-xl

              max-w-3xl
              mx-auto
            ">

              Making learning practical,
              accessible, and rewarding
              for every student in India.

            </p>

          </div>

          {/* MISSION GRID */}

          <div className="
            grid
            md:grid-cols-3

            gap-8
          ">

            {[
              {
                icon: "📈",

                title:
                  "Career Growth",

                text:
                  "Helping students become industry ready with practical resources.",
              },

              {
                icon: "💻",

                title:
                  "Digital Learning",

                text:
                  "Providing modern and accessible educational products online.",
              },

              {
                icon: "💸",

                title:
                  "Referral Rewards",

                text:
                  "Allowing students to earn while sharing opportunities.",
              },

            ].map((item, index) => (

              <div
                key={index}

                className="
                  bg-white

                  rounded-[30px]

                  p-8

                  shadow-xl

                  text-center

                  hover:-translate-y-2

                  transition
                "
              >

                <div className="
                  text-6xl

                  mb-6
                ">
                  {item.icon}
                </div>

                <h3 className="
                  text-2xl

                  font-bold

                  text-slate-900

                  mb-4
                ">

                  {item.title}

                </h3>

                <p className="
                  text-slate-500

                  leading-relaxed
                ">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="
          bg-gradient-to-r
          from-blue-600
          to-emerald-500

          rounded-[32px]

          p-8
          md:p-16

          text-center

          text-white

          shadow-2xl
        ">

          <h2 className="
            text-3xl
            md:text-5xl

            font-bold

            mb-6
          ">

            Start Your EduRefer
            Journey Today

          </h2>

          <p className="
            text-base
            md:text-xl

            text-white/90

            max-w-3xl
            mx-auto

            mb-8
          ">

            Join thousands of students
            building skills and earning
            rewards through EduRefer.

          </p>

          <div className="
            inline-flex

            items-center

            gap-3

            px-6
            py-4

            rounded-2xl

            bg-white/20

            backdrop-blur-md

            text-base
            md:text-lg

            font-bold
          ">

            🚀 Building the future
            of student learning
            & digital growth

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}