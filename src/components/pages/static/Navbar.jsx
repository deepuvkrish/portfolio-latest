import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../../../assets/css/Headfoot.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUserTie, faCommentDots } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className='navbar'>
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
    )
}

export default Navbar;