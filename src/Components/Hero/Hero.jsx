import React from "react";
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () =>{
    return(
        <div id='home' className="hero">
            <h1>I'm <span>Hariprasad V V</span>,Frontend developer based in india</h1>
            <p>I am  working as freelancer with experience of 1 year</p>
            <div className="hero-action">
                <div className="hero-connect">
                     <AnchorLink className='anchor-link' offset={50}  href="#contact">Connect With Me</AnchorLink> 
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}
export default Hero