import { UserInfo } from '../../shared/DummyDataType';
import { Avatar } from '../index';
import * as S from './Profile.style';

// comments: [
// 	{
// 		id: 1,
// 		parentId: null,
// 		content: '도움이 많이 되었습니다.',
// 		user: {
// 			id: 2,
// 			name: '이지연',
// 			image:
// 				'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
// 			introduce: '한 줄 소개'
// 		},
// 		createdAt: '',
// 		updatedAt: ' ',
// 	},
// ],

interface Props {
  iconSize: number | string;
  version: 'comment' | 'profile';
  user: UserInfo;
  createdAt?: string;
}

const defaultProps = {
  iconSize: 100,
  version: 'profile',
};

const Profile = ({ iconSize, version, user, createdAt }: Props) => {
  const { name, image, introduce } = user;

  return (
    <S.Container>
      <S.IconContainer size={iconSize}>
        <Avatar size={iconSize} src={image} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Name version={version}>{name}</S.Name>
        <S.Description version={version}>
          {createdAt ? createdAt : introduce}
        </S.Description>
      </S.TextContainer>
    </S.Container>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
