import React from "react";
import './About.css'
import Hariimage2  from '../../assets/Hariimage2.jpg' 
const About = () =>{
    return(
        <div className="about">
               <div className="about-title">
                    <h1>About Me</h1>
                    <img src="" about="lt=" />
                </div>
                <div className="about-section">        
                    <div className="about-left">
                       
                    </div>
                    <div className="about-right">
                         <div className="about-para">
                            <p>I'm <span>Hariprasad V V</span>,Frontend developer based in india</p>
                            <p>I am  working as freelancer with experience of 1 year</p>
                         </div>
                         <div className="about-skills">
                            <div className="about-skill"><p>Html</p><hr style={{width:"80%"}}/></div>
                            <div className="about-skill"><p>Css</p><hr style={{width:"80%"}}/></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                            <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
                         </div>
                         <div className="about-acheivements">
                            <div className="about-acheivement">
                                    <h1>1+</h1>
                                    <p>EXPERIENCE</p>
                            </div>
                            <div className="about-acheivement">
                                    <h1>1+</h1>
                                    <p>PROJECTS</p>
                            </div>
                            <div className="about-acheivement">
                                    <h1>10+</h1>
                                    <p>CLIENTS</p>
                            </div>
                         </div>
                    </div>
                </div>
        </div>
    )
}
export default About