import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseItem = ({
  course: {
    _id,
    title,
    content,
    description,
    teacher,
    enrolledStudent,
    startDate,
    endDate,
    review,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p className='my-1'></p>
        <Link to={`/course/${_id}`} className='btn btn-primary'>
          View Course
        </Link>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseItem;
