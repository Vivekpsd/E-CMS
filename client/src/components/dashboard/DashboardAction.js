import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light mr-3'>
        <i className='text-primary' /> Edit Profile
      </Link>
      <Link to='/courses' className='btn btn-light mr-3'>
        <i className=' text-primary' /> View Courses
      </Link>

      <Link to='/message' className='btn btn-light mr-3'>
        <i className='text-primary' /> View Message
      </Link>
      <Link to='/profiles' className='btn btn-light mr-3'>
        <i className=' text-primary' /> View All Users
      </Link>
      <Link to='/events' className='btn btn-light mr-3'>
        <i className=' text-primary' /> View Events
      </Link>
    </div>
  );
};

export default DashboardActions;
