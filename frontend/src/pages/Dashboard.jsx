import {
  useEffect,
  useState,
} from "react"

import {
  useNavigate,
} from "react-router-dom"

import DashboardNavbar
  from "../components/DashboardNavbar"

import Products
  from "../components/Products"

import Footer
  from "../components/Footer"

import {
  Wallet,
  Users,
  IndianRupee,
} from "lucide-react"

export default function Dashboard() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [userData, setUserData] =
    useState({

      balance: 0,
      referrals: 0,
      earnings: 0,

    })

  const [greeting, setGreeting] =
    useState("")

  const [username, setUsername] =
    useState("user")

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

    loadDashboard()

    updateGreeting()

    updateCartCount()

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  // =========================
  // LOAD DASHBOARD
  // =========================

  const loadDashboard =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "edurefer_token"
          )

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/me`,
          {
            headers: {
              Authorization:
                localStorage.getItem("edurefer_token")
            }
          }
        )

        const data =
          await response.json()

        setUserData({

          balance:
            data.balance || 0,

          referrals:
            data.referrals || 0,

          earnings:
            data.earnings || 0,

        })

        const storedUsername =
          localStorage.getItem("username")

        console.log(
          "Stored Username =",
          storedUsername
        )

        setUsername(storedUsername)

      } catch (err) {

        console.log(err)

      }
    }

  // =========================
  // GREETING
  // =========================

  const updateGreeting = () => {

    const hour =
      new Date().getHours()

    let greet = "Hello"

    if (hour < 12)
      greet = "Good Morning"

    else if (hour < 18)
      greet = "Good Afternoon"

    else
      greet = "Good Evening"

    setGreeting(greet)
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
  // ADD TO CART
  // =========================

  const addToCart = (
    name,
    price
  ) => {

    let cart =
      JSON.parse(
        localStorage.getItem(
          "edurefer_cart"
        )
      ) || []

    const existing =
      cart.find(
        (item) =>
          item.name === name
      )

    if (existing) {

      existing.quantity =
        (existing.quantity || 1) + 1

    } else {

      cart.push({

        name,
        price,
        quantity: 1,

      })
    }

    localStorage.setItem(

      "edurefer_cart",

      JSON.stringify(cart)

    )

    updateCartCount()

    alert(
      `${name} added to cart 🛒`
    )
  }

  console.log(
    "Dashboard State Username =",
    username
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

        {/* HERO */}

        <section className="
          bg-gradient-to-r
          from-sky-500
          to-emerald-500

          rounded-[28px]
          md:rounded-[36px]

          p-8
          md:p-12

          text-white

          shadow-2xl

          mb-16
        ">

          <h1 className="
            text-4xl
            md:text-6xl

            font-bold

            mb-4
          ">

            👋 {greeting},
            <br />

            {username}

          </h1>

          <p className="
            text-lg
            md:text-xl

            text-white/90
          ">

            Welcome back to your
            EduRefer dashboard.

          </p>

        </section>

        {/* STATS */}

        <section className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3

          gap-8

          mb-20
        ">

          {/* BALANCE */}

          <div className="
            bg-white

            rounded-[28px]

            p-8

            shadow-xl

            hover:-translate-y-2

            transition
          ">

            <div className="
              w-16
              h-16

              rounded-2xl

              bg-blue-100
              text-blue-600

              flex
              items-center
              justify-center

              mb-6
            ">

              <Wallet size={34} />

            </div>

            <h2 className="
              text-2xl
              font-bold

              text-slate-900

              mb-3
            ">
              Balance
            </h2>

            <p className="
              text-5xl
              font-bold

              text-blue-600
            ">
              ₹{userData.balance}
            </p>

          </div>

          {/* REFERRALS */}

          <div className="
            bg-white

            rounded-[28px]

            p-8

            shadow-xl

            hover:-translate-y-2

            transition
          ">

            <div className="
              w-16
              h-16

              rounded-2xl

              bg-emerald-100
              text-emerald-600

              flex
              items-center
              justify-center

              mb-6
            ">

              <Users size={34} />

            </div>

            <h2 className="
              text-2xl
              font-bold

              text-slate-900

              mb-3
            ">
              Referrals
            </h2>

            <p className="
              text-5xl
              font-bold

              text-emerald-600
            ">
              {userData.referrals}
            </p>

          </div>

          {/* EARNINGS */}

          <div className="
            bg-white

            rounded-[28px]

            p-8

            shadow-xl

            hover:-translate-y-2

            transition
          ">

            <div className="
              w-16
              h-16

              rounded-2xl

              bg-yellow-100
              text-yellow-600

              flex
              items-center
              justify-center

              mb-6
            ">

              <IndianRupee
                size={34}
              />

            </div>

            <h2 className="
              text-2xl
              font-bold

              text-slate-900

              mb-3
            ">
              Earnings
            </h2>

            <p className="
              text-5xl
              font-bold

              text-yellow-600
            ">
              ₹{userData.earnings}
            </p>

          </div>

        </section>

        <div className="product-card fade-up">
          {/* DASHBOARD Products */}
          <Products mode="dashboard" />

        </div>

        {/* QUICK ACTIONS */}

        <section className="
          mb-20
        ">

          <h2 className="
            text-3xl
            md:text-4xl

            font-bold

            text-slate-900

            mb-8
          ">
            Quick Actions
          </h2>

          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4

            gap-6
          ">

            {[
              {
                title:
                  "Refer & Earn",

                icon: "👥",

                path: "/refer",

                color:
                  "bg-blue-100 text-blue-600",

              },

              {
                title:
                  "Wallet",

                icon: "💰",

                path: "/wallet",

                color:
                  "bg-emerald-100 text-emerald-600",

              },

              {
                title:
                  "My Products",

                icon: "📦",

                path: "/myproducts",

                color:
                  "bg-yellow-100 text-yellow-600",

              },

              {
                title:
                  "Cart",

                icon: "🛒",

                path: "/cart",

                color:
                  "bg-pink-100 text-pink-600",

              },

            ].map((item, index) => (

              <button
                key={index}

                onClick={() =>
                  navigate(item.path)
                }

                className="
                  bg-white

                  rounded-[28px]

                  p-8

                  shadow-xl

                  text-left

                  hover:-translate-y-2

                  transition-all
                  duration-300
                "
              >

                <div className={`
                  w-16
                  h-16

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  text-3xl

                  mb-6

                  ${item.color}
                `}>
                  {item.icon}
                </div>

                <h3 className="
                      text-xl
                      md:text-2xl

                      font-bold

                      text-slate-900

                      mb-2
                    ">
                  {item.title}
                </h3>

                <p className="
                    text-slate-500

                    text-sm
                    md:text-base

                    leading-relaxed
                  ">
                  {
                    item.title === "My Products"
                      ? "Access purchased products"

                      : item.title === "Refer & Earn"
                        ? "Invite friends and earn rewards"

                        : item.title === "Wallet"
                          ? "Check your reward balance"

                          : "View cart items"
                  }
                </p>
              </button>

            ))}

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}