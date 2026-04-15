import './HeroIntro-style.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function HeroIntro() {
  const [text] = useTypewriter({
  words: [
    'Welcome to my Portfolio!',
    'I am a Full Stack Developer!',
    
  ],
  loop: true,
  delaySpeed: 2000,
})
  return (
    <>
      <section className="main">
        {/* Typewriter effect */}
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#7a5c2e" />
        </h1>
        <h2>I'm Nazia Shaikh,
          a 2025 Full Stack JavaScript student at NPower with a strong interest in building practical, user-friendly web applications.
          <br />
          I'm currently developing my skills in HTML, CSS, JavaScript, and GitHub through hands-on projects and guided practice labs.
          I enjoy learning how ideas turn into real, working code and how small details can improve both design and functionality.
          <br />
          This portfolio showcases my learning journey, the projects I've worked on, and the progress I continue to make as I grow in the tech field.
          Feel free to explore my background, view my work, or reach out — I'd love to connect and keep learning.
        </h2>
        </section>
    </>
  )
}
export default HeroIntro