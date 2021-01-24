import {
  createAction,
  createAsyncAction,
  ActionType, 
  createReducer
} from 'typesafe-actions';





export function* searchSaga() {
}

interface SearchState {
  searchEmail: string;
  result: any;
  error: any;
}

const initialState : SearchState = {
  searchEmail: '',
  result: null,
  error: null,
}

const search = createReducer<SearchState, any>(initialState, {
  

});

export default search;