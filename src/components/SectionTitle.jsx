import { useTypewriter, Cursor } from 'react-simple-typewriter'

function SectionTitle({ words }) {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h2 className="section-title">
      <span>{text}</span>
      <Cursor cursorColor="#7a5c2e" />
    </h2>
  )
}

export default SectionTitle