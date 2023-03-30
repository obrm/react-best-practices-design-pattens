import React from 'react';
import ProfilePicture from './ProfilePicture';
import UserName from './UserName';
import UserBio from './UserBio';

const UserProfile = ({ user }) => (
  <div className="user-profile">
    <ProfilePicture src={user.picture} />
    <UserName name={user.name} />
    <UserBio bio={user.bio} />
  </div>
);

export default UserProfile;
