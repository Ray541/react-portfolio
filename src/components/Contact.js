import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import '../components/responsive.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iuqm889', 'template_m258i9t', form.current, 'iSgYFzDJoUxhRfid-')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className="container">
          <div className="row contact-section">
              <h2 className="reveal scroll-active">Don't be shy, send a message</h2>
              <div className="col-lg-7 col-md-10 mt-5 reveal scroll-active">
                  <form className="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
                      <input type="text" name="name" placeholder="Your Name" className="name" required="" autoComplete='off' />
                      <input type="email" name="from_email" placeholder="Email Address" className="email" required="" autoComplete='off' />
                      <textarea name="message" id="" placeholder="Message..." className="message"></textarea>
                      <input type="submit" name="send" value="Send" className="send-btn" />
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Contact