import React, { useEffect } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Helmet }  from 'react-helmet-async';
import styled from 'styled-components';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import ModalProvider from './lib/createModalProvider';

import io from "socket.io-client";

import ModalContent from '../src/lib/ModalContent';
import palette from './lib/styles/palette';
import { loadToken } from './lib/clientToken';
import PrivateRoute from './lib/PrivateRoute';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Intro = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 400px;
  border: 1px solid black;
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;




interface Props {

}

const App: React.FC<Props> = () => {

  //?
  loadToken();
  useEffect(()=>{
  
  }, []);


 

  return (
    <AppWrapper>
      <Intro>
        <h1>Kakao Talk Clone</h1>
      </Intro>
      <Main>
        <ModalProvider contentsMap={ModalContent}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/" component={ProfilePage}/>
            <PrivateRoute path="/profile/:id" component={ProfilePage}/>
            <PrivateRoute path="/chat" component={ChatPage}/>
            <PrivateRoute path="/setting" component={SettingPage}/>
          </Switch>
        </ModalProvider>
      </Main>
    </AppWrapper>
  );
}

export default App;
