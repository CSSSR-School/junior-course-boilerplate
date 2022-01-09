import { maxBy, toInt } from 'csssr-school-utils';

export default arr => {
    return toInt(maxBy((obj) => toInt(obj.price), arr).price);
}