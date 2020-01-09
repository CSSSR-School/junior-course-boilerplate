import React from 'react';
import {withRouter} from 'react-router';
import ProductItem from 'csssr-school-product-card';
import {formatMoney} from 'csssr-school-utils';
import RatingComponent from '../../components/RatingComponent/RatingComponent';
import products from '../../products.json';
import Title from '../../components/Title/Title';
import {Link} from 'react-router-dom';

import iconBack from '../../assets/images/icon-back.svg'
import planetPicture from '../../assets/images/ill-planet.svg'
import s from './Detail.module.scss'

class Detail extends React.Component {
    render() {
        const item = products[+this.props.match.params.id - 1];
        if (item) {
            return (
                <div>
                    <div className={s.DetailTitle}>
                        <Link to="/"><img src={iconBack} alt="Назад"/></Link><Title>{item.name}</Title>
                    </div>
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
                </div>
            )
        } else {
            return (
                <div className={s.DetailEmpty}>
                    <div className={s.DetailTitle}>
                        <Link to="/"><img src={iconBack} alt="Назад"/></Link><Title>Товар не найден</Title>
                    </div>
                    <img src={planetPicture} alt="Товар не найден"/>
                </div>
            )
        }
    }
}

export default withRouter(Detail);


