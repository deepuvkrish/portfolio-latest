import React from "react";
import { mainp } from "../../../constants";
import DisplayLottie from "../../../static/DisplayLottie";
import { projectFeaturesNadaar } from "../../../constants";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../pro.css'
import { adm, cart, emailing, bill, payment } from '../../../assets'


function Showfeatures(props) {
    return (
        <li>
            <span>
                {props.feature} {props.anim}
            </span>

        </li>
    );
};



const Nadaar = () => {
    const m = mainp[1];
    return (
        <div className="project-page-overlay" style={{ backgroundImage: `url(${m.primg})` }}>
            <Link to='/projects' className="iconBoxpa">
                <Icon icon="line-md:close-circle" />
            </Link>
            <div className="project-view">
                <div className="project-view-title-section">
                    <div>
                        <h1 style={{ color: "#fff" }} className="animation-titles-up">
                            {m.prname}
                        </h1>
                        <h5 className="animation-titles-up">{m.prsmalldesc}</h5>
                    </div>
                    <div>
                        <Icon icon="simple-icons:edx" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="bxl:react" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon-plain:django-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="arcticons:learn-html" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="arcticons:learn-css" width="2em" height="2em" className="project-view-icn" />
                    </div>
                </div>

                <hr className="horiline" />
                <div className="project-view-desc">
                    <div>
                        <p className="animation-titles-up text-break text-indent">{m.prlargedesc}</p>
                    </div>
                    <div style={{ backgroundImage: `url(${m.prbgimg})` }}>
                    </div>

                </div>
                <div className="project-view-features">
                    <h3>Features</h3>
                    <ul>
                        {projectFeaturesNadaar.map((f) => <Showfeatures feature={f.feature} />)}
                    </ul>
                    <ul className="animation-ul">
                        <li><DisplayLottie lottiename={cart} /></li>
                        <li><DisplayLottie lottiename={payment} /></li>
                        <li><DisplayLottie lottiename={emailing} /></li>
                        <li><DisplayLottie lottiename={bill} /></li>
                        <li><DisplayLottie lottiename={adm} /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
};


export default Nadaar;

