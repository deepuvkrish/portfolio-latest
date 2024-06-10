import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faSquareJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

import courseraImage from '../../../items/images/certificates/coursera.jpeg'
import guviImage from '../../../items/images/certificates/guvi.png'
import bishopImage from '../../../items/images/certificates/bishop.jpg'








const Career = () => {
    // const [view, setView] = useState("panel");
    // const [viewone, setViewone] = useState("panel");
    // const [viewtwo, setViewtwo] = useState("panel");
    // const [viewthree, setViewthree] = useState("panel");
    // const [viewfour, setViewfour] = useState("panel");

    // const clickImage = () => {
    //     if (view !== 'panel active') {
    //         setView('panel active');
    //         console.log("Click delivered.!")
    //     }
    //     else setView('panel');

    // }
    // const clickImageone = () => {
    //     if (viewone !== 'panel active') {
    //         setViewone('panel active');
    //         console.log("Click delivered.!")
    //     }
    //     else setViewone('panel');

    // }
    // const clickImagetwo = () => {
    //     if (viewtwo !== 'panel active') {
    //         setViewtwo('panel active');
    //         console.log("Click delivered.!")
    //     }
    //     else setViewtwo('panel');

    // }
    // const clickImagethree = () => {
    //     if (viewthree !== 'panel active ') {
    //         setViewthree('panel active ');
    //         console.log("Click delivered.!")
    //     }
    //     else setViewthree('panel ');

    // }
    // const clickImagefour = () => {
    //     if (viewfour !== 'panel active ') {
    //         setViewfour('panel active ');
    //         console.log("Click delivered.!")
    //     }
    //     else setViewfour('panel ');

    // }
    // const leaveImage = () => {
    //     if (view !== 'panel') {
    //         setView('panel');
    //         console.log('Cursor left');
    //     }
    //     else {
    //         setView('panel active');
    //     }
    // }
    // const leaveImageone = () => {
    //     if (viewone !== 'panel') {
    //         setViewone('panel');
    //         console.log('Cursor left');
    //     }
    //     else {
    //         setViewone('panel active');
    //     }
    // }
    // const leaveImagetwo = () => {
    //     if (viewtwo !== 'panel') {
    //         setViewtwo('panel');
    //         console.log('Cursor left');
    //     }
    //     else {
    //         setViewtwo('panel active');
    //     }
    // }
    // const leaveImagethree = () => {
    //     if (viewthree !== 'panel ') {
    //         setViewthree('panel ');
    //         console.log('Cursor left');
    //     }
    //     else {
    //         setViewthree('panel active ');
    //     }
    // }
    // const leaveImagefour = () => {
    //     if (viewfour !== 'panel ') {
    //         setViewfour('panel ');
    //         console.log('Cursor left');
    //     }
    //     else {
    //         setViewfour('panel active ');
    //     }
    // }



    const [style, setStyle] = useState("techstack-hidden");
    const [proj, setProj] = useState("projects-summary-hide");

    const [currentImage, setCurrentImage] = useState(0);
    const [currentUrl, setCurrentUrl] = useState(0);
    const certiImages = [courseraImage, guviImage, bishopImage];
    const certiverify = ["https://www.coursera.org/verify/7G4L8CGCFHGL", "https://www.guvi.in/certificate?id=181344fYAns939b670", ""];

    return (
        <div className='about-section'>
            <div class="draw-hc">
                <svg className="honeycomb-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.95 291.04">
                    <polygon className="hc-1 cls-1" points="128.18 142.42 58.1 129.55 34.19 62.42 80.38 8.16 150.46 21.02 174.37 88.15 128.18 142.42" />
                    <polygon className="hc-2 cls-1" points="237.25 235.53 167.16 222.66 143.26 155.53 189.44 101.27 259.53 114.13 283.44 181.26 237.25 235.53" />
                    <polygon className="hc-3 cls-1" points="102.51 282.88 32.42 270.02 8.52 202.89 54.7 148.63 124.79 161.49 148.69 228.62 102.51 282.88" />
                </svg>
            </div>

            <div className='section-header'>
                <div className='about-section-background'>
                    <h1>Achievements</h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='greengradient'>Certi</span>fications</h1>
                </div>
            </div>

            <div className='certi-images-section'>

                <ul className='honeycomb'>
                    <li className='honeycomb-cell' onMouseOver={e => (setCurrentImage(0), setCurrentUrl(0))} >
                        <img className='honeycomb-cell_img' src={courseraImage} />
                        <div className='honeycomb-cell_title'>Python Certificate</div>
                    </li>
                    <li className='honeycomb-cell' onMouseOver={e => (setCurrentImage(1), setCurrentUrl(1))}>
                        <img className='honeycomb-cell_img' src={guviImage} />
                        <div className='honeycomb-cell_title'>Python AI Certificate</div>
                    </li>
                    <li className='honeycomb-cell' onMouseOver={e => (setCurrentImage(2), setCurrentUrl(2))}>
                        <img className='honeycomb-cell_img' src={bishopImage} />
                        <div className='honeycomb-cell_title'>E-Quiz Certificate</div>
                    </li>
                    <li className='honeycomb-cell'>
                        <img className='honeycomb-cell_img' src={guviImage} />
                        <div className='honeycomb-cell_title'> Certificate</div>
                    </li>
                    <li className='honeycomb-cell'>
                        <img className='honeycomb-cell_img' src={courseraImage} />
                        <div className='honeycomb-cell_title'> Certificate</div>
                    </li>
                    <li className='honeycomb-cell honeycomb_Hidden'></li>

                </ul>
                <div className='certi-image-view'>
                    <img src={certiImages[currentImage]} className='img-view' />
                    <div className='certi-verification'>
                        <h4>Verify Here ! <FontAwesomeIcon icon={faCloudArrowDown} style={{ color: "#ffffff", }} /></h4>
                        <a href={certiverify[currentUrl]} target='_blank'>{certiverify[currentUrl]}</a>
                    </div>
                </div>
            </div>

            <div className='achievements-header'>

            </div>








        </div>
    )
}

export default Career;