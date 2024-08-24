import React from "react";
import  './Footer.css'
import user_icon from '../../assets/user_icon.png'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I am  a frontend devolper from india,who is working as a freelancer for 2 years </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt=""/>
                        <input type="email" placeholder="Enter your email"></input>    
                    </div>
                    <div className="footer-subscribe">
                        Subscribe Me
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    © 2024 Hariprasad.All rights reserved
                </div>
                <div className="footer-bottom-right">
                        <p>Terms of services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                </div>      
            </div>
        </div>
    )
}
export default Footer