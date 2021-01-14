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

import io from 'socket.io-client';



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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {

}

const App: React.FC<Props> = () => {

  
  useEffect(()=>{
    const socket = io('/');
    socket.on('connect_error', (error: any)=> {
      console.log(error);
    });
    socket.on('connect_timeout', (err: any) => {
      console.log("client connect_timeout: ", err);
  });

    socket.on('connect', () => {
      console.log('conection!');
    });
    socket.on('error', (error: any) => {
      console.log(error);
    });
  }, []);
 

  return (
    <AppWrapper>
      <Intro>
        <h1>Intro</h1>
      </Intro>
      <Main>
        <ModalProvider>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/" component={ProfilePage} />
            <Route path="/profile/:id" component={ProfilePage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/setting" component={SettingPage} />
          </Switch>
        </ModalProvider>
      </Main>
    </AppWrapper>
  );
}

export default App;
