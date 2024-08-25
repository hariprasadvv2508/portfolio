import React from "react";
import './Contact.css'
import gmail_icons from '../../assets/gmail_icons.png'
import telephone_icon from '../../assets/telephone_icon.png'
import location_icon from '../../assets/location_icon.png'
const Contact = () =>{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "053d7657-3d73-47e8-af15-8416b5cc1224");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
    };   
    return(
           <div id='contact' className="contact">
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
                    <form onSubmit={onSubmit} className="contact-right">
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