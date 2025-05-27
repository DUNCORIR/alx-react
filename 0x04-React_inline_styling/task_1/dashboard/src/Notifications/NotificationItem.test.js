import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct message if no notifications', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
  });

  it('renders listNotifications when provided', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find('NotificationItem').length).toBe(notifications.length);
  });

  it('calls markAsRead and logs when markAsRead is triggered', () => {
    console.log = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    console.log.mockRestore();
  });
});