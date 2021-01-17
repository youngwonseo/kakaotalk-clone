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
import * as chatAPI from '../lib/api/chat';
import { AxiosError } from 'axios';



const CHANGE_FIELD = 'chat/CHANGE_FIELD';
const INITIALIZE_FORM = 'chat/INITIALIZE_FORM';

const [
  LOAD_CHATS, 
  LOAD_CHATS_SUCCESS, 
  LOAD_CHATS_FAILURE
] = createActionTypes('chat/LOAD_CHATS');

export const loadChats = createAsyncAction(
  LOAD_CHATS, 
  LOAD_CHATS_SUCCESS, 
  LOAD_CHATS_FAILURE
)<void, any, AxiosError>();

const [
  REGISTER_CHAT, 
  REGISTER_CHAT_SUCCESS, 
  REGISTER_CHAT_FAILURE
] = createActionTypes('chat/REGISTER_CHAT');

export const registerChat = createAsyncAction(
  REGISTER_CHAT, 
  REGISTER_CHAT_SUCCESS, 
  REGISTER_CHAT_FAILURE
)<any, any, AxiosError>();


const [
  UPDATE_CHAT, 
  UPDATE_CHAT_SUCCESS, 
  UPDATE_CHAT_FAILURE
] = createActionTypes('chat/UPDATE_CHAT');

export const updateChat = createAsyncAction(
  UPDATE_CHAT, 
  UPDATE_CHAT_SUCCESS, 
  UPDATE_CHAT_FAILURE
)<string, any, AxiosError>();


const [
  REMOVE_CHAT, 
  REMOVE_CHAT_SUCCESS, 
  REMOVE_CHAT_FAILURE
] = createActionTypes('chat/REMOVE_CHAT');

export const removeChat = createAsyncAction(
  REMOVE_CHAT, 
  REMOVE_CHAT_SUCCESS, 
  REMOVE_CHAT_FAILURE
)<string, any, AxiosError>();



const loadChatsSaga = createAsyncSaga(LOAD_CHATS, chatAPI.loadChats);
const registerChatSaga = createAsyncSaga(REGISTER_CHAT, chatAPI.registerChat);
const updateChatSaga = createAsyncSaga(UPDATE_CHAT, chatAPI.updateChat);
const deleteChatSaga = createAsyncSaga(REMOVE_CHAT, chatAPI.deleteChat);
// const searchProfileSaga = createAsyncSaga(SEARCH_PROFILE, profileAPI.search);


export function* chatSaga() {
  yield takeLatest(LOAD_CHATS, loadChatsSaga);
  yield takeLatest(REGISTER_CHAT, registerChatSaga);
  yield takeLatest(UPDATE_CHAT, updateChatSaga);
  yield takeLatest(REMOVE_CHAT, deleteChatSaga);
}



interface ChatState {
  chats: any;
  messages: any;
}


const initialState: ChatState = {
  chats: [],
  messages: [],
}

const chat = createReducer<ChatState, any>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
  }),
  // [REGISTER_CHAT]
});


export default chat;



