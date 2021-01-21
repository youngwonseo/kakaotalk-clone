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
import * as friendAPI from '../lib/api/friend';
import * as profileAPI from '../lib/api/profile';
import { AxiosError } from 'axios';



const CHANGE_FIELD = 'profile/CHANGE_FIELD';
const INITIALIZE_FORM = 'profile/INITIALIZE_FORM';

// const [
//   LOAD_FRIEND, 
//   LOAD_FRIEND_SUCCESS, 
//   LOAD_FRIEND_FAILURE
// ] = createActionTypes('profile/LOAD_FRIEND');

// export const loadFriend = createAsyncAction(
//   LOAD_FRIEND, 
//   LOAD_FRIEND_SUCCESS, 
//   LOAD_FRIEND_FAILURE
// )<void, any, AxiosError>();



const [
  LOAD_FRIENDS, 
  LOAD_FRIENDS_SUCCESS, 
  LOAD_FRIENDS_FAILURE
] = createActionTypes('profile/LOAD_FRIENDS');

export const loadFriends = createAsyncAction(
  LOAD_FRIENDS, 
  LOAD_FRIENDS_SUCCESS, 
  LOAD_FRIENDS_FAILURE
)<void, any, AxiosError>();


const [
  REGISTER_FRIEND, 
  REGISTER_FRIEND_SUCCESS, 
  REGISTER_FRIEND_FAILURE
] = createActionTypes('profile/REGISTER_FRIEND');

export const registerFriend = createAsyncAction(
  REGISTER_FRIEND, 
  REGISTER_FRIEND_SUCCESS, 
  REGISTER_FRIEND_FAILURE
)<any, any, AxiosError>();


const [
  UPDATE_FRIEND, 
  UPDATE_FRIEND_SUCCESS, 
  UPDATE_FRIEND_FAILURE
] = createActionTypes('profile/UPDATE_FRIEND');

export const updateFriend = createAsyncAction(
  UPDATE_FRIEND, 
  UPDATE_FRIEND_SUCCESS, 
  UPDATE_FRIEND_FAILURE
)<string, any, AxiosError>();


const [
  REMOVE_FRIEND, 
  REMOVE_FRIEND_SUCCESS, 
  REMOVE_FRIEND_FAILURE
] = createActionTypes('profile/REMOVE_FRIEND');

export const removeFriend = createAsyncAction(
  REMOVE_FRIEND, 
  REMOVE_FRIEND_SUCCESS, 
  REMOVE_FRIEND_FAILURE
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


const loadFriendsSaga = createAsyncSaga(LOAD_FRIENDS, friendAPI.loadFriends);
const registerFriendSaga = createAsyncSaga(REGISTER_FRIEND, friendAPI.registerFriend);
const updateFriendSaga = createAsyncSaga(UPDATE_FRIEND, friendAPI.updateFriend);
const deleteFriendSaga = createAsyncSaga(REMOVE_FRIEND, friendAPI.deleteFriend);
const searchProfileSaga = createAsyncSaga(SEARCH_PROFILE, profileAPI.search);


export function* profileSaga() {
  yield takeLatest(LOAD_FRIENDS, loadFriendsSaga);
  yield takeLatest(REGISTER_FRIEND, registerFriendSaga);
  yield takeLatest(UPDATE_FRIEND, updateFriendSaga);
  yield takeLatest(REMOVE_FRIEND, deleteFriendSaga);
  yield takeLatest(SEARCH_PROFILE, searchProfileSaga);
}


interface ProfileState {
  friends: any;
  searchEmail: any;
  searchResult: any;
  friend: any;
}

const initialState: ProfileState = {
  friends: null,
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
  [LOAD_FRIENDS_SUCCESS]: (state, { payload: friends }) => ({
    ...state,
    friends,
  }),
  [REGISTER_FRIEND_SUCCESS]: (state, { payload: friend }) => ({
    ...state,
  }),
  [UPDATE_FRIEND_SUCCESS]: (state, { payload: friend }) => ({
    ...state,
  }),
  [REMOVE_FRIEND_SUCCESS]: (state, { payload: result }) => ({
    ...state,
  }),
  [SEARCH_PROFILE_SUCCESS]: (state, { payload: search }) => ({
    ...state,
    searchResult: search,
  }),
});


export default profile;
