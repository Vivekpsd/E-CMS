import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCourse } from '../../actions/course';

const CreateCourse = ({ createCourse, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    teacher: '',
    startDate: '',
    endDate: '',
    prerequisite: '',
  });

  const {
    title,
    description,
    content,
    teacher,
    startDate,
    endDate,
    prerequisite,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createCourse(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create New Course</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create your course here
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <label for='title'>Course Title</label>
          <input
            id='title'
            className='form-control'
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label for='descirption'>Description</label>
          <textarea
            placeholder='A breif intro of the course'
            id='description'
            className='form-control'
            name='description'
            value={description}
            onChange={onChange}
          />
          <small className='form-text text-muted'>Description of Project</small>
        </div>
        <div className='form-group'>
          <label for='content'>Course Content</label>
          <input
            id='content'
            className='form-control'
            type='text'
            placeholder='content'
            name='content'
            value={content}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label for='teacher'>Teacher Name</label>
          <input
            id='teacher'
            className='form-control'
            type='text'
            placeholder='teacher'
            name='teacher'
            value={teacher}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label for='bio'>Start Date</label>
          <input
            id='startDate'
            type='date'
            className='form-control'
            name='startDate'
            value={startDate}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label for='endDate'>End Date</label>
          <input
            id='endDate'
            type='date'
            className='form-control'
            name='endDate'
            value={endDate}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label for='prerequisite'>Prerequisite</label>
          <input
            placeholder='A breif intro of the course'
            id='prerequisite'
            className='form-control'
            name='prerequisite'
            value={prerequisite}
            onChange={onChange}
          />
          <small className='form-text text-muted'>
            Things student should know before appling for this course
          </small>
        </div>

        <input type='submit' className='btn btn-primary my-1 mr-2' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateCourse.propTypes = {
  createCourse: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//     profile: state.profile
//   });

export default connect(null, { createCourse })(withRouter(CreateCourse));
