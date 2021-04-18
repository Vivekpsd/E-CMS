import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { getCourseById } from '../../actions/course';
import { deleteCourse } from '../../actions/course';
import ProfilePic from '../layouts/ProfilePic';
import DashboardActions from '../dashboard/DashboardAction';

const Course = ({
  match,
  getCourseById,
  course: { course, loading },
  deleteCourse,
  history,
}) => {
  useEffect(() => {
    getCourseById(match.params.id);
  }, [getCourseById]);

  console.log(process.env);
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
                            <Link to='/courses' className='text-info'>
                              Back To All Courses
                            </Link>
                            {course.title && (
                              <p className='display-4'>{course.title} </p>
                            )}
                            <hr></hr>
                            <p style={{ fontSize: '17px' }}>
                              {course.description.substring(0, 250)}...
                            </p>
                          </div>
                          <div className='col-4 align-self-center'>
                            <div
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + course.img
                                })`,
                                height: '300px',

                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                        </div>

                        <div className='alert alert-info mt-4 mb-4'>
                          <h5>What you'll learn</h5>
                          <hr></hr>
                          <p>{course.content}</p>
                        </div>
                        <div className='row'>
                          <div className='col-2'>
                            <p className='badge badge-warning badge-lg'>
                              Bestseller
                            </p>
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
                        <div className='row mt-5'>
                          <div className='col'>
                            &nbsp;
                            <Link
                              to={`/editcourse/${course._id}`}
                              className='btn btn-dark'
                            >
                              Edit Course
                            </Link>
                            &nbsp;
                            <Link
                              to={`/viewstudent/${course._id}`}
                              className='btn btn-warning'
                            >
                              View Student
                            </Link>
                            &nbsp;
                            <button
                              onClick={() => deleteCourse(course._id, history)}
                              className='btn btn-danger'
                            >
                              Delete Course
                            </button>
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

Course.propTypes = {
  getCourseById: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
});

export default connect(mapSatateToProps, {
  getCourseById,
  deleteCourse,
})(withRouter(Course));
