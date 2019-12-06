import React from 'react';
import {store} from './store';

const appContext = React.createContext({
    state: store.getState(),
    dispatch: store.dispatch
});

export default appContext;
