import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alert';

//Register User

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  const body = { name, email, password };

  try {
    console.log(body);
    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
