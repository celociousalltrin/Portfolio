import React from "react";
import Header from "./component/Header/Header";
import TopContainer from "./component/TopContainer/TopContainer";
import SkillContainer from "./component/SkillContainer/SkillContainer";
import ProjectContainer from "./component/ProjectContainer/ProjectContainer";
import ExperienceContainer from "./component/ExperienceContainer/ExperienceContainer";
import Contact from "./component/Contact/Contact";

const App = () =>{
  return(
<div>
<Header />
<TopContainer /> 
<SkillContainer />
<ProjectContainer />
<ExperienceContainer />
<Contact />
</div>
  )
}

export default App; 
