import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EXAMPLES_COUNTER_PLUS_ONE } from './constants';

export function counterPlusOne() {
  return {
    type: EXAMPLES_COUNTER_PLUS_ONE,
  };
}

export function useCounterPlusOne() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.examples.count);
  const boundAction = useCallback(() => dispatch(counterPlusOne()), [dispatch]);

  return { count, counterPlusOne: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_COUNTER_PLUS_ONE:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}
