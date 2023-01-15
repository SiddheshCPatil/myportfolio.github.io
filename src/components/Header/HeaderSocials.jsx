import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="www.linkedin.com/in/siddhesh-patil-892160210" target="_blank" ><BsLinkedin /> </a>
      <a href="https://github.com" target="_blank" ><BsGithub /> </a>
      <a href="mailto:siddheshcp@gmail.com" target="_blank" ><SiGmail /> </a>
    </div>
  )
}

export default HeaderSocials