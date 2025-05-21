import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  let wrapper;

  describe('With empty listNotifications or no props', () => {
    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('displays "No new notification for now"', () => {
      expect(wrapper.find('NotificationItem').length).toBe(1);
      expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
    });

    it('does not display "Here is the list of notifications"', () => {
      expect(wrapper.text().includes('Here is the list of notifications')).toBe(false);
    });
  });

  describe('With populated listNotifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    });

    it('renders all NotificationItem components', () => {
      expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('displays "Here is the list of notifications"', () => {
      expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });
  });
});