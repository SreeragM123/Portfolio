import React from 'react'
import './Home.css'
import img from './assets/1.jpg';
const Home = () => {
  return (
    <div>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

        <div>
            <section id="home" className="hero">
                <div className="hero-content">
                <h1>
                    SREERAG <span>M</span>
                </h1>
                <p>DEVELOPER</p>
                <div className="buttons">
                    <a href="#resume" className="btn">
                    Resume
                    </a>
                </div>
                </div>
            </section>
        </div>
    <footer>
        <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
        </ul>
    </footer>
    </div>
  )
}

export default Home