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
import * as followingAPI from '../lib/api/following';
import { AxiosError } from 'axios';



const CHANGE_FIELD = 'profile/CHANGE_FIELD';
const INITIALIZE_FORM = 'profile/INITIALIZE_FORM';
const INITIALIZE_SEARCH_FORM = 'profile/INITIALIZE_SEARCH_FORM';
// const SET_FOLLOWING_ID = 'profile/SET_FOLLOWING_ID';
const SET_UPDATE_PROFILE = 'profile/SET_UPDATE_PROFILE';
const SET_DONE = 'profile/SET_DONE';

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
  UPDATE_FOLLOWING, 
  UPDATE_FOLLOWING_SUCCESS, 
  UPDATE_FOLLOWING_FAILURE
] = createActionTypes('profile/UPDATE_FOLLOWING');

export const updateFollowing = createAsyncAction(
  UPDATE_FOLLOWING, 
  UPDATE_FOLLOWING_SUCCESS, 
  UPDATE_FOLLOWING_FAILURE
)<any, any, AxiosError>();


const [
  LOAD_FOLLOWING,
  LOAD_FOLLOWING_SUCCESS,
  LOAD_FOLLOWING_FAILURE
] = createActionTypes('profile/LOAD_FOLLOWING');

export const loadFollowing = createAsyncAction(
  LOAD_FOLLOWING,
  LOAD_FOLLOWING_SUCCESS,
  LOAD_FOLLOWING_FAILURE
)<void, any, AxiosError>();

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
  SEARCH_PROFILE_BY_ID, 
  SEARCH_PROFILE_BY_ID_SUCCESS, 
  SEARCH_PROFILE_BY_ID_FAILURE
] = createActionTypes('profile/SEARCH_PROFILE_BY_ID');

export const searchProfileById = createAsyncAction(
  SEARCH_PROFILE_BY_ID, 
  SEARCH_PROFILE_BY_ID_SUCCESS, 
  SEARCH_PROFILE_BY_ID_FAILURE
)<string, any, AxiosError>();




const [
  SEARCH_PROFILE_BY_EMAIL, 
  SEARCH_PROFILE_BY_EMAIL_SUCCESS, 
  SEARCH_PROFILE_BY_EMAIL_FAILURE
] = createActionTypes('profile/SEARCH_PROFILE_BY_EMAIL');

export const searchProfileByEmail = createAsyncAction(
  SEARCH_PROFILE_BY_EMAIL, 
  SEARCH_PROFILE_BY_EMAIL_SUCCESS, 
  SEARCH_PROFILE_BY_EMAIL_FAILURE
)<string, any, AxiosError>();



export const setDone = createAction(
  SET_DONE,
  (done: boolean) => done
)();

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

export const initializeSearchForm = createAction(
  INITIALIZE_SEARCH_FORM,
)();

// export const setFollowingId = createAction(
//   SET_FOLLOWING_ID,
//   (id) => id
// )();

export const setUpdateProfile = createAction(
  SET_UPDATE_PROFILE,
  (profile) => profile,
)();

const loadProfileSaga = createAsyncSaga(LOAD_PROFILE, profileAPI.loadProfile);
const updateProfileSaga = createAsyncSaga(UPDATE_PROFILE, profileAPI.updateProfile)
const searchProfileByEmailSaga = createAsyncSaga(SEARCH_PROFILE_BY_EMAIL, profileAPI.searchByEmail);
const searchProfileByIdSaga = createAsyncSaga(SEARCH_PROFILE_BY_ID, profileAPI.searchById);

const loadFollowingSaga = createAsyncSaga(LOAD_FOLLOWING, followingAPI.loadProfile);
const registerFollowingSaga = createAsyncSaga(REGISTER_FOLLOWING, followingAPI.registerFollowing);
const updateFollowingSaga = createAsyncSaga(UPDATE_FOLLOWING, followingAPI.updateFollowing);
const deleteFollowingSaga = createAsyncSaga(REMOVE_FOLLOWING, followingAPI.deleteFollowing);

