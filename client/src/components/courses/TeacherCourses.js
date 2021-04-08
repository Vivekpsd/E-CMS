import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';
import DashboardAction from '../dashboard/DashboardAction';
import DashboardStudent from '../dashboard/DashboardStudent';
import DashboardTeaher from '../dashboard/DashboardTeacher';
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

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  const getStarAverage = (course) => {
    let sum = 0,
      len = 0;
    course.review.map((review) => {
      sum += review.star;
      len += 1;
    });

    let avg = sum / len;
    let ans = roundToTwo(avg);
    return ans;
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-2'>
                {profile.user.role === 'student' && <DashboardStudent />}
                {profile.user.role === 'teacher' && <DashboardTeaher />}
                {profile.user.role === 'admin' && <DashboardAction />}
              </div>
              <div className='col-1'></div>
              <div className='col-9'>
                <h1 className='large text-dark'>Courses</h1>
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
                                <span
                                  className='badge badge-light'
                                  style={{ fontSize: '13px' }}
                                >
                                  {course.review.length} Reviews
                                </span>
                                <span
                                  className='text text-warning strong float-right font-weight-bold bg-dark pl-2 pr-2 rounded'
                                  style={{ fontSize: '15px' }}
                                >
                                  {course.review.length === 0 ? (
                                    <span>N/A</span>
                                  ) : (
                                    getStarAverage(course)
                                  )}
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
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

TeacherCourses.propTypes = {
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
