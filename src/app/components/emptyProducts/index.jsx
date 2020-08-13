import React from 'react';
import classnames from 'classnames';

import styles from './index.module.css';
import BaseComponent from '../baseComponent/index';

class EmptyProducts extends BaseComponent {
  render() {
    return (
      <div className={ classnames(styles.container) }>
        <span className={ classnames(styles.emptyText) }>
          Товары не найдены. Проверьте параметры фильтра.
        </span>
      </div>
    );
  }
}

export default EmptyProducts;
