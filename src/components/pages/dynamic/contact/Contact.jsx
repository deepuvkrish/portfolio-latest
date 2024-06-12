import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';


const bio = [
    "Deepak K.V",
    "+91 9947 9180 68",
    "kvdeepakkv1995@gmail.com",
    "deepudeepz383@gmail.com",
    "Ottapalam , Kerala",
]

function Bioprint(props) {
    return <li className='contact-li'>{props.name}</li>
}
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
        <div className='contact-section'>
            <div className='home-background'>
                <div className='box'>
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
            </div>


            <div className="container-contact">
                <div className="row">
                    <h4 className="cnt-title" style={{ textAlign: 'center' }}>Re<span className='greenish'>a</span>ch Me!</h4>
                </div>
                <div className="input-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="c2">
                            <div className="styled-input wide">
                                <input type="text" name="user_name" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="c2 c3" >
                            <div className="styled-input">
                                <input type="email" name="user_email" required />
                                <label>Email</label>
                            </div>
                            <div className="styled-input" style={{ float: 'right' }}>
                                <input type="text" name="user_phone" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="c2">
                            <div className="styled-input wide">
                                <textarea name="message" required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="c2">
                            <input type="submit" value="Send" className="btn-lrg submit-btn" />
                        </div>
                    </form>
                </div>
            </div>

            <div className='contact-footer'>
                <div className='contact-details-section'>
                    <ul className='contact-ul'>
                        {bio.map((det) => <Bioprint name={det} />)}
                    </ul>
                </div>
                <div className='contact-divider'></div>
                <div className='contact-web-details'>
                    <div className='gitdetails'>
                        <a href="https://github.com/deepuvkrish" target="_blank" rel="noopener noreferrer">Github</a>
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} />
                    </div>
                    <div className='linkeddetails'>
                        <a href="https://www.linkedin.com/in/deepak-k-v-b51752161/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Contact;