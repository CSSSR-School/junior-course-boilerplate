import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './pagination.module.scss';

import ListProducts from '../../components/list-products';

class Pagination extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 6,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevActive: false,
    isNextActive: true,
    pageBound: 3
  };
  handleClick = event => {
    event.preventDefault();
    const {
      target: { textContent }
    } = event;
    const value = Number(textContent);
    this.setState({
      currentPage: value
    });
    this.updatePrevNext(value);
  };
  updatePrevNext = value => {
    const { list } = this.props;
    const pagesTotalCount = Math.ceil(list.length / this.state.itemsPerPage);
    this.setState({
      isPrevActive: false,
      isNextActive: false
    });
    if (pagesTotalCount === value && pagesTotalCount > 1) {
      this.setState({ isPrevActive: true });
    } else if (value === 1 && pagesTotalCount > 1) {
      this.setState({ isNextActive: true });
    } else if (pagesTotalCount > 1) {
      this.setState({ isNextActive: true, isPrevActive: true });
    }
  };
  handleIncClick = () => {
    this.setState(prevState => ({
      ...prevState,
      upperPageBound: prevState.upperPageBound + prevState.pageBound,
      lowerPageBound: prevState.lowerPageBound + prevState.pageBound,
      currentPage: prevState.upperPageBound + 1
    }));
    this.updatePrevNext(this.state.currentPage);
  };
  handleDecClick = () => {
    this.setState(prevState => ({
      ...prevState,
      upperPageBound: prevState.upperPageBound - prevState.pageBound,
      lowerPageBound: prevState.lowerPageBound - prevState.pageBound,
      currentPage: prevState.upperPageBound - prevState.pageBound
    }));
    this.updatePrevNext(this.state.currentPage);
  };
  handlePrevClick = () => {
    const {currentPage, pageBound} = this.state;
    if ((currentPage - 1) % pageBound === 0) {
      this.setState(prevState => ({
        ...prevState,
        upperPageBound: prevState.upperPageBound - prevState.pageBound,
        lowerPageBound: prevState.lowerPageBound - prevState.pageBound
      }));
    }

    this.setState(prevState => ({
      ...prevState,
      currentPage: prevState.currentPage - 1
    }));
    this.updatePrevNext(this.state.currentPage);
  };
  handleNextClick = () => {
    const {currentPage, upperPageBound} = this.state;
    if (currentPage + 1 > upperPageBound) {
      this.setState(prevState => ({
        ...prevState,
        upperPageBound: prevState.upperPageBound + prevState.pageBound,
        lowerPageBound: prevState.lowerPageBound + prevState.pageBound
      }));
    }

    this.setState(prevState => ({
      ...prevState,
      currentPage: prevState.currentPage + 1
    }));
    this.updatePrevNext(this.state.currentPage);
  };
  render() {
    const {
      currentPage,
      itemsPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevActive,
      isNextActive
    } = this.state;
    const { list } = this.props;

    const lastProductIndex = currentPage * itemsPerPage;
    const firstProductIndex = lastProductIndex - itemsPerPage;
    const activePageProducts = list.slice(
      firstProductIndex,
      lastProductIndex
    );

    const slicedProducts = <ListProducts list={activePageProducts} />;

    const pagesTotalCount = Array.from(
      { length: Math.ceil(list.length / itemsPerPage) },
      (value, index) => index + 1
    );
    const paginationItems = pagesTotalCount.map(number => {
      if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li
            key={number}
            className={classnames(styles.paginationItem, {
              [styles.paginationItemActive]: number === currentPage
            })}
          >
            <a
              className={styles.paginationLink}
              href={`?page=${number}`}
              onClick={this.handleClick}
            >
              {number}
            </a>
          </li>
        );
      }
      return null;
    });
    const incBtn =
      pagesTotalCount.length > upperPageBound ? (
        <button
          className={styles.paginationIncrement}
          onClick={this.handleIncClick}
        >
          &hellip;
        </button>
      ) : null;
    const decBtn =
      lowerPageBound >= 1 ? (
        <button
          className={styles.paginationDecrement}
          onClick={this.handleDecClick}
        >
          &hellip;
        </button>
      ) : null;
    const prevBtn = (
      <button
        className={styles.paginationPrevious}
        onClick={this.handlePrevClick}
        disabled={!isPrevActive}
      >
        Назад
      </button>
    );
    const nextBtn = (
      <button
        className={styles.paginationNext}
        onClick={this.handleNextClick}
        disabled={!isNextActive}
      >
        Вперед
      </button>
    );
    return (
      <>
        {slicedProducts}
        <div className={styles.pagination}>
          <ul className={styles.paginationList}>
            {prevBtn}
            {decBtn}
            {paginationItems}
            {incBtn}
            {nextBtn}
          </ul>
        </div>
      </>
    );
  }
}

Pagination.propTypes = {
  productsList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isInStock: propTypes.bool,
      img: propTypes.string,
      title: propTypes.node,
      price: propTypes.node,
      subPriceContent: propTypes.node,
      maxRating: propTypes.number,
      rating: propTypes.number,
      discount: propTypes.number,
      category: propTypes.string
    })
  )
};

export default Pagination;
