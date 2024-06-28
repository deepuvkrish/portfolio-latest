import React from "react";
import { miniProjects } from "../../constants";
function ShowProjects(props) {
    return (
        <div className='main-proj mp1' key={props.id}>
            <div className='main-proj-title'>
                <span className='project-sub-titles'>{props.title}</span>
            </div>
            <div className='main-proj-desc'>
                <p className='project-sub-desc'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

const Miniprojects = () => {
    return (
        <div className='projects-block main-props-cols'>
            <div className='right-project-items'>
                {miniProjects.map((x) => <ShowProjects id={x.mid} title={x.mtitle} description={x.mdesc} />)}
            </div>
            <div className='project-title-type glow-title'>
                <span className='text-mid-about'>Mini Projects</span>
                <div className='project-tech-stack'>
                    <span>Python</span>
                    <span>ReactJS</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                </div>
            </div>

        </div>
    )
}

export default Miniprojects;