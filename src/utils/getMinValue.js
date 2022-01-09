import { minBy, toInt } from 'csssr-school-utils';

export default arr => {
    return toInt(minBy((obj) => toInt(obj.price), arr).price);
}
