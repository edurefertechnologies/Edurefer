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

export default function Cart() {

  const navigate =
    useNavigate()

  // =========================
  // STATES
  // =========================

  const [cart, setCart] =
    useState([])

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

    setUsername(

      localStorage.getItem(
        "username"
      ) || "User"

    )

    loadCart()

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  // =========================
  // LOAD CART
  // =========================

  const loadCart = () => {

    const storedCart =
      JSON.parse(
        localStorage.getItem(
          "edurefer_cart"
        )
      ) || []

    setCart(storedCart)

    let total = 0

    storedCart.forEach((item) => {

      total +=
        item.quantity || 1

    })

    setCartCount(total)
  }

  // =========================
  // CHANGE QUANTITY
  // =========================

  const changeQty = (
    index,
    value
  ) => {

    let updatedCart =
      [...cart]

    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1)
      + value

    if (
      updatedCart[index].quantity <= 0
    ) {

      updatedCart.splice(index, 1)
    }

    localStorage.setItem(

      "edurefer_cart",

      JSON.stringify(updatedCart)

    )

    setCart(updatedCart)

    loadCart()
  }

  // =========================
  // REMOVE ITEM
  // =========================

  const removeItem = (
    index
  ) => {

    let updatedCart =
      [...cart]

    updatedCart.splice(index, 1)

    localStorage.setItem(

      "edurefer_cart",

      JSON.stringify(updatedCart)

    )

    setCart(updatedCart)

    loadCart()
  }

  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {

    localStorage.removeItem(
      "edurefer_cart"
    )

    setCart([])

    setCartCount(0)
  }

  // =========================
  // TOTAL
  // =========================

  const total =
    cart.reduce(

      (sum, item) =>

        sum +
        item.price *
        (item.quantity || 1),

      0

    )

  // =========================
  // CHECKOUT
  // =========================

  const checkout =
    async () => {

      if (cart.length === 0) {

        alert(
          "Cart is empty"
        )

        return
      }

      try {

        const response =
          await fetch(
            `${import.meta.env.VITE_API_URL}/api/create-order`,
            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json",

              },

              body: JSON.stringify({

                amount:
                  total * 100,

              }),

            }
          )

        const order =
          await response.json()

        if (!order.id) {

          alert(
            "Order creation failed"
          )

          return
        }

        const options = {

          key: order.key,

          amount: order.amount,

          currency: "INR",

          order_id: order.id,

          name: "EduRefer",

          description:
            "Product Purchase",

          handler:
            async function (
              response
            ) {

              const verifyRes =
                await fetch(
                  `${import.meta.env.VITE_API_URL}/api/verify-payment`,
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

                    body:
                      JSON.stringify(
                        response
                      ),

                  }
                )

              const result =
                await verifyRes.json()

              if (
                result.status ===
                "success"
              ) {

                alert(
                  "Payment Successful ✅"
                )

                localStorage.removeItem(
                  "edurefer_cart"
                )

                navigate(
                  "/dashboard"
                )

              } else {

                alert(
                  result.error
                )
              }
            },

        }

        const rzp =
          new window.Razorpay(
            options
          )

        rzp.open()

      } catch (err) {

        console.log(err)

        alert(
          "Checkout failed"
        )
      }
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
        max-w-6xl
        mx-auto

        px-4
        md:px-6
        lg:px-8

        py-8
        md:py-10
      ">

        {/* TITLE */}

        <div className="
          mb-10
        ">

          <h1 className="
            text-4xl
            md:text-5xl

            font-bold

            text-slate-900

            mb-3
          ">

            🛒 Your Cart

          </h1>

          <p className="
            text-slate-500

            text-base
            md:text-lg
          ">

            Review your products
            before secure checkout.

          </p>

        </div>

        {/* EMPTY CART */}

        {cart.length === 0 ? (

          <div className="
            bg-white

            rounded-[32px]

            p-10

            shadow-2xl

            text-center
          ">

            <div className="
              text-7xl

              mb-6
            ">
              🛒
            </div>

            <h2 className="
              text-3xl

              font-bold

              text-slate-900

              mb-4
            ">

              Your cart is empty

            </h2>

            <p className="
              text-slate-500

              mb-8
            ">

              Add products and
              start earning with
              EduRefer.

            </p>

            <button
              onClick={() =>
                navigate("/dashboard")
              }

              className="
                px-8
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

              Browse Products

            </button>

          </div>

        ) : (

          <div className="
            space-y-6
          ">

            {/* ITEMS */}

            {cart.map(
              (item, index) => (

                <div
                  key={index}

                  className="
                    bg-white

                    rounded-[28px]

                    p-6

                    shadow-xl

                    flex
                    flex-col
                    md:flex-row

                    items-start
                    md:items-center

                    justify-between

                    gap-6
                  "
                >

                  {/* LEFT */}

                  <div>

                    <h3 className="
                      text-2xl

                      font-bold

                      text-slate-900

                      mb-2
                    ">

                      {item.title}

                    </h3>

                    <p className="
                      text-slate-500
                    ">

                      ₹{item.price}
                      {" "}
                      ×
                      {" "}
                      {item.quantity}

                    </p>

                  </div>

                  {/* ACTIONS */}

                  <div className="
                    flex
                    items-center

                    gap-3
                  ">

                    {/* MINUS */}

                    <button
                      onClick={() =>
                        changeQty(
                          index,
                          -1
                        )
                      }

                      className="
                        w-10
                        h-10

                        rounded-xl

                        bg-slate-800

                        text-white

                        font-bold

                        hover:bg-slate-700

                        transition
                      "
                    >
                      -
                    </button>

                    {/* PLUS */}

                    <button
                      onClick={() =>
                        changeQty(
                          index,
                          1
                        )
                      }

                      className="
                        w-10
                        h-10

                        rounded-xl

                        bg-gradient-to-r
                        from-emerald-500
                        to-blue-600

                        text-white

                        font-bold

                        hover:scale-110

                        transition
                      "
                    >
                      +
                    </button>

                    {/* DELETE */}

                    <button
                      onClick={() =>
                        removeItem(
                          index
                        )
                      }

                      className="
                        px-4
                        py-2

                        rounded-xl

                        bg-red-100

                        text-red-600

                        font-semibold

                        hover:bg-red-500
                        hover:text-white

                        transition
                      "
                    >

                      Remove

                    </button>

                  </div>

                </div>

              )
            )}

            {/* SUMMARY */}

            <div className="
              bg-white

              rounded-[32px]

              p-8

              shadow-2xl
            ">

              <div className="
                flex
                flex-col
                lg:flex-row

                items-start
                lg:items-center

                justify-between

                gap-8
              ">

                {/* LEFT */}

                <div>

                  <h2 className="
                    text-3xl

                    font-bold

                    text-slate-900

                    mb-3
                  ">

                    Total:
                    {" "}
                    ₹{total}

                  </h2>

                  <p className="
                    text-slate-500
                  ">

                    Secure payment
                    powered by Razorpay.

                  </p>

                </div>

                {/* BUTTONS */}

                <div className="
                  flex
                  flex-col
                  sm:flex-row

                  gap-4

                  w-full
                  lg:w-auto
                ">

                  {/* CLEAR */}

                  <button
                    onClick={clearCart}

                    className="
                      w-full
                      sm:w-auto

                      px-6
                      py-4

                      rounded-2xl

                      border
                      border-slate-300

                      font-semibold

                      hover:bg-slate-100

                      transition
                    "
                  >

                    Clear Cart

                  </button>

                  {/* CONTINUE */}

                  <button
                    onClick={() =>
                      navigate(
                        "/dashboard"
                      )
                    }

                    className="
                      w-full
                      sm:w-auto

                      px-6
                      py-4

                      rounded-2xl

                      border
                      border-blue-500

                      text-blue-600

                      font-semibold

                      hover:bg-blue-50

                      transition
                    "
                  >

                    Continue Shopping

                  </button>

                  {/* CHECKOUT */}

                  <button
                    onClick={checkout}

                    className="
                      w-full
                      sm:w-auto

                      px-8
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

                    Checkout

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}