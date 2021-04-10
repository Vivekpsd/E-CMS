import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <Fragment>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link' style={{ textDecoration: 'none' }}>
            <i className='text-primary' /> Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/message'
            className='nav-link'
            style={{ textDecoration: 'none' }}
          >
            <i className='text-primary' /> Message
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/courses'
            className='nav-link'
            style={{ textDecoration: 'none' }}
          >
            <i className=' text-primary' /> Manage Courses
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/profiles'
            className='nav-link'
            style={{ textDecoration: 'none' }}
          >
            <i className=' text-primary' /> Manage Users
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/events'
            className='nav-link'
            style={{ textDecoration: 'none' }}
          >
            <i className=' text-primary' /> Manage Events
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default DashboardActions;
