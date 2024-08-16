import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"
import About from "./pages/about"
import Shop from "./pages/shop"
import ErrorPage from "./pages/errorPage"
import ShopSingle from "./pages/shopSingle"
import News from "./pages/news"
import Projects from "./pages/projects"
import AboutNew from "./pages/aboutNew"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}></Route>
        <Route path="/about" element={<Layout><About /></Layout>}></Route>
        <Route path="/shop" element={<Layout><Shop /></Layout>}></Route>
        <Route path="/news" element={<Layout><News /></Layout>}></Route>
        <Route path="/projects" element={<Layout><Projects /></Layout>}></Route>
        <Route path="/aboutNew/:id" element={<Layout><AboutNew /></Layout>}></Route>
        <Route path="/shopSingle/:id" element={<Layout><ShopSingle /></Layout>}></Route>

        <Route path="*" element={<Layout><ErrorPage /></Layout>}></Route>
      </Routes>
    </>
  )
}

export default App