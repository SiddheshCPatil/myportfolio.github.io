import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { TiStar } from 'react-icons/ti'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <article className='about__card' >
              <FaAward className='about_icon' />
              <h5>Problem Solving</h5>
              <small>2_⭐_Codeshef,</small>
              <br />
              {/* <small><TiStar></TiStar></small> */}
              {/* <small> Codeshef</small> */}
              {/* <br /> */}
              {/* <small>Questions_Solved </small> */}
              <small>300+_Questions_Solved_on_GFG,</small>
              {/* <br /> */}
              <br />
              <small>200+_Questions_Solved_on_Leetcode,</small>
            </article>

            <article className='about__card' >
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
            Seeking an opportunity to work for an organization to have a platform to learn and explore new technologies and to improve my skills.
          </p>
          <a href="#contact" className='btn btn-primary' >Let,s Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About