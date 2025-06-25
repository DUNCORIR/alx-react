import { normalize, schema } from 'normalizr';
import notificationsData from '../../../../notifications.json';

// Define user entity
const user = new schema.Entity('users');
const courseEntity = new schema.Entity('courses');
const courseListSchema = [courseEntity];

// Define message entity with idAttribute 'guid'
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define notification entity with references
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the data
export const normalizedData = normalize(notificationsData, [notification]);

/**
 * coursesNormalizer - normalize course data
 * @param {Array} data - array of course objects
 * @returns {Object} normalized data
 */
export const coursesNormalizer = (data) => normalize(data, courseListSchema);

import { schema, normalize } from 'normalizr';

// Define notification entity
const notificationEntity = new schema.Entity('notifications');
const notificationListSchema = [notificationEntity];

/**
 * notificationsNormalizer - normalize notification data
 * @param {Array} data - array of notification objects
 * @returns {Object} normalized data
 */
export const notificationsNormalizer = (data) => normalize(data, notificationListSchema);