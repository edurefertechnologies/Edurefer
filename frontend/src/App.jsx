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
        path="/Login"
        element={<Login />}
      />
      <Route
        path="/Dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/Register"
        element={<Register />}
      />

      <Route
        path="/About"
        element={<About />}
      />

      <Route
        path="/Refer"
        element={<Refer />}
      />

      <Route
        path="/Wallet"
        element={<Wallet />}
      />

      <Route
        path="/Cart"
        element={<Cart />}
      />
      
    </Routes>
  )
}

export default App