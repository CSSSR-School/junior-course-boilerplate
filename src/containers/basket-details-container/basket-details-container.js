import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { productsSelectors } from '../../redux';
import BasketDetails from '../../components/basket-details';

class BasketDetailsContainer extends PureComponent {
  render() {
    const { list, goBack, ...restProps } = this.props;

    return <BasketDetails list={list} goBack={goBack} {...restProps} />;
  }
}

const mapStateToProps = state => {
  return {
    list: productsSelectors.filterProductsListByBasketList(state)
  };
};

export default connect(mapStateToProps, { goBack })(BasketDetailsContainer);
