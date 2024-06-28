import React from "react";
import { Link } from 'react-router-dom';

import { mainp, mainProjects } from "../../constants";

import { Icon } from '@iconify-icon/react';

import SkillAssure from "./mainp/Skillassure";
import './pro.css'

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
function ProjectsView(props) {
    return (
        <div className="cardp">
            <div className="cardp-inner" style={{ backgroundColor: "#fff" }}>
                <div className="boxp">
                    <div className="imgBoxp">
                        <img src={props.imgurl} alt={props.title} />
                    </div>
                    <div className="iconp">
                        <Link to={props.imglink} className="iconBoxp" style={{ backgroundColor: `${props.imgbg}` }}><span className="material-symbols-outlined">
                            <Icon icon="ic:round-arrow-outward" />
                        </span></Link>
                    </div>
                </div>
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.imgsdesc}</p>
                <ul>
                    <li style={{ backgroundColor: `${props.bgclr1}` }} className={props.stclass1}>{props.stack1}</li>
                    <li style={{ backgroundColor: `${props.bgclr2}` }} className={props.stclass2}>{props.stack2}</li>
                    <li style={{ backgroundColor: `${props.bgclr3}` }} className={props.stclass3}>{props.stack3}</li>
                </ul>
            </div>
        </div>
    );
};

const Mainprojects = () => {
    return (
        <section>
            <h2><span className='gradient-color'>Main</span> Projects</h2>
            <div className="containerp">
                {mainp.map((x) => <ProjectsView title={x.prname} imgurl={x.primg} imgsdesc={x.prsmalldesc} imglink={x.prlink} imgbg={x.iconBoxp} stack1={x.stack1} stack2={x.stack2} stack3={x.stack3} bgclr1={x.stack1bg} bgclr2={x.stack2bg} bgclr3={x.stack3bg} stclass1={x.stack1clr} stclass2={x.stack2clr} stclass3={x.stack3clr} />)}
            </div>
        </section>
    )
}

export default Mainprojects;