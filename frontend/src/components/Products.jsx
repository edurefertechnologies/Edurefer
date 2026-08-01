import careerStarter from "../assets/Images/career_start_kit.webp"
import careerSwitch from "../assets/Images/career_switch_kit.webp"
import freshersKit from "../assets/Images/freshers_kit.webp"
import aiCareerKit from "../assets/Images/ai_career_kit.webp"
import freelancingKit from "../assets/Images/freelancer_starter_kit.webp"
import entrepreneurshipKit from "../assets/Images/entrepreneurship_kit.webp"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const products = [

  {
    id: 1,
    title: "Career Starter Kit",
    description: "Resume + Roadmap",
    price: 500,
    image: careerStarter,
    disabled: false,
  },

  {
    id: 2,
    title: "Job Switch Kit",
    description: "Switch to high salary job",
    price: 500,
    image: careerSwitch,
    disabled: false,
  },

  {
    id: 3,
    title: "Freshers Kit",
    description: "Get your first job",
    price: 500,
    image: freshersKit,
    disabled: false,
  },

  {
    id: 4,
    title: "AI Career Kit",
    description: "Get started with AI",
    price: 500,
    image: aiCareerKit,
    disabled: true,
  },

  {
    id: 5,
    title: "Freelancing Starter Kit",
    description: "Start your freelancing career",
    price: 700,
    image: freelancingKit,
    disabled: true,
  },

  {
    id: 6,
    title: "Entrepreneurship Kit",
    description: "Start your own business",
    price: 900,
    image: entrepreneurshipKit,
    disabled: true,
  },

]

export default function Products({
  mode = "home"
}) {

  const navigate = useNavigate()

  const buy = (product) => {

    // HOME PAGE
    if (mode === "home") {

      if (product.id <= 3) {
        navigate("/register")
      }

      return
    }
    
    

    // DASHBOARD PAGE
    if (product.id !== 1) {

      alert("Coming Soon 🚀")
      return

    }

    const cart =
      JSON.parse(
        localStorage.getItem("edurefer_cart")
      ) || []

    const existing =
      cart.find(
        item => item.id === product.id
      )

    if (existing) {

      existing.quantity += 1

    } else {

      cart.push({

        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: 1,

      })

    }

    localStorage.setItem(
      "edurefer_cart",
      JSON.stringify(cart)
    )

    alert(`${product.title} added to cart ✅`)

    navigate("/cart")
  }

  return (

    <section
      id="products"
      className="
        py-20
      "
    >

      {/* TITLE */}

      <div className="
        text-center
        mb-14
      ">

        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-slate-900
          mb-4
        ">
          Our Products
        </h2>

        <p className="
          text-slate-500
          text-lg
          max-w-2xl
          mx-auto
        ">
          Practical career resources
          and digital kits specially
          designed for students and
          freshers.
        </p>

      </div>

      {/* PRODUCTS */}

      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {products.map((product) => (

          <div
            key={product.id}
            className={`
              bg-white
              rounded-[28px]
              p-6
              shadow-xl
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              overflow-hidden

              ${product.disabled
                ? "opacity-70"
                : ""
              }
            `}
          >

            {/* IMAGE */}

            <div className="
              overflow-hidden
              rounded-2xl
              mb-6
            ">

              <img
                src={product.image}
                alt={product.title}
                className="
                  w-full
                  aspect-video
                  object-cover
                  hover:scale-105
                  transition
                  duration-500
                "
              />

            </div>

            {/* INFO */}

            <h3 className="
              text-3xl
              font-bold
              text-slate-900
              mb-3
            ">
              {product.title}
            </h3>

            <p className="
              text-slate-500
              text-lg
              mb-5
            ">
              {product.description}
            </p>

            <h2 className="
              text-4xl
              font-bold
              text-blue-600
              mb-8
            ">
              ₹{product.price}
            </h2>

            {/* BUTTON */}

            <button
              onClick={() => buy(product)}
              disabled={
                product.disabled ||
                (mode !== "home" && product.id !== 1)
              }
              className={`
                w-full
                py-4
                rounded-2xl
                font-bold
                text-lg
                transition-all
                duration-300

                ${product.disabled ||
                  (mode !== "home" && product.id !== 1)
                  ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:scale-105 shadow-lg"
                }
              `}
              >

              {
                mode === "home"
                  ? "Get Started"
                  : "Add To Cart"
              }

            </button>

          </div>

        ))}

      </div>

    </section>
  )
}
