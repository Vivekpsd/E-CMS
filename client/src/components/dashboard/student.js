import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import Spinner from '../layouts/Spinner';

import DashboardImg1 from '../../img/dashboardImg1.jpg';
import DashboardImg2 from '../../img/bgDashboard3.png';
import '../dashboard/dashboardCSS/dashboard.css';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from 'react-icons/fa';
const { v4: uuidv4 } = require('uuid');

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
                      <div className='col-4'>
                        <img
                          src={user.avatar}
                          alt='User'
                          className='rounded'
                          height='200px'
                        />
                      </div>
                      <div className='col-5'>
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
                      <div className='col-3 mr-auto'>
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
                            <strong>{user.name}</strong> have knowledge about{' '}
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
                    <br></br>
                    {profile !== null && (
                      <div className='row text-center'>
                        <div className='col'>
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
                        </div>
                      </div>
                    )}

                    <div className='row mt-3'>
                      {profile === null && (
                        <div className='alert alert-info' role='alert'>
                          <strong>Heads up! {user.name}, </strong> You have not
                          yet setup a profile, please create a new profile for
                          your account.
                        </div>
                      )}
                    </div>
                  </div>
                </span>
              </div>
            </div>
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
