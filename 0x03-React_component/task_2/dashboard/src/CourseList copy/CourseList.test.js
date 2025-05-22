import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
  let wrapper;

  describe('With empty listCourses or no props', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders one row with "No course available yet"', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(3); // 2 headers + 1 "No course" row
      expect(wrapper.find('CourseListRow').at(2).props().textFirstCell).toBe('No course available yet');
    });
  });

  describe('With populated listCourses', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders correct number of rows (2 headers + 3 courses)', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });

    it('renders course names and credits correctly', () => {
      const courseRow = wrapper.find('CourseListRow').at(3);
      expect(courseRow.props().textFirstCell).toBe('Webpack');
      expect(courseRow.props().textSecondCell).toBe(20);
    });
  });
});