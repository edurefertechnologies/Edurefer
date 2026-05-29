export default function Footer() {
  return (

    <footer className="
      mt-20
      bg-slate-900
      text-slate-300
      py-10
      px-6
    ">

      <div className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
      ">

        {/* COPYRIGHT */}

        <p className="
          text-center
          md:text-left
          text-sm
          md:text-base
        ">
          © 2026 EduRefer.
          All rights reserved.
        </p>

        {/* LINKS */}

        <div className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-5
        ">

          <a
            href="/terms"
            target="_blank"
            className="
              text-sky-400
              font-semibold
              hover:text-sky-300
              transition
            "
          >
            Terms
          </a>

          <span className="text-slate-500">|</span>

          <a
            href="/privacy"
            target="_blank"
            className="
              text-sky-400
              font-semibold
              hover:text-sky-300
              transition
            "
          >
            Privacy
          </a>

          <span className="text-slate-500">|</span>

          <a
            href="/refund"
            target="_blank"
            className="
              text-sky-400
              font-semibold
              hover:text-sky-300
              transition
            "
          >
            Refund
          </a>

        </div>

      </div>

    </footer>
  )
}