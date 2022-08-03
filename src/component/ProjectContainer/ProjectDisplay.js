import { useState } from "react"
import "./ProjectDisplay.css"

const ProjectDisplay = ({img,title,description,link})=>{
    const [show,setShow] = useState(false)
 
    return(
        <div className="Anchor__Style">
            <a href={link}>
      <div className="ProjectDisplay" 
      onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        {show ? 
        ( <div className="ProjectDisplay__Yes"> 
            <h4>{title}</h4>
            <p>{description}</p>
        </div>) : 
        (<img src={img} alt = " " />)}
      </div>
        </a>
        </div>
        
      
    )
}

export default ProjectDisplay;