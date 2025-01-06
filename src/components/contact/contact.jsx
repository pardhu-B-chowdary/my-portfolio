import React, { useRef, useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css'

function Contact() {
  const [message, setMessage] = useState(false)
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    // emailjs.sendForm(serviceid,template,message).then((result) => {console.log(result.text);},(error) => {console.log(error.text);});
    setInterval(() => {
      setMessage(false)
    }, 5000);
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Your Full Name'
            name='user_name'
            required
          />
          <input
            type='text'
            placeholder='Your EmailId'
            name='user_email'
            required
          />
          <textarea
            placeholder='Your Message'
            rows={8}
            name='user_message'
            required
          ></textarea>
          <button className='btn btn-primary'>Send Message</button>
          {message && 'Sorry I have not yet implemented this yet feature. Could you mail me directly.'}
        </form>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>pardhuchowdary2003@gmail.com</h5>
            <a href="mailto:pardhuchowdary2003@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact