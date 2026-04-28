import './Projects-style.css'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <>
        {/* Typewrite effect Title */}
        <SectionTitle words={['My Work', 'My Projects']} />
        {/* <h2 className="section-title">My Work</h2>  */}
        <div className="MyWorkContainer">
        <div className="card card1">
          <img src="/GitHub.jpg" alt="GitHubCertificate" />
          <p>A certificate for Git and GitHub, recently earned through Coursera.</p>
        </div>
        <div className="card card2">
          <img src="/HTML-Portfolio.png" alt="HTML-Portfolio" />
          <p>My first portfolio website built from scratch using HTML and CSS. Features a welcome introduction, 
            about me section, projects showcase, and a contact form. This was my foundation project where I 
            learned to structure web pages and style them using pure CSS.</p>
        </div>
        <div className="card card3">
          <img src="/React-Weather.png" alt="React-Weather-App" />
          <p>A dynamic weather application built with React that fetches real-time weather data 
            from the OpenWeather API. Search any city in the world to instantly view current 
            temperature, weather conditions, humidity, wind speed, and local time.</p>
        </div>
        <div className="card card4">
          <img src="/DreamStore.png" alt="DreamStore" />
          <p>https://capstone-dream-store-1.onrender.com 
            A full stack e-commerce application built on the MERN stack 
            (MongoDB, Express, React, Node.js). Browse a unique catalog of dreams for sale, add 
            items to a shopping cart, and complete purchases through Stripe payment integration. 
            Deployed live on Render.</p>
        </div>
      </div>
    </>
  )
}

export default Projects