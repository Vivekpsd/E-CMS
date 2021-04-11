import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import ReactStars from 'react-rating-stars-component';
import { Link, withRouter } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';
import { enrollStudent } from '../../actions/profile';
import { FcCalendar, FcCustomerSupport } from 'react-icons/fc';
import {
  enrollCourse,
  addComment,
  deleteComment,
  getCourseById,
} from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import Alert from '../../components/layouts/Alert';
import DashboardAction from '../dashboard/DashboardAction';
import DashboardStudent from '../dashboard/DashboardStudent';
import DashboardTeaher from '../dashboard/DashboardTeacher';

const StudentCourse = ({
  match,
  auth: { user },
  course: { course, loading },
  enrollCourse,
  history,
  enrollStudent,
  getCourseById,
  getCurrentProfile,
  profile: { profile },
  addComment,
  deleteComment,
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCourseById(match.params.id);
  }, [getCourseById, getCurrentProfile, enrollCourse, enrollStudent]);

  const [formData, setFormData] = useState({
    student: null,
    studentID: null,
    comment: '',
    star: '',
    courseID: null,
  });

  const { student, studentID, comment, star, courseID } = formData;

  const onClick = (e) => {
    e.preventDefault();

    enrollStudent(match.params.id, history);
    enrollCourse(match.params.id, history);
  };

  const ratingChanged = (rating) => {
    setFormData({
      ...formData,
      star: parseInt(rating),
    });
  };

  const getStars = (stars) => {
    let i = 1;
    let x = 0;
    while (i <= stars) {
      x += 1;
      i++;
    }
    return x;
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      student: profile.user.name,
      studentID: profile.user._id,
      courseID: course._id,
      [e.target.name]: e.target.value,
    });
  };

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  const getStarAverage = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(formData);
    setFormData({
      ...formData,
      comment: '',
    });

    //createCourse(formData, history, userID);
  };
  const deleteReview = (reviewID) => {
    let courseID = course._id;

    deleteComment(courseID, reviewID);
  };

  return (
    <Fragment>
      {course === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
                  <div className='card-body'>
                    <span className='card-text'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-8'>
                            {profile.user.role === 'student' && (
                              <Link to='/student-courses' className='text-info'>
                                Back To All Courses
                              </Link>
                            )}
                            {profile.user.role === 'teacher' && (
                              <Link to='/teacher-courses' className='text-info'>
                                Back To All Courses
                              </Link>
                            )}

                            {course.title && (
                              <p className='display-4'>{course.title} </p>
                            )}
                            <hr></hr>
                            <p style={{ fontSize: '17px' }}>
                              {course.description.substring(0, 300)}...
                            </p>

                            <p>
                              Taught By{' '}
                              <span className='text-dark font-weight-bold'>
                                {course.teacher}
                              </span>
                            </p>
                            {getStarAverage() >= 4 &&
                            course.review.length >= 5 ? (
                              <div className=''>
                                <p
                                  className='badge badge-warning badge-lg'
                                  style={{ fontSize: '15px' }}
                                >
                                  Bestseller
                                </p>
                              </div>
                            ) : (
                              <div className=''>
                                <p
                                  className='badge badge-pill badge-success'
                                  style={{ fontSize: '15px' }}
                                >
                                  New!
                                </p>
                              </div>
                            )}
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

                              {course.enrolledStudent.find(
                                (enrolledStudent) => {
                                  if (enrolledStudent === profile.user._id) {
                                    return true;
                                  }
                                }
                              ) ? (
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
                          <strong>What you'll learn</strong>
                          <hr></hr>
                          <p>{course.content}</p>
                        </div>
                        <div className='row justify-content-center'>
                          <div className='col-3'>
                            <div
                              style={{
                                border: '1px solid black',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                textAlign: 'center',
                                background: '#3e4444',
                                borderRadius: '4px',
                                color: 'white',
                                boxShadow: '0 5px 15px rgba(145, 92, 182, .4)',
                                transition:
                                  '  transition: all 0.2s ease-in-out',
                              }}
                            >
                              {course.review.length === 0 ? (
                                <p>No Review Available</p>
                              ) : (
                                getStarAverage()
                              )}
                              &nbsp;Ratings
                            </div>
                          </div>
                          <div className='col-4'>
                            <div
                              style={{
                                border: '1px solid black',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                textAlign: 'center',
                                background: '#3e4444',
                                borderRadius: '4px',
                                color: 'white',
                                boxShadow: '0 5px 15px rgba(145, 92, 182, .4)',
                                transition:
                                  '  transition: all 0.2s ease-in-out',
                              }}
                            >
                              {course.enrolledStudent.length} - Students
                              Enrolled
                            </div>
                          </div>
                          <div className='col-3'>
                            <div
                              style={{
                                border: '1px solid black',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                textAlign: 'center',
                                background: '#3e4444',
                                borderRadius: '4px',
                                color: 'white',
                                boxShadow: '0 5px 15px rgba(145, 92, 182, .4)',
                                transition:
                                  '  transition: all 0.2s ease-in-out',
                              }}
                            >
                              {course.review.length} - Reviews
                            </div>
                          </div>
                        </div>

                        <hr></hr>
                        <div className='row'>
                          <div className='col'>
                            <h4>Requirements</h4>
                            {course.prerequisite}
                          </div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                          <div className='col'>
                            <h4>All Reviews ({course.review.length})</h4>
                            <form onSubmit={onSubmit} id='review-form'>
                              <div className='form-group'>
                                <label htmlFor='review'>
                                  Write your Review Here
                                </label>
                                <textarea
                                  className='form-control'
                                  id='comment'
                                  rows='3'
                                  name='comment'
                                  value={comment}
                                  onChange={(e) => onChange(e)}
                                ></textarea>
                                <label htmlFor='star'>Stars</label>
                                <br></br>
                                <input
                                  type='hidden'
                                  value={star}
                                  min='1'
                                  max='5'
                                  id='star'
                                  name='star'
                                  disabled
                                  required
                                  onChange={(e) => onChange(e)}
                                />
                                <ReactStars
                                  size={30}
                                  onChange={ratingChanged}
                                />
                              </div>
                              <input
                                type='submit'
                                className='btn btn-primary my-1 mr-2'
                              />
                            </form>
                          </div>
                        </div>
                        <hr></hr>
                        <Alert />
                        <div className='row'>
                          <div className='col'>
                            <h6>Reviews</h6>
                            {course.review && (
                              <div>
                                {course.review.map((review) => {
                                  return (
                                    <div key={review._id}>
                                      <div className='card text-dark mb-3 shadow-md p-1 mb-5 bg-light rounded'>
                                        <div className='card-body'>
                                          <span className='card-text'>
                                            <h5>
                                              <FcCustomerSupport />
                                              &nbsp;&nbsp;
                                              {review.student}
                                            </h5>
                                            <h5 className='text-muted'>
                                              {review.comment}
                                            </h5>
                                            <h6 className='badge badge-warning '>
                                              {getStars(review.star)}
                                            </h6>
                                            <h6 className='badge badge-light'>
                                              Stars
                                            </h6>
                                            <hr></hr>
                                            <span>
                                              <FcCalendar />
                                              &nbsp;&nbsp;
                                              {review.date}
                                            </span>
                                          </span>
                                          <div className='float-right'>
                                            {profile.user._id ===
                                              review.studentID && (
                                              <button
                                                className='btn btn-danger'
                                                onClick={() => {
                                                  deleteReview(review._id);
                                                }}
                                              >
                                                Delete
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapSatateToProps, {
  getCourseById,
  enrollCourse,
  enrollStudent,
  getCurrentProfile,
  addComment,
  deleteComment,
  getCourseById,
})(withRouter(StudentCourse));
