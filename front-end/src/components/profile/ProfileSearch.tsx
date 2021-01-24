import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';

const ProfileSearchWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


interface Props {
  searchId: any;
  searchEmail: any;
  searchUsername: any;
  handleAddFollowingSubmit: any;
  handleChange: any;
  handleSearchSubmit: any;
  error: any;
}

const ProfileSearch: React.FC<Props> = ({
  searchId,
  searchEmail,
  searchUsername,
  handleAddFollowingSubmit,
  handleChange,
  handleSearchSubmit,
  error,
}) => {
  return (
    <ProfileSearchWrapper>
      
      {error && error.message}
      {searchId && (
        <form onSubmit={handleAddFollowingSubmit}>
          <Input name="username" type="text" value={searchUsername} onChange={handleChange}/>
          <Button onClick={handleAddFollowingSubmit}>추가</Button>
        </form>
      )}
      

      <form onSubmit={handleSearchSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          value={searchEmail}
          onChange={handleChange}
        />
        <Button onClick={handleSearchSubmit}>검색</Button>
      </form>
    </ProfileSearchWrapper>
  );
};

export default ProfileSearch;