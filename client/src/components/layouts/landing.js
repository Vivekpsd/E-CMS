import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='landing mt-5'>
      <div className='dark-overlay landing-inner text-dark'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h1 className='display-3 mb-4'>Course Management System</h1>
              <p className='lead'>
                {' '}
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <hr />
              <Link to='/register' className='btn btn-lg btn-info mr-2'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-lg btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
