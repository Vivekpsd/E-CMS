import React, { Fragment } from 'react';

const UploadForm = () => {
  return (
    <Fragment>
      From
      <form
        method='POST'
        action='/'
        enctype='multipart/form-data'
        className='form-control'
      >
        <input type='file' name='file' />
        <input type='submit' value='Upload' />
      </form>
    </Fragment>
  );
};

export default UploadForm;
