import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import '../components/responsive.css'
import pranav from '../components/images/pranav.jpg'
import resume from '../components/Pranav_Rao_Resume.pdf'

const Home = () => {
  return (
    <section id="home">
        <div className="container home-content">
            <div className="row">
                <div className="hero-text col-md-6">
                    <h2>Hi, I'm <span>Pranav Rao</span></h2>
                    <h3>I'm a <span>Frontend Web Developer</span></h3>
                    <p>Computer Science Engineer <b>[B. Tech]</b></p>
                    <p>I Design and Develop Dynamic Websites. And I Love Doing that.</p>
                    <a href={resume} download="Pranav's_Resume" rel='noreferrer'><button className="download-button mb-4">Download CV <i className="bi bi-download"></i></button></a>
                </div>
                <div className="hero-img col-md-6">
                    <img src={pranav} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home