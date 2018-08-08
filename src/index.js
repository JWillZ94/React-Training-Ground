import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './actions';
import thunk from 'redux-thunk';
import * as data from './data';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(thunk));

store.dispatch(FETCH_SUCCESS);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
