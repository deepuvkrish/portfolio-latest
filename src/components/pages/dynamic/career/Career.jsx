import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faSquareJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

import courseraImage from '../../../items/images/certificates/coursera.jpeg'
import guviImage from '../../../items/images/certificates/guvi.png'
import bishopImage from '../../../items/images/certificates/bishop.jpg'

const Career = () => {

    const [style, setStyle] = useState("techstack-hidden");
    const [proj, setProj] = useState("projects-summary-hide");

    const hoverStack = () => {
        if (style !== "techstack-hidden") setStyle("techstack-hidden");
        else setStyle("techstack-view");
    }
    const hoverOverStack = () => {
        if (style !== "techstack-view") setStyle("techstack-view");
        else setStyle("techstack-hidden");
    }
    const hoverProj = () => {
        if (proj !== "projects-summary-hide") setProj("projects-summary-hide");
        else setProj("projects-summary-view")
    }
    const hoveredProj = () => {
        if (proj !== "projects-summary-view") setProj("projects-summary-view");
        else setProj("projects-summary-hide")
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [currentUrl, setCurrentUrl] = useState(0);
    const certiImages = [courseraImage, guviImage, bishopImage];
    const certiverify = ["https://www.coursera.org/verify/7G4L8CGCFHGL", "https://www.guvi.in/certificate?id=181344fYAns939b670", "#"];

    return (
        <div className='about-section'>
            <div className='home-background'>
                <div class='box'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                </div>
            </div>
            <div className='certification-section'>
                <div className='exp-section-header certification-title'>
                    <span className='text-larger-about glow-title'>Certifications <FontAwesomeIcon icon={faCode} size="2xs" style={{ color: "#ffffff", }} /></span>
                </div>
                <div className='contact-details-section'>

                </div>
                <div className='exp-divider'></div>
                <div className='certi-images-section'>
                    <div className='certi-image-list'>
                        <img src={certiImages[0]}
                            width={100}
                            height={100}
                            onMouseOver={e =>
                                (setCurrentImage(0), setCurrentUrl(0))
                            }
                            className='rounded-md cursor-pointer' />
                        <img src={certiImages[1]}
                            width={100}
                            height={100}
                            onMouseOver={e => (setCurrentImage(1), setCurrentUrl(1))
                            }
                            className='rounded-md cursor-pointer' />
                        <img src={certiImages[2]}
                            width={100}
                            height={100}
                            onMouseOver={e => (setCurrentImage(2), setCurrentUrl(2))
                            }
                            className='rounded-md cursor-pointer' />
                    </div>
                    <div className='certi-image-view'>
                        <img src={certiImages[currentImage]} className='img-view' />
                    </div>
                    <div className='certi-verification'>
                        <h2>Verify Here ! <FontAwesomeIcon icon={faCloudArrowDown} style={{ color: "#ffffff", }} /></h2>
                        <a href={certiverify[currentUrl]} target='_blank'>{certiverify[currentUrl]}</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Career;