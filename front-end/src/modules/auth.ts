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
import { AxiosError } from 'axios';
import axios from 'axios';
const JWT_EXPIRY_TIME = 24 * 3600 * 1000;


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE
] = createActionTypes('auth/LOGIN');

export const login = createAsyncAction(
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE
)<object, any, AxiosError>();


const [
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
] = createActionTypes('auth/REGISTER');

export const register = createAsyncAction(
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
)<object, any, AxiosError>();






export const changeField = createAction(
  CHANGE_FIELD,
  ({
    form,
    key,
    value,
  }: {
    form: "login" | "register";
    key: string;
    value: string;
  }) => ({
    form,
    key,
    value,
  })
)();

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: "login" | "register") => form
)();
//export const register = createAction(REGISTER, ({ username, password }: { username: string, password: string }) => ({ username, password }))();
//export const login = createAction(LOGIN, ({ username, password }: { username: string, password: string }) => ({ username, password }))();

//saga
const registerSaga = createAsyncSaga(REGISTER, authAPI.register);
const loginSaga = createAsyncSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

interface AuthState {
  [key:string] : any;
  register: {
    [key:string] : string;
    username: string;
    email: string;
    password: string;
    // passwordConfirm: string;
  };
  login: {
    [key:string] : string;
    email: string;
    password: string;
    username: string;
    // remember: boolean;
  };
  auth: any;
  authError: any;
}

const initialState: AuthState = {
  register: {
    username: '',
    email: '',
    password: '',
    // passwordConfirm: '',
  },
  login: {
    username:'',
    email: '',
    password: '',
    // remember: false,
  },
  auth: '',
  authError: '',
};

type InitializeForm = ActionType<typeof initializeForm>;
type ChangeFieldAction = ActionType<typeof changeField>;

const auth = createReducer<AuthState, any>(initialState, {
  [INITIALIZE_FORM]: (state, { payload: form }: InitializeForm) =>
    produce(state, (draft) => {
      draft[form] = initialState[form];
      draft.authError = null;
    }),
  [CHANGE_FIELD]: (
    state,
    { payload: { form, key, value } }: ChangeFieldAction
  ) =>
    produce(state, (draft) => {
      draft[form][key] = value;
    }),
  [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    authError: null,
    auth,
  }),
  [REGISTER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    authError: error,
  }),
  [LOGIN_SUCCESS]: (state, { payload: result }) => {
    localStorage.setItem("token", result.access_token);

    axios.defaults.headers.common['Authorization'] = result.access_token;
    console.log(result);
    return {
      ...state,
      // authError: null,
      // token: result.access_token,
      auth: true,
    };
  },
  [LOGIN_FAILURE]: (state, { payload: error }) => {
    console.log("fail");
    return {
      ...state,
      authError: error,
    };
  },
});

export default auth;