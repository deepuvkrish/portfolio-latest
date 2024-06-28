import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify-icon/react';

import Mainprojects from "./Mainprojects";
import Miniprojects from "./Miniprojects";
const Projects = () => {
    return (
        <div className='about-section'>
            <div className='section-header'>
                <div className='about-section-background'>
                    <h1><FontAwesomeIcon icon={faCode} size="2xs" /> Experiences  <FontAwesomeIcon icon={faCode} size="2xs" /></h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='gradient-color'>Pro</span>jects</h1>
                </div>
            </div>

            <div className='section-header-mob'>
                <div className='about-section-background'>
                    <h1>Works</h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='gradient-color'>Pro</span>jects</h1>
                </div>
            </div>
            <div className='project-section'>
                <Mainprojects />
                <Miniprojects />






            </div>
        </div>
    )
}

export default Projects;