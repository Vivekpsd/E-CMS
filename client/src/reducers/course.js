import {
  GET_COURSES,
  COURSES_ERROR,
  GET_COURSE,
  CLEAR_COURSE,
  UPDATE_COURSE,
} from '../actions/types';

const initialState = {
  course: null,
  courses: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false,
      };
    case COURSES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_COURSE:
    case UPDATE_COURSE:
      return {
        ...state,
        course: payload,
        loading: false,
      };
    case CLEAR_COURSE:
      return {
        ...state,
        course: null,
        loading: false,
      };
    default:
      return state;
  }
}
