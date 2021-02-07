import React, { useContext } from 'react';
import Header from '../../components/layout/Header';
import { PROFILE_SEARCH_MODAL } from '../../lib/ModalContent';
import { ModalContext } from '../../lib/createModalProvider';

import { IoSearchSharp, IoPersonAddOutline } from "react-icons/io5";

interface Props {}

const ProfileHeaderContainer: React.FC<Props> = () => {

  const { openModal, closeModal } = useContext(ModalContext);

  const handleSearchOpen = () => {
    openModal(PROFILE_SEARCH_MODAL);
  }

  
  return (
    <Header title="친구">
      <a onClick={handleSearchOpen}><IoSearchSharp /></a>
      <a onClick={handleSearchOpen}><IoPersonAddOutline/></a>
    </Header>
  );
}


export default ProfileHeaderContainer;