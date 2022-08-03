import React, { useRef, useState } from 'react';
import { Input, InputResult, Tag } from '../index';
import * as S from './TagSelector.style';

interface Props {
  selectedTag: string[];
  setSelectedTag: (selectedTag: string[]) => void;
}

const TagSelector = ({ selectedTag, setSelectedTag, ...styles }: Props) => {
  // Todo: api요청 혹은 전역 데이터로 관리
  const tags = [
    '개발',
    '쇼핑',
    '코딩',
    '취미',
    '창업',
    '마케팅',
    '개발 필터링 테스트',
    '쇼핑 필터링 테스트',
    '코딩 필터링 테스트',
    '취미 필터링 테스트',
    '창업 필터링 테스트',
    '마케팅 필터링 테스트',
  ];
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [activeItem, setActiveItem] = useState(0);
  const [autoCompleteSearch, setAutoCompleteSearch] = useState<string[]>([]);
  const [inputResultVisible, setInputResultVisible] = useState(false);

  const handleFilterInputValue = () => {
    const keyword = inputRef.current!.value;
    const filteredSearch = tags.filter((tag) => tag.indexOf(keyword) >= 0);

    if (!keyword) {
      setAutoCompleteSearch([]);
      handleVisibleInputResult(false);
      return;
    }

    handleVisibleInputResult(true);
    setAutoCompleteSearch(filteredSearch);
  };

  const handleClickResultItem = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const value = target.innerText;
    handleAddTag(value);
    handleResetSelector();
  };

  const handleResetSelector = () => {
    inputRef.current!.value = '';
    handleVisibleInputResult(false);
    setActiveItem(0);
  };

  const handleAddTag = (value: string) => {
    const updatedData = new Set([...selectedTag, value]);
    setSelectedTag(Array.from(updatedData));
  };

  const handleRemoveTag = (value: string) => {
    const updatedData = selectedTag.filter((tag) => tag !== value);
    setSelectedTag(updatedData);
  };

  const handleVisibleInputResult = (state: boolean) => {
    setInputResultVisible(state);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputResultVisible || e.keyCode === 229) {
      return;
    }

    const node = listRef.current;
    const itemHeight =
      listRef.current && listRef.current.children[0].scrollHeight;
    switch (e.key) {
      case 'ArrowUp':
        if (activeItem > 0) {
          setActiveItem(activeItem - 1);
          node?.scrollBy(0, -itemHeight!);
        }
        break;
      case 'ArrowDown':
        if (activeItem < autoCompleteSearch.length - 1) {
          setActiveItem(activeItem + 1);
          node?.scrollBy(0, itemHeight!);
        }
        break;
      case 'Enter':
        handleAddTag(autoCompleteSearch[activeItem]);
        handleResetSelector();
        break;
      case 'Escape':
        setActiveItem(0);
        handleResetSelector();
        break;
      default:
        setActiveItem(0);
      // break;
    }
  };

  return (
    <S.Container {...styles}>
      <Tag tagItems={selectedTag} handleRemoveTag={handleRemoveTag} />
      <Input
        type="text"
        ref={inputRef}
        placeholder="태그를 입력해 주세요! 클릭 혹은 엔터를 사용해서 입력할 수 있습니다."
        onChange={handleFilterInputValue}
        onKeyDown={handleKeyDown}
      />
      <InputResult
        active={activeItem}
        ref={listRef}
        inputResultVisible={inputResultVisible}
        inputResults={autoCompleteSearch}
        onClick={handleClickResultItem}
      />
    </S.Container>
  );
};

export default TagSelector;
