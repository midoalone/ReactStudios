import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  availableStudios: ['data'],
});

export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  data: null,
});

/* ------------- Reducers ------------- */
const availableStudios = (state, data) => state.merge({ data });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.AVAILABLE_STUDIOS]: availableStudios,
});