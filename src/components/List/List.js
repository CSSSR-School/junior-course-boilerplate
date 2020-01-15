import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney, splitEvery} from 'csssr-school-utils'
import logRenderComponent from '../../HOC/logRenderComponent';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './List.module.scss';
import {Link} from 'react-router-dom';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            isError: false,
            products: []
        }
    }

    fetchProducts = (url) => {
        this.props.loadProductsStart();

        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        this.props.loadProductsFail(response.message);
                    }
                })
                .then(response => {
                    this.props.loadProductsSuccess(response.products);

                })
                .catch(error => {
                    this.props.loadProductsFail(error.message);
                })
        }, 1000)
    };

    componentDidMount() {
        this.fetchProducts('https://course-api.csssr.school/products')
    }

    render() {
        const {products, router, itemsPerPage, isLoading} = this.props;

        const paginationActivePage = router.location.query.page || 1;
        const activePageProducts = splitEvery(itemsPerPage, products)[paginationActivePage - 1] || [];

        if (isLoading) {
            return (
                <ul className={s.list}>
                    {[...Array(itemsPerPage)].map((item, key) => (
                        <li className={s.listItem} key={key}>
                            <div className={s.listItemLoading}>
                                <span className={s.listItemLoadingPhoto}></span>
                                <span className={s.listItemLoadingText}>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        } else if (activePageProducts.length > 0) {
            return (
                <ul className={s.list}>
                    {activePageProducts.map((item) => {
                        return (
                            <li className={s.listItem} key={item.id}>
                                <Link to={`products/${item.id}`}>

                                    <ProductItem
                                        isInStock={item.isInStock}
                                        img={item.imgUrl}
                                        title={item.name}
                                        price={formatMoney(item.price, 0, '.', ' ')}
                                        subPriceContent=""
                                        maxRating={5}
                                        rating={item.rating}
                                        ratingComponent={RatingComponent}
                                    />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

List.propTypes = {
    products: PropTypes.array
};

List.defaultProps = {
    products: []
};

export default logRenderComponent(List);
