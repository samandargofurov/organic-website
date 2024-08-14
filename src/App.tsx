import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"
import About from "./pages/about"
import Shop from "./pages/shop"
import ErrorPage from "./pages/errorPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}></Route>
        <Route path="/about" element={<Layout><About /></Layout>}></Route>
        <Route path="/shop" element={<Layout><Shop /></Layout>}></Route>

        <Route path="*" element={<Layout><ErrorPage /></Layout>}></Route>
      </Routes>
    </>
  )
}

export default App