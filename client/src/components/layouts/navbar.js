import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import DashboardStudent from '../dashboard/DashboardStudent';
import DashboardTeacher from '../dashboard/DashboardTeacher';
import DashboardActions from '../dashboard/DashboardAction';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        {user && user.role === 'student' && (
          <Link className='nav-link' component={DashboardStudent}></Link>
        )}
        {user && user.role === 'teacher' && (
          <Link className='nav-link' component={DashboardTeacher}></Link>
        )}
        {user && user.role === 'admin' && (
          <Link className='nav-link' component={DashboardActions}></Link>
        )}
        {isAuthenticated === false && (
          <Link className='nav-link' to='/dashboard'>
            Dashboard
          </Link>
        )}
      </li>
      &nbsp;&nbsp;
      <li className='nav-item'>
        <Link onClick={logout} className='nav-btn btn btn-danger' to='/'>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Sign Up
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <div className='container' style={{ marginBottom: '70px' }}>
      <nav
        className='navbar navbar-expand-md  fixed-top navbar-light'
        style={{ backgroundColor: 'white' }}
      >
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <h5>Engineers Gurukul</h5>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='mobile-nav'>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
