import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications'; // Unconnected component for unit testing
import NotificationItem from './NotificationItem';

// Notifications component test suite
describe('Notifications component', () => {
  let wrapper;

  // test suite for Notifications component
  describe('With empty listNotifications or no props', () => {
    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    // Renders without crashing
    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    // Displays "No new notification for now"
    it('displays "No new notification for now"', () => {
      expect(wrapper.find('NotificationItem').length).toBe(1);
      expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
    });

    // Does not display "Here is the list of notifications"
    it('does not display "Here is the list of notifications"', () => {
      expect(wrapper.text().includes('Here is the list of notifications')).toBe(false);
    });
  });

  // With populated listNotifications
  describe('With populated listNotifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
    ];

    // Before each test, shallow render the Notifications component with listNotifications prop
    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    });

    // Renders all NotificationItem components
    it('renders all NotificationItem components', () => {
      expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    // Displays "Here is the list of notifications"
    it('displays "Here is the list of notifications"', () => {
      expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });
  });
});

// markAsRead method behavior
describe('markAsRead dispatch', () => {
  it('calls markAsAread with correct ID', () => {
    const mockMark = jest.fn();
    const wrapper = shallow(<Notifications markAsAread={mockMark} />);
    const instance = wrapper.instance();
    instance.markAsRead(99);
    expect(mockMark).toHaveBeenCalledWith(99);
  });
});

// Component re-render behavior
describe('Component re-render behavior', () => {
  const initialNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const newNotifications = [
    ...initialNotifications,
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
  ];

  // Does not re-render when same listNotifications prop is passed
  it('does not re-render when same listNotifications prop is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={initialNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: initialNotifications });
    expect(shouldUpdate).toBe(false);
  });

  // Re-renders when a longer listNotifications prop is passed
  it('re-renders when a longer listNotifications prop is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={initialNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newNotifications });
    expect(shouldUpdate).toBe(true);
  });
});

// Display/hide drawer logic
describe('Display/hide drawer logic', () => {
  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
    expect(wrapper.find('[data-testid="close-button"]').length).toBe(0);
  });

  // Notifications div behavior
  it('does not display notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.notifications').length).toBe(0);
  });

  // Display drawer behavior
  it('displays menu item and notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
    expect(wrapper.find('[data-testid="close-button"]').length).toBe(1);
    expect(wrapper.find('.notifications').length).toBe(1);
  });

  // Menu item behavior
  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  // Close button behavior
  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find('[data-testid="close-button"]').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});

// Redux behavior
describe('Redux behavior', () => {
  it('calls fetchNotifications on mount', () => {
    const mockFetch = jest.fn();
    shallow(<Notifications fetchNotifications={mockFetch} />);
    expect(mockFetch).toHaveBeenCalled();
  });
});