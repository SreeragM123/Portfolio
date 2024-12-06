import React from 'react'
import './Contact.css'
import img from './assets/1.jpg';
const Contact = () => {
  return (
    <div class="container-resr">
    <main>
      <section class="left-section">
        <div class="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>Python <span><input type="range" min="0" max="100" value="80"/></span></li>
            <li>Flutter <span><input type="range" min="0" max="100" value="50"/></span></li>
            <li>HTML <span><input type="range" min="0" max="100" value="90"/></span></li>
            <li>JavaScript <span><input type="range" min="0" max="100" value="75"/></span></li>
            <li>React <span><input type="range" min="0" max="100" value="60"/></span></li>
            <li>Java <span><input type="range" min="0" max="100" value="40"/></span></li>
            <li>MySQL <span><input type="range" min="0" max="100" value="70"/></span></li>
          </ul>
        </div>
        <div class="languages">
          <h2>Languages</h2>
          <ul>
            <li>English <span><input type="range" min="0" max="100" value="95"/></span></li>
            <li>Malayalam <span><input type="range" min="0" max="100" value="100"/></span></li>
            <li>Hindi <span><input type="range" min="0" max="100" value="85"/></span></li>
          </ul>
        </div>
       
      </section>
      <section class="right-section">

        <div class="education">
          <h2>Education</h2>
          <p>Masters of Computer Applications,<br/>KTU University</p>
          <p>Bachelors of Computer Applications,<br/>University of Calicut</p>
        </div>
        <div class="project">
          <h2>Personal Projects</h2>
          <p>NewsDroid,<br/>Languages used - HTML, CSS, Python, Flutter</p>
          <p>SaloonEase,<br/>Languages used - HTML, CSS, Python, Flutter</p>
          <p>WeatherForecast,<br/>Languages used - HTML, CSS, JavaScript</p>
        </div>

        <div class="personal-skills">
          <h2>Personal Skills</h2>
          <p>Adaptability - Team Work - Time Management - Communication</p>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Contact