import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySectionWithMarginBottom component', () => {
  // Prevent Aphrodite from injecting styles during tests to avoid warnings
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders correctly with title and children', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test children</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('BodySection').prop('title')).toBe('Test Title');
    expect(wrapper.find('BodySection').contains(<p>Test children</p>)).toBe(true);
  });

  it('renders correctly with title only (no children)', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="Only Title" />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('BodySection').prop('title')).toBe('Only Title');
    expect(wrapper.find('BodySection').prop('children')).toBeNull();
  });
});