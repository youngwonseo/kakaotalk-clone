import React from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import ProfileSearch from '../../components/profile/ProfileSearch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, searchProfile, registerFriend } from '../../modules/profile';

interface Props{}

// 페이지로 분리?
const ProfileSearchContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  // 내프로필정보 가져오기
  const { searchEmail, searchResult } = useSelector((state: RootState) => ({
    searchEmail: state.profile.searchEmail,
    searchResult: state.profile.searchResult,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchProfile.request(searchEmail));
  };


  const handleAddFollowing = () => {
    console.log({username: searchResult.username, following: searchResult._id});
    dispatch(registerFriend.request({username: searchResult.username, following: searchResult._id}));
  }

  return (
    <ModalTemplate>
      <ProfileSearch
        searchEmail={searchEmail}
        searchResult={searchResult}
        handleAddFollowing={handleAddFollowing}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </ModalTemplate>
  );
}

export default ProfileSearchContainer;