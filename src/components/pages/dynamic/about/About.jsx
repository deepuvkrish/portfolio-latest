import React, { useState } from 'react';


import { render } from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faUser, faCakeCandles, faFlag, faHouseChimney, faVolumeHigh, faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cv from '../../../items/docs/cv.pdf'
import india from '../../../items/images/ui/india.png'
import reactimg from '../../../items/images/ui/reactjs.png'
import nodeimg from '../../../items/images/ui/nodejs.png'
import jsimg from '../../../items/images/ui/javascript.png'
import htmlimg from '../../../items/images/ui/html.png'
import cssimg from '../../../items/images/ui/css.png'
import phpimg from '../../../items/images/ui/php.png'
import sqlimg from '../../../items/images/ui/mysql.png'
import mongoimg from '../../../items/images/ui/mongo.png'
import javaimg from '../../../items/images/ui/java.png'
import cimage from '../../../items/images/ui/c.png'
import pyimg from '../../../items/images/ui/python.png'
import angularimg from '../../../items/images/ui/angular.png'
import tsimage from '../../../items/images/ui/type.png'
import psimage from '../../../items/images/ui/photoshop.png'
import figimage from '../../../items/images/ui/figma.png'
import wordimage from '../../../items/images/ui/word.png'
import excelimage from '../../../items/images/ui/excel.png'
import ppimage from '../../../items/images/ui/powerpoint.png'







