import "./SkillContainer.css";
import { Element } from "react-scroll";
import skills from "../../asset/im.jpg"
import LinearProgress from '@mui/material/LinearProgress';

const SkillContainer = ()=>{
    return(
       <Element name= "skills" className="skillContainer">
        <div className="skillcontainer__image">
         <div className="SkillContainer__head">
         <h2>SKILLSET</h2>
         </div>
        <img src = {skills} alt="" />
        </div>
        <div className="skillContainer__text">
            <div className="skillcontainer__skillset">
                <h5>HTML</h5>
         <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate" value={77} />
         </div>
            </div>
            <div className="skillcontainer__skillset">
                <h5>CSS</h5>
         <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate" value={78} />
         </div>
            </div>
            <div className="skillcontainer__skillset">
                <h5>JavaScript</h5>
         <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate" value={77} />
         </div>
            </div>
            <div className="skillcontainer__skillset">
                <h5>React</h5>
         <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate" value={77} />
         </div>
            </div>
            <div className="skillcontainer__skillset">
                <h5>Linux</h5>
         <div className="skillcontainer__slider skillcontainer__slider5">
            <LinearProgress variant="determinate" value={79} />
         </div>
            </div>
        </div>
       </Element>

        
    )
}

export default SkillContainer;