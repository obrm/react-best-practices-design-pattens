import React from 'react';

import withAuth from './withAuth/requireAuth';
import withDataFetching from './withDataFetching/withDataFetching';

import ProfileEditPage from './components/profileEditPage';
import UsersList from './components/usersList';

const ProfileEditPageWithAuth = withAuth(ProfileEditPage);
const UsersListWithData = withDataFetching(UsersList);

const App = () => {
  return (
    <>
      <ProfileEditPageWithAuth />
      <UsersListWithData />
    </>
  );
};

export default App;