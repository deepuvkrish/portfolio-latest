import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../pro.css'
import { minip } from '../../../constants';
import DisplayLottie from "../../../static/DisplayLottie";
import { projectFeaturesPetzy } from "../../../constants";
import { doctoraccount, student, appointments, treatment } from '../../../assets'

function Showfeatures(props) {
    return (
        <li>
            <span>
                {props.feature}
            </span>

        </li>
    );
};



const Petzi = () => {
    const m = minip[3];
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
                        <Icon icon="bxl:react" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="arcticons:api-tester" width="2em" height="2em" className="project-view-icn" />
                        <Icon icon="cib:js" width="2em" height="2em" className="project-view-icn" />
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
                        {projectFeaturesPetzy.map((f) => <Showfeatures feature={f.feature} />)}
                    </ul>
                    <ul className="animation-ul">
                        <li><DisplayLottie lottiename={student} /></li>
                        <li><DisplayLottie lottiename={appointments} /></li>
                        <li><DisplayLottie lottiename={doctoraccount} /></li>
                        <li><DisplayLottie lottiename={treatment} /></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Petzi;