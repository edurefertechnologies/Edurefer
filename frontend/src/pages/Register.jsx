import { useState, useEffect }
  from "react"

import {
  useNavigate,
  Link,
} from "react-router-dom"

import logo
  from "../assets/Images/Edurefer Logo.png"

export default function Register() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [username, setUsername] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [terms, setTerms] =
    useState(false)

  // =========================
  // PAGE LOAD
  // =========================

  useEffect(() => {

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

    const hash =
      window.location.hash

    if (hash.includes("?")) {

      const queryString =
        hash.split("?")[1]

      const params =
        new URLSearchParams(
          queryString
        )

      const ref =
        params.get("ref")

      if (ref) {

        localStorage.setItem(
          "referrer",
          ref.toLowerCase()
        )

        console.log(
          "Referral Found:",
          ref
        )

      }

    }

  }, [])

  // =========================
  // REGISTER FUNCTION
  // =========================

  const handleRegister =
    async (e) => {

      e.preventDefault()

      // TERMS

      if (!terms) {

        alert(
          "Please accept Terms & Policies"
        )

        return
      }

      // USERNAME VALIDATION

      if (
        username.length < 3 ||
        username.length > 20
      ) {

        alert(
          "Username must be 3-20 characters"
        )

        return
      }

      const usernameRegex =
        /^[a-zA-Z0-9_]+$/

      if (
        !usernameRegex.test(username)
      ) {

        alert(
          "Only letters, numbers and underscore allowed"
        )

        return
      }

      // PASSWORD

      if (password.length < 6) {

        alert(
          "Password must be at least 6 characters"
        )

        return
      }

      setLoading(true)

      try {

        const referrer =
          localStorage.getItem(
            "referrer"
          )

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              username,
              email,
              password,
              referrer
            })
          }
        )

        const data =
          await response.json()

        if (response.ok) {

          alert(
            "Registration Successful ✅"
          )

          navigate("/login")

        } else {

          alert(

            data.error ||
            "Registration Failed"

          )
        }

      } catch (err) {

        console.log(err)

        alert("Server Error")

      } finally {

        setLoading(false)
      }
    }

  return (

    <div className="
      min-h-screen

      flex
      items-center
      justify-center

      px-4
      py-10
      md:px-6

      bg-gradient-to-br
      from-slate-900
      via-slate-800
      to-slate-950

      overflow-hidden
      relative
    ">

      {/* GLOW EFFECTS */}

      <div className="
        absolute
        top-0
        left-0

        w-72
        h-72

        bg-emerald-500/20

        blur-3xl
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-0
        right-0

        w-72
        h-72

        bg-blue-500/20

        blur-3xl
        rounded-full
      "></div>

      {/* CARD */}

      <div className="
        relative
        z-10

        w-full
        max-w-md
      ">

        {/* LOGO */}

        <div className="
          text-center
          mb-8
        ">

          <Link to="/">

            <img
              src={logo}
              alt="Edurefer Logo"
              className="
                w-32
                md:w-36

                h-20

                object-contain

                mx-auto

                rounded-2xl

                p-2

                bg-gradient-to-r
                from-emerald-500
                to-blue-600

                shadow-2xl

                hover:scale-105

                transition
                duration-300
              "
            />

          </Link>

        </div>

        {/* FORM CARD */}

        <div className="
          bg-white/10

          backdrop-blur-xl

          border
          border-white/10

          shadow-2xl

          rounded-[28px]

          p-6
          md:p-10
        ">

          {/* TITLE */}

          <h2 className="
            text-3xl
            md:text-4xl

            font-bold

            text-white

            text-center

            mb-8
          ">
            Create Account
          </h2>

          {/* FORM */}

          <form
            onSubmit={handleRegister}
            className="
              space-y-5
            "
          >

            {/* USERNAME */}

            <input
              type="text"
              placeholder="Username"
              required

              value={username}

              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }

              className="
                w-full

                px-4
                py-4

                rounded-2xl

                bg-white/5

                border
                border-white/10

                text-white

                placeholder:text-slate-400

                outline-none

                focus:border-emerald-400

                focus:ring-2
                focus:ring-emerald-400/30

                transition
              "
            />

            {/* EMAIL */}

            <input
              type="email"
              placeholder="Email Address"
              required

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

              className="
                w-full

                px-4
                py-4

                rounded-2xl

                bg-white/5

                border
                border-white/10

                text-white

                placeholder:text-slate-400

                outline-none

                focus:border-emerald-400

                focus:ring-2
                focus:ring-emerald-400/30

                transition
              "
            />

            {/* PASSWORD */}

            <input
              type="password"
              placeholder="Password"
              required

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }

              className="
                w-full

                px-4
                py-4

                rounded-2xl

                bg-white/5

                border
                border-white/10

                text-white

                placeholder:text-slate-400

                outline-none

                focus:border-emerald-400

                focus:ring-2
                focus:ring-emerald-400/30

                transition
              "
            />

            {/* TERMS */}

            <label className="
              flex
              items-start

              gap-3

              text-sm

              text-slate-300
            ">

              <input
                type="checkbox"

                checked={terms}

                onChange={() =>
                  setTerms(!terms)
                }

                className="
                  mt-1
                  accent-emerald-500
                "
              />

              <span>

                I agree to{" "}

                <Link
                  to="/terms"
                  className="
                    text-sky-400
                    hover:underline
                  "
                >
                  Terms
                </Link>

                {" "} | {" "}

                <Link
                  to="/privacy"
                  className="
                    text-sky-400
                    hover:underline
                  "
                >
                  Privacy Policy
                </Link>

                {" "} | {" "}

                <Link
                  to="/refund"
                  className="
                    text-sky-400
                    hover:underline
                  "
                >
                  Refund Policy
                </Link>

              </span>

            </label>

            {/* BUTTON */}

            <button
              type="submit"

              disabled={loading}

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

                shadow-2xl

                hover:scale-[1.02]

                transition
                duration-300

                disabled:opacity-70
                disabled:cursor-not-allowed
              "
            >

              {loading
                ? "Please wait..."
                : "Register"}

            </button>

          </form>

          {/* LOGIN */}

          <p className="
            text-center

            text-slate-300

            mt-6
          ">

            Already have an account?{" "}

            <button
              onClick={() =>
                navigate("/login")
              }

              className="
                text-emerald-400
                font-semibold

                hover:underline
              "
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  )
}