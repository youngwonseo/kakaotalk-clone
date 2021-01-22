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
  REGISTER_FOLLOWING, 
  REGISTER_FOLLOWING_SUCCESS, 
  REGISTER_FOLLOWING_FAILURE
] = createActionTypes('profile/REGISTER_FOLLOWING');

export const registerFriend = createAsyncAction(
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

export const removeFriend = createAsyncAction(
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
  ({ key, value }: { key: string; value: string }) => ({
    key,
    value,
  })
)();

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: "search") => form
)();

const loadProfileSaga = createAsyncSaga(LOAD_PROFILE, profileAPI.loadProfile);
const registerFollowingSaga = createAsyncSaga(REGISTER_FOLLOWING, profileAPI.registerFollowing);
const updateFollowingSaga = createAsyncSaga(UPDATE_FOLLOWING, profileAPI.updateFollowing);
const deleteFollowingSaga = createAsyncSaga(REMOVE_FOLLOWING, profileAPI.deleteFollowing);
const searchProfileSaga = createAsyncSaga(SEARCH_PROFILE, profileAPI.search);


export function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfileSaga);
  yield takeLatest(REGISTER_FOLLOWING, registerFollowingSaga);
  yield takeLatest(UPDATE_FOLLOWING, updateFollowingSaga);
  yield takeLatest(REMOVE_FOLLOWING, deleteFollowingSaga);
  yield takeLatest(SEARCH_PROFILE, searchProfileSaga);
}


interface ProfileState {
  profile: any;
  searchEmail: any;
  searchResult: any;
  friend: any;
}

const initialState: ProfileState = {
  profile: null,
  
  searchEmail: '',
  searchResult: null,
  friend: null,
}


// 친구추가 - 이름순

const profile = createReducer<ProfileState, any>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [LOAD_PROFILE_SUCCESS]: (state, { payload: profile }) => ({
    ...state,
    profile,
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
  [SEARCH_PROFILE_SUCCESS]: (state, { payload: search }) => ({
    ...state,
    searchResult: search,
  }),
});


export default profile;
