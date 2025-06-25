import courseReducer from './courseReducer';
import { fromJS } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer with Normalizr & Immutable', () => {
  const initialCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('should return initial state', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({});
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: initialCourses };
    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('should handle SELECT_COURSE', () => {
    const fetched = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: initialCourses });
    const state = courseReducer(fetched, { type: SELECT_COURSE, index: 2 });
    expect(state.getIn([2, 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    let state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: initialCourses });
    state = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const unselected = courseReducer(state, { type: UNSELECT_COURSE, index: 2 });
    expect(unselected.getIn([2, 'isSelected'])).toBe(false);
  });
});