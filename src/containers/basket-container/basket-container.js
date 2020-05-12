import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  basketActions,
  basketSelectors,
  productsSelectors,
  routerSelectors
} from '../../redux/';
import Basket from '../../components/basket';
import { withApi } from '../../components/hoc-helpers';

class BasketContainer extends PureComponent {
  handleClick = event => {
    event.preventDefault();

    const {
      target: { textContent: label }
    } = event;

    switch (label) {
      case 'Очистить корзину':
        this.props.emptyBasket();
        break;

      case 'Cохранить корзину':
        this.props.saveBasket(`${this.props.apiBase}save`);
        break;

      default:
        throw new Error(`Unknown label: ${label}`);
    }
  };

  render() {
    const {
      basketStatus: { isSending, isSuccessful },
      basketList,
      mappedProductsList,
      location: {pathname},
    } = this.props;

    const sum = mappedProductsList.reduce((acc, value) => acc + value, 0);

    const basketListLength = basketList.length;

    return (
      <Basket
        path={pathname.slice(1)}
        sum={sum}
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
    location: routerSelectors.getRouterLocation(state),
    basketStatus: basketSelectors.getBasketStatus(state),
    basketList: basketSelectors.getBasketList(state),
    mappedProductsList: productsSelectors.mapProductsList(state, 'price')
  };
};

const mapDispatchToProps = dispatch => {
  const { saveBasket, emptyBasket } = bindActionCreators(
    basketActions,
    dispatch
  );

  return {
    saveBasket,
    emptyBasket
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withApi(BasketContainer));
