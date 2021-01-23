import React from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import ProfileSearch from '../../components/profile/ProfileSearch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, searchProfile, registerFollowing } from '../../modules/profile';

interface Props{}

// 페이지로 분리?
const ProfileSearchContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  // 내프로필정보 가져오기
  const { searchEmail, searchResult } = useSelector((state: RootState) => ({
    searchEmail: state.profile.search.email,
    searchResult: state.profile.search.result,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'search', key: name, value }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchProfile.request(searchEmail));
  };


  const handleAddFollowing = () => {
    dispatch(registerFollowing.request({username: searchResult.username, user: searchResult._id}));
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