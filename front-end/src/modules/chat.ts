import {
  createAction,
  createAsyncAction,
  ActionType, 
  createReducer
} from 'typesafe-actions';
import produce from 'immer';
import { takeLatest, fork, call, take, cancelled, put } from 'redux-saga/effects';
import createAsyncSaga, {
  createActionTypes
} from '../lib/createAsyncSaga';
import * as profileAPI from '../lib/api/profile';
import * as chatAPI from '../lib/api/chat';
import { AxiosError } from 'axios';
import { createSocketChannel } from '../lib/createSocketChannel';
import io from "socket.io-client";
import profile from './profile';


const CHANGE_FIELD = 'chat/CHANGE_FIELD';
const INITIALIZE_FORM = 'chat/INITIALIZE_FORM';
const ADD_CHAT = 'chat/ADD_CHAT';
const ADD_MESSAGE = 'chat/ADD_MESSAGE';

const SET_CHAT_ID = 'chat/SET_CHAT_ID';
const SEND_MESSAGE = 'chat/SEND_MESSAGE';

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
  SEARCH_CHAT_BY_USER, 
  SEARCH_CHAT_BY_USER_SUCCESS, 
  SEARCH_CHAT_BY_USER_FAILURE
] = createActionTypes('chat/SEARCH_CHAT_BY_USER');



export const searchChatByUser = createAsyncAction(
  SEARCH_CHAT_BY_USER, 
  SEARCH_CHAT_BY_USER_SUCCESS, 
  SEARCH_CHAT_BY_USER_FAILURE
)<any, any, AxiosError>();


// const [
//   REGISTER_CHAT, 
//   REGISTER_CHAT_SUCCESS, 
//   REGISTER_CHAT_FAILURE
// ] = createActionTypes('chat/REGISTER_CHAT');

// export const registerChat = createAsyncAction(
//   REGISTER_CHAT, 
//   REGISTER_CHAT_SUCCESS, 
//   REGISTER_CHAT_FAILURE
// )<any, any, AxiosError>();


// const [
//   UPDATE_CHAT, 
//   UPDATE_CHAT_SUCCESS, 
//   UPDATE_CHAT_FAILURE
// ] = createActionTypes('chat/UPDATE_CHAT');

// export const updateChat = createAsyncAction(
//   UPDATE_CHAT, 
//   UPDATE_CHAT_SUCCESS, 
//   UPDATE_CHAT_FAILURE
// )<string, any, AxiosError>();

// const [
//   REMOVE_CHAT, 
//   REMOVE_CHAT_SUCCESS, 
//   REMOVE_CHAT_FAILURE
// ] = createActionTypes('chat/REMOVE_CHAT');

// export const removeChat = createAsyncAction(
//   REMOVE_CHAT, 
//   REMOVE_CHAT_SUCCESS, 
//   REMOVE_CHAT_FAILURE
// )<string, any, AxiosError>();


export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: { key: string; value: string }) => ({
    key,
    value,
  })
)();

export const addChat = createAction(ADD_CHAT, (chat) => chat)();

export const addMessage = createAction(
  ADD_MESSAGE,
  ({ chat, message } : {chat: any, message: any}) => ({
    chat,
    message,
  }),
)();

export const setChatId = createAction(
  SET_CHAT_ID,
  (id) => id
)();

export const sendMessage = createAction(
  SEND_MESSAGE,
  (message) => message
)();
// export const setData = createAction(SET_DATA, (data: any)=>data)();

const loadChatsSaga = createAsyncSaga(LOAD_CHATS, chatAPI.loadChats);
const searchChatByUserSaga = createAsyncSaga(SEARCH_CHAT_BY_USER, chatAPI.searchChatByUser);
// const registerChatSaga = createAsyncSaga(REGISTER_CHAT, chatAPI.registerChat);
// const updateChatSaga = createAsyncSaga(UPDATE_CHAT, chatAPI.updateChat);
// const deleteChatSaga = createAsyncSaga(REMOVE_CHAT, chatAPI.deleteChat);
// const searchProfileSaga = createAsyncSaga(SEARCH_PROFILE, profileAPI.search);


