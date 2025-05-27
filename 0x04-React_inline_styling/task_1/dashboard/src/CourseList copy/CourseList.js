import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  // If listCourses is not provided or empty
  if (!listCourses || listCourses.length === 0) {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          <CourseListRow
            textFirstCell="No course available yet"
            textSecondCell=""
          />
        </tbody>
      </table>
    );
  }

  // When courses exist
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.map(({ id, name, credit }) => (
          <CourseListRow
            key={id}
            textFirstCell={name}
            textSecondCell={credit}
          />
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;