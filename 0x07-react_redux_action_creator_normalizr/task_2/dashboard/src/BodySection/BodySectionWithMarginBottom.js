import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.margin)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;