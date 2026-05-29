export default function Hero() {
  return (

    <section className="
      relative
      overflow-hidden
      text-center
      py-24
      md:py-32
      px-6
      mt-8
      rounded-[30px]
      bg-gradient-to-br
      from-sky-400
      via-cyan-400
      to-emerald-400
      shadow-2xl
    ">

      {/* BACKGROUND BLUR EFFECTS */}

      <div className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-white/20
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-blue-500/20
        rounded-full
        blur-3xl
      "></div>

      {/* CONTENT */}

      <div className="relative z-10">

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          text-white
          mb-6
        ">
          Learn, Grow & Earn
          <br />
          with Edurefer
        </h1>

        <p className="
          max-w-3xl
          mx-auto
          text-lg
          md:text-2xl
          text-white/90
          leading-relaxed
        ">
          Access practical career resources,
          placement kits and referral rewards
          designed for students and freshers.
        </p>

        {/* BUTTONS */}

        <div className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
        ">

          {/* START EARNING */}

          <a
            href="/register"
            className="
              px-8
              py-4
              rounded-2xl
              bg-white
              text-blue-600
              font-bold
              text-lg
              shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          >
            Start Earning
          </a>

          {/* VIEW PRODUCTS */}

          <a
            href="#products"
            className="
              px-8
              py-4
              rounded-2xl
              bg-slate-900/80
              backdrop-blur-md
              text-white
              font-bold
              text-lg
              border
              border-white/20
              hover:scale-105
              transition
              duration-300
            "
          >
            View Products
          </a>

        </div>

      </div>

    </section>
  )
}