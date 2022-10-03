import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { getTag } from '../../../../apis/TagAPI';
import { PAGE_URL } from '../../../../constants/url.constants';
import { TagType } from '../../../../types';
import * as S from './TagCategory.style';

export const TagCategory = () => {
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const [selectMainTag, setSelectMainTag] = useState(router.query.mainTag);
  const [visibleSubTagList, setVisibleSubTagList] = useState(
    router.query.mainTag,
  );
  const tagCategoryRef = useRef<HTMLUListElement>(null);

  const handleSelectMainTag = (mainTag: string) => {
    if (mainTag === selectMainTag) {
      closeSubTagList();
      return;
    }
    if (mainTag === '전체 카테고리') {
      setSelectMainTag('전체 카테고리');
      handleSelectSubTag('전체 카테고리', '전체 카테고리');
      return;
    }
    setSelectMainTag(mainTag);
    setVisibleSubTagList(mainTag);
  };

  const handleSelectSubTag = (mainTag: string, subTag: string) => {
    Router.push(
      {
        pathname: `${PAGE_URL.LIST}/explore/${subTag}`,
        query: {
          mainTag,
          subTag,
        },
      },
      `${PAGE_URL.LIST}/explore/${subTag}`,
    );
    closeSubTagList();
  };

  const handleClickAway = (e: any) => {
    const element = tagCategoryRef.current;
    if (!element) return;

    if (!element.contains(e.target)) {
      closeSubTagList();
    }
  };

  const closeSubTagList = () => {
    setSelectMainTag('');
    setVisibleSubTagList('');
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res: TagType = await getTag();
        setTags(res.tags);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClickAway);
    return () => {
      window.removeEventListener('click', handleClickAway);
    };
  }, []);

  const tagsEmoji = [
    '🌈',
    '🤩',
    '🐶',
    '🎮',
    '🍿',
    '🎵',
    '🤡',
    '💪',
    '💄',
    '⚽',
    '💻',
    '🎒',
    '🎵',
  ];

  return (
    <S.Container>
      <S.Header>태그 리스트</S.Header>
      <S.MainTagList ref={tagCategoryRef}>
        {tags.map((tag, idx) => (
          <S.TagContainer key={tag.rootTag} idx={idx + 1}>
            <S.MainTag
              active={selectMainTag === tag.rootTag}
              onClick={() => handleSelectMainTag(tag.rootTag)}
            >
              {tagsEmoji[idx]} {tag.rootTag}
              {idx !== 0 && <S.IconWrapper>▼</S.IconWrapper>}
            </S.MainTag>
            {tag.subTags.length > 0 && (
              <S.SubTagList visible={visibleSubTagList === tag.rootTag}>
                {tag.subTags.map((subTag: string) => (
                  <S.SubTag
                    key={subTag}
                    onClick={() => handleSelectSubTag(tag.rootTag, subTag)}
                  >
                    {subTag}
                  </S.SubTag>
                ))}
              </S.SubTagList>
            )}
          </S.TagContainer>
        ))}
      </S.MainTagList>
    </S.Container>
  );
};

export default TagCategory;
