import React, { useEffect, useState } from 'react'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'
import About from "./components/About/About"
import Expertise from './components/Expertise/Expertise'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import IntroSplash from './components/IntroSplash/IntroSplash'
export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      {showIntro && (
        <IntroSplash onFinish={() => setShowIntro(false)} />
      )}
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
