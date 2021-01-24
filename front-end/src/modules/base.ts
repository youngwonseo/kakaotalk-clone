import {
  createAction,
  createAsyncAction,
  ActionType, 
  createReducer
} from 'typesafe-actions';





export function* baseSaga() {
}

interface BaseState {

}

const initialState : BaseState = {

}

const base = createReducer<BaseState, any>(initialState, {


});

export default base;