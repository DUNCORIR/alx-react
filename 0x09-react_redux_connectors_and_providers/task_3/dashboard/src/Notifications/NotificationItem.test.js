// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct text when passed value prop', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.text()).toBe('Test');
  });

  it('renders correct html when passed html prop', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<strong>Important</strong>' }} />
    );
    expect(wrapper.html()).toContain('<strong>Important</strong>');
  });
});