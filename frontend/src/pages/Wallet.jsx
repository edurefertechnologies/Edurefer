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

export default function Wallet() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [walletData, setWalletData] =
    useState({

      balance: 0,
      earnings: 0,
      referrals: 0,

    })

  const [upi, setUpi] =
    useState("")

  const [username, setUsername] =
    useState("User")

  const [cartCount, setCartCount] =
    useState(0)

  const [loading, setLoading] =
    useState(false)

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

    setUsername(

      localStorage.getItem(
        "username"
      ) || "User"

    )

    loadWallet()

    updateCartCount()

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

    // AUTO REFRESH

    const interval =
      setInterval(() => {

        loadWallet()

      }, 5000)

    return () =>
      clearInterval(interval)

  }, [navigate])

  // =========================
  // LOAD WALLET
  // =========================

  const loadWallet =
    async () => {

      try {

        const response =
          await fetch(
            "/api/me",
            {

              headers: {

                Authorization:
                  localStorage.getItem(
                    "edurefer_token"
                  ),

              },

            }
          )

        const data =
          await response.json()

        setWalletData({

          balance:
            data.balance || 0,

          earnings:
            data.earnings || 0,

          referrals:
            data.referrals || 0,

        })

      } catch (err) {

        console.log(err)
      }
    }

  // =========================
  // CART COUNT
  // =========================

  const updateCartCount = () => {

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
  }

  // =========================
  // WITHDRAW
  // =========================

  const withdraw =
    async () => {

      if (!upi) {

        alert(
          "Enter UPI ID"
        )

        return
      }

      try {

        setLoading(true)

        const response =
          await fetch(
            "/api/reward-request",
            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json",

                Authorization:
                  localStorage.getItem(
                    "edurefer_token"
                  ),

              },

              body: JSON.stringify({

                upi,

              }),

            }
          )

        const data =
          await response.json()

        alert(
          data.message ||
          data.error
        )

        loadWallet()

      } catch (err) {

        console.log(err)

        alert(
          "Withdrawal request failed"
        )

      } finally {

        setLoading(false)
      }
    }

  // =========================
  // PROGRESS
  // =========================

  const progress =
    Math.min(

      (
        walletData.balance /
        600
      ) * 100,

      100

    )

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

        {/* TITLE */}

        <section className="
          mb-12
        ">

          <h1 className="
            text-4xl
            md:text-6xl

            font-bold

            text-slate-900

            mb-4
          ">

            🎁 Rewards Wallet

          </h1>

          <p className="
            text-slate-500

            text-base
            md:text-xl
          ">

            Track your referral
            rewards and request
            secure payouts.

          </p>

        </section>

        {/* GRID */}

        <section className="
          grid
          lg:grid-cols-3

          gap-8
        ">

          {/* LEFT CARD */}

          <div className="
            lg:col-span-2

            bg-white/70

            backdrop-blur-xl

            rounded-[32px]

            p-6
            md:p-10

            shadow-2xl
          ">

            {/* HEADING */}

            <h2 className="
              text-3xl
              md:text-4xl

              font-bold

              text-slate-900

              mb-8
            ">

              Referral Rewards

            </h2>

            {/* BALANCE */}

            <div className="
              text-5xl
              md:text-7xl

              font-bold

              bg-gradient-to-r
              from-emerald-500
              to-blue-600

              bg-clip-text
              text-transparent

              mb-8
            ">

              ₹{walletData.balance}

            </div>

            {/* PROGRESS */}

            <div className="
              mb-6
            ">

              <div className="
                w-full

                h-4

                bg-slate-200

                rounded-full

                overflow-hidden
              ">

                <div
                  style={{
                    width:
                      `${progress}%`
                  }}

                  className="
                    h-full

                    bg-gradient-to-r
                    from-emerald-500
                    to-blue-600

                    transition-all
                    duration-500
                  "
                ></div>

              </div>

              <p className="
                mt-3

                text-slate-500
              ">

                Minimum ₹600 required
                for payout request.

              </p>

            </div>

            {/* STATS */}

            <div className="
              grid
              sm:grid-cols-2

              gap-5

              mb-8
            ">

              {/* TOTAL EARNED */}

              <div className="
                bg-slate-50

                rounded-2xl

                p-6
              ">

                <p className="
                  text-slate-500

                  mb-2
                ">
                  Total Earned
                </p>

                <h3 className="
                  text-3xl

                  font-bold

                  text-slate-900
                ">

                  ₹{walletData.earnings}

                </h3>

              </div>

              {/* ELIGIBLE */}

              <div className="
                bg-slate-50

                rounded-2xl

                p-6
              ">

                <p className="
                  text-slate-500

                  mb-2
                ">
                  Eligible Payout
                </p>

                <h3 className="
                  text-3xl

                  font-bold

                  text-emerald-600
                ">

                  ₹{walletData.balance}

                </h3>

              </div>

              {/* REFERRALS */}

              <div className="
                bg-slate-50

                rounded-2xl

                p-6
              ">

                <p className="
                  text-slate-500

                  mb-2
                ">
                  Referrals
                </p>

                <h3 className="
                  text-3xl

                  font-bold

                  text-blue-600
                ">

                  {walletData.referrals}

                </h3>

              </div>

              {/* STATUS */}

              <div className="
                bg-slate-50

                rounded-2xl

                p-6
              ">

                <p className="
                  text-slate-500

                  mb-2
                ">
                  Status
                </p>

                <h3 className="
                  text-2xl

                  font-bold

                  text-slate-900
                ">

                  {walletData.balance >= 600
                    ? "Eligible ✅"
                    : "Locked 🔒"}

                </h3>

              </div>

            </div>

            {/* UPI */}

            <input
              type="text"

              placeholder="Enter UPI ID"

              value={upi}

              onChange={(e) =>
                setUpi(
                  e.target.value
                )
              }

              className="
                w-full

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                outline-none

                mb-5
              "
            />

            {/* INFO */}

            <p className="
              text-sm

              text-slate-500

              mb-6
            ">

              Referral rewards are
              processed manually
              within 3-5 working days
              after verification.

            </p>

            {/* BUTTON */}

            <button
              onClick={withdraw}

              disabled={
                walletData.balance < 600
                || loading
              }

              className="
                w-full

                py-4

                rounded-2xl

                bg-gradient-to-r
                from-emerald-500
                to-blue-600

                text-white
                text-lg

                font-bold

                shadow-xl

                hover:scale-[1.02]

                transition

                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >

              {walletData.balance < 600

                ? "Minimum ₹600 Required"

                : loading

                ? "Processing..."

                : "Request Payout"

              }

            </button>

          </div>

          {/* RIGHT SIDE */}

          <div className="
            bg-white/70

            backdrop-blur-xl

            rounded-[32px]

            p-8

            shadow-2xl

            flex
            flex-col

            justify-center
          ">

            <div className="
              text-center
            ">

              <div className="
                text-7xl

                mb-6
              ">
                🚀
              </div>

              <h3 className="
                text-3xl

                font-bold

                text-slate-900

                mb-5
              ">

                Earn Faster

              </h3>

              <p className="
                text-slate-600

                mb-10

                leading-relaxed
              ">

                Share EduRefer products
                with friends and earn
                referral rewards instantly.

              </p>

              <div className="
                bg-slate-50

                rounded-2xl

                p-6

                text-left
              ">

                <h4 className="
                  text-xl

                  font-bold

                  text-slate-900

                  mb-4
                ">

                  💡 Tips

                </h4>

                <ul className="
                  space-y-3

                  text-slate-600
                ">

                  <li>
                    • Share on WhatsApp
                  </li>

                  <li>
                    • Share on Instagram
                  </li>

                  <li>
                    • Share on Telegram
                  </li>

                  <li>
                    • Invite classmates
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}