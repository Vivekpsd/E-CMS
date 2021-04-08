import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const {
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <div className='side-bar'>
              <ul
                style={{
                  backgroundColor: '#b9936c',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                }}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'azure' }}
                  to='/dashboard'
                >
                  Dashboard
                </Link>
              </ul>
              <ul>
                <Link style={{ pointerEvents: 'none', color: 'grey' }}>
                  My Courses
                </Link>
              </ul>
              <ul>
                <Link style={{ pointerEvents: 'none', color: 'grey' }}>
                  Assignment
                </Link>
              </ul>
              <ul>
                <Link
                  style={{ pointerEvents: 'none', color: 'grey' }}
                  to='/student-courses'
                >
                  Browse Courses
                </Link>
              </ul>
              <ul>
                <Link
                  style={{ pointerEvents: 'none', color: 'grey' }}
                  to='/student-events'
                >
                  Browse Events
                </Link>
              </ul>
              <ul className='pb-3'>
                <Link
                  style={{ pointerEvents: 'none', color: 'grey' }}
                  to='/message'
                >
                  Messages
                </Link>
              </ul>
              <hr></hr>
              <ul>
                <Link>About Us</Link>
              </ul>
              <ul>
                <Link>Contact Us</Link>
              </ul>
              <ul>
                <Link>Help</Link>
              </ul>
            </div>
          </div>
          <div className='col-8'>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Create your profile here
            </p>
            <form className='form' onSubmit={onSubmit}>
              <div className='form-group'>
                <label for='skills'>Skills</label>
                <input
                  id='skills'
                  className='form-control'
                  type='text'
                  placeholder='Skills'
                  name='skills'
                  value={skills}
                  onChange={onChange}
                />
                <small className='form-text text-muted'>
                  Please use comma separated values (eg.
                  HTML,CSS,JavaScript,PHP)
                </small>
              </div>
              <div className='form-group'>
                <label for='gituser'>Github Username</label>
                <input
                  id='gituser'
                  className='form-control'
                  type='text'
                  placeholder='Github Username'
                  name='githubusername'
                  value={githubusername}
                  onChange={onChange}
                />
                <small className='form-text text-muted'>
                  If you want your latest repos and a Github link, include your
                  username
                </small>
              </div>
              <div className='form-group'>
                <label for='bio'>Bio</label>
                <textarea
                  placeholder='A short bio of yourself'
                  id='bio'
                  className='form-control'
                  name='bio'
                  value={bio}
                  onChange={onChange}
                />
                <small className='form-text text-muted'>
                  Tell us a little about yourself
                </small>
              </div>

              <div className='my-2'>
                <button
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  type='button'
                  className='btn btn-secondary'
                >
                  Add Social Network Links
                </button>
                <span className='form-text text-muted'>Optional</span>
              </div>

              {displaySocialInputs && (
                <Fragment>
                  <div className='form-group social-input'>
                    <i className='fab fa-twitter fa-2x' />
                    <input
                      type='text'
                      placeholder='Twitter URL'
                      name='twitter'
                      value={twitter}
                      onChange={onChange}
                      className='form-control'
                    />
                  </div>

                  <div className='form-group social-input'>
                    <i className='fab fa-facebook fa-2x' />
                    <input
                      type='text'
                      placeholder='Facebook URL'
                      name='facebook'
                      value={facebook}
                      onChange={onChange}
                      className='form-control'
                    />
                  </div>

                  <div className='form-group social-input'>
                    <i className='fab fa-youtube fa-2x' />
                    <input
                      type='text'
                      placeholder='YouTube URL'
                      name='youtube'
                      value={youtube}
                      onChange={onChange}
                      className='form-control'
                    />
                  </div>

                  <div className='form-group social-input'>
                    <i className='fab fa-linkedin fa-2x' />
                    <input
                      type='text'
                      placeholder='Linkedin URL'
                      name='linkedin'
                      value={linkedin}
                      onChange={onChange}
                      className='form-control'
                    />
                  </div>

                  <div className='form-group social-input'>
                    <i className='fab fa-instagram fa-2x' />
                    <input
                      type='text'
                      placeholder='Instagram URL'
                      name='instagram'
                      value={instagram}
                      onChange={onChange}
                      className='form-control'
                    />
                  </div>
                </Fragment>
              )}

              <input type='submit' className='btn btn-primary my-1 mr-2' />
              <Link className='btn btn-light my-1' to='/dashboard'>
                Go Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//     profile: state.profile
//   });

export default connect(null, { createProfile })(withRouter(CreateProfile));
