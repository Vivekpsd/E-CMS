import React, { Fragment } from 'react';

import { FcCalendar, FcInfo } from 'react-icons/fc';

const MessageItem = ({
  profile,
  message: { message, sentBy, senderID, date },
}) => {
  return (
    <Fragment>
      <div>
        {profile.user._id === senderID ? (
          <Fragment>
            <div className='container '>
              <div className='row'>
                <div className='col-10 ml-auto mt-3'>
                  <div
                    className='pl-5 pt-4 pb-3 pr-5'
                    style={{
                      border: '2px solid black',
                      borderRadius: '10px',
                      backgroundColor: 'white',
                      opacity: '0.9',
                    }}
                  >
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
                        <div className='col-7'>
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
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='container'>
              <div className='row'>
                <div className='col-10 mt-4'>
                  <div
                    className='pl-5 pt-4 pb-3 pr-5'
                    style={{
                      border: '2px solid black',
                      borderRadius: '10px',
                      backgroundColor: 'white',
                      opacity: '0.9',
                    }}
                  >
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
                    <p>
                      <FcCalendar /> <span>{date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default MessageItem;
