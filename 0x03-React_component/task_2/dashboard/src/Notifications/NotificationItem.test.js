import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test notification" />);
    expect(wrapper.text()).toBe('Test notification');
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('renders correctly with html prop', () => {
    const html = { __html: '<strong>Test HTML</strong>' };
    const wrapper = shallow(<NotificationItem type="urgent" html={html} />);
    expect(wrapper.html()).toContain('<strong>Test HTML</strong>');
  });

  it('calls markAsRead with correct ID when clicked', () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        id={42}
        type="default"
        value="Clickable"
        markAsRead={mockMarkAsRead}
      />
    );
    wrapper.simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(42);
  });
});