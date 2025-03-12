import logoimg from '../assets/images/logo-hospital.png';
import './Footer.css';

function Footer() {
    return (
        <section className="container-fluid" id='footer'>
            <div className="container" id='footer-container' >
                <div className="row footer-info">
                    <div className='col-12 col-md-5 footer-logo'>
                        {/* <img src={logoimg} alt='logoimg' className='img-fluid' /> */}
                        <span class="smart">SMAART</span> <span class="healthcare"> HEALTHCARE</span>           
<br/><br/>
<p>SMAART Healthcare is revolutionizing the way healthcare is delivered by combining multispeciality expertise with the latest advancements in AI-powered technologies and digital medicine. We offer a seamless blend of holistic preventive care, precise diagnostics, advanced treatment, and compassionate patient-centric care, ensuring that every individual receives the highest standards of medical excellence.</p>                    </div>
                    <div className='col-4 col-md-3 company'>
                        <p>Quick Access </p>
                        <ul class="p-0">
                            <li>Home</li>
                            <br/>
                            <li>About us</li>
                            <br/>
                            <li>Services</li><br/>
                            <li>Privacy policy</li>
                            
                        </ul>
                    </div>
                    <div className='col-12 col-md-3 touch'>
                        <p class="text-xl font-medium mb-3">GET IN TOUCH</p>
                        <ul class="flex flex-col gap-2 p-0">
                            <li>+91 123456789</li>
                            <br/>
                            <li>404dev@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <hr/>
                    <p class="py-2 text-sm text-center">Copyright 2025 @ 404 Devs - All Right Reserverd.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Footer;