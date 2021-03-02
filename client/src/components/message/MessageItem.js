import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';

const MessageItem = ({ message: { message, sentBy, senderID, date } }) => {
  return (
    <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
      <div className='card-body'>
        <span className='card-text'>
          <blockquote className='blockquote'>
            <p className='mb-0'>{message}</p>
            <footer className='blockquote-footer'>
              <cite title='Source Title'>{sentBy}</cite>
            </footer>
          </blockquote>

          {/* <p>{senderID}</p> */}
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
                <h2>
                  <FcCalendar />
                </h2>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
