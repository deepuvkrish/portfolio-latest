import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify-icon/react';

import { } from '@fortawesome/free-solid-svg-icons';
import Graphics from './Graphics';

import DisplayLottie from '../../static/DisplayLottie';
import { contacts } from '../../assets';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_57k95pk', 'template_o0tjpc5', form.current, {
                publicKey: 'qj_sIMLEqiZa86vI9',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email Sent');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='contact-section scrollup'>
            <div className='contact-intro'>
                <div className='image-sensor'></div>

                <div className='contact-intro-box'>
                    <div className='contact-intro-box-left'>
                        <h1>Get in touch.</h1>
                        <Graphics />
                    </div>
                    <div className='contact-intro-box-right'>
                        <div className='contact-address cnt'>
                            <div className='contact-icon'>
                                <Icon icon="material-symbols:home-pin-outline" width="3em" height="3em" className='iconlap' />
                                <Icon icon="material-symbols:home-pin-outline" width="1.5em" height="1.5em" className='iconmob' />
                            </div>
                            <div className='details'>
                                <span className='cnthead'> Address</span>
                                <span>Ottapalam, Kerala</span>
                            </div>
                        </div>
                        <div className='contact-phone cnt'>
                            <div className='contact-icon'>
                                <Icon icon="game-icons:phone" width="3em" height="3em" className='iconlap' />
                                <Icon icon="game-icons:phone" width="1.5em" height="1.5em" className='iconmob' />
                            </div>
                            <div className='details'>
                                <span className='cnthead'> Phone</span>
                                <span>+91 994 791 8068</span>
                            </div>
                        </div>

                        <div className='contact-mail cnt'>
                            <div className='contact-icon'>
                                <Icon icon="emojione-monotone:e-mail" width="3em" height="3em" className='iconlap' />
                                <Icon icon="emojione-monotone:e-mail" width="1.5em" height="1.5em" className='iconmob' />
                            </div>
                            <div className='details'>
                                <span className='cnthead'>Mail</span>
                                <span>deepudeepz383@gmail.com</span>

                            </div>

                        </div>
                        <div className='contact-network cnt'>
                            <div className='contact-icon'>
                                <Icon icon="gridicons:reader-follow-conversation" width="3em" height="3em" className='iconlap' />
                                <Icon icon="gridicons:reader-follow-conversation" width="1.5em" height="1.5em" className='iconmob' />
                            </div>
                            <div className='details'>
                                <span className='cnthead'>Follow me</span>

                                <div className='contact-network-links'>
                                    <span className='iconlap'><Icon icon="entypo-social:linkedin-with-circle" width="2.5em" height="2.5em" /></span>
                                    <span className='iconlap'><Icon icon="ri:github-fill" width="2.5em" height="2.5em" /></span>
                                    <span className='iconlap'><Icon icon="mage:instagram-circle" width="2.5em" height="2.5em" /></span>

                                    <span className='iconmob'><Icon icon="entypo-social:linkedin-with-circle" width="1.5em" height="1.5em" /></span>
                                    <span className='iconmob'><Icon icon="ri:github-fill" width="1.5em" height="1.5em" /></span>
                                    <span className='iconmob'><Icon icon="mage:instagram-circle" width="1.5em" height="1.5em" /></span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='contact-form'>
                <div className='contact-intro-box'>
                    <div className='contact-intro-box-left'>
                        <h2>Start a Conversation.</h2>
                        <p>Have any projects? Hire me? Discuss Ideas?</p>
                        <div className="input-container">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="formbox">
                                    <label>Name</label>
                                    <input type="text" name="user_name" required />
                                </div>
                                <div className="formbox">
                                    <label>Email</label>
                                    <input type="email" name="user_email" required />
                                </div>
                                <div className="formbox">
                                    <label>Phone</label>
                                    <input type="number" name="user_phone" required />
                                </div>
                                <div className="formbox">
                                    <label className='textlap'>Message</label>
                                    <textarea name="message" required className='textlap'></textarea>
                                    <textarea name="message" placeholder="Enter your Message" required className='textmob'></textarea>

                                </div>
                                <button type="submit" name="send" value="Send" className='submit-btn'>Send</button>


                            </form>

                        </div>
                    </div>
                    <div className='contact-intro-box-right'>
                        <DisplayLottie lottiename={contacts} />

                    </div>

                </div>
            </div>



        </div>

    );
}

export default Contact;