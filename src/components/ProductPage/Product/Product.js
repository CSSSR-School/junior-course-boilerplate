import {toInt} from 'csssr-school-utils';

export default class Product {
    constructor(data) {
        this.id = data.id;
        this.isInStock = data.isInStock;
        this.img = data.img;
        this.title = data.title;
        this.price = data.price;
        this.priceInt = toInt(data.price);
        this.discount = data.discount;
        this.subPriceContent = data.subPriceContent;
    }
}
