
import ProfileUpdateContainer from '../containers/profile/MyProfileContainer';
import MyProfileContainer from '../containers/profile/MyProfileContainer';
import FollowingProfileContainer from '../containers/profile/FollowingProfileContainer';
import ProfileSearchContainer from '../containers/profile/ProfileSearchContainer';
import ChatViewContainer from '../containers/chat/ChatViewContainer';


export const PROFILE_UPDATE_MODAL: string = 'profile_update_modal';
export const MY_PROFILE_MODAL: string = 'profile_update_modal';
export const FOLLOWING_PROFILE_MODAL: string = 'following_profile_modal';
export const PROFILE_SEARCH_MODAL: string = 'profile_search_modal';
export const CHAT_MODAL: string = 'chat_modal';

const ContentMap = {
  [PROFILE_UPDATE_MODAL]: ProfileUpdateContainer,
  [MY_PROFILE_MODAL]: MyProfileContainer,
  [FOLLOWING_PROFILE_MODAL]: FollowingProfileContainer,
  [PROFILE_SEARCH_MODAL]: ProfileSearchContainer,
  [CHAT_MODAL]: ChatViewContainer,
}


export default ContentMap;