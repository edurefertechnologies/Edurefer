import logo from "../assets/Images/Edurefer Logo.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (

    <header className="
      sticky
      top-0
      z-50
      w-full
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
        py-4
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
      ">

        {/* LOGO */}

        <div className="brand">

          <img
            src={logo}
            alt="Edurefer Logo"
            className=" h-20 md:h-24 w-auto object-contain hover:scale-105 transition duration-300
            "
          />

        </div>

        {/* NAVIGATION */}

        <nav className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-6
        ">

          <Link
            to="/"
            className="
              text-slate-900
              font-semibold
              hover:text-blue-600
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-[2px]
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            to="#products"
            className="
              text-slate-900
              font-semibold
              hover:text-blue-600
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-[2px]
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            Products
          </Link>

          <Link
            to="#about"
            className="
              text-slate-900
              font-semibold
              hover:text-blue-600
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-[2px]
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            About Us
          </Link>

          <Link
            to="#faq"
            className="
              text-slate-900
              font-semibold
              hover:text-blue-600
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-[2px]
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            FAQ
          </Link>

          {/* LOGIN BUTTON */}

          <Link
            to="/login"
            className="
              px-5
              py-2
              rounded-xl
              border
              border-blue-600
              text-blue-600
              font-semibold
              hover:bg-blue-600
              hover:text-white
              transition
            "
          >
            Login
          </Link>

          {/* SIGNUP BUTTON */}

          <Link
            to="/register"
            className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-emerald-500
              to-blue-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Sign Up
          </Link>

        </nav>

      </div>

    </header>
  )
}