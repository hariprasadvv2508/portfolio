import React from "react";
import './Hero.css'
const Hero = () =>{
    return(
        <div className="hero">
            <img></img>
            <h1>I'm <span>Hariprasad V V</span>,Frontend developer based in india</h1>
            <p>I am  working as freelancer with experience of 1 year</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect With Me
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}
export default Hero