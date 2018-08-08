export const FETCH_BEGIN = {
  type: 'FETCH_BEGIN'
};

export const FETCH_SUCCESS = data => ({
  type: 'FETCH_SUCCESS',
  payload: { data }
});

export const FETCH_FAILURE = {
  type: 'FETCH_FAILURE',
  error: 'yikes...'
};
