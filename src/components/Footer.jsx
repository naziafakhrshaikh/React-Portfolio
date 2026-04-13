import './Footer-style.css'

function Footer() {
  return (
    <footer>
      <p>© 2025 Nazia Shaikh. All rights reserved.</p>
      <p className="footer-icons">
        <a href="mailto:nfshaikh@outlook.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a href="https://linkedin.com/in/nazia-shaikh-88a62a399" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/naziafakhrshaikh" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
      </p>
    </footer>
  )
}

export default Footer