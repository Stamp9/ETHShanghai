import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EXAMPLES_COUNTER_MINUS_ONE } from './constants';

export function counterMinusOne() {
  return {
    type: EXAMPLES_COUNTER_MINUS_ONE,
  };
}

export function useCounterMinusOne() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.examples.count);
  const boundAction = useCallback(() => dispatch(counterMinusOne()), [dispatch]);

  return { count, counterMinusOne: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_COUNTER_MINUS_ONE:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
