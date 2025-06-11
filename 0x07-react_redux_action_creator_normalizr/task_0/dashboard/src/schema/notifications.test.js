import { getAllNotificationsByUser } from './notifications';
import * as rawData from '../../../notifications.json';

describe('getAllNotificationsByUser', () => {
  test('returns correct context objects for known user ID', () => {
    const userId = '5debd764a7c57c7839d722e9';

    const result = getAllNotificationsByUser(userId);

    expect(result).toEqual(expect.arrayContaining([
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ]));
  });

  test('returns empty array for unknown user ID', () => {
    const result = getAllNotificationsByUser('unknown-id');
    expect(result).toEqual([]);
  });

  test('returns only context objects with expected structure', () => {
    const result = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

    for (const context of result) {
      expect(context).toHaveProperty('guid');
      expect(context).toHaveProperty('isRead');
      expect(context).toHaveProperty('type');
      expect(context).toHaveProperty('value');

      expect(context).not.toHaveProperty('author');
      expect(context).not.toHaveProperty('id');
    }
  });

  test('returns empty array for non-string input (number)', () => {
    const result = getAllNotificationsByUser(12345);
    expect(result).toEqual([]);
  });

  test('returns empty array for null input', () => {
    const result = getAllNotificationsByUser(null);
    expect(result).toEqual([]);
  });
});