import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';

const PrivateRoute = ({
  component: Component,
  getCurrentProfile,
  auth: { isAuthenticated, loading },
  profile,
  ...rest
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading && !profile.loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(PrivateRoute);
