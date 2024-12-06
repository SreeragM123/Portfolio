import React from 'react'
import './About.css'
import img from './assets/1.jpg';

const About = () => {
  return (
    <div className="container">
      <main className="content">
        <div className="info">
          <h1>About</h1>
          <p className="email">sreerag@gmail.com</p>
          <p className="description">
            As a dedicated developer, I’m passionate about creating intuitive, user-friendly web applications and solutions. I specialize in front-end development, utilizing the latest technologies such as React, HTML, CSS, and JavaScript to bring creative ideas to life. My goal is to build responsive, fast, and visually appealing websites that provide seamless user experiences. With an eye for detail and a commitment to continuous learning, I’m always exploring new tools and technologies to improve my skills and deliver the best results.
          </p>
          <p className="location">Calicut, Kerala</p>
        </div>
      </main>
    </div>
  );
};

export default About;
