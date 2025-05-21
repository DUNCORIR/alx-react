import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem tests', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct text and type from props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe('test');
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('renders correct html when passed html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
})