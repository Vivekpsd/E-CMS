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
import axios from 'axios';

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

  const download = async (course) => {
    axios({
      url: `http://localhost:5000/api/assignment/student/download-assignment/${match.params.id}/${course}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = link;

      link.setAttribute('download', course);
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
                      <Link
                        onClick={() => {
                          download(course);
                        }}
                      >
                        Download
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
