import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import '../components/responsive.css'

const Project = () => {
  return (
    <section id="project-banner">
      <section id="project" className="container-fluid">
        <h1>Projects</h1>
      </section>
      <div className="card-holder">
        <div className="col-lg-6 col-md-10 project-card reveal">
          <div className="project-card-title">
              <span className='projectnum'>01</span>
              <h3>Project 1<i className="fa-sharp fa-solid fa-code"></i></h3>
              <span className="card-action-message"></span>
          </div>
          <div className="project-card-text">
              <h5>Book Basket</h5>
              <span>Website</span>
              <p>Book Basket is a webite which is used for online book ordering. <b>The Main and Unique feature of the project is user can even Rent the books and read the books online. It's an online reading source as well.</b> This is a Middleware Website.</p>
              <ul><span>Project Contents :-</span>
                  <li className="ps-3">Home Page</li>
                  <li className="ps-3">About Page</li>
                  <li className="ps-3">Shop Page</li>
                  <li className="ps-3">Contact Page</li>
                  <li className="ps-3">Order Page</li>
              </ul>
              <p><span>Environment :</span> VS Code</p>
              <p><span>Languages :</span> HTML5, CSS, JavaScript, PHP, SQL</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-10 project-card reveal">
            <div className="project-card-title">
            <span className='projectnum'>02</span>
                <h3>Project 2<i className="fa-sharp fa-solid fa-code"></i></h3>
                <span className="card-action-message"></span>
            </div>
            <div className="project-card-text">
                <h5>Consult</h5>
                <span>One Page Website</span>
                <p>Fornt End Website. This is a full-fledged fornt end project. Designed &amp; Developed for the same. Showscases a Proper Website. <b>Main part of this project is it's Totally Responsive</b>.</p>
                <ul><span>Project Contents :-</span>
                    <li className="ps-3">Home Page</li>
                    <li className="ps-3">About Page</li>
                    <li className="ps-3">Services Page</li>
                    <li className="ps-3">Pricing Page</li>
                    <li className="ps-3">Contact Page</li>
                </ul>
                <p><span>Environment :</span> VS Code</p>
                <p><span>Languages :</span> HTML, CSS, Bootstrap 5, JavaScript</p>
                <a href="https://ray541.github.io/consult/" target="_blank" rel="noreferrer"><button className="project-view-btn">View Project</button></a>
            </div>
        </div>
        <div className="col-lg-6 col-md-10 project-card reveal">
            <div className="project-card-title">
            <span className='projectnum'>03</span>
                <h3>Project 3<i className="fa-sharp fa-solid fa-code"></i></h3>
                <span className="card-action-message"></span>
            </div>
            <div className="project-card-text">
                <h5>Zuscon</h5>
                <span>Website</span>
                <p>Fornt End Website. This is a full-fledged fornt end project. Designed &amp; Developed for the same. Showscases a Proper Website. <b>Main part of this project is it's Totally Responsive</b>.</p>
                <ul><span>Project Contents :-</span>
                    <li className="ps-3">Home Page</li>
                    <li className="ps-3">Features Page</li>
                    <li className="ps-3">Services Page</li>
                    <li className="ps-3">Team Page</li>
                    <li className="ps-3">Pricing Page</li>
                    <li className="ps-3">FAQ Page</li>
                </ul>
                <p><span>Environment :</span> VS Code</p>
                <p><span>Languages :</span> HTML5, CSS, Bootstrap 5, JQuery, JavaScript</p>
                <a href="https://zuscon.000webhostapp.com/" target="_blank" rel="noreferrer"><button className="project-view-btn">View Project</button></a>
            </div>
        </div>
        <div className="col-lg-6 col-md-10 project-card reveal">
            <div className="project-card-title">
            <span className='projectnum'>04</span>
                <h3>Project 4<i className="fa-sharp fa-solid fa-code"></i></h3>
                <span className="card-action-message"></span>
            </div>
            <div className="project-card-text">
                <h5>Foodies</h5>
                <span>Website</span>
                <p>Fornt End Hotel Website. This is a full-fledged fornt end project. Designed &amp; Developed for the same. Showscases a Proper Website. <b>Main part of this project is it's Totally Responsive</b>. This is an One Page website so as to improve the performence of the site.</p>
                <ul><span>Project Contents :-</span>
                    <li className="ps-3">Home Page</li>
                    <li className="ps-3">Features Page</li>
                    <li className="ps-3">Services Page</li>
                    <li className="ps-3">Team Page</li>
                    <li className="ps-3">Pricing Page</li>
                    <li className="ps-3">FAQ Page</li>
                </ul>
                <p><span>Environment :</span> VS Code</p>
                <p><span>Languages :</span> HTML5, CSS, Bootstrap 5, JavaScript</p>
                <a href="https://foodieshotel.000webhostapp.com/" target="_blank" rel="noreferrer"><button className="project-view-btn">View Project</button></a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project