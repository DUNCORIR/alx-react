import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders at least "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().toLowerCase()).toContain('copyright');
  });
});