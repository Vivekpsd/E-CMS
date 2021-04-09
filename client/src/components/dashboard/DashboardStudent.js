import React from 'react';
import { Link } from 'react-router-dom';

const DashboardStudent = () => {
  return (
    <div className='text-center bg-dark side-bar'>
      <Link
        to='/'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Dashboard
      </Link>
      <br></br>
      <Link
        to='/student-courses'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> Courses
      </Link>
      <br></br>
      <Link
        to='/assignments-tosubmit'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Assigment
      </Link>
      <br></br>
      <Link
        to='/message'
        className='mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Message
      </Link>
      <br></br>
      <Link
        to='/student-events'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> View Events
      </Link>
    </div>
  );
};

export default DashboardStudent;
