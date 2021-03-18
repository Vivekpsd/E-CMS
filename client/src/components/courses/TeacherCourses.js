import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';

const TeacherCourses = ({
  getCourses,
  course: { course, courses, loading },
  profile: { profile },
}) => {
  useEffect(() => {
    getCourses();
    getCurrentProfile();
  }, [getCourses, getCurrentProfile]);
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
                  <div
                    className='card mb-3 mr-4'
                    style={{ maxWidth: '250px' }}
                    key={course._id}
                  >
                    <div className='col-md-12'>
                      <Link
                        to={`/studentcourse/${course._id}`}
                        className='text-dark'
                        style={{ textDecoration: 'none' }}
                      >
                        <div className='card-body'>
                          <span>
                            <ProfilePic />
                          </span>
                          <hr></hr>

                          <h6 className='card-title'>{course.title}</h6>

                          <p className='card-text text-muted'>
                            {course.teacher}
                          </p>
                          <p className='card-text'>
                            4.7 *****{'  '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='badge badge-warning badge-lg'>
                              Bestseller
                            </span>
                          </p>

                          <hr></hr>
                          <h4 className='text-center'>
                            <span className='badge badge-light'>₹ 500</span>
                          </h4>
                        </div>
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
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCourses, getCurrentProfile })(
  TeacherCourses
);
