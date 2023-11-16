/* eslint-disable react/prop-types */
// components
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Profile from "./components/Profile/Profile"
import Contact from "./components/contact/Contact"
import ComingSoon from "./components/pags/ComingSoon"

// router dom
import { Route, Routes } from "react-router-dom"

function Container({ children }) {
  return(
    <>
      <Navbar/>
      { children }
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Container>
          <Header/>
          <Main/>
        </Container> 
      } />
      <Route path="/profile" element={
        <Container>
          <Profile/>
        </Container>
      } />
      <Route path="/contact" element={
        <Container>
          <Contact/>
        </Container>
      } />
      <Route path="/coming-soon" element={<ComingSoon/>} />
    </Routes>
  )
}

export default App
