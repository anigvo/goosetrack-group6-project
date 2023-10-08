// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAvatar } from '../../redux/selectors';
import user from '../../assets/icons/user.svg';
import {
  CircularAvatar,
  DefaultAvatar,
  AvatarImg,
} from './Avatar.styled';

export const Avatar = () => {

  // const { avatarUrl } = useSelector(selectUser);
  const photo = useSelector(selectAvatar);
 
  // const [file, setFile] = useState(avatarUrl || null);

  // useEffect(() => {
  //   setFile(avatarUrl);
  // }, [avatarUrl]);

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
