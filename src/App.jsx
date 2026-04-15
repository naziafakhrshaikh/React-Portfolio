import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HeroIntro from './components/HeroIntro'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={
           <div>
            <NavBar />
            <div id="home"><HeroIntro /></div>
            <div id="aboutme"><AboutMe /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><ContactMe /></div>
            <Footer />
    </div>
        } />
      </Routes>
      </div>
  )
}

export default App