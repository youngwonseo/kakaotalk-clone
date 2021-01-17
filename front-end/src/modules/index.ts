import { combineReducers  } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import profile, { profileSaga } from './profile';
import chat, { chatSaga } from './chat';
// import data, { dataSaga } from './data';
// import device, { deviceSaga } from './device';
// import patient, { patientSaga } from './patient';
// // import page, { pageSaga } from './page';
// // import unit, { unitSaga } from './unit';
// import base, { baseSaga } from './base';
// import search, { searchSaga } from './search';

// import user, { userSaga } from './user';

const rootReducer = combineReducers({
  loading,
  // base,
  auth,
  profile,
  chat,
  // data,
  // main,
  // device,
  // patient,
  // search,
  // user,
});

export function* rootSaga() {
  yield all([
    // baseSaga(),
    authSaga(),
    profileSaga(),
    chatSaga(),
    // dataSaga(),
    // mainSaga(),
    // deviceSaga(),
    // patientSaga(),
    // searchSaga(),
    // userSaga(),
  ]);
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;