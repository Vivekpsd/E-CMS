import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { FaUser, FaCode } from 'react-icons/fa';
import LoginBackground from '../../img/login-background.jpg';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Fragment>
      <div
        className='container-fluid'
        style={{
          paddingTop: '70px',
        }}
      >
        <div className='row'>
          <div className='col-sm-6 mx-auto mt-4'>
            <div className='card text-dark bg-light mb-3 shadow p-3 mb-5 bg-white rounded'>
              <h2 className='display-4 text-center'>Login</h2>
              <div className='card-body'>
                <span className='card-text'>
                  <hr></hr>
                  <form className='form' onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                      <label htmlFor='email'>
                        {' '}
                        <FaUser />
                        &nbsp; Email
                      </label>
                      <input
                        id='email'
                        type='email'
                        className='form-control'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password'>
                        <FaCode />
                        &nbsp;Password
                      </label>
                      <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        className='form-control'
                        name='password'
                        value={password}
                        minLength='6'
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <br></br>
                    <input
                      type='submit'
                      className='btn btn-info btn-block'
                      value='login'
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
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
