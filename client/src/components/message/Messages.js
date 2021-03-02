import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem';

const Messages = ({ getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className='large text-primary'>All Messages</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> See all messages here
      </p>
      <Link to='/dashboard' className='btn btn-dark'>
        Back To Dashboard
      </Link>
      <br></br>
      <br></br>
      <div className='messages'>
        {profile.messages.length > 0 ? (
          profile.messages.map((message) => (
            <MessageItem key={message._id} message={message} />
          ))
        ) : (
          <h4>No messages found...</h4>
        )}
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
