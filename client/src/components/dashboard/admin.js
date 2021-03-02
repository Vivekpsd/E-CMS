import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardAction';
import Spinner from '../layouts/Spinner';
import ProfilePic from '../layouts/ProfilePic';

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
      <h1 className='display-4'>Dashboard</h1>
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
                    <span className='badge badge-info'>Route: Admin</span>
                  </p>
                  {profile !== null ? (
                    <Fragment>
                      <DashboardActions />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <p>
                        You have not yet setup a profile, please add some info
                      </p>
                      <Link
                        to='/create-profile'
                        className='btn btn-outline-primary my-1'
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
