import { combineReducers } from 'redux';
import { Sorts } from './actions';

let initialState = {
  dataItems: [],
  isLoading: false,
  msg: ''
};

function exReducer1(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BEGIN':
      return Object.assign({}, state, {
        isLoading: true,
        msg: 'starting to load'
      });
    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        msg: 'loaded stuff'
      });
    case 'FETCH_FAILURE':
      return Object.assign({}, state, {
        msg: 'failed loading data'
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  exReducer1
});

export default rootReducer;
