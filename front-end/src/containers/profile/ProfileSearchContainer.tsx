import React, { useEffect } from 'react';
import ProfileModalTemplate from '../../components/template/ProfileModalTemplate';
import ProfileSearch from '../../components/profile/ProfileSearch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, searchProfileByEmail, registerFollowing, initializeSearchForm } from '../../modules/profile';

interface Props{}

// 페이지로 분리?
const ProfileSearchContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  // 내프로필정보 가져오기
  const { searchEmail, searchUsername, searchId, error } = useSelector(
    (state: RootState) => ({
      searchEmail: state.profile.search.email,
      searchUsername: state.profile.search.username,
      searchId: state.profile.search.id,
      error: state.profile.error,
    })
  );

  useEffect(()=>{
    return ()=>{
      dispatch(initializeSearchForm());
    }
  },[dispatch]);


  // 추가 완료
  useEffect(()=> {

  },[]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'search', key: name, value }));
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchProfileByEmail.request(searchEmail));
  };


  const handleAddFollowingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerFollowing.request({username: searchUsername, user: searchId}));
  }


  return (
    <ProfileModalTemplate>
      <ProfileSearch
        searchEmail={searchEmail}
        searchId={searchId}
        searchUsername={searchUsername}
        handleChange={handleChange}
        handleAddFollowingSubmit={handleAddFollowingSubmit}
        handleSearchSubmit={handleSearchSubmit}
        error={error}
      />
    </ProfileModalTemplate>
  );
}

export default ProfileSearchContainer;