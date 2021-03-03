import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfilePic from '../layouts/ProfilePic';
import { FcBookmark } from 'react-icons/fc';
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar, role },
    bio,
    skills,
    githubusername,
  },
}) => {
  return (
    <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
      <div className='card-body'>
        <span className='card-text'>
          <div className='container'>
            <div className='row'>
              <div className='col-2'>
                <ProfilePic />
              </div>
              <div className='col-4 ml-5'>
                <h3>{name}</h3>
                <p>About - {bio}</p>
                <p>GitHub Username - {githubusername}</p>
                <hr></hr>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                  View Profile
                </Link>
              </div>

              <div className='col-4'>
                <p className='my-1'></p>
                <p className='text-muted'>Skills</p>
                <ul className='list-unstyled'>
                  {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className='text-dark pt-1'>
                      <FcBookmark className='mr-2' /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-1'>
                {role === 'admin' && (
                  <div className='badge badge-danger p-2 mt-2 mb-2'>Admin</div>
                )}
                {role === 'student' && (
                  <div className='badge badge-info p-2 mt-2 mb-2'>Student</div>
                )}
                {role === 'teacher' && (
                  <div className='badge badge-warning p-2 mt-2 mb-2'>
                    Teacher
                  </div>
                )}
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
