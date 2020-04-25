import React from 'react';
import classnames from 'classnames';

import Button from '../button';
import styles from '../button/button.module.scss';

const renderButton = (
  { pagination: { currentPage }, pagesLength, handleClick },
  type,
  value = type
) => {
  switch (type) {
    case 'prev':
      return (
        <Button
          classList={classnames(styles.Btn, styles.BtnPrev)}
          isDisabled={
            currentPage === 1 ||
            (pagesLength !== currentPage && pagesLength < 1)
          }
          value="Назад"
          handleClick={event => handleClick(event, 'prev')}
        />
      );
    case 'dec':
      return (
        <Button
          classList={classnames(styles.Btn)}
          value="&hellip;"
          handleClick={event => handleClick(event, 'dec')}
        />
      );
    case 'inc':
      return (
        <Button
          classList={classnames(styles.Btn)}
          value="&hellip;"
          handleClick={event => handleClick(event, 'inc')}
        />
      );
    case 'next':
      return (
        <Button
          classList={classnames(styles.Btn, styles.BtnNext)}
          isDisabled={
            pagesLength === currentPage ||
            (currentPage !== 1 && pagesLength < 1)
          }
          value="Вперед"
          handleClick={event => handleClick(event, 'next')}
        />
      );
    default:
      return (
        <Button
          key={value}
          classList={classnames(styles.Btn, {
            [styles.BtnActive]: value === currentPage
          })}
          value={String(value)}
          handleClick={handleClick}
        />
      );
  }
};

export { renderButton };
