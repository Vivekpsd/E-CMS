import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';

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
          <div className='container'>
            <h1 className='large text-primary'>Courses</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse Courses
            </p>

            <div>
              <p className=''></p>
              <Link to='/dashboard' className='btn btn-dark'>
                Go Back To Dashboard
              </Link>
            </div>

            <br></br>
            <div className='row'>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div className='card col-12 col-md-3 mt-3' key={course._id}>
                    <div className='card-body'>
                      <ProfilePic />
                      <hr></hr>
                      <h6 className='card-title'>{course.title}</h6>
                      <p className='text-muted'>{course.teacher}</p>
                      <p>Rating **</p>
                      <p>Price</p>
                      <Link
                        to={`/studentcourse/${course._id}`}
                        className='btn btn-primary '
                      >
                        View / Enroll
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <h4>No courses found...</h4>
              )}
            </div>
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
