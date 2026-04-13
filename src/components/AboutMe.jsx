import './About-style.css'

function AboutMe() {
  return (
    <div>
      <h2 className="section-title">A Little About Me</h2> 
        <div className="CollageContainer">
        <div className="card card1">
          <img src="/Me.jpg" alt="Me" />
          <p>Hi, I am Nazia Shaikh.</p>
        </div>
        <div className="card card2">
          <img src="/Family.jpg" alt="Family" />
          <p>This is my family. I and my husband with our 3 kids.</p>
        </div>
        <div className="card card3">
          <a href="https://en.wikipedia.org/wiki/Pakistan" target="_blank" rel="noreferrer">
            <img src="/PakistanFlag.jpg" alt="Pakistan" /></a>
          <p>I was born in Pakistan. Click to learn more about Pakistan.</p>
        </div>
        <div className="card card4">
          <a href="https://www.npower.org/apply/path2tech/" target="_blank" rel="noreferrer">
            <img src="/Java.png" alt="Java Logo" /></a>
          <p>I'm currently learning Full Stack JavaScript through NPower. Click to visit their site.</p>
        </div>
        
        <div className="card card5">
          <div className="lang-row">
            <a href="https://en.wikipedia.org/wiki/English_language" target="_blank" rel="noreferrer">
              <img src="/English.jpg" alt="English Logo" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Urdu" target="_blank" rel="noreferrer">
              <img src="/Urdu.jpg" alt="Urdu Logo" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Punjabi_language" target="_blank" rel="noreferrer">
              <img src="/punjabi.jpg" alt="Punjabi Logo" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Arabic_language" target="_blank" rel="noreferrer">
              <img src="/Arabic.jpg" alt="Arabic Logo" />
            </a>
            <p>I can understand, speak, read, and write English, Urdu, and Punjabi. I can also read and write Arabic.</p>
          </div>
        </div>

        <div className="card card6">
          <div className="interests">
            <img src="/DIY.jpg" alt="DIY" />
            <img src="/sewing.jpg" alt="sewing" />
            <img src="/decore.jpeg" alt="decoring" />
            <img src="/cooking.jpg" alt="cooking" />
            <p>I enjoy bringing creativity to life through DIY projects, sewing, home décor, and cooking for my family.</p>
          </div>
        </div>

        <div className="card card7">
          <div className="learnerType">
            <img src="/HandsOn.webp" alt="HandsOn learner" />
            <img src="/VisualLearner.jpg" alt="Visual learner" />
            <img src="/IndependentLearner.jpg" alt="Independent Learner" />
            <img src="/Reflective.jpg" alt="Reflective Learner" />
            <p>I am a visual, hands-on, and reflective learner who thrives when I can explore ideas independently and learn by doing.</p>
          </div>
        </div>

        <div className="card card8">
          <div className="goals">
          <img src="/Hajj.jpg" alt="Perform Hajj" />
          <img src="/ITCareer.jpg" alt="Successful Career in IT" />
          <img src="/BigHouse.jpg" alt="Bigger House" />
          <img src="/Travel.jpg" alt="Travel the World" />
          <p>I want to build a successful career in IT, perform Hajj, buy a bigger home, and travel the world with my family.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe