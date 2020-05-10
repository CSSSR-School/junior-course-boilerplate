import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { basketActions, basketSelectors } from '../../redux/';
import ProductToggle from '../../components/product-toggle';
import { withApi } from '../../components/hoc-helpers';

class ProductToggleContainer extends PureComponent {
  handleClick = (event, id) => {
    event.preventDefault();

    const {
      target: { textContent: label }
    } = event;

    const { saveBasket, removeItemFromBasket } = this.props;

    switch (label) {
      case 'добавить':
        saveBasket(`${this.props.apiBase}save`, id);
        break;
      case 'удалить':
        removeItemFromBasket({ id });
        break;
      default:
        throw new Error(`Unknown label: ${label}`);
    }
  };

  render() {
    const { basketList, basketStatus: { isSending }, id, } = this.props;

    const label = basketList.includes(id) ? 'удалить' : 'добавить';

    return (
      <ProductToggle
        id={id}
        label={label}
        isSending={isSending}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basketList: basketSelectors.getBasketList(state),
    basketStatus: basketSelectors.getBasketStatus(state),
  };
};

const mapDispatchToProps = dispatch => {
  const { saveBasket, removeItemFromBasket } = bindActionCreators(
    basketActions,
    dispatch
  );

  return { saveBasket, removeItemFromBasket };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApi(ProductToggleContainer));
