import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';




import Floatbutton from '../../blocks/Floatbutton';


const Home = () => {
    const [texts] = useTypewriter({
        words: ['Deepak KV', 'Developer', 'Designer'],
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
                <div className='intro-header'>

                    <p className='bio-intro'>Hello</p>

                    <h3>I'm  {' '}
                        <span className='bioLists'>
                            {texts}
                        </span>
                        {<Cursor cursorColor={'white'} height={300} />}
                    </h3>
                    <div class="text ellipsis">
                        <div className='intro'>
                            <span class="text-concat">
                                As a <span className='greenish'>multidisciplinary designer </span> , I primarly specialize in interaction, visual, brand, motion, and more. I'm passionate about crafting seamless in user experiences and thrive on challenges that demand creativity and innovation.
                            </span>
                        </div>
                    </div>

                    <Floatbutton />

                    <div className='home-links-icon'>
                        <span className='about-hov'><span className='details-font'><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKvJzwGTwrMMbPzcsRkwrxHtrVNNDgVGxZcTrBlgRpdwTGWnrPRndblqmcDkNqlxVbV' target="_blank"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></a></span></span>
                        <span className='about-hov'><span className='details-font'><a href='https://www.linkedin.com/in/deepak-k-v-b51752161/'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} /></a></span></span>
                        <span className='about-hov'><span className='details-font'><a href='https://github.com/deepuvkrish'><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /></a></span></span>
                    </div>




                </div>

            </div>



        </div >
    )
}

export default Home;