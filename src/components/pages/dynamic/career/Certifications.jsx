import React from 'react';
import { certifications, certificationsmob } from '../../constants';
// import { guvilogo, greatlearning } from '../../assets'

function CertificateGenerator(props) {
    return (
        <li>
            <div className="card">
                <a href={props.imgurl}>
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

const Certifications = () => {
    return (
        <div>
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
        </div>
    )
}

export default Certifications;