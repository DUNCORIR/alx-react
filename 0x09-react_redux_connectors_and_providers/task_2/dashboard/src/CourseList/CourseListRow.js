import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr className={css(styles.headerRow)}>
          <th colSpan="2" className={css(styles.headerCell)}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(styles.headerRow)}>
        <th className={css(styles.headerCell)}>{textFirstCell}</th>
        <th className={css(styles.headerCell)}>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr className={css(styles.defaultRow)}>
      <td className={css(styles.defaultCell)}>{textFirstCell}</td>
      <td className={css(styles.defaultCell)}>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerCell: {
    borderBottom: '1px solid #deb5b545',
    textAlign: 'left',
    padding: '10px',
  },
  defaultCell: {
    padding: '10px',
    textAlign: 'left',
  },
});

export default CourseListRow;