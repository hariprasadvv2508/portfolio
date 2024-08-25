import React from "react";
import './MyWork.css'
import arrow_right from '../../assets/arrow_right.png'
import personalwork1 from '../../assets/personalwork1.png'
const MyWork = () =>{
    return(
        <div id='work' className="mywork">
            <div className="work-title">
                <h1>My Latest work</h1>
            </div>
            <div className="work-container">
                <img src={personalwork1} alt="" />
                <img src={personalwork1} alt="" />
                <img src={personalwork1} alt="" />
                <img src={personalwork1} alt="" />
                <img src={personalwork1} alt="" />
                <img src={personalwork1} alt="" />
            </div>
            <div className="work-showmore">
                <p>Show More</p>
                <img src={arrow_right} alt=""/>
            </div>
        </div>
    )
} 
export default MyWork