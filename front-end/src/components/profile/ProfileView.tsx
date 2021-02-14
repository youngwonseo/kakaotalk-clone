import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import { IoPencil, IoChatbubbleSharp, IoCloseOutline } from 'react-icons/io5';

const ProfileViewWrapper = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Form = styled.form`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 20%;
  height: 64px;
  width: 64px;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const CancelButton = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
`;


const CompleteButton = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
`;


const ChatButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;


const UsernameText = styled.div`
  font-weight: bold;
`;

const StateMessageText = styled.div`
`;

const BottomButtonGroup = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
`;

const ButtomButton = styled.a`
  /* font-size: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 1rem;
`;

interface Props{
  profile: any;
  change: any;
  isEditMode: boolean;
  isMyProfile: boolean;
  handleChange: any;
  handleChangeMode: any;
  handleCloseModal: any;
  handleUpdateSubmit: any;
  handleToChat: any;
}

const ProfileView: React.FC<Props> = ({
  profile,
  change,
  isEditMode,
  isMyProfile,
  handleChange,
  handleChangeMode,
  handleCloseModal,
  handleUpdateSubmit,
  handleToChat,
}) => {


  useEffect(()=>{
    console.log(isMyProfile);
  },[]);

  return (
    <ProfileViewWrapper>
      {isEditMode && (
        <Form onSubmit={handleUpdateSubmit}>
          <CancelButton onClick={handleChangeMode}>취소</CancelButton>
          <CompleteButton onClick={handleUpdateSubmit}>완료</CompleteButton>

          <input type="file" name="profileImg" onChange={handleChange} />
          <ProfileImg src={change.profilePreview} />

          <Input
            name="username"
            type="text"
            value={change.username}
            onChange={handleChange}
          />

          {isMyProfile && (
            <Input
              name="stateMessage"
              type="text"
              value={change.stateMessage}
              onChange={handleChange}
            />
          )}
        </Form>
      )}

      {!isEditMode && (
        <>
          <CloseButton onClick={handleCloseModal}>
            <IoCloseOutline size="1.5rem" />
          </CloseButton>
          <ProfileImg src={change.profilePreview} />
          <UsernameText>{profile && profile.username}</UsernameText>
          <StateMessageText>{profile && profile.stateMessage}</StateMessageText>
          {/* {!isMyProfile && <ChatButton onClick={handleToChat}>채팅</ChatButton>} */}
        </>
      )}

      {!isEditMode && isMyProfile && (
        <BottomButtonGroup>
          <ButtomButton onClick={handleChangeMode}>
            <IoPencil size="2.5rem" />
            프로필 편집
          </ButtomButton>
          <ButtomButton>
            <IoChatbubbleSharp size="2.5rem" />
            나와의 채팅
          </ButtomButton>
        </BottomButtonGroup>
      )}

      {!isEditMode && !isMyProfile && (
        <BottomButtonGroup>
          <ButtomButton onClick={handleToChat}>
            <IoChatbubbleSharp size="2.5rem" />
            1:1 채팅
          </ButtomButton>
          <ButtomButton onClick={handleChangeMode}>
            <IoPencil size="2.5rem" />
            친구 편집
          </ButtomButton>
        </BottomButtonGroup>
      )}
    </ProfileViewWrapper>
  );
};

export default ProfileView;