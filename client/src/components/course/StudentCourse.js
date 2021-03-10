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
