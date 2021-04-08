import axios from 'axios';
import { setAlert } from './alert';

import { ASSIGNMENT_COURSE, ASSIGNMENT_ERROR, GET_ASSIGNMENTS } from './types';

//Get all Courses
export const getAssignmentCourse = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:5000/api/assignment/courselist'
    );

    dispatch({
      type: ASSIGNMENT_COURSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: { msg: err.response },
    });
  }
};
//Get all assignment uploaded by student
export const getUploadedAssignment = (courseID) => async (dispatch) => {
  console.log(courseID);
  try {
    const res = await axios.get(
      `http://localhost:5000/api/assignment/course-list/${courseID}`
    );

    dispatch({
      type: GET_ASSIGNMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: { msg: err.response },
    });
  }
};

//Get uploaded assignments by student in specific courses
// export const getUploadedAssignments = (assignID) => async (dispatch) => {
//   console.log(assignID);
//   try {
//     const res = await axios.get(
//       `http://localhost:5000/api/assignment/course-list/${courseID}`
//     );

//     dispatch({
//       type: GET_ASSIGNMENTS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ASSIGNMENT_ERROR,
//       payload: { msg: err.response },
//     });
//   }
// };
