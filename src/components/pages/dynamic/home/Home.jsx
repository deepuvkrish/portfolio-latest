import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import Floatbutton from '../../blocks/Floatbutton';


const Home = () => {
    const [texts] = useTypewriter({
        words: ['Deepak.KV', 'Developer', 'Designer'],
        loop: {},
        cursorStyle: '_',
    })

    return (
        <div className='home-section'>
            <div className='home-background'>
                <div class='box'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                </div>
            </div>
            <div className='home-image-section'>
                <div className='image-background'>
                    <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff", }} className='image-icons-one' />
                    <FontAwesomeIcon icon={faFreeCodeCamp} style={{ color: "#ffffff", }} className='image-icons-two' />
                    <div class="slider-thumb-custom"></div>


                </div>

            </div>
            <div className='home-details-section'>
                <div className='intro'>
                    <p className='bio-intro'>Hi Everyone</p>
                    <h3>I'm  {' '}
                        <span className='bioLists'>
                            {texts}
                        </span>
                        {<Cursor cursorColor={'white'} height={300} />}
                    </h3>
                    <div class="text ellipsis">
                        <span class="text-concat">
                            I'm a <span className='greenish'>web developer </span>currently based in Kerala. As a multidisciplinary designer, I primarly specialize in interaction, visual, brand, motion, and more. I'm passionate about crafting seamless in user experiences and thrive on challenges that demand creativity and innovation.
                        </span>
                    </div>

                    <Floatbutton />




                </div>

            </div>



        </div >
    )
}

export default Home;