import React from 'react';
import styles from './not-found.module.scss';
import Icon from '../icon';
import Header from '../header';

const NotFound = () => (
  <div className={styles.NotFound}>
    <Icon name="island" style={{ marginBottom: '50px' }} />
    <Header header={404} className={styles.NotFoundHeader} />
  </div>
);

export default NotFound;
