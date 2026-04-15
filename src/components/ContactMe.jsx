import './Contact-style.css'
import SectionTitle from './SectionTitle'

function ContactMe() {
  return (
    <>
    {/* <h2 className="section-title">Lets Get In Touch</h2>  */}
    {/* Typewriter effect */}
      <SectionTitle words={['Contact Me', "Let's Connect!"]} />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Please fill out this form. I will be notified via email.</p>
        <form action="https://formsubmit.co/nfshaikh@outlook.com" method="POST">
          <input type="text" placeholder="Full Name" required />
          <br />
          <input type="email" placeholder="Email Address" required />
          <br />
          <input type="text" placeholder="Phone Number" />
          <br />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <br />
          <button type="submit" className="SendButton">Send</button>
        </form>
      </div>

      <section id="contact" className="contact-section">
        <p>If you'd like to connect, feel free to reach out through any of the links below.</p>
        <div className="contact-btnContainer">
          <a href="mailto:nfshaikh@outlook.com" className="contact-btn email">
            Email Me
          </a>
          <a href="tel:2035436656" className="contact-btn phone">
            Call Me
          </a>
          <a href="https://github.com/naziafakhrshaikh" target="_blank" rel="noreferrer" className="contact-btn github">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nazia-shaikh-88a62a399" target="_blank" rel="noreferrer" className="contact-btn linkedin">
            LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}

export default ContactMe