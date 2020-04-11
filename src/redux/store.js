import { createStore } from 'redux';
import reducer from './modules/products';

export const store = createStore(reducer);

