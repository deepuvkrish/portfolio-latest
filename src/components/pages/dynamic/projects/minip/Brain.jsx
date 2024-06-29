import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../pro.css'
import { minip } from '../../../constants';
import DisplayLottie from "../../../static/DisplayLottie";
import { projectFeaturesBrain } from "../../../constants";
import { detect, classification, segment } from '../../../assets'

function Showfeatures(props) {
    return (
        <li>
            <span>
                {props.feature}
            </span>

        </li>
    );
};



const Brain = () => {
    const m = minip[0];
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
                        <Icon icon="devicon-plain:python-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon:tensorflow-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon-plain:numpy-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon-plain:pandas-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon-plain:matplotlib-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="devicon-plain:keras-wordmark" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="simple-icons:kaggle" width="2em" height="2em" className="project-view-icn" />

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
                        {projectFeaturesBrain.map((f) => <Showfeatures feature={f.feature} />)}
                    </ul>
                    <ul className="animation-ul">
                        <li><DisplayLottie lottiename={detect} /></li>
                        <li><DisplayLottie lottiename={segment} /></li>
                        <li><DisplayLottie lottiename={classification} /></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Brain;