const About = () => {
    const percentager = 66;


    return (
        <div className='about-section'>
            <div className='section-header'>
                <div className='about-section-background'>
                    <h1>Resume</h1>
                </div>
                <div className='about-title-section'>
                    <h1>About <span className='greengradient'>Me</span></h1>
                </div>
            </div>
            <div className='about-info'>
                <div className='about-personal-details'>
                    <div className='about-personal-details-header'>
                        <span>personal information ;</span>
                    </div>
                    <div className='about-personal-details-tabs'>
                        <div className='left-side-personal-details'>
                            <span className='about-hov'><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} /><span className='details-font'>Deepak KV</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faTerminal} style={{ color: "#ffffff", }} /><span className='details-font'>MERN Stack Developer</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faCakeCandles} style={{ color: "#ffffff", }} /><span className='details-font'>23 Jun 1995</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faSquarePhone} style={{ color: "#ffffff", }} /><span className='details-font'>+91 994 791 8068</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://github.com/deepuvkrish'>deepuvkrish</a></span></span>

                        </div>
                        <div className='right-side-personal-details'>
                            <span className='about-hov'><FontAwesomeIcon icon={faFlag} style={{ color: "#ffffff", }} /><span className='details-font'>Indian <img src={india} className='bio-details-img' /></span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faHouseChimney} style={{ color: "#ffffff", }} /><span className='details-font'>Palakkad, Kerala</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#ffffff", }} /><span className='details-font'>Eng, Hin, Mal, Tam, Kan</span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKvJzwGTwrMMbPzcsRkwrxHtrVNNDgVGxZcTrBlgRpdwTGWnrPRndblqmcDkNqlxVbV' target="_blank">kvdeepakkv1995@gmail.com</a></span></span>
                            <span className='about-hov'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} /><span className='details-font'><a href='https://www.linkedin.com/in/deepak-k-v-b51752161/'>deepak-k-v</a></span></span>


                        </div>

                    </div>
                </div>
                <div className='about-personal-image'>
                    <div className='download-section'>
                        <a href={cv} download="Resume" >
                            Download CV
                        </a>
                        <FontAwesomeIcon icon={faDownload} size="sm" />
                    </div>
                </div>

            </div>

            <div className='about-info about-skill-section'>
                <div className='about-skill-details-header'>
                    <span>My SKills </span>
                </div>
                <div className='about-skill'>
                    <div className='about-skill-web'>
                        <div className='about-skill-web-header'>
                            <h1>Web technologies </h1><span />
                        </div>
                        <div className='about-skill-meter-section'>


                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const react = 75;
                                        const percentage = isVisible ? react : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(0,255 ,226, ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, marginBlock: 5 }}
                                                    src={reactimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const angular = 35;
                                        const percentage = isVisible ? angular : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(255,0,0)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={angularimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const node = 75;
                                        const percentage = isVisible ? node : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(131, 186, 18, ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 40, marginBlock: 5 }}
                                                    src={nodeimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const js = 80;
                                        const percentage = isVisible ? js : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(255 ,238 ,61, ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, marginBlock: 5 }}
                                                    src={jsimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const ts = 50;
                                        const percentage = isVisible ? ts : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(120,201,255))`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={tsimage}
                                                    alt="typescript"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const php = 90;
                                        const percentage = isVisible ? php : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(122 ,118 ,197, ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={phpimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const html = 90;
                                        const percentage = isVisible ? html : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(255 ,122 ,61 , ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={htmlimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const css = 90;
                                        const percentage = isVisible ? css : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(33 ,150 ,243 , ${percentage / 100})`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, marginBlock: 5 }}
                                                    src={cssimg}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>

                        </div>

                    </div>
                    <div className='about-extra-skills'>

                        <div className='about-skill-extra'>
                            <div className='about-skill-web-header about-skill-web-db-header'>
                                <span />
                                <h1>DataBases </h1>
                            </div>
                            <div className='about-skill-meter-section'>
                                <div className='about-skill-meters'>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const sql = 75;
                                            const percentage = isVisible ? sql : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={percentage}
                                                    strokeWidth={2}
                                                    styles={{
                                                        root: {},
                                                        path: {
                                                            stroke: `rgba(0,255 ,226, ${percentage / 100})`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 1.5s ease 0s',
                                                            transform: 'rotate(0turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        trail: {
                                                            stroke: '#292929',
                                                            strokeLinecap: 'butt',
                                                            transform: 'rotate(0.25turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        text: {
                                                            fill: '#fff',
                                                            fontSize: '16px',
                                                            textAlign: 'center',
                                                        },
                                                        background: {
                                                            fill: '#111',
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        style={{ width: 30, marginBlock: 5 }}
                                                        src={sqlimg}
                                                        alt="react"
                                                    />
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong>{`${percentage}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>
                                <div className='about-skill-meters'>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const mongo = 60;
                                            const percentage = isVisible ? mongo : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={percentage}
                                                    strokeWidth={2}
                                                    styles={{
                                                        root: {},
                                                        path: {
                                                            stroke: `rgba(0 ,115, 34)`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 1.5s ease 0s',
                                                            transform: 'rotate(0turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        trail: {
                                                            stroke: '#292929',
                                                            strokeLinecap: 'butt',
                                                            transform: 'rotate(0.25turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        text: {
                                                            fill: '#fff',
                                                            fontSize: '16px',
                                                            textAlign: 'center',
                                                        },
                                                        background: {
                                                            fill: '#111',
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        style={{ width: 30, marginBlock: 5 }}
                                                        src={mongoimg}
                                                        alt="react"
                                                    />
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong>{`${percentage}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>

                        </div>
                        <div className='about-skill-extra'>
                            <div className='about-skill-web-header about-skill-core-header'>
                                <h1>Core </h1><span />
                            </div>
                            <div className='about-skill-meter-section'>
                                <div className='about-skill-meters'>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const c = 85;
                                            const percentage = isVisible ? c : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={percentage}
                                                    strokeWidth={2}
                                                    styles={{
                                                        root: {},
                                                        path: {
                                                            stroke: `rgba(0,68 ,130)`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 1.5s ease 0s',
                                                            transform: 'rotate(0turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        trail: {
                                                            stroke: '#292929',
                                                            strokeLinecap: 'butt',
                                                            transform: 'rotate(0.25turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        text: {
                                                            fill: '#fff',
                                                            fontSize: '16px',
                                                            textAlign: 'center',
                                                        },
                                                        background: {
                                                            fill: '#111',
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        style={{ width: 30, marginBlock: 5 }}
                                                        src={cimage}
                                                        alt="c"
                                                    />
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong>{`${percentage}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>
                                <div className='about-skill-meters'>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const phy = 80;
                                            const percentage = isVisible ? phy : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={percentage}
                                                    strokeWidth={2}
                                                    styles={{
                                                        root: {},
                                                        path: {
                                                            stroke: `rgba(255 ,248 ,81)`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 1.5s ease 0s',
                                                            transform: 'rotate(0turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        trail: {
                                                            stroke: '#292929',
                                                            strokeLinecap: 'butt',
                                                            transform: 'rotate(0.25turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        text: {
                                                            fill: '#fff',
                                                            fontSize: '16px',
                                                            textAlign: 'center',
                                                        },
                                                        background: {
                                                            fill: '#111',
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        style={{ width: 30, marginBlock: 5 }}
                                                        src={pyimg}
                                                        alt="react"
                                                    />
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong>{`${percentage}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>
                                <div className='about-skill-meters'>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const javas = 80;
                                            const percentage = isVisible ? javas : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={percentage}
                                                    strokeWidth={2}
                                                    styles={{
                                                        root: {},
                                                        path: {
                                                            stroke: `rgba(125,0,0)`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 1.5s ease 0s',
                                                            transform: 'rotate(0turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        trail: {
                                                            stroke: '#292929',
                                                            strokeLinecap: 'butt',
                                                            transform: 'rotate(0.25turn)',
                                                            transformOrigin: 'center center',
                                                        },
                                                        text: {
                                                            fill: '#fff',
                                                            fontSize: '16px',
                                                            textAlign: 'center',
                                                        },
                                                        background: {
                                                            fill: '#111',
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        style={{ width: 30, marginBlock: 5 }}
                                                        src={javaimg}
                                                        alt="react"
                                                    />
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong>{`${percentage}%`}</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='about-skill-web'>
                        <div className='about-skill-web-header'>
                            <h1>Application Softwares</h1><span />
                        </div>
                        <div className='about-skill-meter-section'>


                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const ps = 80;
                                        const percentage = isVisible ? ps : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(0,63,137)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, marginBlock: 5 }}
                                                    src={psimage}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const fig = 55;
                                        const percentage = isVisible ? fig : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(255,255,255)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={figimage}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const word = 75;
                                        const percentage = isVisible ? word : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(63,127 ,200)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 40, marginBlock: 5 }}
                                                    src={wordimage}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const excell = 80;
                                        const percentage = isVisible ? excell : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(100,212,106)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, marginBlock: 5 }}
                                                    src={excelimage}
                                                    alt="react"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>
                            <div className='about-skill-meters'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const pp = 50;
                                        const percentage = isVisible ? pp : 0;
                                        return (
                                            <CircularProgressbarWithChildren
                                                value={percentage}
                                                strokeWidth={2}
                                                styles={{
                                                    root: {},
                                                    path: {
                                                        stroke: `rgba(250,156,79)`,
                                                        strokeLinecap: 'round',
                                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                                        transform: 'rotate(0turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    trail: {
                                                        stroke: '#292929',
                                                        strokeLinecap: 'butt',
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    text: {
                                                        fill: '#fff',
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    },
                                                    background: {
                                                        fill: '#111',
                                                    },
                                                }}
                                            >
                                                <img
                                                    style={{ width: 30, marginBlock: 5 }}
                                                    src={ppimage}
                                                    alt="typescript"
                                                />
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{`${percentage}%`}</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </VisibilitySensor>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='about-info exp-edu'>
                <div className='about-skill-details-header'>
                    <span>Experience & Education </span>
                </div>
            </div>



        </div >
    )
}

export default About;