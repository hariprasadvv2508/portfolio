import React from "react";
import './About.css'
import instagram_icon from '../../assets/instagram_icon .png'
import github_icon from  '../../assets/github_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import hari from '../../assets/hari.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const About = () =>{
    return(
           <div id='about' className="about">
                <div className="about-section">
                    <h1>About Me</h1>
                    <div className="about-content">
                        <img src={hari} alt=""/>
                        <p>I'm Hariprasad, a passionate Web developer  who is currently  graduating and working as freelancer with an experience of 1 year with  crafting interactive Websites.
                           With a background in fine arts and a degree in design, I bring a creative approach to problem-solving.
                           My expertise lies in user-centered design, prototyping, and front-end development. 
                           I'm proficient in Figma, HTML, CSS, and JavaScript.
                           I value collaboration, empathy, and continuous learning. 
                           When I'm not designing, you can find me in playing football or travelling.
                        </p>
                    </div>
                    <div className="about-socialmedias">
                        <h2>Social media</h2>
                        <div className="social-media">
                            <div className="instagram">
                                <img src={instagram_icon} alt=""/>
                                <a href="https://www.instagram.com/"><button><p className="para">Go to Profile</p></button></a>
                            </div>
                            <div className="Linked-in">
                                <img src={linkedin_icon} alt=""/>
                                <a href="https://www.linkedin.com/in/hariprasad-v-v-10a46a245/"><button><p className="para">Go to Profile</p></button></a>
                            </div>
                            <div className="github">
                                <img src={github_icon} alt=""/>
                                <a href="https://github.com/hariprasadvv2508"><button><p className="para">Go to Profile</p></button></a>
                            </div>
                        </div>
                    </div>
                </div>
           </div> 
           
    )
}
export default About