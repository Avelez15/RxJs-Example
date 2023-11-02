import { createReducer, on } from '@ngrx/store';
import { decrement, increment, multiply } from './counter.actions';

const initalState = 0;

export const counterReducer = createReducer(
  initalState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(multiply, (state, action) => state * action.value)
);
