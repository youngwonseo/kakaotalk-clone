import React, { useState } from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import MyProfile from '../../components/profile/MyProfile';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, updateProfile } from '../../modules/profile';

interface Props{}

// 페이지로 분리?
const ProfileUpdateContainer: React.FC<Props> = () => {
  
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  
  // 내프로필정보 가져오기
  const {
    profile
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
    })
  );


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'profile', key: name, value }));
  }

  const handleChangeMode = () => {
    setIsEditMode(!isEditMode);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, stateMessage} = profile;
    console.log(username, stateMessage)
    dispatch(updateProfile.request({ username, stateMessage }));

  }

  return (
    <ModalTemplate>
      <MyProfile
        profile={profile}
        isEditMode={isEditMode}
        handleChange={handleChange}
        handleChangeMode={handleChangeMode}
        handleSubmit={handleSubmit}
      />
    </ModalTemplate>
  );
}

export default ProfileUpdateContainer;