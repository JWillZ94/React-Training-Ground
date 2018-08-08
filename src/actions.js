import './data';

export const FETCH_BEGIN = {
  type: 'FETCH_BEGIN'
};

export const FETCH_SUCCESS = payload => {
  type: 'FETCH_SUCCESS',
  payload: []
};

export const FETCH_FAILURE = {
  type: 'FETCH_FAILURE',
  error: 'yikes...'
};
