import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('should return the default state', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: initialCourses,
    };
    const state = courseReducer([], action);
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  it('should handle SELECT_COURSE action', () => {
    const fetchedState = courseReducer([], {
      type: FETCH_COURSE_SUCCESS,
      data: initialCourses,
    });
    const action = { type: SELECT_COURSE, index: 2 };
    const state = courseReducer(fetchedState, action);
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const fetchedState = courseReducer([], {
      type: FETCH_COURSE_SUCCESS,
      data: initialCourses,
    });
    // first select, then unselect
    const selectedState = courseReducer(fetchedState, { type: SELECT_COURSE, index: 2 });
    const state = courseReducer(selectedState, { type: UNSELECT_COURSE, index: 2 });
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });
});