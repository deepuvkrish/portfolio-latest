import React from "react";
import Lottie from "lottie-react";


const DisplayLottie = (props) => {
    return (
        <Lottie animationData={props.lottiename} loop={true} />
    );
};

export default DisplayLottie;