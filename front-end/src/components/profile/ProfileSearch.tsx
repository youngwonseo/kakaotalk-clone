import React from 'react';
import styled from 'styled-components';

const ProfileSearchWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


interface Props {
  searchEmail: any;
  searchResult: any;
  handleAddFollowing: any;
  handleChange: any;
  handleSubmit: any;
}

const ProfileSearch: React.FC<Props> = ({
  searchEmail,
  searchResult,
  handleAddFollowing,
  handleChange,
  handleSubmit,
}) => {
  return (
    <ProfileSearchWrapper>
      {searchResult && (
        <div>
          <input type="text" value={searchResult.username} />
          <button onClick={handleAddFollowing}>추가</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchEmail"
          value={searchEmail}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>검색</button>
      </form>
    </ProfileSearchWrapper>
  );
};

export default ProfileSearch;