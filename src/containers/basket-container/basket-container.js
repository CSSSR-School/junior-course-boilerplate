import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  basketActions,
  basketSelectors,
  productsSelectors
} from '../../redux/';
import Basket from '../../components/basket';

class BasketContainer extends PureComponent {
  handleClick = event => {
    event.preventDefault();
    this.props.emptyBasket();
  };

  render() {
    const {
      basketStatus: { isSending, isSuccessful },
      productsList,
      basketList
    } = this.props;

    const productsListLength = `${productsList.length}`.length;

    const basketListLength = basketList.length;

    return (
      <Basket
        productsListLength={productsListLength}
        basketListLength={basketListLength}
        isSending={isSending}
        isSuccessful={isSuccessful}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    productsList: productsSelectors.getProductsList(state),
    basketStatus: basketSelectors.getBasketStatus(state),
    basketList: basketSelectors.getBasketList(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { emptyBasket } = bindActionCreators(basketActions, dispatch);

  return {
    emptyBasket
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
