import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { allEvents } from '../../actions/event';
import ProfilePic from '../layouts/ProfilePic';
import { FaArrowLeft } from 'react-icons/fa';
import EventBg from '../../img/login-background.jpg';
import './event.css';

const StudentEvents = ({
  allEvents,
  event: { events, loading },
  getCurrentProfile,
  profile: { profile },
}) => {
  useEffect(() => {
    allEvents();
    getCurrentProfile();
  }, [allEvents, getCurrentProfile]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {
            <div
              style={{
                backgroundImage: `url(${EventBg})`,
                backgroundRepeat: 'no-repear',
                backgroundAttachment: 'fixed',
              }}
            >
              <div
                className='container-fluid'
                style={{ marginTop: '80px', paddingTop: '20px' }}
              >
                <div className='row'>
                  <div className='col-12'>
                    <div style={{ paddingLeft: '240px' }}>
                      <h2 className='large text-light'>Events</h2>
                      <p className='lead text-light'>
                        <i className='fab fa-connectdevelop ' /> Browse and
                        Register for upcoming Events
                      </p>

                      <div>
                        <Link to='/dashboard' className='btn btn-dark'>
                          <FaArrowLeft />
                          &nbsp;Dashboard
                        </Link>
                      </div>
                    </div>

                    <br></br>
                    <div className='profiles row'>
                      {events.length > 0 ? (
                        events.map((event) => (
                          <div
                            className='card text-dark bg-light mb-3 p-3 mb-5 bg-white rounded col-8 offset-2'
                            style={{
                              border: '2px solid black',
                              borderRadius: '10px',
                              backgroundColor: 'white',
                            }}
                          >
                            <div className='card-body'>
                              <span className='card-text'>
                                <div className='container'>
                                  <div className='row'>
                                    <div className='col-6'>
                                      <h4>{event.title}</h4>
                                      <hr></hr>
                                      <p className='text-muted'>
                                        {event.description}
                                      </p>
                                    </div>
                                    <div className='col-4 ml-auto'>
                                      <b>Start Date - </b>
                                      {event.startDate}
                                      <br></br>
                                      <b>End Date - </b>
                                      {event.endDate}
                                      <br></br>

                                      <br></br>
                                      <a
                                        href='https://www.google.com/'
                                        className='btn btn-info'
                                        target='blank'
                                      >
                                        Register
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <p className='my-1'></p>
                                </div>
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <h4>No events found...</h4>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </Fragment>
      )}
    </Fragment>
  );
};

StudentEvents.propTypes = {
  allEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  event: state.event,
  profile: state.profile,
});

export default connect(mapStateToProps, { allEvents, getCurrentProfile })(
  StudentEvents
);
