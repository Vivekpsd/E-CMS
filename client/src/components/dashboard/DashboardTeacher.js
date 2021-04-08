import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTeacher = () => {
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
        to='/message'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Message
      </Link>
      <br></br>
      <Link
        to='/teacher-courses'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> My Courses
      </Link>
      <br></br>
      <Link
        to='/assigment'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className='text-primary' /> Assigment
      </Link>
      <br></br>

      <Link
        to='/events'
        className=' mr-3'
        style={{ color: 'azure', textDecoration: 'none' }}
      >
        <i className=' text-primary' /> Events
      </Link>
    </div>
  );
};

export default DashboardTeacher;
