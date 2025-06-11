import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseList component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing with empty list', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('CourseListRow').length).toBe(3); // 2 headers + 1 "no courses"
  });

  it('renders listCourses correctly', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find('CourseListRow').length).toBe(courses.length + 2); // headers + courses
    expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toBe('ES6');
    expect(wrapper.find('CourseListRow').at(3).prop('textSecondCell')).toBe(20);
  });
});