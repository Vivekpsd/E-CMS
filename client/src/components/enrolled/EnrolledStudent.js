import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { getCourseById } from '../../actions/course';
import { getProfiles } from '../../actions/profile';
import ProfileItem from '../profiles/ProfileItem';

const EnrolledStudent = ({
  getProfiles,
  profile: { profiles },
  match,
  getCourseById,
  course: { course, loading },
}) => {
  useEffect(() => {
    getProfiles();
    getCourseById(match.params.id);
  }, [getCourseById, getProfiles]);

  const test = (studentID) => {
    return (
      <div>
        {profiles.length > 0 ? (
          profiles.map((profile) => {
            return (
              <div>
                {profile.user._id === studentID && (
                  <ProfileItem key={profile.user._id} profile={profile} />
                )}
              </div>
            );
          })
        ) : (
          <h4>No profiles found...</h4>
        )}
        ;
      </div>
    );
  };
  return (
    <Fragment>
      {course === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/courses' className='btn btn-light'>
            Back To All Courses
          </Link>
          <div className='profiles'>
            {course.enrolledStudent.length > 0 ? (
              course.enrolledStudent.map((student) => {
                return <div>{test(student)} </div>;
              })
            ) : (
              <h4>No student found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

EnrolledStudent.propTypes = {
  getCourseById: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapSatateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
});

export default connect(mapSatateToProps, {
  getCourseById,
  getProfiles,
})(withRouter(EnrolledStudent));
