import { MouseEventHandler, useRef, useState } from 'react';
import * as S from '../../Modal.style';
import { Button, Input, Icon } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';

interface Props {
  handleNextPage: MouseEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page02 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const introduceRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState('');
  const { setUserIntroduce } = useUserInfo();

  const handleClickStoreIntroduce: MouseEventHandler = (e) => {
    const introduceValue = introduceRef.current.value;
    const res = setUserIntroduce(introduceValue);

    if (typeof res === 'string') {
      setErrorText(res);
      return;
    }

    handleNextPage(e);
  };

  return (
    <>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        Haeyum님 반가워요! 👋🏻
        <br />
        <S.MainText>한 줄로 자신을 소개</S.MainText>해 주세요!
      </S.Title>
      <Input
        placeholder="한 줄 소개"
        type="text"
        ref={introduceRef}
        errorText={errorText}
      />
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickStoreIntroduce}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page02;
