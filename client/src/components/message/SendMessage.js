import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage } from '../../actions/profile';
const SendMessage = ({ sendMessage, history }) => {
  const [formData, setFormData] = useState({
    message: '',
    sentBy: 'Test',
    senderID: '01',
  });
  const { message, sentBy, senderID } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData, history);
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 mx-auto mt-4'>
            <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
              <h1 className='display-4 text-center'>Send Message</h1>
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
                    <input
                      type='submit'
                      className='btn btn-info btn-block'
                      value='Send Message'
                    />
                  </form>
                </span>
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
};

export default connect(null, { sendMessage })(SendMessage);
