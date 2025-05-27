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
describe('CourseListRow component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test header" />);
    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');

    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe('2');
    expect(th.text()).toBe('Test header');
  });

  it('renders two th cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');

    const ths = wrapper.find('th');
    expect(ths).toHaveLength(2);
    expect(ths.at(0).text()).toBe('First');
    expect(ths.at(1).text()).toBe('Second');
  });

  it('renders two td elements with correct text when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');

    const tds = wrapper.find('td');
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toBe('Cell 1');
    expect(tds.at(1).text()).toBe('Cell 2');
  });

  it('renders second cell as empty if textSecondCell is not provided and isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Only one" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');

    const tds = wrapper.find('td');
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toBe('Only one');
    expect(tds.at(1).text()).toBe(''); // Default null renders as empty string
  });
});