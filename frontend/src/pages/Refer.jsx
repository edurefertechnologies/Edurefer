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

export default function Refer() {

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

    // REFERRAL PARAM

    const urlParams =
      new URLSearchParams(
        window.location.search
      )

    const refUser =
      urlParams.get("ref")

    if (refUser) {

      localStorage.setItem(
        "referrer",
        refUser
      )
    }

    // SCROLL TOP

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  // =========================
  // REF LINK
  // =========================

  const referralLink =

`${window.location.origin}/register?ref=${username}`

  // =========================
  // COPY LINK
  // =========================

  const copyLink = () => {

    navigator.clipboard.writeText(
      referralLink
    )

    alert(
      "Referral link copied 🚀"
    )
  }

  // =========================
  // SHARE WHATSAPP
  // =========================

  const shareWhatsApp = () => {

    const message =

`🚀 Join EduRefer & Earn Money!

Use my referral link:
${referralLink}`

    window.open(

      `https://wa.me/?text=${encodeURIComponent(message)}`,

      "_blank"

    )
  }

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

          py-12
          md:py-20
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

            Invite Friends.
            <br />

            Earn Money 💸

          </h1>

          <p className="
            text-base
            md:text-2xl

            text-slate-600

            max-w-2xl
            mx-auto
          ">

            Earn ₹300 per referral
            and withdraw after ₹600.

          </p>

        </section>

        {/* REFERRAL CARD */}

        <section className="
          max-w-5xl
          mx-auto

          bg-white/70

          backdrop-blur-xl

          rounded-[28px]
          md:rounded-[36px]

          p-6
          md:p-10

          shadow-2xl

          border
          border-white/40
        ">

          <h2 className="
            text-3xl
            md:text-4xl

            font-bold

            text-slate-900

            mb-8
          ">

            Your Referral Link

          </h2>

          {/* INPUT + BUTTONS */}

          <div className="
            flex
            flex-col
            xl:flex-row

            gap-4
          ">

            {/* INPUT */}

            <input
              type="text"

              readOnly

              value={referralLink}

              className="
                flex-1

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                outline-none

                text-slate-700

                text-sm
                md:text-base
              "
            />

            {/* COPY BUTTON */}

            <button
              onClick={copyLink}

              className="
                w-full
                xl:w-auto

                px-6
                py-4

                rounded-2xl

                bg-gradient-to-r
                from-emerald-500
                to-blue-600

                text-white
                font-bold

                shadow-xl

                hover:scale-105

                transition
              "
            >
              Copy Link
            </button>

            {/* WHATSAPP */}

            <button
              onClick={shareWhatsApp}

              className="
                w-full
                xl:w-auto

                px-6
                py-4

                rounded-2xl

                bg-green-500

                text-white
                font-bold

                shadow-xl

                hover:scale-105

                transition
              "
            >
              WhatsApp Share
            </button>

          </div>

          {/* REWARD */}

          <div className="
            mt-8

            inline-flex

            items-center

            gap-3

            px-6
            py-3

            rounded-2xl

            bg-emerald-100

            text-emerald-700

            font-bold

            text-base
            md:text-lg
          ">

            💰 ₹300 per referral

          </div>

        </section>

        {/* STEPS */}

        <section className="
          mt-20

          grid
          md:grid-cols-3

          gap-8
        ">

          {[
            {
              icon: "🔗",
              title: "Share Link",
              text:
                "Share your referral link with friends.",
            },

            {
              icon: "🛍️",
              title: "Friend Buys",
              text:
                "Your friend purchases any EduRefer product.",
            },

            {
              icon: "💸",
              title: "You Earn",
              text:
                "Earn instant rewards directly into wallet.",
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
              ">
                {item.text}
              </p>

            </div>

          ))}

        </section>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}