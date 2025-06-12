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

// Task 2 prep: Get all notifications by user
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  if (typeof userId !== 'string') return [];

  const result = [];
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      const contextId = notifications[id].context;
      if (messages[contextId]) {
        result.push(messages[contextId]);
      }
    }
  }
  return result;
}

export { user, message, notification };