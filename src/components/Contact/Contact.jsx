import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact" >
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' >
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>siddheshcp@gmail.com</h5>
            <a href="mailto:siddheshcp@gmail.com" target="_blank" >Send a Message</a>

          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>9689686140</h5>
            <a href="https://api.whatsapp.com/send?phone=9689686140" target="_blank">Send a Message</a>

          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="messsage" rows="7" placeholder='Your Meassage' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>

    </section  >
  )
}

export default Contact