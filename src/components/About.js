import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import '../components/responsive.css'
import aboutimg from '../components/images/me2new.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container about-content">
        <div className="section-title text-center col-md-12 mb-3">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="about-img col-lg-6">
            <img src={aboutimg} className="img-fluid" alt=''/>
          </div>
          <div className="about-text col-lg-6">
            <p>I'm Pranav Rao, a Computer Science Engineer with a passion for <span>Frontend Web Development</span>.</p><p>As you explore my portfolio, you will find examples of my work, including some of the <span>Projects</span> and the <span>Internships</span>.</p>
            <p>With a strong foundation in <span>HTML5, CSS, Bootstrap 5, JavaScript, Angular, SQL</span> I have had the opportunity to work on various projects and collaborate with talented individuals from different industries through my Internship.</p>
            <p>I am excited to connect with like-minded individuals, organizations, and potential collaborators who share my passion for Web Development. If you are interested in working together or have any questions, please don't hesitate to reach out.</p>
            <p><span>Looking forward for connecting with you!</span></p>
          </div>
        </div>
        <div className="row reveal">
          <div className="education col-lg-12 p-0">
            <h3>Education</h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Bachelors of Technology
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li><span>College</span> : Sharad Institute of Technology College of Engineering <i className="bi bi-mortarboard-fill card-icon"></i></li>
                      <li><span>Major</span> : B.Tech in Computer Science and Engineering</li>
                      <li><span>Marks Scored</span> : 8.64 [CGPA]</li>
                      <li><span>Passing Year</span> : 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Diploma Degree
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li><span>College</span> : Sanjay Bhokare Groups of Institute <i className="bi bi-mortarboard-fill card-icon"></i></li>
                      <li><span>Major</span> : Diploma in Computer Engineering</li>
                      <li><span>Marks Scored</span> : 89.94% [Avg.]</li>
                      <li><span>Passing Year</span> : 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Schooling
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li><span>School</span> : Alphonsa School Miraj <i className="bi bi-mortarboard-fill card-icon"></i></li>
                      <li><span>Marks Scored</span> : 77%</li>
                      <li><span>Passing Year</span> : 2017</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5 reveal">
          <h3>Skills</h3>
          <div className="skill-tab">
            <span className="skill">C</span>
            <span className="skill">C++</span>
            <span className="skill">Java</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">Jquery</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">SQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About