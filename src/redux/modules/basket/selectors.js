import { createSelector } from 'reselect';

const getBasket = ({ basket }) => basket;

const getBasketStatus = createSelector(getBasket, ({ status }) => status);

const getBasketList = createSelector(getBasket, ({ list }) => list);

export { getBasketStatus, getBasketList };
