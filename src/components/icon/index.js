import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { renderIcon } from './utils/render-icon';
import styles from './icon.module.scss';

const Icon = props => {
  const { name, style: IconInlineStyles, ...restProps } = props;

  return (
    <div
      className={classnames(styles.Icon)}
      style={IconInlineStyles}
    >
      {renderIcon({ name, ...restProps })}
    </div>
  );
};

Icon.propTypes = {
  name: propTypes.string
};

export default Icon;
