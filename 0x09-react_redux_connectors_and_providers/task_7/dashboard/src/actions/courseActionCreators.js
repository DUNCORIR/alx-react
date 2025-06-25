import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from './courseActionTypes';
import { normalize, schema } from 'normalizr';

// Schema for normalization
const course = new schema.Entity('courses');
const courseList = [course];

// Existing actions
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

// Bound versions
export const boundSelectCourse = (index) => (dispatch) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => (dispatch) => dispatch(unSelectCourse(index));

// New action to set fetched courses
export const setCourses = (data) => {
  const normalized = normalize(data, courseList);
  return {
    type: FETCH_COURSE_SUCCESS,
    data: normalized,
  };
};

// Async thunk action to fetch from API
export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/courses.json')
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((err) => console.error('Failed to fetch courses', err));
  };
};