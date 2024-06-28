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

                </ul>
            </div>
        </div>
    )
}
const Mainprojects = () => {
    return (
        // <div className='projects-block'>
        //     <div className='project-title-type glow-title'>
        //         <span className='text-mid-about'>Main Projects</span>
        //         <div className='project-tech-stack'>
        //             <span>JavaScript</span>
        //             <span>ReactJS</span>
        //             <span>HTML5</span>
        //             <span>CSS3</span>
        //         </div>
        //     </div>
        //     <div className='left-project-items'>
        //         {mainProjects.map((prjs) => <ShowProjects id={prjs.pid} title={prjs.ptitle} description={prjs.pdesc} />)}
        //     </div>
        // </div>

        <section>
            <h1>Main Projects</h1>
            <div className="containerp">
                {mainp.map((x) => <ProjectsView title={x.prname} imgurl={x.primg} imgsdesc={x.prsmalldesc} imglink={x.prlink} imgbg={x.iconBoxp} />)}

                {/* 
                <div className="cardp">
                    <div className="cardp-inner" style={{ backgroundColor: "#fff" }}>
                        <div className="boxp">
                            <div className="imgBoxp">
                                <img src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/10/07/Pictures/_78841a80-6cd8-11e5-9358-ce0f694bc37c.jpg" alt="Trust & Co." />
                            </div>
                            <div className="iconp">
                                <Link to='/skillassure' className="iconBoxp"><span className="material-symbols-outlined">
                                    <Icon icon="ic:round-arrow-outward" />
                                </span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>SkillAssure</h3>
                        <p>E-learning application based on openEdx framework</p>
                        <ul>
                            <li style={{ backgroundColor: "#56cded" }} className="reactjs">React js</li>
                            <li style={{ backgroundColor: "#70b3b1" }} className="packaging">Django</li>
                            <li style={{ backgroundColor: "rgb(136 239 69)" }} className="mongo">MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="cardp">
                    <div className="cardp-inner" style={{ backgroundColor: "#fff" }}>
                        <div className="boxp">
                            <div className="imgBoxp">
                                <img src="https://www.allbusiness.com/media-library/ecommerce-business.jpg?id=32093638&width=1200&height=600&coordinates=0%2C83%2C0%2C83" alt="Tonic" />
                            </div>
                            <div className="iconp">
                                <Link to='/nadaar' className="iconBoxp"><span className="material-symbols-outlined">
                                    <Icon icon="ic:round-arrow-outward" />
                                </span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Nadaar.com</h3>
                        <p>E-Commerce application</p>
                        <ul>
                            <li style={{ backgroundColor: "#d3b19a" }} className="branding">HTML5</li>
                            <li style={{ backgroundColor: "#408bda" }} className="css3">CSS3</li>
                            <li style={{ backgroundColor: "#f2ff67" }} className="javascript">JS</li>
                            <li style={{ backgroundColor: "rgb(164 68 255)" }} className="php">Php</li>

                        </ul>
                    </div>
                </div>
                <div className="cardp">
                    <div className="cardp-inner" style={{ backgroundColor: "#fff" }}>
                        <div className="boxp">
                            <div className="imgBoxp">
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201807/e-learning_0.jpeg" alt="Shower Gel" />
                            </div>
                            <div className="iconp">
                                <Link to='/padippi' className="iconBoxp"><span className="material-symbols-outlined">
                                    <Icon icon="ic:round-arrow-outward" />
                                </span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Padippi.com</h3>
                        <p>Fill out the form and the algorithm will offer the right team of experts</p>
                        <ul>
                            <li style={{ backgroundColor: "#d3b19a" }} className="branding">HTML5</li>
                            <li style={{ backgroundColor: "#70b3b1" }} className="packaging">CSS3</li>
                            <li style={{ backgroundColor: "#f2ff67" }} className="javascript">JS</li>
                            <li style={{ backgroundColor: "rgb(164 68 255)" }} className="php">Php</li>

                        </ul>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Mainprojects;