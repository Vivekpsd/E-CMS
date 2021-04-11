import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import Spinner from '../layouts/Spinner';

import DashboardImg1 from '../../img/dashboardImg1.jpg';
import DashboardImg2 from '../../img/bgDashboard3.png';
import Feature1 from '../../img/feature1.png';
import Feature2 from '../../img/feature2.png';
import Feature3 from '../../img/feature3.png';
import User from '../../img/user.png';
import '../dashboard/dashboardCSS/dashboard.css';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from 'react-icons/fa';

const Student = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div
        className='container-fluid'
        style={{
          backgroundImage: `url(${DashboardImg2})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
      >
        <div className='row align-items-center'>
          <div className='col-6'>
            <br></br>
            <br></br>
            <h1 className='pl-5'>
              Welcome to Engineers Gurukul Training Center!
              <Link
                to='student-courses'
                className='btn btn-lg btn-primary mt-5'
              >
                Browse Courses &nbsp;&nbsp; <FaArrowRight />
              </Link>
            </h1>
          </div>
          <div className='col-6'>
            <img src={DashboardImg1} alt='Img1' height='500px' />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='card text-dark bg-light mb-3 p-3 bg-white rounded'>
              <div className='card-body'>
                <span className='card-text'>
                  <div className='container-fluid'>
                    <div className='row align-items-center'>
                      <div className='col-1 pl-4'>
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt='User'
                            className='rounded'
                            height='90px'
                          />
                        ) : (
                          <img
                            src={User}
                            alt='User'
                            classNam='rounded'
                            height='90px'
                          />
                        )}
                      </div>
                      <div className='col-3 pl-5'>
                        <h4>{user && user.name.toUpperCase()}</h4>
                        <p>
                          Github -{' '}
                          {profile === null ? 'N/A' : profile.githubusername}
                        </p>
                        <p className='text-muted'>
                          {user.role.charAt(0).toUpperCase() +
                            user.role.slice(1)}
                        </p>
                      </div>
                      <div className='col-2 mr-auto'>
                        {profile !== null ? (
                          <Fragment>
                            <Link
                              to='/edit-profile'
                              className='btn btn-outline-dark'
                            >
                              <i className='text-primary' /> Edit Profile
                            </Link>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <Link
                              to='/create-profile'
                              className='btn btn-outline-dark my-1'
                            >
                              Create Profile
                            </Link>
                          </Fragment>
                        )}
                      </div>
                      <div className='col-5 mr-auto'>
                        {profile !== null ? (
                          <h1>
                            <FaFacebook />
                            &nbsp;&nbsp;
                            <FaTwitter />
                            &nbsp;&nbsp;
                            <FaInstagram />
                            &nbsp;&nbsp;
                            <FaGithub />
                            &nbsp;&nbsp;
                            <FaYoutube />
                          </h1>
                        ) : (
                          <div className='alert alert-info' role='alert'>
                            <strong>Heads up! {user.name}, </strong> You have
                            not yet setup a profile, please create a new profile
                            for your account.
                          </div>
                        )}
                      </div>
                    </div>
                    <hr></hr>
                    {profile !== null && (
                      <div className='row mt-5 justify-content-center align-items-center'>
                        <div className='col-5'>
                          <div className='card text-light bg-light mb-3  bg-dark rounded'>
                            <div className='card-body'>
                              <h4>Bio</h4>
                              <hr></hr>
                              <span className='card-text'>{profile.bio}</span>
                            </div>
                          </div>
                        </div>
                        <div className='col-5'>
                          <div className='alert alert-info' role='alert'>
                            <h4>Skills</h4>
                            <hr></hr>
                            <strong>{user.name}</strong> has knowledge about{' '}
                            <strong>
                              {profile.skills.map((skill) => {
                                return skill + ', ';
                              })}
                            </strong>
                          </div>
                        </div>
                      </div>
                    )}
                    <br></br>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-4' style={{ marginLeft: '125px' }}>
            <h2>Your Enrollement</h2>
            <hr></hr>
            <div className='card'>
              <img src={DashboardImg1} alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title'>Course title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className='card-text'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>

      <br></br>
      <div className='container'>
        <p className='display-4'>Why choose Us?</p>
        <hr></hr>
        <div className='row text-center'>
          <div className='col-12 col-md-4'>
            <br></br>
            <img src={Feature1} height='100px' width='100px' alt='feature1' />
            <br></br>
            <p>
              Our Service is open 24 x 7. You can book your tickets anytime you
              want. We will be there for you. Always
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <br></br>
            <img src={Feature2} height='100px' width='100px' alt='feature2' />
            <br></br>
            <p>
              Our Website is fully responsive for all the devices out there such
              as mobile, tablet, or desktop
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <br></br>
            <img src={Feature3} height='100px' width='100px' alt='feature3' />
            <br></br>
            <p>
              All your credit and debit card information is secure with us. All
              your transaction details are secured with 3 layer encryption
            </p>
          </div>
        </div>
      </div>

      {/* <h1 className='display-4'>Dashboard</h1> --------------------- Previous Code----------------
      <hr></hr>
      <br></br>
      <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
        <div className='card-body'>
          <span className='card-text'>
            <div className='container'>
              <div className='row'>
                <div className='col-3'>
                  <ProfilePic />
                </div>
                <div className='col-9'>
                  <p className='lead'>
                    <i className='' /> Welcome <b>{user && user.name}</b>
                    <br></br>
                    <i className='' /> Bio - {profile && profile.bio}
                    <br></br>
                    <span className='badge badge-info'>Role : {user.role}</span>
                    <br></br>
                    <span className='badge badge-info'>Route: Student</span>
                  </p>
                  {profile !== null ? (
                    <Fragment>
                      <DashboardStudent />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <p>
                        You have not yet setup a profile, please add some info
                      </p>
                      <Link
                        to='/create-profile'
                        className='btn btn-outline-dark my-1'
                      >
                        Create Profile
                      </Link>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </span>
        </div>
        <br></br>
        <hr></hr>
      </div> */}
    </Fragment>
  );
};

Student.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Student);
