import { useState } from 'react';
import { TagDummyData } from '../../../../shared/tagDummyData';
import * as S from './TagCategory.style';

export interface Props {
  setSelectedSubTag: (selectedTag: string) => void;
}

export const TagCategory = ({ setSelectedSubTag }: Props) => {
  const [activeMainTag, setActiveMainTag] = useState('all');
  const [visibleSubTagList, setVisibleSubTagList] = useState('all');

  const handleSelectMainTag = (value: string) => {
    setActiveMainTag(value);
    setVisibleSubTagList(value);
  };

  const handleSelectSubTag = (value: string) => {
    // setSelectedSubTag(value);
    setVisibleSubTagList('');
  };

  return (
    <S.Container>
      <S.Header>북마크 폴더 리스트</S.Header>
      <S.MainTagList>
        {TagDummyData.map((mainTag, idx) => (
          <S.TagConatiner key={mainTag.value} idx={idx + 1}>
            <S.MainTag
              active={activeMainTag === mainTag.value}
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
