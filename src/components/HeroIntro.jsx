import './HeroIntro-style.css'

function HeroIntro() {
  return (
    <>
      <section className="main">
        <h1> Welcome! </h1>
        <h2>I'm Nazia Shaikh,
          a 2025 Full Stack JavaScript student at NPower with a strong interest in building practical, user-friendly web applications.
          <br />
          I'm currently developing my skills in HTML, CSS, JavaScript, and GitHub through hands-on projects and guided practice labs.
          I enjoy learning how ideas turn into real, working code and how small details can improve both design and functionality.
          <br />
          This portfolio showcases my learning journey, the projects I've worked on, and the progress I continue to make as I grow in the tech field.
          Feel free to explore my background, view my work, or reach out — I'd love to connect and keep learning.
        </h2>
        {/* <br />
        <div className="links-container">
          <a href="/aboutme" className="links-button About">About Me</a>
          <a href="/contact" className="links-button Contact">Contact Me</a>
          <a href="/projects" className="links-button Work">My Work</a>
        </div> */}
      </section>
    </>
  )
}

export default HeroIntro