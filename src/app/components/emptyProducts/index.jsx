import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './index.module.css';

class EmptyProducts extends PureComponent {
  render() {
    return (
      <div className={ classnames(styles.container) }>
        <p className={ classnames(styles.emptyText) }>Товары не найдены.</p>
        <p className={ classnames(styles.emptyText) }>Проверьте параметры фильтра.</p>
      </div>
    );
  }
}

export default EmptyProducts;
