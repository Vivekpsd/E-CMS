import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { getCourseById } from '../../actions/course';
import { deleteCourse } from '../../actions/course';

const Course = ({
  match,
  profile: { profile },
  getCourseById,
  course: { course, loading },
  deleteCourse,
  history,
}) => {
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

          <Link to={`/editcourse/${course._id}`} className='btn btn-dark'>
            Edit Course
          </Link>

          <button
            onClick={() => deleteCourse(course._id, history)}
            className='btn btn-danger'
          >
            Delete Course
          </button>

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
  deleteCourse: PropTypes.func.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
});

export default connect(mapSatateToProps, {
  getCourseById,
  deleteCourse,
})(withRouter(Course));
