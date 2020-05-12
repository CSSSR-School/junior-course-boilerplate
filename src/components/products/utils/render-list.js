import React from 'react';
import propTypes from 'prop-types';
import ListContainer from '../../../containers/list-container';
import PaginationContainer from '../../../containers/pagination-container';
import Header from '../../header';
import Icon from '../../icon';

const renderList = ({ listLength, isLoading, error }) => {
  if (isLoading) {
    return (
      <Icon
        name="spinner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    );
  } else if (error) {
    return (
      <>
        <Header header={error} />
        <Icon name="ill-planet" />
      </>
    );
  } else if (listLength === 0) {
    return (
      <>
        <Header header="Товары не найдены" />
        <Icon name="ill-planet" />
      </>
    );
  } else {
    return (
      <>
        <Header header="Список товаров" />
        <ListContainer />
        <PaginationContainer />
      </>
    );
  }
};

renderList.propTypes = {
  listLength: propTypes.number,
  isLoading: propTypes.bool,
  error: propTypes.string
};

export { renderList };
