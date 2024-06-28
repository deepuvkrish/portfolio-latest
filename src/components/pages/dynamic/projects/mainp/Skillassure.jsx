import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../pro.css'
import { mainp } from "../../../constants";
import DisplayLottie from "../../../static/DisplayLottie";
import { projectFeaturesSkillassure } from "../../../constants";

import { worker, coding, discuss, proctor, lec } from '../../../assets'

function Showfeatures(props) {
    return (
        <li>
            <span>
                {props.feature} {props.anim}
            </span>

        </li>
    );
};

const SkillAssure = () => {
    const m = mainp[0];
    return (
        <div className="project-page-overlay project-page-overlay-skill">
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
                    <div>
                    </div>

                </div>
                <div className="project-view-features">
                    <h3>Features</h3>
                    <ul>
                        {projectFeaturesSkillassure.map((f) => <Showfeatures feature={f.feature} anim={f.lottiename} />)}
                    </ul>
                    <ul className="animation-ul">
                        <li><DisplayLottie lottiename={coding} /></li>
                        <li><DisplayLottie lottiename={proctor} /></li>
                        <li><DisplayLottie lottiename={lec} /></li>
                        <li><DisplayLottie lottiename={worker} /></li>
                        <li><DisplayLottie lottiename={discuss} /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
};


export default SkillAssure;