export function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfileSaga);
  yield takeLatest(UPDATE_PROFILE, updateProfileSaga);
  yield takeLatest(LOAD_FOLLOWING, loadFollowingSaga);
  yield takeLatest(REGISTER_FOLLOWING, registerFollowingSaga);
  yield takeLatest(UPDATE_FOLLOWING, updateFollowingSaga);
  yield takeLatest(REMOVE_FOLLOWING, deleteFollowingSaga);
  yield takeLatest(SEARCH_PROFILE_BY_EMAIL, searchProfileByEmailSaga);
  yield takeLatest(SEARCH_PROFILE_BY_ID, searchProfileByIdSaga);
}


interface ProfileState {
  [key:string] : any;
  profile: any;
  following: any;
  search: {
    [key:string] : any;
    email: any;
    username: any;
    stateMessage: any;
    profileImg: any;
    id: any;
  };
  done: boolean;
  // following: any; // 선택된 친구
  error: any;
}


const initialState: ProfileState = {
  profile: null,
  following: [],
  search: {
    email: "",
    username: "",
    stateMessage: "",
    profileImg: "",
    id: "",
  },
  done: false,
  // following: null,
  error: null,
};

type ChangeFieldAction = ActionType<typeof changeField>;

// 친구추가 - 이름순

const profile = createReducer<ProfileState, any>(initialState, {
  [INITIALIZE_SEARCH_FORM] :(state) => ({
    ...state,
    search: initialState.search,
    error: initialState.error,
    done: false
  }),
  [SET_DONE]: (state) => ({
    ...state,
    done: false,
  }),
  [CHANGE_FIELD]: (
    state,
    { payload: { form, key, value } }: ChangeFieldAction
  ) =>
    produce(state, (draft) => {
      draft[form][key] = value;
    }),
  [SET_UPDATE_PROFILE]: (state, { payload }) => ({
    ...state, 
    search: payload
  }),
  // [SET_FOLLOWING_ID]: (state, { payload: id }) => ({
  //   ...state,
  //   following: id,
  // }),
  [LOAD_PROFILE_SUCCESS]: (state, { payload: profile }) => ({
    ...state,
    profile,
  }), 
  [UPDATE_PROFILE_SUCCESS]: (state, { payload: profile }) => ({
    ...state,
    profile: {
      ...state.profile,
      username: profile.username,
      stateMessage: profile.stateMessage,
    },
    done: true,
  }),
  [LOAD_FOLLOWING_SUCCESS]: (state, { payload: following }) => ({
    ...state,
    following,
  }),
  [REGISTER_FOLLOWING_SUCCESS]: (state, { payload: following }) => ({
    ...state,
  }),
  [UPDATE_FOLLOWING_SUCCESS]: (state, { payload: following }) => {
    const idx = state.profile.following.findIndex(
      (following: any) => following._id === following._id
    );
    return produce(state, (draft) => {
      draft.profile.following[idx].username = following.username;
      draft.done = true;
    });
  },
  [REMOVE_FOLLOWING_SUCCESS]: (state, { payload: following }) => ({
    ...state,
  }),
  // [SEARCH_FOLLOW_PROFILE_SUCCESS]: (state, {payload: search }) => ({
  //   ...state,
  // }),
  // [SEARCH_UPDATE_PROFILE_BY_ID_SUCCESS]: (state, { payload: search }) =>
  //   produce(state, (draft) => {
  //     draft.search.username = search.username;
  //     draft.search.stateMessage = search.stateMessage;
  //     draft.search.id = search._id;
  //     draft.error = null;
  //   }),
  [SEARCH_PROFILE_BY_EMAIL_SUCCESS]: (state, { payload: search }) =>
    produce(state, (draft) => {
      draft.search.username = search.username;
      draft.search.id = search._id;
      draft.error = null;
    }),
  [SEARCH_PROFILE_BY_EMAIL_FAILURE]: (state, {payload: error}) => ({
    ...state,
    error
  }),
});


export default profile;
