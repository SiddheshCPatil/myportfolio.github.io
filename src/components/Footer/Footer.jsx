import React from 'react'
import './Footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <div>
        <a href="#" className='footer__logo'>Scroll Up</a>

        <ul className='permalinks'>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#experience">Experience</a> </li>
          <li> <a href="#portfolio">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__socials">
        <a href="https://www.instagram.com/siddhesh_patil_96896/" target='_blank'><BsInstagram /></a>
        <a href="https://twitter.com/Siddhesh96896?t=932mIv1nYnMFsM_T8Zws0w&s=35" target='_blank'><BsTwitter /></a>
      </div>
    </footer>

  )
}

export default Footer