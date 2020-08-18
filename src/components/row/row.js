import React from 'react';
import propTypes from 'prop-types';
import styles from './row.module.scss';
import classnames from 'classnames';

const Row = ({ left = null, center, right = null }) => {
  return (
    <div className={styles.Row}>
      <aside
        className={classnames(
          styles.RowSidebar,
          styles.RowSidebarLeft
        )}
      >
        { left }
      </aside>

      <main className={styles.RowMain}>
        <div className={styles.RowMainWrapper}>{ center }</div>
      </main>

      <aside
        className={classnames(
          styles.RowSidebar,
          styles.RowSidebarRight
        )}
      >
        { right }
      </aside>
    </div>
  );
};

Row.propTypes = {
  left: propTypes.node,
  center: propTypes.node,
  right: propTypes.node
};

export default Row;
