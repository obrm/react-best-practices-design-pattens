import React from 'react';

const UserProfileName = ({ name }) => (
  <h2 className="user-profile-name">{name}</h2>
);

export default React.memo(UserProfileName);
