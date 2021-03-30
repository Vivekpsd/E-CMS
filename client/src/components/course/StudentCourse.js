import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import StarRating from './StarRating';
import { Link, withRouter } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';
import { enrollStudent } from '../../actions/profile';
import {
  enrollCourse,
  addComment,
  deleteComment,
  getCourseById,
} from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import Alert from '../../components/layouts/Alert';

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

  const onChange = (e) => {
    setFormData({
      ...formData,
      student: profile.user.name,
      studentID: profile.user._id,
      courseID: course._id,
      [e.target.name]: e.target.value,
    });
  };

  const getStarAverage = () => {
    let sum = 0,
      len = 0;
    course.review.map((review) => {
      sum += parseInt(review.star);
      len += 1;
    });

    let avg = sum / len;

    return avg.toFixed(2);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addComment(formData);
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
                      <b>
                        {course.review.length === 0 ? (
                          <p>No Review Available</p>
                        ) : (
                          getStarAverage()
                        )}
                      </b>
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
                  <hr></hr>
                  <div className='row'>
                    <div className='col'>
                      <h4>All Reviews</h4>
                      <form onSubmit={onSubmit}>
                        <div className='form-group'>
                          <label htmlFor='review'>Your Review Here</label>
                          <textarea
                            className='form-control'
                            id='comment'
                            rows='3'
                            name='comment'
                            value={comment}
                            onChange={(e) => onChange(e)}
                          ></textarea>
                          <input
                            type='number'
                            value={star}
                            min='1'
                            max='5'
                            id='star'
                            name='star'
                            value={star}
                            onChange={(e) => onChange(e)}
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
                                      <h6>{review.student}</h6>
                                      <StarRating ratings={review.star} />

                                      <p>{review.comment}</p>
                                      <span>{review.date}</span>
                                    </span>
                                    <div>
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
