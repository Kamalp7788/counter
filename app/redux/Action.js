export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const setIncrement = count => dispatch => {
  dispatch({
    type: INCREMENT_COUNT,
    payload: count,
  });
};
export const setDecrement = count => dispatch => {
  dispatch({
    type: DECREMENT_COUNT,
    payload: count,
  });
};
