import { useEffect } from 'react';

const AccountPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('User Info');
  }, [updatePageName]);
  return <h1>Account page</h1>;
};

export default AccountPage;
