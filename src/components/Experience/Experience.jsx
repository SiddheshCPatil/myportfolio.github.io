import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience" >
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container' >
        <div className="experience__coding">
          <h3>Coding Languages</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>C</h4>
                <small className='text-light' >Intermidiate</small>
              </div>

            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className='text-light' >Intermidiate</small>
              </div>

            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className='text-light' >Intermidiate</small>
              </div>

            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light' >Basic</small>
              </div>

            </article>
          </div>
        </div>
        <div className="experience__development">
          <h3>Development Languages</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill classname='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>Css</h4>
                <small className='text-light' >Intermidiate</small>
              </div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light' >Intermidiate</small>
              </div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light' >Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section  >
  )
}

export default Experience