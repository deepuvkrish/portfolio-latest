import React from "react";
import { mainp } from "../../../constants";


import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../pro.css'



const Padippi = () => {
    return (
        <>
            <Link to='/projects' className="iconBoxpa"> <Icon icon="iconamoon:arrow-left-1-fill" />Go Back</Link>

            <h1 style={{ color: "#fff" }}>
                Padippi Project page

            </h1>
        </>
    )
};


export default Padippi;

