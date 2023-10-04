import { useSelector } from "react-redux";
import { UserInfoWrapper, UserL, UserPhoto, UserPhotoWrapper, Username } from "./UserInfo.styled";
import { selectAvatar, selectName } from "redux/selectors";

export const UserInfo = () => {
    const photo = useSelector(selectAvatar);
    const username = useSelector(selectName);

    return (<UserInfoWrapper>
        <Username>{username}</Username>
        <UserPhotoWrapper>
            {photo ? <UserPhoto src={photo} alt="user avatar" />
            : <UserL>{username[0]}</UserL>}
        </UserPhotoWrapper>
    </UserInfoWrapper>)
};
