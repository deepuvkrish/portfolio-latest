import React from 'react';
import "react-circular-progressbar/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faAngular, faNodeJs, faFigma, faHtml5, faCss3Alt, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faUser, faCakeCandles, faFlag, faHouseChimney, faVolumeHigh, faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cv from '../../../items/docs/cv.pdf'
import india from '../../../items/images/ui/india.png'
import postimg from '../../../items/images/ui/postman.png'
import vsimg from '../../../items/images/ui/vs.png'
import sqlimg from '../../../items/images/ui/mysql.png'
import mongoimg from '../../../items/images/ui/mongo.png'
import psimage from '../../../items/images/ui/photoshop.png'
import wordimage from '../../../items/images/ui/word.png'
import excelimage from '../../../items/images/ui/excel.png'
import ppimage from '../../../items/images/ui/powerpoint.png'

import { Icon } from '@iconify-icon/react';
import { Figma, Js, LinkedinOption, Node, WhatsApp } from 'grommet-icons';





const About = () => {
    return (
        <div className='about-section'>
            <div className='section-header'>
                <div className='about-section-background'>
                    <h1>Resume</h1>
                </div>
                <div className='about-title-section'>
                    <h1>About <span className='gradient-color'>Me</span></h1>
                </div>
            </div>
            <div className='section-header-mob'>
                <div className='about-section-background'>
                    <h1>Who am i</h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='gradient-color'>I</span> am</h1>
                </div>
            </div>

            <div className='about-info'>
                <div className='about-personal-details'>
                    <div className='about-personal-details-tabs'>
                        <div className='left-side-personal-details'>
                            <span className='about-hov'>
                                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                                <span className='details-font'>Deepak KV</span>
                            </span>
                            <span className='about-hov'>
                                <FontAwesomeIcon icon={faTerminal} style={{ color: "#ffffff", }} />
                                <span className='details-font'>MERN Dev</span>
                            </span>
                            <span className='about-hov'><FontAwesomeIcon icon={faCakeCandles} style={{ color: "#ffffff", }} /><span className='details-font'>23 Jun 1995</span></span>
                            <span className='about-hov'>
                                <FontAwesomeIcon icon={faSquarePhone} style={{ color: "#ffffff", }} />
                                <span className='details-font'>+91 994 791 8068</span>
                            </span>
                            <span className='about-hov'><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://github.com/deepuvkrish'>deepuvkrish</a></span></span>

                        </div>


                        {/* Mobile version  */}
                        <div className='left-side-personal-details-mob'>
                            <span className='about-hov'>
                                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                                <span className='details-font'>Deepak KV</span>
                            </span>
                            <span className='about-hov'>
                                <FontAwesomeIcon icon={faTerminal} style={{ color: "#ffffff", }} />
                                <span className='details-font'>MERN Dev</span>
                            </span>
                            <span className='about-hov'><FontAwesomeIcon icon={faCakeCandles} style={{ color: "#ffffff", }} /><span className='details-font'>23 Jun 1995</span></span>
                            <span className='about-hov'>
                                <WhatsApp color='plain' size='small' />
                                <span className='details-font'>+91 994 791 8068</span>
                            </span>
                            <span className='about-hov'><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://github.com/deepuvkrish'>deepuvkrish</a></span></span>

                        </div>


                        <div className='right-side-personal-details'>
                            <span className='about-hov'><FontAwesomeIcon icon={faFlag} style={{ color: "#ffffff", }} /><span className='details-font'>Indian <img src={india} className='bio-details-img' alt='india icon' /></span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faHouseChimney} style={{ color: "#ffffff", }} /><span className='details-font'>Palakkad, Kerala</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#ffffff", }} /><span className='details-font'>Eng, Hin, Mal, Tam, Kan</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKvJzwGTwrMMbPzcsRkwrxHtrVNNDgVGxZcTrBlgRpdwTGWnrPRndblqmcDkNqlxVbV' target="_blank" rel='noreferrer'>kvdeepakkv1995@gmail.com</a></span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://www.linkedin.com/in/deepak-k-v-b51752161/' target="_blank" rel='noreferrer'>deepak-k-v</a></span></span>
                        </div>
                        {/* Mobile version  */}
                        <div className='right-side-personal-details-mob'>
                            <span className='about-hov'>
                                <span className='details-font'><img src={india} className='bio-details-img' alt='india icon' />Indian </span>
                                <FontAwesomeIcon icon={faFlag} style={{ color: "#ffffff", }} />
                            </span>
                            <span className='about-hov'>
                                <span className='details-font'>Palakkad, Kerala</span>
                                <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#ffffff", }} />
                            </span>
                            <span className='about-hov'>
                                <span className='details-font'>Eng, Hin, Mal, Tam, Kan</span>
                                <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#ffffff", }} />
                            </span>
                            <span className='about-hov'>
                                <span className='details-font'>
                                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKvJzwGTwrMMbPzcsRkwrxHtrVNNDgVGxZcTrBlgRpdwTGWnrPRndblqmcDkNqlxVbV' target="_blank" rel='noreferrer'>kvdeepakkv1995@gmail.com</a>
                                </span>
                                <Icon icon="logos:google-gmail" width="0.5rem" height="0.5rem" />
                            </span>
                            <span className='about-hov'>
                                <span className='details-font'>
                                    <a href='https://www.linkedin.com/in/deepak-k-v-b51752161/' target="_blank" rel='noreferrer'>deepak-k-v</a>
                                </span>
                                <LinkedinOption color='plain' size='small' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='about-personal-image'>
                    <div className='download-section'>
                        <a href={cv} download="Resume" >
                            Download CV
                        </a>
                        <Icon icon="line-md:cloud-download-outline-loop" width="1.3rem" height="1.3rem" className='download-icon'/>
                    </div>
                </div>

            </div>
            <div className='section-header' style={{ marginTop: "80px" }}>
                <div className='about-section-background '>
                    <h1 className='headerbackscroll'>Showcasing</h1>
                </div>
                <div className='about-title-section'>
                    <h1 className='headerscroll'>My <span className='gradient-color'>Skills</span></h1>
                </div>
            </div>

            <div className='section-header-mob' style={{ marginTop: "10px" }}>
                <div className='about-section-background '>
                    <h1 className='headerbackscroll'>Showcasing</h1>
                </div>
                <div className='about-title-section'>
                    <h1 className='headerscroll'>My <span className='gradient-color'>Skills</span></h1>
                </div>
            </div>


            <div className='about-infos about-skill-section lap-skills-section'>
                <div className='about-skill'>
                    <div className='about-skill-tab1'>
                        <div className='content-skills'>
                            <div className='front-end-div'>
                                <div className='front-end-div-header'>
                                    <span>Front End</span>
                                </div>
                                <div className='front-end-tech'>
                                    <div className='headerbackscrolllinksleft'>
                                        <FontAwesomeIcon icon={faReact} />
                                        <span className='tech-title'>React JS</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <FontAwesomeIcon icon={faAngular} />
                                        <span className='tech-title'>Angular JS</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <FontAwesomeIcon icon={faJs} />
                                        <span className='tech-title'>JavaScript</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <FontAwesomeIcon icon={faHtml5} />
                                        <span className='tech-title'>html 5</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <FontAwesomeIcon icon={faCss3Alt} />
                                        <span className='tech-title'>css 3</span>
                                    </div>
                                </div>
                            </div>
                            <div className='back-end-div'>
                                <div className='back-end-div-header'>
                                    <span>Back End</span>
                                </div>
                                <div className='back-end-tech'>
                                    <div className='headerbackscrolllinksright'>
                                        <FontAwesomeIcon icon={faNodeJs} />
                                        <span className='tech-title'>Node JS</span>
                                    </div>
                                    <div className='headerbackscrolllinksright'>
                                        <FontAwesomeIcon icon={faPython} />
                                        <span className='tech-title'>Python</span>
                                    </div>
                                    <div className='headerbackscrolllinksright'>
                                        <img src={sqlimg} alt='mysql icon' className='sqls' />
                                        <span className='tech-title'>mysql</span>
                                    </div>
                                    <div className='headerbackscrolllinksright'>
                                        <img src={mongoimg} alt='mongo db icon' className='mongos' />
                                        <span className='tech-title'>mongo DB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content-skill2'>
                            <div className='app-div-header'>
                                <span>Applications</span>
                            </div>
                            <div className='app-tech'>
                                <div className='headerbackscrolllinksdown'>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span className='tech-title'>Github</span>
                                </div>
                                <div className='headerbackscrolllinksdown1'>
                                    <img src={postimg} className='postman' alt='postman icon' />
                                    <span className='tech-title'>Postman</span>
                                </div>
                                <div className='headerbackscrolllinksdown2'>
                                    <FontAwesomeIcon icon={faFigma} />
                                    <span className='tech-title'>Figma</span>
                                </div>
                                <div className='headerbackscrolllinksdown3'>
                                    <img src={vsimg} className='vscode' alt='vscode icon' />
                                    <span className='tech-title'>VS code</span>
                                </div>
                                <div className='headerbackscrolllinksdown4'>
                                    <img src={wordimage} className='wordms' alt='word icon' />
                                    <span className='tech-title'>MS word</span>
                                </div>
                                <div className='headerbackscrolllinksdown5'>
                                    <img src={excelimage} className='excel' alt='excel icon' />
                                    <span className='tech-title'>Ms Excel </span>
                                </div>
                                <div className='headerbackscrolllinksdown6'>
                                    <img src={ppimage} className='powerpoint' alt='powerpoint icon' />
                                    <span className='tech-title'>Powerpoint</span>
                                </div>
                                <div className='headerbackscrolllinksdown7'>
                                    <img src={psimage} className='photoshop' alt='ps icon' />
                                    <span className='tech-title'>Adobe PS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='about-infos about-skill-section mobile-skills-section'>
                <div className='about-skill'>
                    <div className='about-skill-tab1'>
                        <div className='content-skills'>
                            <div className='front-end-div'>
                                <div className='front-end-div-header'>
                                    <span>Front End</span>
                                </div>
                                <div className='front-end-tech'>
                                    <div className='headerbackscrolllinksleft'>
                                        <Icon icon="logos:react" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>React JS</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <Icon icon="devicon:angularjs" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>Angular JS</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <Js color='plain' />
                                        <span className='tech-title'>JavaScript</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <Icon icon="logos:php" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>Php</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <Icon icon="devicon:html5" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>html 5</span>
                                    </div>
                                    <div className='headerbackscrolllinksleft'>
                                        <Icon icon="devicon:css3" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>css 3</span>
                                    </div>
                                </div>
                            </div>
                            <div className='back-end-div'>
                                <div className='back-end-div-header'>
                                    <span>Back End</span>
                                </div>
                                <div className='back-end-tech'>
                                    <div>
                                        <Node color='plain' />
                                        <span className='tech-title'>Node JS</span>
                                    </div>
                                    <div>
                                        <Icon icon="logos:django-icon" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>Django</span>
                                    </div>
                                    <div>
                                        <Icon icon="logos:mysql" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>mysql</span>
                                    </div>
                                    <div>
                                        <Icon icon="logos:mongodb-icon" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>mongo DB</span>
                                    </div>
                                </div>
                            </div>
                            <div className='core-end-div'>
                                <div className='core-div-header'>
                                    <span>Core</span>
                                </div>
                                <div className='core-end-tech'>
                                    <div>
                                        <Icon icon="logos:c-plusplus" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>C++</span>
                                    </div>
                                    <div>
                                        <Icon icon="logos:python" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>Python</span>
                                    </div>
                                    <div>
                                        <Icon icon="logos:java" width="1.3rem" height="1.3rem" />
                                        <span className='tech-title'>Java</span>
                                    </div>
                                    <div>
                                        <img src={mongoimg} alt='mongo db icon' className='mongos' />
                                        <span className='tech-title'>mongo DB</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='content-skill2'>
                            <div className='app-div-header'>
                                <span>Applications</span>
                            </div>
                            <div className='app-tech'>
                                <div>
                                    <Icon icon="logos:git-icon" width="1.3rem" height="1.3rem" />
                                    <span className='tech-title'>Github</span>
                                </div>
                                <div>
                                    <Icon icon="logos:postman-icon" width="1.3rem" height="1.3rem" />
                                    <span className='tech-title'>Postman</span>
                                </div>
                                <div>
                                    <Figma color='plain' />
                                    <span className='tech-title'>Figma</span>
                                </div>
                                <div>
                                    <Icon icon="logos:visual-studio-code" width="1.3rem" height="1.3rem" />
                                    <span className='tech-title'>VS code</span>
                                </div>
                                <div>
                                    <img src={wordimage} className='wordms' alt='word icon' />
                                    <span className='tech-title'>MS word</span>
                                </div>
                                <div>
                                    <img src={excelimage} className='excel' alt='excel icon' />
                                    <span className='tech-title'>Ms Excel </span>
                                </div>
                                <div>
                                    <img src={ppimage} className='powerpoint' alt='powerpoint icon' />
                                    <span className='tech-title'>Powerpoint</span>
                                </div>
                                <div>
                                    <Icon icon="devicon:photoshop" width="1.3rem" height="1.3rem" />
                                    <span className='tech-title'>Adobe PS</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




            <div className='section-header' style={{ marginTop: "50px" }}>
                <div className='about-section-background'>
                    <h1 className='headerbackscroll'>History of My Life</h1>
                </div>
                <div className='about-title-section'>
                    <h1 className='headerscroll'>Education <span className='gradient-color'>&</span>Experience</h1>
                </div>
            </div>
            <div className='section-header-mob' style={{ marginTop: "50px" }}>
                <div className='about-section-background'>
                    <h1 className='headerbackscroll'>History</h1>
                </div>
                <div className='about-title-section'>
                    <h1 className='headerscroll'>Edu <span className='gradient-color'>&</span>Exp</h1>
                </div>
            </div>


            <div className='exp-period-section'>
                <div className='exp-period'>
                    <div className='exp-number'>
                        <span className='green'>1+</span>
                    </div>
                    <div className='exp-chars'>
                        <span className='green-text'>Years of</span>
                        <span className='exp-text2'>Experience</span>
                    </div>
                </div>
                <div className='exp-period'>
                    <div className='exp-number'>
                        <span className='green'>10+</span>

                    </div>
                    <div className='exp-chars'>
                        <p className='green-comp'>Completed</p>
                        <p className='green-proj'>Works</p>
                    </div>
                </div>
            </div>

            <div className='about-info exp-edu lap-exp'>
                <ul className="timeline">
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Freelancer</span>
                                <span className="time-wrapper"><span className="time">2023 - present</span></span>
                            </div>
                            <div className="desc">MERN Stack Developer!</div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">Pratian Technologies </span>
                                <span className="time-wrapper"><span className="time">2022 Nov - 2023 May</span></span>
                            </div>
                            <div className="desc">First Employer, worked on technologies like openEdx, ReactJS, TypeScript for multiple projects.</div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Jyothi Engineering College</span>
                                <span className="time-wrapper"><span className="time">2017 - 2021</span></span>
                            </div>
                            <div className="desc">B.Tech in Computer Science Engineering</div>
                        </div>
                    </li>

                </ul>
            </div>

            <div className='about-info exp-edu mob-exp'>
                <ul className="timeline">
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Freelancer</span>
                                <span className="time-wrapper"><span className="time">2023 - present</span></span>
                            </div>
                            <div className="desc">MERN Stack Developer!</div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Pratian Technologies </span>
                                <span className="time-wrapper"><span className="time">2022 Nov - 2023 May</span></span>
                            </div>
                            <div className="desc">First Employer, worked on technologies like openEdx, ReactJS for multiple projects.</div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Jyothi Engineering College</span>
                                <span className="time-wrapper"><span className="time">2017 - 2021</span></span>
                            </div>
                            <div className="desc">B.Tech in Computer Science Engineering</div>
                        </div>
                    </li>

                </ul>
            </div>



        </div >
    )
}

export default About;