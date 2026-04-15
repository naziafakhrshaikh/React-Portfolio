import './NavBar-style.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navigation-bar">
        <div>
          <a href="#home" className="links-button">Home</a>
          <a href="#aboutme" className="links-button">About Me</a>
          <a href="#projects" className="links-button">My Work</a>
          <a href="#contact" className="links-button">Contact Me</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
