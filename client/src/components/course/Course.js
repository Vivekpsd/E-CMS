import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import { getCourseById } from '../../actions/course';

const Course = ({ match, getCourseById, course: { course, loading } }) => {
  useEffect(() => {
    getCourseById(match.params.id);
  }, [getCourseById]);
  return (
    <Fragment>
      {course === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/courses' className='btn btn-light'>
            Back To All Courses
          </Link>

          <Link to='/edit-course' className='btn btn-dark'>
            Edit Course
          </Link>

          <div className='course-grid my-1'>
            {course.title && <h1> Course Title = {course.title} </h1>}
            <h1> Content - {course.content}</h1>
            <h1> Description - {course.description}</h1>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Course.propTypes = {
  getCourseById: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
});

export default connect(mapSatateToProps, {
  getCourseById,
})(Course);
