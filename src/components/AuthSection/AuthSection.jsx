import image from '../../assets/images/main-page-goose.png'
import { motion } from 'framer-motion';
import { AuthSectionStyled, ItalicLeters, LinksList, LoginIcon, LoginLink, MainGoose, MainHeader, SignupLink } from './AuthSection.styled';

const AuthSection = () => {
  return (
    <AuthSectionStyled>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15 }}
      >
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
      </motion.div>

    </AuthSectionStyled>
  )
}

export default AuthSection;