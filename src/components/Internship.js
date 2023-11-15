import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import '../components/responsive.css'

const Internship = () => {
  return (
    <section id="internship-banner">
      <section id="internship" className="container-fluid">
        <h1>Internship</h1>
      </section>
      <div className="internship-holder container-fluid reveal scroll-active">
        <div className="row card-holder reveal scroll-active">
          <div className="col-lg-4 col-md-9 p-2 internship-card">
                <div className="itd">
                    <i className="bi bi-door-open-fill card-icon"></i>
                    <span className="card-title">Internship</span>
                </div>
                <div>
                    <ul>
                        <li>Company : techEnvision Pvt. Ltd.</li>
                        <li>Role : Full Stack Web Development Intern</li>
                        <li>Duration : 03/2023 to 07/2023</li>
                        <li>Company Focus : Web Development</li>
                        <li className="mt-2">Achievements / Tasks :</li>
                        <ul className="ps-4">
                          <li>Front End Web Development</li>
                          <li>Back End Web Development</li>
                            <li>Advanced JavaScript</li>
                            <li>Completed Six Projects</li>
                            <li>Worked in VS Code Environment &amp; Wordpress</li>
                          </ul>
                        </ul>
                </div>
              <span className="num-span">01</span>
          </div>
          <div className="col-lg-4 col-md-9 p-2 internship-card">
                      <div className="itd">
                        <i className="bi bi-door-open-fill card-icon"></i>
                        <span className="card-title">Internship</span>
                      </div>
                <div>
                    <ul>
                        <li>Company : Aphron Software Pvt. Ltd.</li>
                        <li>Role : Web Development Intern</li>
                        <li>Duration : 02/2021 to 03/2021</li>
                        <li>Company Focus : Web Development</li>
                        <li className="mt-2">Achievements / Tasks :</li>
                        <ul className="ps-4">
                            <li>Front End Web Development</li>
                            <li>Back End Web Development</li>
                            <li>Advanced JavaScript</li>
                            <li>Completed Two Group Projects</li>
                            <li>Worked in VS Code Environment</li>
                          </ul>
                        </ul>
                      </div>
            <span className="num-span">02</span>
          </div>
          <div className="col-lg-4 col-md-9 p-2 internship-card">
                      <div className="itd">
                        <i className="bi bi-door-open-fill card-icon"></i>
                        <span className="card-title">Internship</span>
                      </div>
                      <div>
                        <ul>
                        <li>Company : DX Infosystem Pvt. Ltd.</li>
                        <li>Role : Mobile Application Development Intern</li>
                        <li>Duration : 05/2019 to 06/2019</li>
                        <li>Company Focus : Mobile Application Development</li>
                        <li className="mt-2">Achievements / Tasks :</li>
                        <ul className="ps-4">
                            <li>Front End Mobile Development</li>
                            <li>Back End Mobile Development</li>
                            <li>Basic JavaScript</li>
                            <li>Completed One Group Project</li>
                            <li>Worked in Bootstrap Studio Environment</li>
                        </ul>
                    </ul>
                </div>
            <span className="num-span">03</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internship