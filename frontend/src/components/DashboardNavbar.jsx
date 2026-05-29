import { Link, useLocation, useNavigate }
from "react-router-dom"

import logo from "../assets/images/Edurefer Logo.png"
import { useEffect } from "react"
import { useState } from "react"
import Refer from "../pages/Refer"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"
import Wallet from "../pages/Wallet"
import Cart from "../pages/Cart"


export default function DashboardNavbar({

  cartCount = 0,
  username = "User",

}) {

  const navigate = useNavigate()

  const location = useLocation()

  // =========================
  // ACTIVE NAV STYLE
  // =========================

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

  // =========================
  // LOGOUT
  // =========================

  const logout = () => {

    localStorage.clear()

    navigate("/login")
  }

  return (

    <header className="
      sticky
      top-0
      z-50

      bg-white/80
      backdrop-blur-md

      border-b
      border-white/50

      shadow-sm
    ">

      <div className="
        max-w-7xl
        mx-auto

        px-4
        md:px-6
        lg:px-8

        py-4

        flex
        flex-col
        xl:flex-row

        items-center
        justify-between

        gap-5
      ">

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
              h-14
              md:h-16

              w-auto
              object-contain

              cursor-pointer

              hover:scale-105

              transition
            "
          />

        </Link>

        {/* NAVIGATION */}

        <nav className="
          flex
          flex-wrap

          items-center
          justify-center

          gap-3
          md:gap-5
        ">

          {/* HOME */}

          <Link
            to="/"
            className={navClass("/")}
          >
            Home
          </Link>

          {/* DASHBOARD */}

          <Link
            to="/dashboard"
            className={navClass("/dashboard")}
          >
            Dashboard
          </Link>

          {/* ABOUT */}

          <Link
            to="/about"
            className={navClass("/about")}
          >
            About
          </Link>

          {/* REFER */}

          <Link
            to="/refer"
            className={navClass("/refer")}
          >
            Refer
          </Link>

          {/* WALLET */}

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

              text-2xl

              hover:scale-110

              transition
            "
          >

            🛒

            <span className="
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
            ">
              {cartCount}
            </span>

          </button>

          {/* USER */}

          <div className="
            px-4
            py-2

            rounded-xl

            bg-slate-100

            text-slate-700
            text-sm
            md:text-base

            font-semibold

            whitespace-nowrap
          ">

            👋 {username}

          </div>

          {/* LOGOUT */}

          <button
            onClick={logout}
            className="
              w-full
              sm:w-auto

              px-5
              py-2.5

              rounded-xl

              bg-gradient-to-r
              from-red-500
              to-red-600

              text-white
              font-semibold

              shadow-lg

              hover:scale-105

              transition
            "
          >
            Logout
          </button>

        </nav>

      </div>

    </header>
  )
}