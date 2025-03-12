// About.js
import React from 'react';
import { Link } from 'react-router-dom'

import './About.css'; // Importing the CSS file for styling
import aboutImage from '../assets/images/about_image.png'; // Replace with your actual image path

function About() {
    return (
        <section className="container-fluid" id="about-section">
            <div className='container py-5'>
                <div className='about-title'>
                   
                    <h1>About Us</h1>
                </div>
                <div className="row about-row">
                    {/* Image Section */}
                    <div className="col-12 col-md-5 col-lg-4 about-image">
                        <img src={aboutImage} alt="About Prescripto" className="img-fluid" />
                    </div>

                    {/* Text Section */}
                    <div className="col-12 col-md-6 col-lg-6 about-info">
                        <p>
                        SMAART Healthcare is revolutionizing the way healthcare is delivered by combining multispeciality expertise with the latest advancements in AI-powered technologies and digital medicine. We offer a seamless blend of holistic preventive care, precise diagnostics, advanced treatment, and compassionate patient-centric care, ensuring that every individual receives the highest standards of medical excellence.                        </p>
                        <p>
                        Our cutting-edge facility is designed to provide an exceptional healthcare experience, equipped with world-class technologies and supported by a team of highly skilled and internationally trained specialists who are leaders and experts in their respective fields. With the integration of telehealth services, we bring quality care to your fingertips, ensuring accessibility and convenience like never before.                        </p>
                        <h4 className="about-vision-title">Our Vision</h4>
                        <p>
                            Our vision at Hospital is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                        </p>

                        <div className="more-btn">
                        <Link to="/Home"  className="btn rounded-pill">
                            <button className="btn rounded-pill">More</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
