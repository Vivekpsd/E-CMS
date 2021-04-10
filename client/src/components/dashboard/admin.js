import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardAction';
import Spinner from '../layouts/Spinner';
import ProfilePic from '../layouts/ProfilePic';
import UserPic from '../../img/user.png';
import './dashboardCSS/dashboard.css';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Admin = ({
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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mr-auto'>
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
                          <div class='alert alert-info' role='alert'>
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
                        <div class='alert alert-info' role='alert'>
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
    </Fragment>
  );
};

Admin.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Admin);
