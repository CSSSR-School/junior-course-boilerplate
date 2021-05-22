import React from 'react';

import LogRender from '../LogRender/LogRender';

import './Pages.css'

class Page extends LogRender {
  render() {
    return this.props.pagesCount > 0 && (
      <div className="catalog-pagination">
        <button
          className="
            catalog-pagination__button
            catalog-pagination__button--navigators
          "
          onClick={
            () =>
              this.props.goToPage(
                Math.max(1, this.props.currentPage - 1)
              )
          }
          disabled={ this.props.currentPage === 1 }
        >
          Назад
        </button>

        <ul className="catalog-pagination__list">
          { new Array(this.props.pagesCount).fill(null).map((_, i) =>  (
              <li className="catalog-pagination__item" key={ i }>
                <button
                  className="catalog-pagination__button"
                  active={ this.props.currentPage === i + 1 ? 'true' : null}
                  onClick={ () => this.props.goToPage(i + 1) }
                >
                  { i + 1 }
                </button>
              </li>
            )
          )}
        </ul>

        <button
          className="
            catalog-pagination__button
            catalog-pagination__button--navigators
          "
          onClick={
            () =>
              this.props.goToPage(
                Math.min(
                  this.props.pagesCount,
                  this.props.currentPage + 1
                )
              )
          }
          disabled={ this.props.currentPage === this.props.pagesCount }
        >
          Вперёд
        </button>
      </div>
    );
  }
};

export default Page;
