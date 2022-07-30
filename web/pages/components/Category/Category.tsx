import * as S from './Category.style';
import { Card, Skeleton, Tab } from '../../../components';

interface Item {
  id: string;
  text: string;
}

interface Props {
  onClick?: () => void;
  selectedItem?: string;
  tabItem?: Item[];
  isLoading?: boolean;
}

const Category = ({
  onClick,
  selectedItem,
  tabItem,
  isLoading = true,
}: Props) => {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      title: '프론트엔드 개발자를 위한 학습 로드맵',
      tags: [
        { id: '1', text: '프론트엔드 개발자' },
        { id: '2', text: '개발자' },
        { id: '3', text: '프론트엔드' },
      ],
      user: {
        image:
          'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        name: 'Miral',
      },
      createdAt: '2022-07-28',
      likes: 154,
      bookmarks: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Naver Blog - 프론트엔드 학습 어쩌구 저쩌구',
          url: 'https://www.naver.com/',
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 4,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 5,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 6,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 7,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 8,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
        {
          id: 9,
          image:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          title: 'Baekjoon Online Judge',
          url: 'https://www.acmicpc.net/',
        },
      ],
    },
  ];
  return (
    <S.CategoryWrapper>
      <S.DescriptionText>
        링북 사용자들은 이런 북마크 폴더를 사용해요!
      </S.DescriptionText>
      <S.TabWrapper>
        <Tab tabItems={tabItem} selectedItem={selectedItem} onClick={onClick} />
      </S.TabWrapper>
      <S.CategoryCardWrapper>
        {isLoading ? (
          data.map((item) => <Card data={item} />)
        ) : (
          <Skeleton width={340} height={400} repeat={data.length} />
        )}
      </S.CategoryCardWrapper>
      <S.BtnWrapper>
        <S.MoreBtn type="button">더보기+</S.MoreBtn>
      </S.BtnWrapper>
    </S.CategoryWrapper>
  );
};

export default Category;
