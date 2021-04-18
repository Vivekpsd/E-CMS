import React from 'react'
import { Container } from 'react-bootstrap';
import Topsection from '../components/topsection';
import Footer from '../components/footer';
import Svg from '../assets/contactus.svg';
import CallIcon from '../assets/icons/callus.png';
import MailIcon from '../assets/icons/mail.png';
import LinkdinIcon from '../assets/icons/linkdinicon.svg';
import YoutubeIcon from '../assets/icons/yticon.svg';
import FacebookIcon from '../assets/icons/facebookicon.svg';
import InstaIcon from '../assets/icons/instaicon.svg';

export default function contact() {
    return (
        <div>
            <Container>
                <Topsection headimage = {Svg}
                head = "Contact us"
                description = {<p>How can we help you? <br /> Reach out or browse below to find the answers you need. </p>} />
            </Container>
            <Container>
                <div className = "th">

                    <div className = "tle">

                        <img src={CallIcon} alt="icon"/>

                        <div className = "hp">

                            <h5>Call us</h5>
                            <p>+91 91231 87839</p>

                        </div>
                    </div>

                    <div className = "tle">

                        <img src={MailIcon} alt="icon" />

                        <div className = "hp">

                            <h5>Mail us</h5>
                            <p>info@engineersgurukul.org</p>

                        </div>
                    </div>
                </div>
            </Container>
            <hr />
            <Container>
                <div className = "followus">
                    <h3>Follow us</h3>

                    <div className = "social-icons">
                        <img src={LinkdinIcon} alt="icon"/>
                        <img src={InstaIcon} alt="icon"/>
                        <img src={FacebookIcon} alt="icon"/>
                        <img src={YoutubeIcon} alt="icon"/>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
