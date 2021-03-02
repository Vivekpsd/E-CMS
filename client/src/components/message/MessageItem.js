import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MessageItem = ({ message: { message, sentBy, senderID, date } }) => {
  return (
    <div className='message bg-light'>
      <div>
        <h2>{message}</h2>
        <p>{sentBy}</p>
        <p>{senderID}</p>
        <p>{date}</p>
        <p className='my-1'></p>
      </div>
    </div>
  );
};

export default MessageItem;
