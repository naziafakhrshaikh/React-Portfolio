import "./App.css"
import NavBar from "./components/NavBar"
import HeroIntro from "./components/HeroIntro"
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
     <div>
      <NavBar />
      <div id="home"><HeroIntro /></div>
      <div id="aboutme"><AboutMe /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactMe /></div>
      <Footer />
    </div>
  )
}

export default App