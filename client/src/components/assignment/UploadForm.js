import React, { Fragment, useEffect, useState } from 'react';
import { getCourses } from '../../actions/course';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { uploadAssignment } from '../../actions/course';
const UploadForm = ({
  getCourses,
  getCurrentProfile,
  course: { courses, loading },
  profile: { profile },
  uploadAssignment,
}) => {
  useEffect(() => {
    getCourses();
    getCurrentProfile();
  }, [getCourses]);

  //const [formData, setFormData] = useState('');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  // const { title, description, endDate } = formData;

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    uploadAssignment(formData);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
    // <Fragment>
    //   <form
    //     className='form'
    //     method='POST'
    //     action='/'
    //     encType='multipart/form-data'
    //     onSubmit={onSubmit}
    //   >
    //     {/* <div className='form-group'>
    //       <label htmlFor='title'>Assignment Title</label>
    //       <input
    //         id='title'
    //         className='form-control'
    //         type='text'
    //         placeholder='Title'
    //         name='title'
    //         value={title}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <div className='form-group'>
    //       <label htmlFor='descirption'>Assignment Description</label>
    //       <textarea
    //         placeholder='A breif intro of the course'
    //         id='description'
    //         className='form-control'
    //         name='description'
    //         value={description}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <label htmlFor='endDate'>End Date</label>
    //       <input
    //         id='endDate'
    //         type='date'
    //         className='form-control'
    //         name='endDate'
    //         value={endDate}
    //         onChange={onChange}
    //       />
    //     </div> */}
    //     <div className='custom-file mb-4'>
    //       <input
    //         type='file'
    //         name='file'
    //         className='custom-file-input'
    //         id='file'
    //         onChange={onChange}
    //       />
    //       <label className='custom-file-label' htmlFor='file'>
    //         {filename}
    //       </label>
    //     </div>
    //     <input
    //       type='submit'
    //       value='Upload'
    //       className='form-group btn btn-primary float-right'
    //     />
    //     <br></br>
    //     <Link className='btn btn-light my-1' to='/dashboard'>
    //       Go Back
    //     </Link>
    //   </form>
    // </Fragment>
  );
};
UploadForm.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  uploadAssignment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCourses,
  getCurrentProfile,
  uploadAssignment,
})(UploadForm);
