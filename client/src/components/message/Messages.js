import React, { Fragment, useEffect } from 'react';

import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem';
import DashboardAction from '../dashboard/DashboardAction';
import DashboardStudent from '../dashboard/DashboardStudent';
import DashboardTeaher from '../dashboard/DashboardTeacher';

const Messages = ({ getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            {profile.user.role === 'student' && <DashboardStudent />}
            {profile.user.role === 'teacher' && <DashboardTeaher />}
            {profile.user.role === 'admin' && <DashboardAction />}
          </div>
          <div className='col-9'>
            <h1 className='large text-dark'>All Messages</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> See all messages here
            </p>
            <Link to='/dashboard' className='btn btn-dark'>
              Back To Dashboard
            </Link>
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
                <h4>No messages found...</h4>
              )}
            </div>
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
