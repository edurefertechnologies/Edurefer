import {
  useEffect,
  useState
} from "react"

import {
  useNavigate,
  Link,
} from "react-router-dom"

import DashboardNavbar
  from "../components/DashboardNavbar"

export default function MyProducts() {

  const [products,
    setProducts] = useState([])

  const token =
    localStorage.getItem(
      "edurefer_token"
    )

  useEffect(() => {

    fetch(

      `${import.meta.env.VITE_API_URL}/api/my-products`,

      {

        headers: {

          Authorization: token

        }

      }

    )

      .then(res => res.json())

      .then(data =>
        setProducts(data)
      )

      .catch(console.error)

  }, [])

  return (

    <div className="
      min-h-screen
      bg-slate-50
    ">

      <DashboardNavbar />

      <div className="
        max-w-6xl
        mx-auto
        p-6
      ">

        <h1 className="
          text-4xl
          font-bold
          mb-8
        ">
          📚 My Products
        </h1>

        {

          products.length === 0 ?

            (

              <div className="
                bg-white
                p-10
                rounded-3xl
                shadow-xl
                text-center
              ">

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  No Products Found
                </h2>

                <p className="
                  mt-3
                  text-slate-500
                ">
                  Purchase a product to see it here.
                </p>

                <Link
                  to="/dashboard#products"
                  className="
                    inline-block
                    mt-6
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    transition
                  "
                >
                  Browse Products
                </Link>

              </div>

            )

            :

            products.map(product => (

              <div

                key={product.id}

                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-xl
                  mb-8
                "

              >

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  {product.name}
                </h2>

                <p className="
                  mt-3
                  text-slate-600
                ">
                  {product.description}
                </p>

                {/* PDF Preview */}

                <iframe

                  src={`${import.meta.env.VITE_API_URL}/api/view-pdf?token=${token}`}

                  className="
                    w-full
                    h-[700px]
                    mt-6
                    rounded-2xl
                    border
                  "

                  title={product.name}

                />

                {/* Download Button */}

                <a
                  href={`${import.meta.env.VITE_API_URL}/api/download?token=${token}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  inline-block
                  mt-6
                  bg-emerald-600
                  hover:bg-emerald-700
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  transition
                "
                >
                  Download PDF
                </a>

              </div>

            ))

        }

      </div>

    </div>

  )

}