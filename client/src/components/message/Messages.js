import React, { Fragment, useEffect } from 'react';

import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem';
import NotAvailable from '../../img/notAvailable.webp';
import NoMessage from '../../img/noMessage.jpg';
import { FiMail } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

const Messages = ({ getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className='container' style={{ marginTop: '110px' }}>
        <div className='row'>
          <div className='col'>
            {profile === null ? (
              <div>
                <h1 className='text-center'>
                  No Messages Available
                  <img src={NotAvailable} alt='not available' />
                </h1>
              </div>
            ) : (
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='large text-dark'>
                      <FiMail />
                      &nbsp;&nbsp; Inbox
                    </h2>
                    <div className='lead'>
                      <i className='fab fa-connectdevelop' /> See all messages
                      here
                      <Link
                        to='/dashboard'
                        className='btn btn-dark float-right'
                      >
                        <FaArrowLeft />
                        &nbsp;Dashboard
                      </Link>
                    </div>
                    <hr></hr>
                    &nbsp;
                    {profile.user.role === 'admin' ||
                    profile.user.role === 'teacher' ? (
                      <Link to='/sendmessage' className='btn btn-danger'>
                        Send Message
                      </Link>
                    ) : (
                      <p></p>
                    )}
                    <br></br>
                    <br></br>
                    <div className='messages'>
                      {profile.messages.length > 0 ? (
                        profile.messages.map((message) => (
                          <MessageItem
                            key={message._id}
                            message={message}
                            profile={profile}
                          />
                        ))
                      ) : (
                        <h1 className='text-center'>
                          No messages found...
                          <img
                            src={NoMessage}
                            alt='no message'
                            height='400px'
                          />
                        </h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
  //
};
Messages.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Messages);

//    <Fragment>
//   {loading ? (
//     <Spinner />
//   ) : (
//     <Fragment>
//       <h1 className='large text-primary'>Messages</h1>
//       <p className='lead'>
//         <i className='fab fa-connectdevelop' /> View all messages
//       </p>
//       <Link to='/dashboard' className='btn btn-secondary'>
//         Back To Dashboard
//       </Link>
//       <br></br>
//       <div className='messages'>
//         <h1>{profile.messages}</h1>
//       </div>
//     </Fragment>
//   )}
// </Fragment>
