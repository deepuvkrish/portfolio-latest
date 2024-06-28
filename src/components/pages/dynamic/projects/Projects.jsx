import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify-icon/react';

import Mainprojects from "./Mainprojects";
import Miniprojects from "./Miniprojects";
const Projects = () => {
    return (
        <div className='about-section'>
            <div className='project-section'>
                <div className='project-section-header'>
                    <span className='text-larger-about glow-title'> <FontAwesomeIcon icon={faCode} size="2xs" style={{ color: "#ffffff", }} />Projects</span>
                </div>
                <Mainprojects />
                <Miniprojects />



              


            </div>
        </div>
    )
}

export default Projects;