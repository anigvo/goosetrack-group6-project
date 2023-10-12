import { useEffect } from 'react';
import {UserForm} from '../../components/UserForm/UserForm';
import {BoxUserProfile} from './AccountPage.styled';

const AccountPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('User Info');
  }, [updatePageName]);
    return (
      <BoxUserProfile>          
            <UserForm />
        </BoxUserProfile>
  )
};

export default AccountPage;
