import axios from 'axios';
import { setAlert } from './alert';

import { COURSES_ERROR, GET_COURSES, GET_COURSE } from './types';

//Get all Courses
export const getCourses = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/course');

    dispatch({
      type: GET_COURSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COURSES_ERROR,
      payload: { msg: err.response },
    });
  }
};

//Get Courses By ID
export const getCourseById = (courseId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/course/id/${courseId}`
    );

    dispatch({
      type: GET_COURSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COURSES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
