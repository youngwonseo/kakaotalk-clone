import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch } from 'react-redux';

interface Props {};

// 컨테이너 또는 컴포넌트 조합
const ProfileContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();
  

  useEffect(()=>{
    
      
    
  },[dispatch]);


  const emitData = () => {
    // console.log('!!')
    // console.log(socket);
    // socket.emit('msgToServer', {name: 'hi'});
  }
  
  const myProfile = {
    idx: 1,
    name: "서영원",
    lastMessage: "What I cannot create, I do not understand.",
    img: "/profile-default.png",
  }

  const profiles: [] = [];

  // const profiles = [
  //   {
  //     idx: 1,
  //     name: "서영원",
  //     lastMessage: "Search & Learning",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 2,
  //     name: "이영호",
  //     lastMessage: "Flash",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 3,
  //     name: "김명운",
  //     lastMessage: "Queen",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 4,
  //     name: "이제동",
  //     lastMessage: "JD",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 5,
  //     title: "서영원",
  //     lastMessage: "Search & Learning",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 6,
  //     name: "이영호",
  //     lastMessage: "Flash",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 7,
  //     name: "김명운",
  //     lastMessage: "Queen",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 8,
  //     name: "이제동",
  //     lastMessage: "JD",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 9,
  //     name: "서영원",
  //     lastMessage: "Search & Learning",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 10,
  //     name: "이영호",
  //     lastMessage: "Flash",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 11,
  //     name: "김명운",
  //     lastMessage: "Queen",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 12,
  //     name: "이제동",
  //     lastMessage: "JD",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 13,
  //     name: "서영원",
  //     lastMessage: "Search & Learning",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 14,
  //     name: "이영호",
  //     lastMessage: "Flash",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 15,
  //     name: "김명운",
  //     lastMessage: "Queen",
  //     img: "/profile-default.png",
  //   },
  //   {
  //     idx: 16,
  //     name: "이제동",
  //     lastMessage: "JD",
  //     img: "/profile-default.png",
  //   },
  // ];

  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleSearch = () => {
    openModal();
  }

  return (
    <>
      <ProfileItem profile={myProfile}/>
      <a onClick={handleSearch}>검색</a>
      <ProfileList title={"친구"} profiles={profiles} />
    </>
  );
}

export default ProfileContainer;