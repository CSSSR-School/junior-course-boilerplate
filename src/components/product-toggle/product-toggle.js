import React from 'react';
import styles from './product-toggle.module.scss';
import classnames from 'classnames';
import propTypes from 'prop-types';

const ProductToggle = ({ label, id, isSending, handleClick }) => {
  return (
    <button
      className={classnames(styles.ProductToggle, {
        [styles.ProductToggleDisabled]: isSending
      })}
      onClick={event => handleClick(event, id)}
    >
      {label}
    </button>
  );
};

ProductToggle.propTypes = {
  id: propTypes.number,
  handleClick: propTypes.func
};

export default ProductToggle;
