import { Nullable } from "@/types";
import { FC } from "react";
import styled from "styled-components";

interface ProfilePictureProps {
  profilePictureUrl: Nullable<string>;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ profilePictureUrl }) => {
  return profilePictureUrl ? (
    <Image src={profilePictureUrl} />
  ) : (
    <Image src="https://avatars.githubusercontent.com/u/67137854?v=4" />
  );
};

export default ProfilePicture;

const Image = styled.img`
  border-radius: 50%;
  width: 40px;
`;
