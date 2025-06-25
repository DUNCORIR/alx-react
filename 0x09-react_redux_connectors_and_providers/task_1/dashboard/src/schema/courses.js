import { schema, normalize } from 'normalizr';

// Define course entity
const courseEntity = new schema.Entity('courses');
const courseListSchema = [courseEntity];

/**
 * coursesNormalizer - normalize course data
 * @param {Array} data - array of course objects
 * @returns {Object} normalized data
 */
export const coursesNormalizer = (data) => normalize(data, courseListSchema);