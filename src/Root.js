import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers'

export default ({children,initialState={}}) => {
  const dataStore = createStore(reducers,initialState,applyMiddleware(reduxPromise))
  return(
      <Provider store = {dataStore} > {children} </Provider>
     );
};  