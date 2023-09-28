import { UserInfoWrapper, UserPhoto, Username } from "./UserInfo.styled";
import logo from '../../assets/images/logo.png'
export const UserInfo = () => {
    return (<UserInfoWrapper>
        <Username>Nadiia</Username>
        <UserPhoto src={logo}/>
    </UserInfoWrapper>)
};
