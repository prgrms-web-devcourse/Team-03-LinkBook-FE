import { useRouter } from 'next/router';
import { UserInfo } from '../../shared/DummyDataType';
import { Avatar } from '../index';
import * as S from './Profile.style';

interface Props {
  iconSize: number | string;
  version: 'comment' | 'profile' | 'author';
  user: UserInfo;
  createdAt?: string;
}

const defaultProps = {
  iconSize: 120,
  version: 'profile',
};

const Profile = ({ iconSize, version, user, createdAt }: Props) => {
  const router = useRouter();
  const { id, name, image, introduce } = user;

  const handleClick = () => {
    router.push(`/user/${id}`);
  };

  return (
    <S.Container version={version}>
      <S.IconContainer size={iconSize} onClick={handleClick}>
        <Avatar size={iconSize} src={image} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Name version={version} onClick={handleClick}>
          {name}
        </S.Name>
        {version !== 'author' && (
          <S.Description version={version}>
            {createdAt ? createdAt : introduce}
          </S.Description>
        )}
      </S.TextContainer>
    </S.Container>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
