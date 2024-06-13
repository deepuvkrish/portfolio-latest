import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';


const Career = () => {
    const [imgs, setImgs] = useState("banner");
    const [imgsone, setImgsone] = useState("banner1");
    const [imgstwo, setImgstwo] = useState("banner2");
    const [imgsthree, setImgsthree] = useState("banner3");



    const clickImageHover = () => {
        if (imgs !== "banner active") {
            setImgs('banner active');
            setImgsone("banner1");
            setImgstwo("banner2 ");
            setImgsthree("banner3");
        }
        else {
            setImgs("banner");
        }
    }
    const clickImageHoverone = () => {
        if (imgsone !== "banner1 active") {
            setImgs('banner');
            setImgsone('banner1 active');
            setImgstwo("banner2 ");
            setImgsthree("banner3");
        }
        else setImgsone("banner1");
    }
    const clickImageHovertwo = () => {
        if (imgstwo !== "banner2 active") {
            setImgs('banner');
            setImgsone("banner1");
            setImgstwo('banner2 active');
            setImgsthree("banner3");
        }
        else setImgstwo("banner2 ");
    }
    const clickImageHoverthree = () => {
        if (imgsthree !== "banner3 active") {
            setImgs('banner');
            setImgsone("banner1");
            setImgstwo("banner2 ");
            setImgsthree('banner3 active');
        }
        else setImgsthree("banner3");
    }





    return (
        <div className='about-section'>



            <div className='section-header-mob'>
                <div className='about-section-background'>
                    <h1>Achievements</h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='gradient-color'>Certi</span>fications</h1>
                </div>
            </div>
            <div className='section-header'>
                <div className='about-section-background'>
                    <h1>Achievements</h1>
                </div>
                <div className='about-title-section'>
                    <h1><span className='gradient-color'>Certi</span>fications</h1>
                </div>
            </div>








            <div className='certification-scrolls'>
                <div class='certi-logos'>
                    <ul>
                        <li><Icon icon="logos:coursera" width="6rem" height="6rem" /></li>
                        <li><Icon icon="devicon:googlecloud-wordmark" width="6rem" height="6rem" /></li>
                        <li></li>
                    </ul>
                </div>
            </div>





            <div className='certi-images-section'>
                {/* <ul className='career-certi'>
                    <li className={imgs} onClick={clickImageHover} >
                        <div>
                            Q
                            <span></span>
                        </div>
                    </li>
                    <li id="wormtail" className={imgsone} onClick={clickImageHoverone} >
                        <div>
                            G
                            <span></span>
                        </div>
                    </li>
                    <li id="padfoot" className={imgstwo} onClick={clickImageHovertwo} >
                        <div>
                            C
                            <span></span>
                        </div>
                    </li>
                    <li id="prongs" className={imgsthree} onClick={clickImageHoverthree} >
                        <div>
                            G
                            <span></span>
                        </div>
                    </li>
                </ul> */}


            </div>

            <div className='achievements-header'>

            </div>

            <div class="draw-hc2">
                <svg className="honeycomb-svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.95 291.04">
                    <polygon className="hc-1 cls-1" points="128.18 142.42 58.1 129.55 34.19 62.42 80.38 8.16 150.46 21.02 174.37 88.15 128.18 142.42" />
                    <polygon className="hc-2 cls-1" points="237.25 235.53 167.16 222.66 143.26 155.53 189.44 101.27 259.53 114.13 283.44 181.26 237.25 235.53" />
                    <polygon className="hc-3 cls-1" points="102.51 282.88 32.42 270.02 8.52 202.89 54.7 148.63 124.79 161.49 148.69 228.62 102.51 282.88" />
                </svg>
            </div>

        </div >
    )
}

export default Career;