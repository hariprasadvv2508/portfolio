import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu from '../../assets/menu.png'
const Navbar = () =>{
    const [menu,setMenu] = useState("home");
    return(
        <div  className='navbar'>
            <img src={menu} alt="" className='nav-open'/>
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' offset={50}  href="#home"><p>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50}  href="#about"><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50}  href="#services"><p>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50}  href="#work"><p>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50}  href="#contact"><p>Contact</p></AnchorLink></li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50}  href="#contact">Connect With Me</AnchorLink> </div>
        </div>
    )
}
export default Navbar