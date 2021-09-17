import React from 'react'

function ProjectCard({title,description,technology, projectLink}) {
    return (
        <div className="card shadow h-100 ">
        <div className="card-body">
          {/* <span className="d-flex justify-content-between"> */}
            <h3 className="card-title">{title}</h3>
            <span className="d-flex"><h6>Technology: { technology }</h6></span>
          <p className="text-justify card-text project-card">{description}</p>
          {projectLink === "#" ?'' : <a className= "d-flex" href={projectLink} target='_blank'>Link</a> }
        </div>
      </div>    
    )
}

export default ProjectCard;
