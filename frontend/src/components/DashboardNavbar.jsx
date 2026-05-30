import { Link, useLocation, useNavigate }
  from "react-router-dom"

import logo from "../assets/Images/Edurefer Logo.png"

export default function DashboardNavbar({

  cartCount = 0,
  username = "User",

}) {

  const navigate = useNavigate()

  const location = useLocation()

  const navClass = (path) =>

    `

    relative

    text-sm
    md:text-base

    font-semibold

    transition

    hover:text-blue-600

    ${location.pathname === path
      ? "text-blue-600"
      : "text-slate-800"
    }

    after:absolute
    after:left-0
    after:-bottom-1

    after:h-[2px]

    after:bg-blue-600

    after:transition-all

    ${location.pathname === path
      ? "after:w-full"
      : "after:w-0 hover:after:w-full"
    }

  `

  const logout = () => {

    localStorage.clear()

    navigate("/login")

  }

  return (

    <header
      className="
        sticky
        top-0
        z-50

        bg-white/80
        backdrop-blur-md

        border-b
        border-white/50

        shadow-sm
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          md:px-6
          lg:px-8

          py-4

          flex
          flex-col

          items-center

          gap-4
        "
      >

        {/* LOGO */}

        <Link
          to="/dashboard"
          className="
            flex
            items-center
            justify-center
          "
        >

          <img
            src={logo}
            alt="Edurefer Logo"
            className="
              h-12
              md:h-16

              w-auto

              hover:scale-105

              transition
            "
          />

        </Link>

        {/* NAVIGATION */}

        <nav
          className="
            flex
            flex-wrap

            items-center
            justify-center

            gap-3
            md:gap-5
          "
        >

          <Link
            to="/"
            className={navClass("/")}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={navClass("/dashboard")}
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className={navClass("/about")}
          >
            About
          </Link>

          <Link
            to="/refer"
            className={navClass("/refer")}
          >
            Refer
          </Link>

          <Link
            to="/wallet"
            className={navClass("/wallet")}
          >
            Reward
          </Link>

          {/* CART */}

          <button
            onClick={() =>
              navigate("/cart")
            }
            className="
              relative

              text-xl
              md:text-2xl

              hover:scale-110

              transition
            "
          >

            🛒

            <span
              className="
                absolute
                -top-2
                -right-3

                bg-red-500

                text-white
                text-xs
                font-bold

                w-5
                h-5

                rounded-full

                flex
                items-center
                justify-center
              "
            >
              {cartCount}
            </span>

          </button>

        </nav>

        {/* USER + LOGOUT */}

        <div
          className="
            flex
            items-center
            justify-center
            flex-wrap

            gap-3
          "
        >

          {/* USER */}

          <div
            className="
              px-3
              py-1.5

              rounded-xl

              bg-slate-100

              text-slate-700
              text-sm
              md:text-base

              font-semibold
            "
          >

            👋 {username}

          </div>

          {/* LOGOUT */}

          <button
            onClick={logout}
            className="
              px-5
              py-2

              rounded-xl

              bg-gradient-to-r
              from-red-500
              to-red-600

              text-white
              text-sm
              md:text-base

              font-semibold

              shadow-lg

              hover:scale-105

              transition
            "
          >
            Logout
          </button>

        </div>

      </div>

    </header>

  )
}