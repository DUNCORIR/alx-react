import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { normalize, schema } from 'normalizr';

import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from './courseActionTypes';

import {
  selectCourse,
  unSelectCourse,
  fetchCourses
} from './courseActionCreators';

// Setup mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Sample course schema for normalization
const course = new schema.Entity('courses');
const courseList = [course];

// Mock the fetch API
describe('courseActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  // Test for selectCourse action creator
  it('selectCourse returns correct action', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  // Test for unSelectCourse action creator
  it('unSelectCourse returns correct action', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  // Test for fetchCourses action creator
  it('fetchCourses dispatches FETCH_COURSE_SUCCESS with normalized data', () => {
    const mockCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 }
    ];

    // Mock the /courses.json API
    fetchMock.getOnce('/courses.json', {
      body: mockCourses,
      headers: { 'content-type': 'application/json' }
    });

    const expectedNormalized = normalize(mockCourses, courseList);

    // Expected actions to be dispatched
    const expectedActions = [
      {
        type: FETCH_COURSE_SUCCESS,
        data: expectedNormalized,
      }
    ];

    const store = mockStore({});

    // Dispatch the fetchCourses action
    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});