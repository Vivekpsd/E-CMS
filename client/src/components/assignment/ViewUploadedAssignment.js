import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import { getCourses } from '../../actions/course';

import {
  getAssignmentCourse,
  getUploadedAssignment,
  getUploadedAssignments,
} from '../../actions/assignment';
import Spinner from '../layouts/Spinner';
import axios from 'axios';

const ViewUploadedAssignment = ({
  match,
  getCourses,
  course: { courses, loading },
  getCurrentProfile,
  profile: { profile },
  getAssignmentCourse,
  getUploadedAssignment,
  getUploadedAssignments,
  assignment,
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCourses();
    getAssignmentCourse();
    getUploadedAssignment(match.params.id);
    getUploadedAssignments(match.params.id, match.params.name);
  }, [
    getCurrentProfile,
    getCourses,
    getAssignmentCourse,
    getUploadedAssignment,
    getUploadedAssignments,
  ]);

  const download = async (file) => {
    axios({
      url: `http://localhost:5000/api/assignment/download-assignment/${match.params.id}/${match.params.name}/${file}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = link;

      link.setAttribute('download', file);
      document.body.appendChild(link);

      link.click();
    });
  };

  return (
    <Fragment>
      {loading && assignment.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {assignment.assignment.map((uploaded) => {
            return (
              <div>
                {uploaded}
                <Link
                  onClick={() => {
                    download(uploaded);
                  }}
                >
                  Download
                </Link>
              </div>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

ViewUploadedAssignment.propTypes = {
  getCourses: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getAssignmentCourse: PropTypes.object.isRequired,
  getUploadedAssignment: PropTypes.object.isRequired,
  getUploadedAssignments: PropTypes.object.isRequired,
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
  getUploadedAssignments,
})(ViewUploadedAssignment);
