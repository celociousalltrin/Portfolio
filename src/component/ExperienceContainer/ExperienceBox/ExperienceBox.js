import "./ExperienceBox.css"

const ExperienceBox = ((Data)=>{
    const {number,title,theme} = Data;
    return(
        <div className="ExperienceBox" style={{...theme}}>
          <h1>{number}</h1>
          <p>{title}</p>
        </div>
    )
})

export default ExperienceBox;