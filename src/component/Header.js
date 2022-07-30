import React from "react";
import {Link} from "react-scroll";
import "./Header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="header__left">
                <h1>Develop<span>er</span></h1>
            </div>
            <div className="header__right">
            <Link to="about" smoth={true} duration={500}>
                <h4>About me</h4>
            </Link>
            <Link to="skills" smoth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="projects" smoth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to="exp" smoth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to="contact" smoth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            <h4 className="header__rightButton">Join with me</h4>
            </div>
           

        </div>
    )
}

export default Header;