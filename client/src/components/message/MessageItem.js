import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FcCalendar, FcInfo } from 'react-icons/fc';

const MessageItem = ({
  profile,
  message: { message, sentBy, senderID, date },
}) => {
  return (
    <Fragment>
      {profile.user._id === senderID ? (
        <Fragment>
          <div className='card text-dark mb-3 shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='card-body'>
              <span className='card-text'>
                <blockquote className='blockquote'>
                  <p className='mb-0'>{message}</p>

                  <footer className='blockquote-footer'>
                    <cite title='Source Title'>
                      {profile.user._id === senderID ? (
                        <span>Send by you</span>
                      ) : (
                        <span>{sentBy}</span>
                      )}
                    </cite>
                  </footer>
                </blockquote>

                {/* <p>{senderID}</p> */}
                <div className='container'>
                  <div className='row'>
                    <div className='col-3'>
                      <p>
                        <FcCalendar /> <span>{date}</span>
                      </p>
                    </div>
                    <div className='col-3 ml-auto'>
                      <p>
                        <FcInfo /> <span>Sent By You</span>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='card text-dark mb-3 shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='card-body'>
              <span className='card-text'>
                <blockquote className='blockquote'>
                  <p className='mb-0'>{message}</p>

                  <footer className='blockquote-footer'>
                    <cite title='Source Title'>
                      {profile.user._id === senderID ? (
                        <span>Send By You</span>
                      ) : (
                        <span>{sentBy}</span>
                      )}
                    </cite>
                  </footer>
                </blockquote>

                {/* <p>{senderID}</p> */}
                <div className='container'>
                  <div className='row'>
                    <div className='col-3'>
                      <p>
                        <FcCalendar /> <span>{date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MessageItem;
