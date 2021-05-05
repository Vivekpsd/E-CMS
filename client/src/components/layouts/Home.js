import React, { useEffect, Fragment } from 'react';
import './pages/pages.css';
import Card from './card/card';
import Navbar from './components/navbar';
import { Container } from 'react-bootstrap';
import Topsection from './components/topsection';
import Titles from './components/bellowts';
import FeaturedCource from './components/featuredCource';
import Footer from './components/footer';
import Svg from './assets/undraw_teaching_f1cm.svg';
import Spinner from '../layouts/Spinner';
import { getCourses } from '../../actions/course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentCourseItem from '../courses/StudentCourseItem';
import { Alert } from '../layouts/Alert';

const Home = ({ getCourses, course: { courses, loading } }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div className='App'>
      <Container>
        <Topsection
          headimage={Svg}
          head='E-GURUKUL'
          description={
            <p>
              A new way to get educate <br /> and learn from anywhere.
            </p>
          }
        />
        <Titles />
      </Container>
      <hr />
      <Container>
        <div className='heading-bts'>
          <h3>The world's top selection of courses</h3>
          <p>
            Choose from various courses taught by the professional teachers.
          </p>
        </div>
        <div className='row'>
          {courses.length > 0 ? (
            courses.map((course) => (
              <StudentCourseItem
                course={course}
                key={course._id}
                role='student'
              />
            ))
          ) : (
            <h4>No courses found...</h4>
          )}
        </div>
        <FeaturedCource
          title='Expand your career opportunities with Python'
          description="Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability."
          explore='Explore more >'
        />
      </Container>
      <br></br>
    </div>
  );
};
Home.propTypes = {
  getCourses: PropTypes.func.isRequired,
};
const mapSatateToProps = (state) => ({
  course: state.course,
});

export default connect(mapSatateToProps, {
  getCourses,
})(Home);
