import React from "react";
import { Link } from 'react-router-dom';
import { minip } from "../../constants";
import { Icon } from '@iconify-icon/react';
import './pro.css'

function ProjectsView(props) {
    return (
        <div className="cardmp">
            <div className="cardmp-inner" style={{ backgroundColor: "#fff" }}>
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

const Miniprojects = () => {
    return (
        <section className="mini-section">
            <h2><span className='gradient-color'>Mini</span> Projects</h2>
            <div className="containerp">
                {minip.map((x) => <ProjectsView title={x.prname} imgurl={x.primg} imgsdesc={x.prsmalldesc} imglink={x.prlink} imgbg={x.iconBoxp} stack1={x.stack1} stack2={x.stack2} stack3={x.stack3} bgclr1={x.stack1bg} bgclr2={x.stack2bg} bgclr3={x.stack3bg} stclass1={x.stack1clr} stclass2={x.stack2clr} stclass3={x.stack3clr} />)}
            </div>
        </section>

    );
};

export default Miniprojects;