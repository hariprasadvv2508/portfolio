import React from "react";
import './About.css'
const About = () =>{
    return(
        <div className="about">
               <div className="about-title">
                    <h1>About Me</h1>
                    <img src="" about="lt=" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img src="" alt="" />
                    </div>
                    <div className="about-right">
                         <div className="about-para">
                            <p>I'm <span>Hariprasad V V</span>,Frontend developer based in india</p>
                            <p>I am  working as freelancer with experience of 1 year</p>
                         </div>
                         <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                            <div className="about-skill"><p>JavScript</p><hr style={{width:"70%"}}/></div>
                            <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
                         </div>
                         <div className="about-acheivements">
                            <div className="about-acheivement">
                                    <h1>1+</h1>
                                    <p>PROJECTS</p>
                            </div>
                         </div>
                    </div>
                </div>
        </div>
    )
}
export default About