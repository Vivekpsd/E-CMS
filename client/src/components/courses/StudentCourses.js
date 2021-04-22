import React, { Fragment, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';
import DashboardImg1 from '../../img/dashboardImg1.jpg';
import { FaArrowRight } from 'react-icons/fa';

import './courses.css';

const Courses = ({
  getCourses,
  course: { course, courses, loading },
  profile: { profile },
}) => {
  useEffect(() => {
    getCourses();
    getCurrentProfile();
  }, [getCourses, getCurrentProfile]);

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  const getStarAverage = (course) => {
    let sum = 0,
      len = 0;
    course.review.map((review) => {
      sum += review.star;
      len += 1;
    });

    let avg = sum / len;
    let ans = roundToTwo(avg);
    if (ans === null) {
      return 0;
    }
    return ans;
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container mt-5'>
            <div className='' style={{ paddingTop: '50px' }}>
              <h2>All Courses</h2>
              <hr></hr>
            </div>
            <div className='row'>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div className='col-4'>
                    <div className='card'>
                      <div
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + '/courses/' + course.img
                          })`,
                          height: '300px',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          {course.title} &nbsp; &nbsp; &nbsp;{' '}
                        </h5>
                        <p className='card-text'>
                          By {course.teacher}
                          <span className='text-muted'>
                            <span className='float-right'>
                              {course.review.length === 0
                                ? 'No Review'
                                : getStarAverage(course)}{' '}
                              ({course.review.length})
                            </span>
                          </span>
                        </p>
                        <pre>₹ {course.price}</pre>
                        <p className='card-text'>
                          <Link
                            to={`/studentcourse/${course._id}`}
                            className='course-btn'
                            style={{ textDecoration: 'none' }}
                          >
                            View Course &nbsp;
                            <FaArrowRight />
                          </Link>
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                ))
              ) : (
                <h4>No courses found...</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCourses, getCurrentProfile })(
  Courses
);
