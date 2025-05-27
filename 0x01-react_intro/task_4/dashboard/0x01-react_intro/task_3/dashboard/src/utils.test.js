// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  test('getFooterCopy returns ALX when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  test('getFooterCopy returns ALX main dashboard when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  test('getLatestNotification returns the expected string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});