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

const ViewUploadedAssignment = ({
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
    //getUploadedAssignment(match.params.id);
  }, [
    getCurrentProfile,
    getCourses,
    getAssignmentCourse,
    // getUploadedAssignment,
  ]);

  return (
    <Fragment>
      {loading && assignment.loading ? <Spinner /> : <Fragment>Hello</Fragment>}
    </Fragment>
  );
};

ViewUploadedAssignment.propTypes = {
  getCourses: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getAssignmentCourse: PropTypes.object.isRequired,
  // getUploadedAssignment: PropTypes.object.isRequired,
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
  //getUploadedAssignment,
})(ViewUploadedAssignment);
