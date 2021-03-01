import React, { useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../../components/layouts/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: {},
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {profile.user.role === 'admin' && <Redirect to='/admin' />}
          {profile.user.role === 'student' && <Redirect to='/student' />}
          {profile.user.role === 'teacher' && <Redirect to='/teacher' />}
        </div>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
