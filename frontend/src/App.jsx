import {
Routes,
Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Refer from "./pages/Refer"
import About from "./pages/About"
import Wallet from "./pages/Wallet"
import Cart from "./pages/Cart"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Refund from "./pages/Refund"
import Contact from "./pages/Contact"

function App() {

return (

  <Routes>

    <Route
      path="/"
      element={<Home />}
    />
    <Route
      path="/login"
      element={<Login />}
    />
    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/about"
      element={<About />}
    />

    <Route
      path="/refer"
      element={<Refer />}
    />

    <Route
      path="/wallet"
      element={<Wallet />}
    />

    <Route
      path="/cart"
      element={<Cart />}
    />

    <Route
      path="/terms"
      element={<Terms />}
    />

    <Route
      path="/privacy"
      element={<Privacy />}
    />

    <Route
      path="/refund"
      element={<Refund />}
    />

    <Route
      path="/contact"
      element={<Contact />}
    />
    
  </Routes>
)
}

export default App