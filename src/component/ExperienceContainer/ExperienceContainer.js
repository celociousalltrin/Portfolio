import { Element } from "react-scroll";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import "./ExperienceContainer.css"

const ExperienceContainer = (()=>{
    return (
        <Element className="ExperienceContainer" id="exp">
         <div className="ExperienceContainer__head">
         <h2>Experience</h2>
         </div>
         
        <div className="ExperienceContainer__body">
        <ExperienceBox number="2+" title="clients"/>
        <ExperienceBox number="5+" title="Projects" theme={{backgroundColor:"yellow",color:"black"}}/>
        <ExperienceBox number="4+" title="Months"/>
        <ExperienceBox number="100+" title="Students got placed"/>
        </div>
            
        </Element>       
    )
}
)
export default ExperienceContainer;