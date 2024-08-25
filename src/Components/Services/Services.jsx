import React from "react";
import './Services.css'
import arrow_right from '../../assets/arrow_right.png'
const Services = () =>{
    return(
        <div id='services' className="service">
            <div className="service-title">
                <h1>My Services</h1>
            </div>
            <div className="service-format">
                <div className="service-containers">
                    <div className="service-container">
                         <h3>01</h3>
                         <h2>Web Design</h2>
                         <p>Web design is the process of building,programming....</p>
                        <div className="service-readmore">
                            <p>Read More</p>
                            <img src={arrow_right} alt=""/>
                        </div>    
                </div>
                <div className="service-container">
                    <h3>02</h3>
                    <h2>Web Design</h2>
                    <p>Web design is the process of building,programming....</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_right} alt=""/>
                    </div>
                </div>
                <div className="service-container">
                    <h3>03</h3>
                    <h2>Web Design</h2>
                    <p>Web design is the process of building,programming....</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_right} alt=""/>
                    </div>
                </div>
                <div className="service-container">
                    <h3>04</h3>
                    <h2>Web Design</h2>
                    <p>Web design is the process of building,programming....</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_right} alt=""/>
                    </div>
                </div>
                <div className="service-container">
                    <h3>05</h3>
                    <h2>Web Design</h2>
                    <p>Web design is the process of building,programming....</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_right} alt=""/>
                    </div>
                </div>
                <div className="service-container">
                    <h3>01</h3>
                    <h2>Web Design</h2>
                    <p>Web design is the process of building,programming....</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_right} alt=""/>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Services