import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendMessage } from '../../actions/profile';
import { getCourses } from '../../actions/course';
import DashboardActions from '../dashboard/DashboardAction';

const SendMessage = ({
  getCourses,
  course: { courses },
  sendMessage,
  history,
}) => {
  const [formData, setFormData] = useState({
    message: '',
    sentBy: 'Test',
    senderID: '01',
    typeMsg: '',
  });
  const { message, sentBy, senderID, typeMsg } = formData;
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData, history);
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-10 mx-auto mt-4'>
                  <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
                    <h2 className='display-4 text-center'>Send Message</h2>
                    <div className='card-body'>
                      <span className='card-text'>
                        <hr></hr>
                        <form className='form' onSubmit={(e) => onSubmit(e)}>
                          <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                              placeholder='Enter your message here'
                              id='message'
                              className='form-control'
                              name='message'
                              value={message}
                              onChange={(e) => onChange(e)}
                            />
                            <small className='form-text text-muted'>
                              This field is required
                            </small>
                          </div>
                          <div className='form-group col-md-4'>
                            <label htmlFor='typeMsg'>Choose Course</label>
                            <select
                              id='typeMsg'
                              className='form-control'
                              name='typeMsg'
                              onChange={(e) => onChange(e)}
                            >
                              <option value='' defaultValue>
                                All
                              </option>
                              {courses.length > 0 ? (
                                courses.map((course) => (
                                  <option value={course._id} key={course._id}>
                                    {course.title}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <br></br>
                          <input
                            type='submit'
                            className='login-button'
                            value='Send Message'
                          />
                          <br></br>
                          <br></br>
                          <Link
                            className='btn btn-dark float-right'
                            to='/message'
                          >
                            Back to Messages
                          </Link>
                        </form>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SendMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, { sendMessage, getCourses })(
  SendMessage
);
