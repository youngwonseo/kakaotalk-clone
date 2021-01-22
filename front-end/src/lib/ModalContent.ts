
import ProfileUpdateContainer from '../containers/profile/MyProfileContainer';
import MyProfileContainer from '../containers/profile/MyProfileContainer';
import FriendProfileContainer from '../containers/profile/FriendProfileContainer';
import ProfileSearchContainer from '../containers/profile/ProfileSearchContainer';
import ChatViewContainer from '../containers/chat/ChatViewContainer';


export const PROFILE_UPDATE_MODAL: string = 'profile_update_modal';
export const MY_PROFILE_MODAL: string = 'profile_update_modal';
export const FRIEND_PROFILE_MODAL: string = 'friend_profile_modal';
export const PROFILE_SEARCH_MODAL: string = 'profile_search_modal';
export const CHAT_MODAL: string = 'chat_modal';

const ContentMap = {
  [PROFILE_UPDATE_MODAL]: ProfileUpdateContainer,
  [MY_PROFILE_MODAL]: MyProfileContainer,
  [FRIEND_PROFILE_MODAL]: FriendProfileContainer,
  [PROFILE_SEARCH_MODAL]: ProfileSearchContainer,
  [CHAT_MODAL]: ChatViewContainer,
}


export default ContentMap;