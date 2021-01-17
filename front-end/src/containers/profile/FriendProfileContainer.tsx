import React, { useEffect } from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import FriendProfile from '../../components/profile/FriendProfile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { withRouter, RouteComponentProps } from "react-router";


interface Props extends RouteComponentProps {}

// 페이지로 분리?
const FriendProfileContainer: React.FC<Props> = ({ history }) => {


  const dispatch = useDispatch();
  const {
    friends,
    // selectFriendIdx,
    chats,
  } = useSelector(
    (state: RootState) => ({
      friends: state.profile.friends,
      chats: state.chat.chats,
    })
  );

  useEffect(()=>{


  },[dispatch]);

  const handleToChat = () => {

    // 채팅방이 존재하는지 검사
    for(let i=0,n=chats.length;i<n;i++){
      
      // chats.users.id
    }

    // 없으면 생성

    history.push('/chat')
    //챗으로 이동후 해당 채팅 모달 열기
  }

  return (
    <ModalTemplate>
      <FriendProfile profile={friends[0]} handleToChat={handleToChat}/>
    </ModalTemplate>
  );
}

export default withRouter(FriendProfileContainer);