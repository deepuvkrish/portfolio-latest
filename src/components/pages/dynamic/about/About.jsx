import React from 'react';
import "react-circular-progressbar/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faAngular, faNodeJs, faFigma, faHtml5, faCss3Alt, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faUser, faCakeCandles, faFlag, faHouseChimney, faVolumeHigh, faTerminal, faC } from '@fortawesome/free-solid-svg-icons';
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
        <div className='about-section scrollup'>
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
                        <Icon icon="line-md:cloud-download-outline-loop" width="1.3rem" height="1.3rem" className='download-icon' />
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
                    <h1 >Showcasing</h1>
                </div>
                <div className='about-title-section'>
                    <h1>My <span className='gradient-color'>Skills</span></h1>
                </div>
            </div>


            <div className='about-infos about-skill-section lap-skills-section'>
                <div className='about-skill'>
                    <div className='about-skill-tab1'>
                        <div className="skillstack">
                            <div className="skillStackTitle">
                                <span>Web Development</span>
                            </div>
                            <div className="skillBubbles">
                                <div className="skill">
                                    <Icon icon="lineicons:nextjs" width="22" height="22" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:react" width="22" height="22" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-angular" width="22" height="22" />
                                    <h5>Angular.js</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:nodejs-icon" width="22" height="22" />
                                    <h5>Node.Js</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="skill-icons:expressjs-dark" width="22" height="22" />
                                    <h5>Express.Js</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="simple-icons:edx" width="22" height="22" />
                                    <h5>openEDX</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-django" width="22" height="22" />
                                    <h5>Django</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="devicon:typescript" width="22" height="22" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:javascript" width="22" height="22" />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="devicon:html5" width="22" height="22" />
                                    <h5>Html5</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-css" width="22" height="22" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:tailwindcss-icon" width="22" height="22" />
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:mysql" width="22" height="22" />
                                    <h5>MySQl</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="logos:mongodb-icon" width="22" height="22" />
                                    <h5>Mongo DB</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="devicon:postgresql-wordmark" width="22" height="22" />
                                    <h5>PostGre SQL</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-php" width="22" height="22" />
                                    <h5>Php</h5>
                                </div>
                            </div>

                        </div>

                        <div className="skillstack">
                            <div className="skillStackTitle">
                                <span>Programming Languages</span>
                            </div>
                            <div className="skillBubbles">
                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-cpp2" width="22" height="22" />
                                    <h5>C++</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="mdi:language-c" width="22" height="22" style={{ color: '#ae00ff' }} />
                                    <h5>C</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="devicon:java" width="22" height="22" />
                                    <h5>Java</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="devicon:python" width="22" height="22" />
                                    <h5>Python</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-rust" width="22" height="22" />
                                    <h5>Rust</h5>
                                </div>
                            </div>

                        </div>

                        <div className="skillstack">
                            <div className="skillStackTitle">
                                <span>Applications</span>
                            </div>
                            <div className="skillBubbles">
                                <div className="skill">
                                    <Icon icon="akar-icons:github-fill" width="22" height="22" />
                                    <h5>GitHub</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="devicon:gitlab" width="22" height="22" />
                                    <h5>GitLabs</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:postman-icon" width="22" height="22" />
                                    <h5>Postman</h5>
                                </div>

                                <div className="skill">
                                    <Icon icon="logos:figma" width="22" height="22" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="devicon:vscode" width="22" height="22" />
                                    <h5>VS Code</h5>
                                </div>


                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-word" width="22" height="22" />
                                    <h5>MS Word</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="vscode-icons:file-type-excel2" width="22" height="22" />
                                    <h5>MS Excel</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="logos:xampp" width="22" height="22" />
                                    <h5>Xampp</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="devicon:anaconda" width="22" height="22" />
                                    <h5>Anaconda</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="simple-icons:wondershare" width="22" height="22" />
                                    <h5>Filmora</h5>
                                </div>
                                <div className="skill">
                                    <Icon icon="skill-icons:photoshop" width="22" height="22" />
                                    <h5>Photoshop</h5>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >





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