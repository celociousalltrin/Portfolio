import ProjectData from "./ProjectData";
import { Element } from "react-scroll";
import ProjectDisplay from "./ProjectDisplay";
import "./ProjectContainer.css"

const renderIteration = (()=>{
    return(
        ProjectData.map((element,index)=>(<ProjectDisplay key={index} {...element}/>))
    )
})
const ProjectContainer  = ()=>{
    return(
        <Element className="ProjectContainer" id = "projects">
            <h2>Projects</h2>
            <p>Here are the projects I have Created</p>
            <div className="ProjectContainer__arrange">
            {renderIteration ()}
            </div>
         
        </Element>
    )
}

export default ProjectContainer;