import React from "react";
import { Icon } from '@iconify-icon/react';
// import { achievements } from "../../constants";

import { vidhya, reboot, bishop } from "../../assets"


const Achievements = () => {
    return (
        <div>
            <div className="achievement-section">
                {/* mobile title */}
                <div className='section-header-mob'>
                    <div className='about-title-section'>
                        <h1>Achieve<span className='gradient-color'>ments</span></h1>
                    </div>
                </div>

                {/* Laptop Title */}
                <div className='section-header'>
                    <div className='about-title-section'>
                        <h1>Achieve<span className='gradient-color'>ments</span></h1>
                    </div>
                </div>


                <div className="achievement_boxes">
                    <div className="achieve_portion" id="ach1">
                        <div className="achieve_details">
                            <div className="achievementGal">
                                <div className="imgBorder">
                                    <img src={vidhya} alt="vidhya cert" className="achieve_img" />
                                </div>
                            </div>
                            <div className="achieve_texts">
                                <h6>FEB 2019 | PARTICIPANT</h6>
                                <h1>SOFTWARE HACKATHON </h1>
                            </div>
                            <Icon icon="iconamoon:certificate-badge-duotone" width="68" height="68" style={{ color: "white" }} className="certiicon" />
                        </div>
                    </div>

                    <div className="achieve_portion" id="ach2">
                        <div className="achieve_details">
                            <div className="achievementGal">
                                <div className="imgBorder">
                                    <img src={reboot} alt="vidhya cert" className="achieve_img" />
                                </div>
                            </div>
                            <div className="achieve_texts">
                                <h6>JAN 2020 | FINALISTS</h6>
                                <h1>REBOOT KERALA HACKATHON</h1>
                                <h3>TRIVANDRUM</h3>
                            </div>
                            <Icon icon="iconamoon:certificate-badge-thin" width="68" height="68" style={{ color: "white" }} className="certiicon" />
                        </div>
                    </div>
                    <div className="achieve_portion" id="ach2">
                        <div className="achieve_details">
                            <div className="achievementGal">
                                <div className="imgBorder">
                                    <img src={reboot} alt="vidhya cert" className="achieve_img" />
                                </div>
                            </div>
                            <div className="achieve_texts">
                                <h6>MARCH 2020 | FINALISTS</h6>
                                <h1>REBOOT KERALA HACKATHON </h1>
                                <h3>KAZARGODE</h3>
                            </div>
                            <Icon icon="iconamoon:certificate-badge-thin" width="68" height="68" style={{ color: "white" }} className="certiicon" />
                        </div>
                    </div>

                    <div className="achieve_portion" id="ach3">
                        <div className="achieve_details">
                            <div className="achievementGal">
                                <div className="imgBorder">
                                    <img src={bishop} alt="bishop cert" className="achieve_img" />
                                </div>
                            </div>
                            <div className="achieve_texts">
                                <h6>FEB 2020 | PARTICIPANT</h6>
                                <h1>NATIONAL LEVEL E-QUIZ </h1>
                            </div>
                            <Icon icon="humbleicons:certificate" width="68" height="68" style={{ color: "white" }} className="certiicon" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Achievements;