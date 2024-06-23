import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';

import { certifications, certificationsmob } from '../../constants';
import { guvilogo, greatlearning } from '../../assets'

function CertificateGenerator(props) {
    return (
        <li>
            <div className="card">
                <a href="">
                    <span className="model-name">{props.imgfrom}</span>
                    <span>{props.imgtitle}</span>
                </a>
            </div>
        </li>
    )
}

function Sample(props) {
    return (
        <li className='item'>
            <input type="radio" id={props.imgfrom} name='basic_carousel' value={props.imgfrom} checked />
            <label className={props.imageid} for={props.imgfrom}>{props.imgfrom}</label>
            <div className={props.imagecls}>
                <span className='picto'></span>
                <h2>{props.imgtitle} </h2>
                <a href={props.imgurl} target='__blank'> Verify {props.imgfrom} Certificate here</a>
            </div>
        </li>
    )
}


const Career = () => {
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

            <div className="scene scene-lap">
                <div className="left-zone">
                    <ul className="list">
                        {certifications.map((certi) => <Sample imgid={certi.id} imglogo={certi.idicon} imgtitle={certi.title} imgfrom={certi.from} imgurl={certi.url} imageid={certi.classid} imagecls={certi.classnm} />)}
                    </ul>
                </div>
                <div className="middle-border"></div>
                <div className="right-zone"></div>
            </div>



            <div className='scene-mob'>
                <div className="void" id="void">
                    <div className="crop">
                        <ul id="card-list">
                            {certificationsmob.map((certi) => <CertificateGenerator imgid={certi.id} imglogo={certi.idicon} imgtitle={certi.title} imgfrom={certi.from} imgurl={certi.url} imageid={certi.classid} imagecls={certi.classnm} />)}
                        </ul>
                        <div className="second-circle"></div>
                    </div>
                    <div className="mask"></div>
                    <div className="center-circle"></div>
                    <div>

                    </div>
                </div>
            </div>



            <div className='section-header-mob'>
                <div className='about-title-section'>
                    <h1>Achieve<span className='gradient-color'>ments</span></h1>
                </div>
            </div>
            <div className='section-header'>
                <div className='about-title-section'>
                    <h1>Achieve<span className='gradient-color'>ments</span></h1>
                </div>
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