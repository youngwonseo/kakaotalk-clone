import React, { useState, useEffect, useContext } from 'react';
import ProfileModalTemplate from '../../components/template/ProfileModalTemplate';
import { useDispatch, useSelector } from 'react-redux';
import ProfileView from '../../components/profile/ProfileView';
import {
  changeField,
  updateProfile,
  updateFollowing,
  initializeSearchForm,
  setDone,
  registerProfileImg,
  initializeChangeForm,
} from "../../modules/profile";
import { RootState } from "../../modules";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ModalContext } from '../../lib/createModalProvider';
import { CHAT_MODAL } from '../../lib/ModalContent';
import { searchChatByUser } from '../../modules/chat';
import axios from 'axios';

interface Props extends RouteComponentProps{

}

const ProfileViewContainer: React.FC<Props> = ({ history }) => {

  const dispatch = useDispatch();
  const { openModal, closeModal } = useContext(ModalContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false);


  // 내프로필정보 가져오기
  const {
    profile,
    following,
    changeProfile,
    changeFollowing,
    done,
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
      following: state.profile.following,
      changeProfile: state.profile.changeProfile,
      changeFollowing: state.profile.changeFollowing,
      done: state.profile.done,
    })
  );

  


  useEffect(() => {
    // change profile과 change following중 비어있지 않는것을 수정사항이라고 선택
    setIsMyProfile(changeProfile.id !== '')
    return () => { 
      //change form 초기화
      dispatch(initializeChangeForm());
    }
  }, [dispatch]);



  /**
   * 수정이 완료되면
   */
  useEffect(()=>{
    // 내프로필수정, 친구프로필수정 결정
    if(done){
      setIsEditMode(false);
      dispatch(setDone(false));
    }
  },[done]);




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;    
    if(name === "profileImg" && e.target.files ){
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = async () => {
        dispatch(
          changeField({
            form: isMyProfile ? "changeProfile" : "changeFollowing",
            key: "profilePreview",
            value: reader.result,
          })
        );
      }
      
      dispatch(
        changeField({
          form: isMyProfile ? "changeProfile" : "changeFollowing",
          key: name,
          value: e.target.files[0],
        })
      );
    }else{
      dispatch(
        changeField({
          form: isMyProfile ? "changeProfile" : "changeFollowing",
          key: name,
          value: value,
        })
      );
    }
  }


  /**
   * 프로필 수집 모드 전환 / 취소
   */
  const handleChangeMode = () => {

    // if(isEditMode)
    // dispatch(setUpdateProfile({
    //   id: profile._id,
    //   username: profile.username,
    //   profilePreview: `/api/files/${profile.profileImages[0].filename}`,
    //   stateMessage: profile.stateMessage,
    // }));

    setIsEditMode(!isEditMode);
  }



  /**
   * 내프로필 수정
   * @param e 
   */
  const handleProfileUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, stateMessage, profileImg } = changeProfile;

    if(profileImg){
      // 파일 업로드
      const formData = new FormData();
      formData.append('file', profileImg);
      dispatch(registerProfileImg.request(formData));
      dispatch(updateProfile.request({ username, stateMessage, profileImg: profileImg})); 
    }else{
      dispatch(updateProfile.request({ username, stateMessage}));
    }
  }

  useEffect(()=>{
    if(changeProfile.profileImg){
      console.log(changeProfile.profileImg);
      const { username, stateMessage, profileImg } = changeProfile;
      dispatch(updateProfile.request({ username, stateMessage, profileImg}))
    }
  },[changeProfile.profileImg]);




  // 친구 프로필 수정
  const handleFollowUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, username } = changeFollowing;
    dispatch(updateFollowing.request({ id, username }));
  }




  /**
   * 채팅창 열기
   */
  const handleToChat = () => {
    // 잘못됨
    const { userid } = changeProfile;
    dispatch(searchChatByUser.request(userid));
    // following 으로 chat 검색후 ?
    history.push("/chat");
    openModal(CHAT_MODAL);
  }


  const handleCloseModal = () => {
    
    // // change를 profile로 대체
    // dispatch(setUpdateProfile({
    //   id: profile._id,
    //   username: profile.username,
    //   // profileImg: profile.profileImg ||'',
    //   stateMessage: profile.stateMessage || '',
    // }));

    closeModal();
  }



  return (
    <ProfileModalTemplate>
      {isMyProfile && 
        <ProfileView
          isEditMode={isEditMode}
          isMyProfile={isMyProfile}
          // following={following}
          profile={profile} // 원본 profile, profile or following
          change={changeProfile} // 수정
          handleChange={handleChange}
          handleChangeMode={handleChangeMode}
          handleUpdateSubmit={handleProfileUpdateSubmit}
          // handleFollowUpdateSubmit={handleFollowUpdateSubmit}
          handleToChat={handleToChat}
          handleCloseModal={handleCloseModal}
        />
      }


      {!isMyProfile && 
        <ProfileView
          isEditMode={isEditMode}
          isMyProfile={isMyProfile}
          // following={following}
          profile={following[changeFollowing.idx]} // 원본 profile, profile or following
          change={changeFollowing} // 수정
          handleChange={handleChange}
          handleChangeMode={handleChangeMode}
          handleUpdateSubmit={isMyProfile ? handleProfileUpdateSubmit : handleFollowUpdateSubmit}
          // handleFollowUpdateSubmit={handleFollowUpdateSubmit}
          handleToChat={handleToChat}
          handleCloseModal={handleCloseModal}
        />
      }





      
    </ProfileModalTemplate>
  );
}


export default withRouter(ProfileViewContainer);