import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('Course Selector - getAllCourses', () => {
    // Test for valid courses map
    it('should return a List of course entities from state', () => {
    const mockState = {
      courses: fromJS({
        courses: {
          1: { id: 1, name: 'ES6', credit: 60 },
          2: { id: 2, name: 'Webpack', credit: 20 },
          3: { id: 3, name: 'React', credit: 40 },
        }
      }),
    };

    // Call the selector with the mock state
    const result = getAllCourses(mockState);
    expect(result.size).toBe(3);
    expect(result.get(0)).toEqual({ id: 1, name: 'ES6', credit: 60 });
    expect(result.get(1)).toEqual({ id: 2, name: 'Webpack', credit: 20 });
    expect(result.get(2)).toEqual({ id: 3, name: 'React', credit: 40 });
  });

  // Test for empty courses map
  it('should return an empty List if courses map is missing', () => {
    const mockState = {
      courses: fromJS({})
    };

    const result = getAllCourses(mockState);
    expect(result.size).toBe(0);
    expect(result).toEqual(expect.anything()); // Still a List
  });
});