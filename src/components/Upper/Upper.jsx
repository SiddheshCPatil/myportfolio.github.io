import React from 'react'
import './Upper.css'

const Upper = () => {
    return (<upper classname="upper" >
        {/* <div className="logo">Portfolio</div> */}

        <div>
            <a href="#" className='upper__logo'><h5>Portfolio</h5></a>

            <ul className='nav__list'>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#experience">Experience</a> </li>
                <li> <a href="#portfolio">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </div>
        <a href="#contact" className='btn btn-primary' >Let,s Talk</a>

    </upper>

    )
}

export default Upper