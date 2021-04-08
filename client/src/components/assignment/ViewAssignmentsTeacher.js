import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import { getCourses } from '../../actions/course';
import { getAssignmentCourse } from '../../actions/assignment';
import Spinner from '../layouts/Spinner';

const ViewAssignmentsTeacher = ({
  getCourses,
  course: { courses, loading },
  getCurrentProfile,
  profile: { profile },
  getAssignmentCourse,
  assignment,
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCourses();
    getAssignmentCourse();
  }, [getCurrentProfile, getCourses, getAssignmentCourse]);

  return (
    <Fragment>
      {loading && assignment.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h3>Subjects of Asignment Uploaded By You</h3>
                <hr></hr>
                {assignment.courses.map((courseID) =>
                  courses.map((allCourseID) => {
                    return (
                      courseID === allCourseID._id && (
                        <div>
                          {allCourseID.title}{' '}
                          <Link
                            to={`/assignment/${allCourseID._id}`}
                            style={{ textDecoration: 'none', color: 'red' }}
                          >
                            - View Uploaded Assignments
                          </Link>
                        </div>
                      )
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewAssignmentsTeacher.propTypes = {
  getCourses: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getAssignmentCourse: PropTypes.object.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
  assignment: state.assignment,
});

export default connect(mapSatateToProps, {
  getCourses,
  getCurrentProfile,
  getAssignmentCourse,
})(ViewAssignmentsTeacher);