function createDataSocket() {
  return new Promise((resolve, reject) => {
    const socket = io('/');    
    socket.on('connect', () => {
      resolve(socket);
    });
    socket.on('error', (error: any)=>{
      reject(error);
    });
  });
}

function* writeSocket(socket: any) {
  while (true) {
    const { payload } = yield take(SEND_MESSAGE);
    // console.log('SEND_MESSAGE', payload);
    socket.emit('message', payload);
  }
}

function* listenData() { 
  let socket;
  let socketChannel;
  
  try{
    // 소캣 생성
    socket        = yield call(createDataSocket);
    // 채널 생성
    socketChannel = yield call(createSocketChannel, socket);
    
    yield fork(writeSocket, socket); 


    while(true) {
      
      // 새로운 채팅
      const { chat, chatid, message, isNew } = yield take(socketChannel);
      

      console.log(chat, chatid, message, isNew);
      // 새로 생성된 채팅방이면
      if (isNew){
        // 메세지는 포함되어 있음
        yield put(addChat(chat));
      }else{
        // 새로운 메세지 데이터
        yield put(
          addMessage({
            chat: chatid,
            message: {
              ...message,
              // isMine: message.user._id === profile._id,
            },
          })
        );
      }
      
    }

  } catch (error) {
    console.log(error);
  } finally {
    if (yield cancelled()) {
      // close the channel
      socketChannel.close();

      // // close the WebSocket connection
      socket.on('close');
    } else {
      // yield dispatch(LiveDataActions.connectionError('WebSocket disconnected'));
    }
  }
}

export function* chatSaga() {
  yield takeLatest(LOAD_CHATS, loadChatsSaga);
  yield takeLatest(SEARCH_CHAT_BY_USER, searchChatByUserSaga);
  // yield takeLatest(REGISTER_CHAT, registerChatSaga);
  // yield takeLatest(UPDATE_CHAT, updateChatSaga);
  // yield takeLatest(REMOVE_CHAT, deleteChatSaga);
  yield fork(listenData);
}



interface ChatState {
  chats: any;
  chat: any; // 선택된 채팅창 아이디
  users: any;
  message: any; //작성중인 메세지
}


const initialState: ChatState = {
  chats: [],
  chat: null,
  users: [],
  message: '',
}

const chat = createReducer<ChatState, any>(initialState, {
  [INITIALIZE_FORM]: (state) => ({
    ...state,
    message: initialState.message,
    chat: initialState.chat,
  }),
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [SET_CHAT_ID]: (state, { payload: id}) => ({
    ...state,
    chat: id, //load chat?
  }),
  [SEND_MESSAGE]: (state) => ({
    ...state,
    message: initialState.message,
  }),
  [LOAD_CHATS_SUCCESS]: (state, { payload: chats }) => ({
    ...state,
    chats,
  }),
  // [REGISTER_CHAT_SUCCESS]: (state, { payload: chat}) => ({
  //   ...state,
  //   chat: chat
  // }),
  [ADD_CHAT]: (state, { payload: chat }) => {
    return produce(state, (draft) => {
      draft.chats.push(chat);
      draft.chat = chat._id;
    });
  },
  [ADD_MESSAGE]: (state, { payload: {chat, message} }) => {
    // console.log('reducer', chat, message);
    // chat은 채팅방 아이디
    const idx = state.chats.findIndex((_chat: any) => {
      // console.log(chat._id, chat;)
      return _chat._id === chat;
    });
    console.log(idx);
    return produce(state, (draft) => {
      draft.chats[idx].messages.push(message);
    });
     
  },
  [SEARCH_CHAT_BY_USER_SUCCESS]: (state, { payload: {users, chat} }) => {
    return {
      ...state,
      chat: chat,
      users: users
    }
  },
  // [REGISTER_CHAT_SUCCESS]: (state, {payload}) => {
  //   console.log('new chat', payload);
  //   return {
  //     ...state,
  //     chat: payload._id
  //   }
  // }
  // [REGISTER_CHAT]
});


export default chat;



