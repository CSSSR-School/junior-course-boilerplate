import { connect }  from 'react-redux';
import { default as AppUI } from '../components/App';

const mapStateToProps = state => {
  return {
    checkedCategories: state.checkedCategories
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateCheckedCategories: checkedCategories => dispatch({ type:'UPDATE_CHECKED_CATEGORIES', payload: { checkedCategories }}),
    resetFilters: () => dispatch({ type: 'RESET_FILTER' })
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);

export default App;
