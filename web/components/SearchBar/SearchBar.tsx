import * as S from './SearchBar.style';
import Image from 'next/image';
import Icon from '../Icon';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ setShowSearchBar }: Props) => {
  const handleClickX = () => {
    setShowSearchBar(false);
  };

  return (
    <S.Container>
      <S.Search>
        <S.SearchInner>
          <S.Input />
          <S.Actions position="left">
            <S.IconWrapper position="left">
              <Icon name="search_ic" size={15} />
            </S.IconWrapper>
          </S.Actions>
          <S.Actions position="right">
            <S.IconWrapper position="right" onClick={handleClickX}>
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
  );
};

export default SearchBar;
