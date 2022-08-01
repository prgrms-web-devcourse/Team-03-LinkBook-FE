import { MouseEventHandler } from 'react';
import { UserInfo } from '../../shared/DummyDataType';
import { Avatar } from '../index';
import * as S from './Profile.style';

interface Props {
  iconSize: number | string;
  version: 'comment' | 'profile';
  user: UserInfo;
  onClick?: MouseEventHandler;
  createdAt?: string;
}

const defaultProps = {
  iconSize: 100,
  version: 'profile',
};

const Profile = ({ iconSize, version, user, onClick, createdAt }: Props) => {
  const { name, image, introduce } = user;

  return (
    <S.Container>
      <S.IconContainer size={iconSize} onClick={onClick}>
        <Avatar size={iconSize} src={image} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Name version={version} onClick={onClick}>
          {name}
        </S.Name>
        <S.Description version={version}>
          {createdAt ? createdAt : introduce}
        </S.Description>
      </S.TextContainer>
    </S.Container>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
