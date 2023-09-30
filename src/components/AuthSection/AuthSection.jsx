import image from '../../assets/images/main-page-goose.png'
import { AuthSectionStyled, ItalicLeters, LinksList, LoginIcon, LoginLink, MainGoose, MainHeader, SignupLink } from './AuthSection.styled';

const AuthSection = () => {
    return (
      <AuthSectionStyled>
        <MainGoose src={image} alt="logo" />
        <MainHeader>G<ItalicLeters>oo</ItalicLeters>seTrack</MainHeader>
        <LinksList>
          <li>
            <LoginLink to={'/login'}>
              Log in <LoginIcon alt="login" />
            </LoginLink>
          </li>
          <li>
            <SignupLink to={'/register'}>
              Sign up
            </SignupLink>
          </li>
        </LinksList>
      </AuthSectionStyled>
    )
}

export default AuthSection;