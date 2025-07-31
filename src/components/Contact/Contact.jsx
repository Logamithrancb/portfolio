import React from 'react'
import './Contact.css'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import phoneIcon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53b94f1c-a5e7-4459-8fa5-fc67ffcff6bd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert(res.message);    }
  };







  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src={mailIcon} alt="Email" /> 
                    <p>logamithrancb@gmail.com</p>
                   </div>
                <div className="contact-detail">
                    <img src={locationIcon} alt="Location" /> 
                    <p>Coimbatore, Tamil Nadu</p>
                </div>
                <div className="contact-detail">
                    <img src={phoneIcon} alt="Phone" /> 
                    <p>+91 6374148903</p>
                </div>
                </div>
            </div>
        </div>
        <from onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" row="180" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </from>
    </div>
  )
}

export default Contact