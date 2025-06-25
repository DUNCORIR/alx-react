import { List } from 'immutable';

/**
 * Selector to get all course entities from the state
 * and return them as a List using valueSeq.
 *
 * @param {Object} state - Redux state
 * @returns {List} List of course objects
 */
export const getAllCourses = (state) => {
    // Ensure courses is a Map and return its valueSeq as a List
    const coursesMap = state.courses.get('courses');
  if (!coursesMap) return List();
  return coursesMap.valueSeq().toList();
};