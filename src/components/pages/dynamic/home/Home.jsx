import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { profile } from '../../assets';




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
                <div className='box'>
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
            </div>
            <div className='home-image-section'>
                <div className='image-background'>
                    <img src={profile} alt='profileimage' className='home-img' />
                    <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff", }} className='image-icons-one' />
                    <FontAwesomeIcon icon={faFreeCodeCamp} style={{ color: "#ffffff", }} className='image-icons-two' />
                    <div className="slider-thumb-custom"></div>
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
                    <div className="text ellipsis">
                        <div className='intro'>
                            <span className="text-concat courier-prime-regular">
                                As a <span className='greenish'>multidisciplinary designer </span>,I specialize in creating dynamic, responsive, and user-centric web applications.
                            </span>
                            <span className='text-concat courier-prime-regular'>My passion for coding is matched by my commitment to deliver <span className='greenish'>high-quality solutions</span> that drive user engagement and satisfaction.My portfolio showcases a range of projects, from innovative startups to established enterprises, each reflecting my ability to translate complex requirements into intuitive and effective <span className='greenish'>web applications.</span>

                            </span>
                        </div>
                    </div>

                    <Floatbutton title="Know More" />

                    <div className='home-links-icon'>
                        <span className='about-hov'><span className='details-font'><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKvJzwGTwrMMbPzcsRkwrxHtrVNNDgVGxZcTrBlgRpdwTGWnrPRndblqmcDkNqlxVbV' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></a></span></span>
                        <span className='about-hov'><span className='details-font'><a href='https://www.linkedin.com/in/deepak-k-v-b51752161/' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} /></a></span></span>
                        <span className='about-hov'><span className='details-font'><a href='https://github.com/deepuvkrish' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /></a></span></span>
                    </div>




                </div>

            </div>



        </div >
    )
}

export default Home;