import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import propTypes from 'prop-types';

import { dataSelectors } from '../../redux/modules/data';
import Item from '../../components/item';

class ItemContainer extends PureComponent {
  render() {
    const { item } = this.props;

    return <Item item={item} />;
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    item: dataSelectors.getItemById(state, id)
  };
};

ItemContainer.propTypes = {
  id: propTypes.number,
  item: propTypes.shape({
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
};

export default connect(mapStateToProps, { goBack })(ItemContainer);
