import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import { getCourses } from '../../actions/course';
import {
  getAssignmentCourse,
  getUploadedAssignment,
} from '../../actions/assignment';
import Spinner from '../layouts/Spinner';

const AssignmentFileStudent = ({
  match,
  getCourses,
  course: { courses, loading },
  getCurrentProfile,
  profile: { profile },
  getAssignmentCourse,
  getUploadedAssignment,
  assignment,
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCourses();
    getAssignmentCourse();
    getUploadedAssignment(match.params.id);
  }, [
    getCurrentProfile,
    getCourses,
    getAssignmentCourse,
    getUploadedAssignment,
  ]);

  return (
    <Fragment>
      {loading && assignment.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h3>List of Assignments </h3>
                <hr></hr>
                {assignment.assignments.map((course) => {
                  return (
                    <div>
                      {course}
                      <Link
                        to={`/upload-assignment-student/${match.params.id}/${course}`}
                        style={{ textDecoration: 'none', color: 'red' }}
                      >
                        - Upload Assignment
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

AssignmentFileStudent.propTypes = {
  getCourses: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getAssignmentCourse: PropTypes.object.isRequired,
  getUploadedAssignment: PropTypes.object.isRequired,
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
  getUploadedAssignment,
})(AssignmentFileStudent);
