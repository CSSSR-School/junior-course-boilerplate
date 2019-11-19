import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney} from 'csssr-school-utils'
import reactMixin from 'react-mixin';

import RatingComponent from '../RatingComponent/RatingComponent';
import logRender from '../../mixins/logRender'

import s from './List.module.scss';

class List extends Component {

    render() {
        if (this.props.data.length > 0) {
            return (
                <ul className={s.list}>
                    {this.props.data.map((item) => {
                        return (
                            <li className={s.listItem} key={item.id}>
                                <ProductItem
                                    isInStock={item.isInStock}
                                    img={item.imgUrl}
                                    title={item.name}
                                    price={formatMoney(item.price, 0, '.', ' ')}
                                    subPriceContent={item.subPriceContent}
                                    maxRating={5}
                                    rating={item.rating}
                                    ratingComponent={RatingComponent}
                                />
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return (
                <div>Ничего не найдено</div>
            )
        }
    }
};

reactMixin(List.prototype, logRender);

List.propTypes = {
    data: PropTypes.array
};

List.defaultProps = {
    data: []
};

export default List;
