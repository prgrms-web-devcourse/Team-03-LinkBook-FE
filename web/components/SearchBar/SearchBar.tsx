import * as S from './SearchBar.style';
import Image from 'next/image';
import Icon from '../Icon';
import { Dispatch, SetStateAction, useRef } from 'react';
import { useEffect } from 'react';
import Router from 'next/router';
import { PAGE_URL } from '../../constants/url.constants';
import Toast from '../Toast';

interface Props {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ setShowSearchBar }: Props) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleClickCloseSearchBar = () => {
    setShowSearchBar(false);
  };

  const handleClickXButton = () => {
    inputRef.current.value = '';
  };

  const handleOnSearch = () => {
    const value = inputRef.current.value;
    if (value.replace(/ /g, '') === '') {
      Toast.show('올바른 검색어를 입력해주세요.');
      return;
    }

    handleClickCloseSearchBar();
    Router.push(
      {
        pathname: `${PAGE_URL.LIST}`,
        query: {
          search: value,
        },
      },
      `${PAGE_URL.LIST}/search/${value}`,
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 229) return;
      if (e.key === 'Enter') {
        handleOnSearch();
        handleClickCloseSearchBar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOnSearch]);

  return (
    <>
      <S.Container>
        <S.Search>
          <S.SearchInner>
            <S.Input ref={inputRef} placeholder="검색어를 입력하세요." />
            <S.Actions position="left">
              <S.IconWrapper position="left">
                <Icon name="search_ic" size={15} />
              </S.IconWrapper>
            </S.Actions>
            <S.Actions position="right">
              <S.IconWrapper position="right" onClick={handleClickXButton}>
                <Icon name="x_white" size={10} />
              </S.IconWrapper>
            </S.Actions>
          </S.SearchInner>
        </S.Search>
        <Image
          src="/backgrounds/searchBar.svg"
          alt="네비게이션 입력 바"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.Container>
      <S.Dim onClick={handleClickCloseSearchBar} />
    </>
  );
};

export default SearchBar;
