import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../../../assets/css/Headfoot.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUserTie, faCommentDots } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [style, setStyle] = useState("navlinks-deactive");
    const [spanfirst, setSpanFirst] = useState("spannav1");
    const [spantwo, setSpanTwo] = useState("spannav2");
    const [spanthree, setSpanThree] = useState("spannav3");
    const navShow = () => {

        if (style !== "navlinks-active") {
            setStyle("navlinks-active");
            setSpanFirst("spannav1-active");
            setSpanTwo("spannav2-active");
            setSpanThree("spannav3-active");
        }
        else {
            setStyle("navlinks-deactive");
            setSpanFirst("spannav1");
            setSpanTwo("spannav2");
            setSpanThree("spannav3");

        }
    };
    const hideNav = () => {
        if (style !== "navlinks-deactive") {
            setStyle("navlinks-deactive");
            setSpanFirst("spannav1");
            setSpanTwo("spannav2");
            setSpanThree("spannav3");
        }
        else {
            setStyle("navlinks-active");
            setSpanFirst("spannav1-active");
            setSpanTwo("spannav2-active");
            setSpanThree("spannav3-active");
        }
    }

    return (

        <div className="nav-box">
            <div className='navbar-laptop'>
                <div className='navlinks'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        <div className="button-link">
                            <div className="icon-link">
                                <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
                            </div>
                            <span>Home</span>
                        </div>
                    </NavLink>

                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        <div className="button-link">
                            <div className="icon-link">
                                <FontAwesomeIcon icon={faUserTie} style={{ color: "#ffffff", }} />
                            </div>
                            <span>About</span>
                        </div>
                    </NavLink>
                    <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        <div className="button-link">
                            <div className="icon-link">
                                <FontAwesomeIcon icon={faCodepen} style={{ color: "#ffffff", }} />
                            </div>
                            <span>Projects</span>
                        </div>
                    </NavLink>

                    <NavLink to='/career' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        <div className="button-link">
                            <div className="icon-link">
                                <FontAwesomeIcon icon={faGoogleScholar} style={{ color: "#ffffff", }} />
                            </div>
                            <span>Career</span>
                        </div>
                    </NavLink>



                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        <div className="button-link">
                            <div className="icon-link">
                                <FontAwesomeIcon icon={faCommentDots} style={{ color: "#ffffff", }} />
                            </div>
                            <span>Contact</span>
                        </div>
                    </NavLink>
                </div>

                <Outlet />
            </div>
            <div className='navbar-mobile'>
                <div className='navbar-top'>

                </div>
                <div className={style}>
                    <div className='navbtn'>
                        <button className='nav-icn' onClick={navShow} onMouseLeave={hideNav}>
                            <span className={spanfirst}></span>
                            <span className={spantwo}></span>
                            <span className={spanthree}></span>
                        </button>
                    </div>
                    <div className='nlinks'>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <div className="button-link">
                                <div className="icon-link">
                                    <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
                                </div>
                                <span>Home</span>
                            </div>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <div className="button-link">
                                <div className="icon-link">
                                    <FontAwesomeIcon icon={faUserTie} style={{ color: "#ffffff", }} />
                                </div>
                                <span>About</span>
                            </div>
                        </NavLink>
                        <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <div className="button-link">
                                <div className="icon-link">
                                    <FontAwesomeIcon icon={faCodepen} style={{ color: "#ffffff", }} />
                                </div>
                                <span>Projects</span>
                            </div>
                        </NavLink>
                        <NavLink to='/career' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <div className="button-link">
                                <div className="icon-link">
                                    <FontAwesomeIcon icon={faGoogleScholar} style={{ color: "#ffffff", }} />
                                </div>
                                <span>Career</span>
                            </div>
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <div className="button-link">
                                <div className="icon-link">
                                    <FontAwesomeIcon icon={faCommentDots} style={{ color: "#ffffff", }} />
                                </div>
                                <span>Contact</span>
                            </div>
                        </NavLink>

                    </div>

                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Navbar;