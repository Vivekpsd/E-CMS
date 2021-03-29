import React from 'react';
import { Link } from 'react-router-dom';

const DashboardStudent = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light mr-3'>
        <i className='text-primary' /> Edit Profile
      </Link>
      <Link to='/student-courses' className='btn btn-light mr-3'>
        <i className=' text-primary' /> Courses
      </Link>
      <Link to='/assigment' className='btn btn-light mr-3'>
        <i className='text-primary' /> View Assigment
      </Link>
      <Link to='/message' className='btn btn-light mr-3'>
        <i className='text-primary' /> View Message
      </Link>
      <Link to='/student-events' className='btn btn-light mr-3'>
        <i className=' text-primary' /> View Events
      </Link>
    </div>
  );
};

export default DashboardStudent;
