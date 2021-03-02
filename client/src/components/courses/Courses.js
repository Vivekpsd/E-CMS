import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CourseItem from './CourseItem';

const Courses = ({ getCourses, course: { courses, loading } }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Courses</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
          </p>

          <div>
            <p className=''></p>
            <Link to='/create-course' className='btn btn-info'>
              Add Course
            </Link>
            &nbsp;
            <Link to='/dashboard' className='btn btn-dark'>
              Go Back To Dashboard
            </Link>
          </div>

          <br></br>
          <div className='profiles'>
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseItem key={course._id} course={course} />
              ))
            ) : (
              <h4>No courses found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, { getCourses })(Courses);
