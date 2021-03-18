import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { getCourseById } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import ProfilePic from '../layouts/ProfilePic';
import { enrollStudent } from '../../actions/profile';
import { enrollCourse } from '../../actions/course';

const StudentCourse = ({
  match,
  getCourseById,
  course: { course, loading },
  enrollCourse,
  history,
  enrollStudent,
  getCurrentProfile,
  profile: { profile },
}) => {
  useEffect(() => {
    getCourseById(match.params.id);
    getCurrentProfile();
  }, [getCourseById, enrollCourse, enrollStudent, getCurrentProfile]);
  const onClick = (e) => {
    e.preventDefault();
    enrollStudent(match.params.id, history);
    enrollCourse(match.params.id, history);
  };

  return (
    <Fragment>
      {course === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
            <div className='card-body'>
              <span className='card-text'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-8'>
                      <Link to='/student-courses' className='text-info'>
                        Back To All Courses
                      </Link>
                      {course.title && (
                        <p className='display-4'>{course.title} </p>
                      )}
                      <hr></hr>
                      <p style={{ fontSize: '17px' }}>{course.description}</p>
                    </div>
                    <div className='col-4 align-self-center'>
                      <div className='card'>
                        <ProfilePic />
                        <hr></hr>
                        <h3 className='text-center'>
                          ₹ 500{' '}
                          <del
                            className='text-muted'
                            style={{ fontSize: '20px' }}
                          >
                            1000
                          </del>
                          <br></br>
                          <p
                            style={{ fontSize: '15px' }}
                            className='badge badge-danger'
                          >
                            50% OFF
                          </p>
                        </h3>

                        {course.enrolledStudent.find((enrolledStudent) => {
                          if (enrolledStudent === profile.user._id) {
                            return true;
                          }
                        }) ? (
                          <button className='btn btn-secondary disabled'>
                            Already Enrolled
                          </button>
                        ) : (
                          <button
                            className='btn btn-outline-primary'
                            onClick={(e) => onClick(e)}
                          >
                            Buy now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='alert alert-info mt-4 mb-4'>
                    <h5>What you'll learn</h5>
                    <hr></hr>
                    <p>{course.content}</p>
                  </div>
                  <div className='row'>
                    <div className='col-2'>
                      <p className='badge badge-warning badge-lg'>Bestseller</p>
                    </div>
                    <div className='col-2 mr-auto'>
                      <b>4.5 Review *****</b>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <p>
                        Taught By{' '}
                        <span className='text-info font-weight-bold'>
                          {course.teacher}
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='row'>
                    <div className='col'>
                      <h4>Requirements</h4>
                      {course.prerequisite}
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          {/*           
          <Link to='/student-courses' className='btn btn-light'>
            Back To All Courses
          </Link>
          <div className='container'>
            <div className='row'>
              <div className='col-8'>
                {course.title && <h1> Course Title = {course.title} </h1>}
                <h1> Content - {course.content}</h1>
                <h1> Description - {course.description}</h1>
              </div>
              <div className='col-4'>
                <div className='card'>
                  <div className='card-body'>
                    <ProfilePic />
                    <hr></hr>
                    <h6 className='card-title'>{course.title}</h6>
                    <p className='text-muted'>{course.teacher}</p>
                    <p>Rating **</p>
                    <p>Price</p>
                    {course.enrolledStudent.find((enrolledStudent) => {
                      if (enrolledStudent === profile.user._id) {
                        return true;
                      }
                    }) ? (
                      <button className='btn btn-secondary disabled'>
                        Already Enrolled
                      </button>
                    ) : (
                      <button
                        className='btn btn-primary'
                        onClick={(e) => onClick(e)}
                      >
                        Enroll
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

StudentCourse.propTypes = {
  getCourseById: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  enrollCourse: PropTypes.func.isRequired,
  enrollStudent: PropTypes.func.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
});

export default connect(mapSatateToProps, {
  getCourseById,
  enrollCourse,
  enrollStudent,
  getCurrentProfile,
})(withRouter(StudentCourse));
