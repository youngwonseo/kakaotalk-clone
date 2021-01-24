import React, { useState, useEffect, useContext } from 'react';
import ProfileModalTemplate from '../../components/template/ProfileModalTemplate';
import { useDispatch, useSelector } from 'react-redux';
import ProfileView from '../../components/profile/ProfileView';
import { changeField, updateProfile, updateFollowing, initializeSearchForm, setDone } from '../../modules/profile';
import { RootState } from '../../modules';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ModalContext } from '../../lib/createModalProvider';
import { CHAT_MODAL } from '../../lib/ModalContent';
import { searchChatByUser } from '../../modules/chat';

interface Props extends RouteComponentProps{

}

const ProfileViewContainer: React.FC<Props> = ({ history }) => {


  const { openModal, closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  
  // 내프로필정보 가져오기
  const {
    profile,
    searchProfile,
    done,
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
      searchProfile: state.profile.search,
      done: state.profile.done,
    })
  );


  useEffect(() => {
    return () => {
      dispatch(initializeSearchForm());
    }
  }, [dispatch]);


  useEffect(()=>{
    if(done){
      setIsEditMode(false);
      dispatch(setDone(false));
    }
  },[done]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'search', key: name, value }));
  }

  const handleChangeMode = () => {
    setIsEditMode(!isEditMode);
  }




  // 내프로필 수정
  const handleProfileUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, stateMessage } = searchProfile;
    dispatch(updateProfile.request({ username, stateMessage }));
  }


  // 친구 프로필 수정
  const handleFollowUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, username } = searchProfile;
    dispatch(updateFollowing.request({ id, username }));
  }

  const handleToChat = () => {
    const { id } = searchProfile;
    dispatch(searchChatByUser.request(id));

    // following 으로 chat 검색후 ?
    history.push("/chat");
    openModal(CHAT_MODAL);
  }



  return (
    <ProfileModalTemplate>
      <ProfileView
        isEditMode={isEditMode}
        isMyProfile={profile._id === searchProfile.id}
        profile={searchProfile}
        handleChange={handleChange}
        handleChangeMode={handleChangeMode}
        handleProfileUpdateSubmit={handleProfileUpdateSubmit}
        handleFollowUpdateSubmit={handleFollowUpdateSubmit}
        handleToChat={handleToChat}
      />
    </ProfileModalTemplate>
  );
}


export default withRouter(ProfileViewContainer);