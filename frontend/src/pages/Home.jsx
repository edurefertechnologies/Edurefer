import { useEffect } from "react"

import { useNavigate }
from "react-router-dom"

import Navbar
from "../components/Navbar"

import Hero
from "../components/Hero"

import Products
from "../components/Products"

import About
from "../components/About"

import TrustSection
from "../components/TrustSection"

import FAQ
from "../components/FAQ"

import Footer
from "../components/Footer"

export default function Home() {

  const navigate =
    useNavigate()

  // =========================
  // CHECK LOGIN TOKEN
  // =========================

  useEffect(() => {

    const token =
      localStorage.getItem(
        "edurefer_token"
      )

    if (token) {

      navigate("/dashboard")
    }

    // SMOOTH SCROLL

    window.scrollTo({

      top: 0,
      behavior: "smooth",

    })

  }, [navigate])

  // =========================
  // PAGE
  // =========================

  return (

    <div className="
      min-h-screen

      bg-[#f8fbff]

      overflow-x-hidden
    ">

      {/* NAVBAR */}

      <Navbar />

      {/* MAIN */}

      <main className="
        max-w-7xl
        mx-auto

        px-4
        md:px-6
        lg:px-8

        py-6
        md:py-8
      ">

        {/* HERO */}

        <section className="fade-up">

          <Hero />

        </section>

        {/* PRODUCTS */}

        <section className="product-card fade-up">

          <Products mode="home"/>

        </section>

        {/* ABOUT */}

        <section className="about-section fade-up">

          <About />

        </section>

        {/* TRUST */}

        <section className="fade-up">

          <TrustSection />

        </section>

        {/* FAQ */}

        <section className="fade-up">

          <FAQ />

        </section>

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}