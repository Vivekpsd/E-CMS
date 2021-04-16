import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaEnvelope,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div class='container-fluid pb-0 mb-0 justify-content-center text-light mainFooter'>
      <footer>
        <div class='row my-5 justify-content-center py-5'>
          <div class='col-11'>
            <div class='row '>
              <div class='col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a'>
                <h3 class='text-muted mb-md-0 mb-5 bold-text'>
                  <a href=''>Logo</a>
                </h3>
              </div>
              <div class='col-xl-2 col-md-4 col-sm-4 col-12'>
                <h6 class='mb-3 mb-lg-4 bold-text '>
                  <b>MENU</b>
                </h6>
                <ul class='list-unstyled'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div class='col-xl-2 col-md-4 col-sm-4 col-12'>
                <h6 class='mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5'>
                  <b>ADDRESS</b>
                </h6>
                <p class='mb-1'>605, RATAN ICON BUILDING</p>
                <p>SEAWOODS SECTOR</p>
              </div>
            </div>
            <div class='row '>
              <div class='col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end'>
                <p class='social text-muted mb-0 pb-0 bold-text'>
                  {' '}
                  <span class='mx-2'>
                    <FaFacebook />
                  </span>{' '}
                  <span class='mx-2'>
                    <FaYoutube />
                  </span>{' '}
                  <span class='mx-2'>
                    <FaInstagram />
                  </span>{' '}
                  <span class='mx-2'>
                    <FaTwitter />
                  </span>{' '}
                </p>
                <small class='rights'>
                  <span>&#174;</span> Engineer Gurukul Rights Reserved.
                </small>
              </div>
              <div class='col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end '>
                <h6 class='mt-55 mt-2 text-muted bold-text'>
                  <b>Name</b>
                </h6>
                <small>
                  {' '}
                  <span>
                    <FaEnvelope />
                  </span>{' '}
                  Mail
                </small>
              </div>
              <div class='col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 '>
                <h6 class='text-muted bold-text'>
                  <b>Name</b>
                </h6>
                <small>
                  <span>
                    <FaEnvelope />
                  </span>{' '}
                  Mail
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;