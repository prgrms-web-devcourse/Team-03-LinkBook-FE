import { Avatar } from '../index';
import * as S from './Profile.style';

interface UserProps {
  name: string;
  introduce?: string;
  date?: string;
}

interface Props {
  iconSize: number | string;
  version: 'comment' | 'profile';
  user: UserProps;
}

const defaultProps = {
  iconSize: 100,
  version: 'profile',
};

const Profile = ({ iconSize, version, user }: Props) => {
  const { name, introduce, date } = user;

  return (
    <S.Container>
      <S.IconContainer size={iconSize}>
        <Avatar
          // src="https://avatars.githubusercontent.com/u/72294509?v=4"
          size={iconSize}
        />
      </S.IconContainer>
      <S.TextContainer>
        <S.Name version={version}>{name}</S.Name>
        <S.Description version={version}>
          {introduce ? introduce : date}
        </S.Description>
      </S.TextContainer>
    </S.Container>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
