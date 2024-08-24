import React from "react";
import './Contact.css'
import gmail_icons from '../../assets/gmail_icons.png'
import telephone_icon from '../../assets/telephone_icon.png'
import location_icon from '../../assets/location_icon.png'
const Contact = () =>{
    return(
           <div className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p className="contact-me">I'm currently available to take on new projects,so feel free to send message about anything you want me to work on. You can contact me about anytime.</p>
                        <div className="contact-details">
                            <div  className="contact-detail">
                                <img src={gmail_icons} alt=""/>
                                <p>hariprasadvv2505@gmail.com</p>
                            </div>
                            <div  className="contact-detail">
                                <img src={telephone_icon} alt=""/>
                                <p>8590844298</p>
                            </div>
                            <div  className="contact-detail">
                               <img src={location_icon} alt=""/>
                               <p>India</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-right">
                        <label htmlFor="">Your name</label>
                        <input name="name" type="text" placeholder="Enter your name"></input>
                        <label htmlFor="">Your Email</label>
                        <input name="email" type="email" placeholder="Enter your email"></input>
                        <label htmlFor="">write your message here</label>
                        <textarea name="message" rows="8" placeholder="Enter  Your message"></textarea>
                        <button type="submit" className="contact-submit">Submit</button>
                    </form>  
                </div>
           </div> 
    )
}
export default Contact