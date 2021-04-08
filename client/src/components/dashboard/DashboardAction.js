import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className=' text-center bg-dark side-bar'>
      <Link
        to='/'
        className=' mr-3 m-1'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Dashboard
      </Link>
      <br></br>
      <Link
        to='/message'
        className=' mr-3 m-1'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Message
      </Link>
      <br></br>
      <Link
        to='/courses'
        className=' mr-3 m-1'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> Manage Courses
      </Link>
      <br></br>

      <Link
        to='/profiles'
        className=' mr-3 m-1'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> Manage Users
      </Link>
      <br></br>
      <Link
        to='/events'
        className=' mr-3 m-1'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> Manage Events
      </Link>
    </div>
  );
};

export default DashboardActions;
