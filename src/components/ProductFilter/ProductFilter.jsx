import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import pt from 'prop-types';
import {PropValidator} from '../../prop-validator';
import s from './ProductFilter.module.css';
import {declOfNum, toggleItemInArray} from '../../helpers';
import FormBlock from '../FormBlock/FormBlock.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import ErrorBlock from '../ErrorBlock/ErrorBlock.jsx';
import Button from '../Button/Button.jsx';

class ProductFilter extends PureComponent {

  validateFilter = (filter) => {
    const {minPrice, maxPrice, minDiscount} = filter;
    let error = [false, ''];

    if (minPrice > maxPrice) {
      error = [true, 'Минимальная цена выше максимальной'];
      return error;
    }

    if (minDiscount > 100) {
      error = [true, 'Скидка не может быть более 100%'];
      return error;
    }

    return error;
  }

  changeFilterCategories = (category) => {
    const {search, searchCategories, history} = this.props;
    const searchParams = new URLSearchParams(search);

    searchParams.delete('cat');

    if (searchCategories.length) {
      const categories = toggleItemInArray(searchCategories, category);
      categories.forEach((category) => searchParams.append('cat', category));
      return history.push(`?${searchParams.toString()}`);
    }

    searchParams.set('cat', category);
    return history.push(`?${searchParams.toString()}`);
  }

  resetFilter = () => {
    const {setFilter, productsList, history} = this.props;
    setFilter(productsList);
    history.push('/');
  }

  renderButtons = (categoriesList) => (
    categoriesList.map((category) => (
      <Checkbox
        key={category}
        category={category}
        isActive={this.props.searchCategories.includes(category)}
        onChangeFilterCategories={this.changeFilterCategories}
      >
        {category}
      </Checkbox>
    ))
  );

  renderTotalProducts = (totalFilteredProducts) => {
    return declOfNum(
      totalFilteredProducts,
      [
        `Найден ${totalFilteredProducts} товар`,
        `Найдено ${totalFilteredProducts} товара`,
        `Найдено ${totalFilteredProducts} товаров`
      ]
    );
  }

  render() {
    const {
      filter,
      totalFilteredProducts,
      categoriesList,
      changeFilter
    } = this.props;

    const {minPrice, maxPrice, minDiscount} = filter;

    const [isInvalid, errorMsg] = this.validateFilter(filter);

    return (
      <form className={s.filterForm} autoComplete="off">

        <div className={s.formHeader}>
          <h2 className={s.formTitle}>Фильтр</h2>
          <span>{this.renderTotalProducts(totalFilteredProducts)}</span>
        </div>

        {isInvalid && <ErrorBlock>{errorMsg}</ErrorBlock>}

        <FormBlock title='Цена'>
          <div className={s.price}>
            от
            <FormInput
              name="minPrice"
              value={minPrice}
              onChangeFilter={changeFilter}
            />
          </div>
          <div className={s.price}>
            до
            <FormInput
              name="maxPrice"
              value={maxPrice}
              onChangeFilter={changeFilter}
            />
          </div>
        </FormBlock>

        <FormBlock title='Скидка'>
          от
          <FormInput
            name="minDiscount"
            value={minDiscount}
            onChangeFilter={changeFilter}
          />
          %
        </FormBlock>

        <FormBlock
          title='Категории'
          additionalClass='categoryBlock'
        >
          {this.renderButtons(categoriesList)}
        </FormBlock>

        <Button
          type="reset"
          onClick={this.resetFilter}
        >
          Сбросить фильтры
        </Button>
      </form>
    );
  }
}

ProductFilter.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired,
  totalFilteredProducts: pt.number.isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  searchCategories: pt.arrayOf(pt.string).isRequired,
  filter: pt.object.isRequired,
  history: pt.object.isRequired,
  search: pt.string.isRequired,
  setFilter: pt.func.isRequired,
  changeFilter: pt.func.isRequired
};

export default withRouter(ProductFilter);
