import {
  createAction,
  createAsyncAction,
  ActionType, 
  createReducer
} from 'typesafe-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createAsyncSaga, {
  createActionTypes
} from '../lib/createAsyncSaga';
import * as authAPI from '../lib/api/auth';
// import * as friendAPI from '../lib/api/friend';
import * as profileAPI from '../lib/api/profile';
import { AxiosError } from 'axios';



const CHANGE_FIELD = 'profile/CHANGE_FIELD';
const INITIALIZE_FORM = 'profile/INITIALIZE_FORM';
const SET_FOLLOWING_ID = 'profile/SET_FOLLOWING_ID';


const [
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILURE
] = createActionTypes('profile/LOAD_PROFILE');

export const loadProfile = createAsyncAction(
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILURE
)<void, any, AxiosError>();


const [
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
] = createActionTypes('profile/UPDATE_PROFILE');

export const updateProfile = createAsyncAction(
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
)<any, any, AxiosError>();


const [
  REGISTER_FOLLOWING, 
  REGISTER_FOLLOWING_SUCCESS, 
  REGISTER_FOLLOWING_FAILURE
] = createActionTypes('profile/REGISTER_FOLLOWING');

export const registerFollowing = createAsyncAction(
  REGISTER_FOLLOWING, 
  REGISTER_FOLLOWING_SUCCESS, 
  REGISTER_FOLLOWING_FAILURE
)<any, any, AxiosError>();


const [
  UPDATE_FOLLOWING, 
  UPDATE_FOLLOWING_SUCCESS, 
  UPDATE_FOLLOWING_FAILURE
] = createActionTypes('profile/UPDATE_FOLLOWING');

export const updateFollowing = createAsyncAction(
  UPDATE_FOLLOWING, 
  UPDATE_FOLLOWING_SUCCESS, 
  UPDATE_FOLLOWING_FAILURE
)<string, any, AxiosError>();


const [
  REMOVE_FOLLOWING, 
  REMOVE_FOLLOWING_SUCCESS, 
  REMOVE_FOLLOWING_FAILURE
] = createActionTypes('profile/REMOVE_FOLLOWING');

export const removeFollowing = createAsyncAction(
  REMOVE_FOLLOWING, 
  REMOVE_FOLLOWING_SUCCESS, 
  REMOVE_FOLLOWING_FAILURE
)<string, any, AxiosError>();



const [
  SEARCH_PROFILE, 
  SEARCH_PROFILE_SUCCESS, 
  SEARCH_PROFILE_FAILURE
] = createActionTypes('profile/SEARCH_PROFILE');

export const searchProfile = createAsyncAction(
  SEARCH_PROFILE, 
  SEARCH_PROFILE_SUCCESS, 
  SEARCH_PROFILE_FAILURE
)<string, any, AxiosError>();


export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: { form: string; key: string; value: string }) => ({
    form,
    key,
    value,
  })
)();

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: "search") => form
)();

export const setFollowingId = createAction(
  SET_FOLLOWING_ID,
  (id) => id
)();

const loadProfileSaga = createAsyncSaga(LOAD_PROFILE, profileAPI.loadProfile);
const updateProfileSaga = createAsyncSaga(UPDATE_PROFILE, profileAPI.updateProfile)
const registerFollowingSaga = createAsyncSaga(REGISTER_FOLLOWING, profileAPI.registerFollowing);
const updateFollowingSaga = createAsyncSaga(UPDATE_FOLLOWING, profileAPI.updateFollowing);
const deleteFollowingSaga = createAsyncSaga(REMOVE_FOLLOWING, profileAPI.deleteFollowing);
const searchProfileSaga = createAsyncSaga(SEARCH_PROFILE, profileAPI.search);


export function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfileSaga);
  yield takeLatest(UPDATE_PROFILE, updateProfileSaga);
  yield takeLatest(REGISTER_FOLLOWING, registerFollowingSaga);
  yield takeLatest(UPDATE_FOLLOWING, updateFollowingSaga);
  yield takeLatest(REMOVE_FOLLOWING, deleteFollowingSaga);
  yield takeLatest(SEARCH_PROFILE, searchProfileSaga);
}


interface ProfileState {
  [key:string] : any;
  profile: any;
  search: {
    [key:string] : any;
    email: any;
    result: any;
  };
  following: any; // 선택된 친구

}

const initialState: ProfileState = {
  profile: null,
  search: {
    email: '',
    result: null,
  },
  following: null,
}
type ChangeFieldAction = ActionType<typeof changeField>;

// 친구추가 - 이름순

const profile = createReducer<ProfileState, any>(initialState, {
  [CHANGE_FIELD]: (
    state,
    { payload: { form, key, value } }: ChangeFieldAction
  ) =>
    produce(state, (draft) => {
      draft[form][key] = value;
    }),
  [SET_FOLLOWING_ID]: (state, { payload: id }) => ({
    ...state,
    following: id,
  }),
  [LOAD_PROFILE_SUCCESS]: (state, { payload: profile }) => ({
    ...state,
    profile,
  }),
  [UPDATE_PROFILE_SUCCESS]: (state) => ({
    ...state,
  }),
  [REGISTER_FOLLOWING_SUCCESS]: (state, { payload: friend }) => ({
    ...state,
  }),
  [UPDATE_FOLLOWING_SUCCESS]: (state, { payload: friend }) => ({
    ...state,
  }),
  [REMOVE_FOLLOWING_SUCCESS]: (state, { payload: result }) => ({
    ...state,
  }),
  [SEARCH_PROFILE_SUCCESS]: (state, { payload: search }) =>
    produce(state, (draft) => {
      draft.search.result = search;
    }),
});


export default profile;
