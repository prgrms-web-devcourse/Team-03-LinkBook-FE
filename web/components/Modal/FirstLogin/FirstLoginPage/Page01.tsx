import { MouseEventHandler, useRef, useState } from 'react';
import * as S from '../../Modal.style';
import { Input, Button } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';

interface Props {
  handleNextPage: MouseEventHandler;
}

const Page01 = ({ handleNextPage }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState('');
  const { setUserName } = useUserInfo();

  const handleClickStoreName: MouseEventHandler = (e) => {
    const nameValue = nameRef.current.value;
    const res = setUserName(nameValue);

    if (typeof res === 'string') {
      setErrorText(res);
      return;
    }

    handleNextPage(e);
  };

  return (
    <>
      <S.Title>
        <br />
        <S.MainText>Linkbook</S.MainText>에 오신 것을 환영해요! 🎉
        <br />
        사용할 <S.MainText>닉네임</S.MainText>을 입력해 주세요.
      </S.Title>
      <Input
        placeholder="닉네임"
        type="text"
        ref={nameRef}
        errorText={errorText}
      />
      <S.ButtonContainer>
        <Button type="button" onClick={handleClickStoreName}>
          다음 &gt;
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default Page01;
