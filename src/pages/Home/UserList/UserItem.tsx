import ProfilePicture from "@/components/ProfilePicture";
import { User } from "@/types";
import { FC } from "react";
import styled from "styled-components";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Container>
      <ProfilePicture profilePictureUrl={user.profilePictureUrl} />
      <div>
        <div>{user.name}</div>
        <div>{user.alias ?? "--"}</div>
      </div>
      {!user.isGameMaster && <Important>GM</Important>}
      {user.isChronicler && <Important>CH</Important>}
    </Container>
  );
};

export default UserItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  outline: 1px solid black;
`;

const Important = styled.div`
  font-weight: bold;
  font-size: 1.5em;
`;
