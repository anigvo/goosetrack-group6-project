import user from '../../assets/icons/user.svg';
import {
  CircularAvatar,
  DefaultAvatar,
  AvatarImg,
} from './Avatar.styled';

export const Avatar = ({photo}) => {
  return (
    <>
      {photo ? (
        <CircularAvatar src={photo} alt="avatarUrl" />
      ) : (
        <DefaultAvatar>
          {' '}
          <AvatarImg src={user} alt="" />
        </DefaultAvatar>
      )}
    </>
  );
}; 
