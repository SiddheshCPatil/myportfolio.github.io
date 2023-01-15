import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio_project.png'
import IMG2 from '../../assets/Landing_Page.jpg'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id="portfolio" >
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className='project__item' >
          <div className='project__item-image' >
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="project__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className='project__item' >
          <div className='project__item-image' >
            <img src={IMG2} alt="" />
          </div>
          <h3>Landing Page</h3>
          <div className="project__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className='project__item' >
          <div className='project__item-image' >
            <img src={IMG3} alt="" />
          </div>
          <h3>Blood Bank Mangemnet System</h3>
          <div className="project__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio