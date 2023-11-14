// components
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Profile from "./components/Profile/Profile"
import Contact from "./components/contact/Contact"

// router dom
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Main/>
          </>
        } />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
