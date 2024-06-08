import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faSquareJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className='about-section'>
            <div className='project-section'>
                <div className='project-section-header'>
                    <span className='text-larger-about glow-title'> <FontAwesomeIcon icon={faCode} size="2xs" style={{ color: "#ffffff", }} />Projects</span>
                </div>

                <div className='projects-block'>
                    <div className='project-title-type glow-title'>
                        <span className='text-mid-about'>Main Projects</span>
                        <div className='project-tech-stack'>
                            <span>JavaScript</span>
                            <span>ReactJS</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                        </div>
                    </div>
                    <div className='left-project-items'>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>SkillAssure</span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    The main goal of this project was to develop and customize an LMS portal using OpenedX framework, React JS,HTML5, CSS3. I was Able to develop Portal for Online course teaching, Assessment evaluations, Interview conducts, Coding Examinations. Etc. Also I Developed a customized window based proctoring service for the assessments. Report generations for certain basis were developed in the portal for better grading of candidates.
                                </p>
                            </div>
                        </div>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>Nadaar.com</span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    The main goal of this project was to develop a small e-commerce website, for a local super market store in Palakkad, Kerala, using HTML5, CSS3, JS. Users can check the store products online and can order the products, View Order List, Make Payments, track order and Download Receipts.Store Admins are notified about the order via Insite notifications as well as emails.Store Admins can add, edit, and delete products through admin dashboard
                                </p>
                            </div>
                        </div>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>Padippi.com</span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    The main goal of this project was to develop a responsive website for e-learning purpose for engineering students. Using this website, users can view previous year’s solved question papers, lecture notes from various colleges, Project Ideas, and Power point presentations of Various Topics. Technologies Used for Dev: HTML5, CSS3, JS, PHP.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects-block main-props-cols'>
                    <div className='right-project-items'>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>Brain Tumor Detection and Identification using Deep learning </span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc brain-tumor'>
                                    The main goal of this project was to detect and segment the brain tumor as quick as possible using deep learning models. Trained and used a customized CNN architecture for tumor detection in the preliminary stage. For the Identification and Classification purposes Developed and Customized a U-NET architectural model. Successfully detected early tumor presence from the MRI Scan Inputs.
                                </p>
                            </div>
                        </div>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>JECC Campus Automation </span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    The main goal of this project was to develop a website to reduce the paper works caused by log registers,exams, bills etc. Created a website to store all reports of students and Faculties, and to automatically generate various reports depending upon academics, attendances, Fees-Fines, and Events.
                                </p>
                            </div>
                        </div>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>College Library Automation</span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    Successfully developed a web application to reduce the paper works done in libraries and to automate logins,checkouts, book issuing, and report generations, using barcode scanners. Reduced the staff count from 6 to 2 by deploying the webapp in the intranet. Technologies Used for Dev: HTML5, CSS3, JS, PHP.

                                </p>
                            </div>
                        </div>
                        <div className='main-proj mp1'>
                            <div className='main-proj-title'>
                                <span className='project-sub-titles'>Petzy </span>
                            </div>
                            <div className='main-proj-desc'>
                                <p className='project-sub-desc'>
                                    The main goal of this project was to customize a Hospital Management System using React JS. Users were able to schedule Doctor Appointments and check availabilities for certain clinics or hospitals nearby.Users can also check medications and treatment procedures with doctors via chat or video calls. Doctors can check appointments and get notified based on the schedules.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project-title-type glow-title'>
                        <span className='text-mid-about'>Mini Projects</span>
                        <div className='project-tech-stack'>
                            <span>Python</span>
                            <span>ReactJS</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;