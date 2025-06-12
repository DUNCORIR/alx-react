import { getAllNotificationsByUser, normalizedData } from './notifications';

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

describe('normalizedData structure', () => {
  test('has correct result array', () => {
    const expectedIds = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];
    expect(normalizedData.result).toEqual(expect.arrayContaining(expectedIds));
  });

  test('has correct user entity', () => {
    const user = normalizedData.entities.users['5debd764a7c57c7839d722e9'];
    expect(user).toEqual({
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    });
  });

  test('has correct messages entity', () => {
    const message = normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];
    expect(message).toEqual({
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    });
  });

  test('has correct notification entity', () => {
    const notif = normalizedData.entities.notifications['5debd7642e815cd350407777'];
    expect(notif).toEqual({
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    });
  });
});