import React, { Fragment, useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    //
    //   } else {
    //     const newUser = {
    //       name,
    //       email,
    //       password,
    //     };

    //     try {
    //       const config = {
    //         header: {
    //           'Content-Type': 'application/json',
    //         },
    //       };

    //       const res = await axios.post(
    //         'http://localhost:5000/api/users',
    //         newUser,
    //         config
    //       );
    //       console.log(res.data);
    //     } catch (err) {
    //       console.log(err.response.data);
    //     }
    //   }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className=''>Login Here</i>
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='login' />
      </form>
    </Fragment>
  );
};

export default Login;
