import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const UserAvatar = styled.img`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: 2px;
`;
const UserInfoContainer = styled.div`
  margin: 5px;
`;

const UserInfo = () => {
  const { authenticatedUser } = useAuth();
  return (
    authenticatedUser && (
      <UserInfoContainer>
        <UserAvatar src={authenticatedUser.avatarUrl} />
        <span>{authenticatedUser.name}</span>
      </UserInfoContainer>
    )
  );
};

export default UserInfo;
