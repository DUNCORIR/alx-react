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

  describe('markAsRead', () => {
    it('calls console.log with correct message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      const wrapper = shallow(<Notifications />);
      const instance = wrapper.instance();

      // Directly call markAsRead from instance
      instance.markAsRead(42);
      expect(logSpy).toHaveBeenCalledWith('Notification 42 has been marked as read');

      logSpy.mockRestore();
    });
  });

  describe('Component re-render behavior', () => {
  const initialNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const newNotifications = [
    ...initialNotifications,
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
  ];

  it('does not re-render when same listNotifications prop is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={initialNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: initialNotifications });
    expect(shouldUpdate).toBe(false);
  });

  it('re-renders when a longer listNotifications prop is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={initialNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newNotifications });
    expect(shouldUpdate).toBe(true);
  });
});

describe('Display/hide drawer logic', () => {
  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
    expect(wrapper.find('[data-testid="close-button"]').length).toBe(0);
  });

  it('does not display notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.notifications').length).toBe(0);
  });

  it('displays menu item and notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
    expect(wrapper.find('[data-testid="close-button"]').length).toBe(1);
    expect(wrapper.find('.notifications').length).toBe(1);
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find('[data-testid="close-button"]').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});