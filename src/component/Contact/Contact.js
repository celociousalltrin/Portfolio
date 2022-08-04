import { Element } from "react-scroll";
import {FaInstagram,FaLinkedinIn,FaFacebookSquare} from "react-icons/fa"
import "./Contact.css"
const Contact = (()=>{
    return (
     <Element className="Contact" id = "contact">
        <div className="Contact__head">
        <h2>Contact</h2>
        </div>
        <div className="Contact__body">
            <p>
             Email : <span>celomf@gmail.com</span>   
            </p>
            <p>
                Github Username:<span>@githubuser</span>
            </p>
            <div>
                <a href="google.com" >
                 <FaFacebookSquare className="Contact__bodyicons1"/>
                </a>

                <a href="google.com" >
                 <FaLinkedinIn className="Contact__bodyicons1"/>
                </a>

                <a href="google.com" >
                 <FaInstagram className="Contact__bodyicons1"/>
                </a>
            </div>
        </div>
     
     </Element> 
    )
})

export default Contact;