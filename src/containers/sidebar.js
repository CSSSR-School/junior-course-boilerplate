import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = state => {
  return {
    priceMin: state.price.min,
    priceMax: state.price.max,
    discount: state.price.discount,
    categories: state.categories,
    checkedCategories: state.checkedCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePriceChange: (name, value) => dispatch({ type: 'CHANGE_PRICE' , payload: { inputName: name, changedValue: value }}),
    handleReset: () => dispatch({ type: 'RESET_FILTER' }),
    handleCategoryChange: changedCategory => dispatch({ type: 'CHANGE_FILTER', payload: { changedCategory }})
  }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Sidebar;
