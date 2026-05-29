import {
  useState,
  useEffect,
} from "react"

import {
  useNavigate,
  Link,
} from "react-router-dom"

import logo
  from "../assets/Images/Edurefer Logo.png"

export default function Login() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

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

    if (token) {

      navigate("/dashboard")
    }

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  // =========================
  // LOGIN FUNCTION
  // =========================

  const handleLogin =
    async (e) => {

      e.preventDefault()

      setLoading(true)

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            
            body: JSON.stringify({
              username,
              password
            })
          }
        )

        const data =
          await response.json()

        if (response.ok) {

          localStorage.setItem(

            "edurefer_token",

            data.token

          )

          localStorage.setItem(

            "username",

            username

          )

          alert(
            "Login Successful ✅"
          )

          navigate("/dashboard")

        } else {

          alert(

            data.error ||
            "Login Failed"

          )
        }

      } catch (err) {

        console.log(err)

        alert(
          "Server Error"
        )

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
      md:px-6

      py-10

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

        {/* LOGIN CARD */}

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
            Login
          </h2>

          {/* FORM */}

          <form
            onSubmit={handleLogin}

            className="
              space-y-5
            "
          >

            {/* USERNAME */}

            <div>

              <label className="
                block

                text-white

                mb-2

                font-medium
              ">
                Username
              </label>

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

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block

                text-white

                mb-2

                font-medium
              ">
                Password
              </label>

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

            </div>

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
                : "Login"}

            </button>

          </form>

          {/* REGISTER */}

          <p className="
            text-center

            text-slate-300

            mt-6
          ">

            Don't have an account?{" "}

            <button
              onClick={() =>
                navigate("/register")
              }

              className="
                text-emerald-400

                font-semibold

                hover:underline
              "
            >
              Register
            </button>

          </p>

        </div>

        {/* FOOTER */}

        <footer className="
          mt-8

          text-center

          text-slate-400
          text-sm
        ">

          <p>
            © 2026 EduRefer.
            All rights reserved.
          </p>

          <div className="
            flex
            justify-center
            flex-wrap

            gap-4

            mt-3
          ">

            <Link
              to="/terms"

              className="
                text-sky-400
                hover:underline
              "
            >
              Terms
            </Link>

            <Link
              to="/privacy"

              className="
                text-sky-400
                hover:underline
              "
            >
              Privacy
            </Link>

            <Link
              to="/refund"

              className="
                text-sky-400
                hover:underline
              "
            >
              Refund
            </Link>

          </div>

        </footer>

      </div>

    </div>
  )
}