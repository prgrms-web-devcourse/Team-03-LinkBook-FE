import { ChangeEvent, useState } from 'react';
import { Icon } from '../../../components';
import * as S from './SearchBar.style';
const SearchBar = () => {
  //TODO: Debounce적용
  const [inputValue, setInputValue] = useState('');
  const inputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.InputBarContainer>
      <S.InputWrapper>
        <S.InputBar
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={inputValueChange}
        />
        <S.SearchIconWrapper>
          <Icon size={25} name="search_ic" />
        </S.SearchIconWrapper>
      </S.InputWrapper>
    </S.InputBarContainer>
  );
};
export default SearchBar;
