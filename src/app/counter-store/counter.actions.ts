import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

export const multiply = createAction(
  '[Counter] Multply',
  props<{ value: number }>()
);

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

export const reset = createAction('[Counter] Reset');
