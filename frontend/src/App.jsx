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
    
  </Routes>
)
}

export default App