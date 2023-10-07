import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import user from '../../assets/icons/user.svg';
import {
  CircularAvatar,
  DefaultAvatar,
  AvatarImg,
} from './Avatar.styled';

export const Avatar = () => {

  const { avatarUrl } = useSelector(selectUser);
 
  const [file, setFile] = useState(avatarUrl || null);

  useEffect(() => {
    setFile(avatarUrl);
  }, [avatarUrl]);

  return (
    <>
      {file ? (
        <CircularAvatar
          src={
            typeof avatarUrl === 'string'
              ? file
              : URL.createObjectURL(avatarUrl)
          }
          alt="avatarUrl"
        />
      ) : (
        <DefaultAvatar> <AvatarImg src={user} alt="" /></DefaultAvatar>
      )}
    </>
  );
}; 
