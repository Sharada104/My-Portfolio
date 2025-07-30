import React from "react";
import './Contact.css'
import mailicon from '../../assets/mailicon.jpg' 
import locationicon from '../../assets/locationicon.png'
import callicon from '../../assets/callicon.jpg'




const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send a message about anything that you want me to work on.you can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} alt="" className="mail" /> <p>sharadalh75@gmail.com</p>
            </div>
             <div className="contact-detail">
                <img src={callicon} alt="" className="call"/> <p>6360383738</p>
            </div>
             <div className="contact-detail">
                <img src={locationicon} alt="" className="location" /> <p>   Bangalore, India    </p>
            </div>

          </div>
        </div>
        <form  className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
              <textarea name="message"  rows={10} placeholder="Enter your message "></textarea>
              <button  type='submit' className="contact-submit"> Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
