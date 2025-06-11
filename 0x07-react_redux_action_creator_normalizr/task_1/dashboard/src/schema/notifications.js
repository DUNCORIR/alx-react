import { normalize, schema } from 'normalizr';
import notificationsData from '../../../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

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
export { user, message, notification };