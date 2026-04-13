import './NavBar-style.css'

function NavBar() {
  return (
    <div>
      <nav className="navigation-bar">
       <div>  
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#projects">My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar