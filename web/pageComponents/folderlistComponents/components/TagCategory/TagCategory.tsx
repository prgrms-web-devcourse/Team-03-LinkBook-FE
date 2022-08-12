import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { TagDummyData } from '../../../../shared/tagDummyData';
import * as S from './TagCategory.style';

export const TagCategory = () => {
  const router = useRouter();
  const [selectMainTag, setSelectMainTag] = useState(router.query.mainTag);
  const [visibleSubTagList, setVisibleSubTagList] = useState(
    router.query.mainTag,
  );

  const handleSelectMainTag = (mainTag: string) => {
    if (mainTag === 'all') {
      handleSelectSubTag(mainTag);
      return;
    }
    setSelectMainTag(mainTag);
    setVisibleSubTagList(mainTag);
  };

  const handleSelectSubTag = (subTag: string) => {
    Router.push(
      {
        pathname: `/folderlist/explore/${subTag}`,
        query: {
          mainTag: selectMainTag,
          subTag,
        },
      },
      `/folderlist/explore/${subTag}`,
    );
    setVisibleSubTagList('');
  };

  return (
    <S.Container>
      <S.Header>태그 리스트</S.Header>
      <S.MainTagList>
        <S.MainTag
          active={selectMainTag === 'all'}
          onClick={() => handleSelectMainTag('all')}
        >
          🌈 전체 카테고리
        </S.MainTag>
        {TagDummyData.map((mainTag, idx) => (
          <S.TagConatiner key={mainTag.value} idx={idx + 2}>
            <S.MainTag
              active={selectMainTag === mainTag.value}
              onClick={() => handleSelectMainTag(mainTag.value)}
            >
              {mainTag.main}
            </S.MainTag>
            {mainTag.sub.length > 0 && (
              <S.SubTagList visible={visibleSubTagList === mainTag.value}>
                {mainTag.sub.map((subTag) => (
                  <S.SubTag
                    key={subTag.value}
                    onClick={() => handleSelectSubTag(subTag.value)}
                  >
                    {subTag.name}
                  </S.SubTag>
                ))}
              </S.SubTagList>
            )}
          </S.TagConatiner>
        ))}
      </S.MainTagList>
    </S.Container>
  );
};

export default TagCategory;
