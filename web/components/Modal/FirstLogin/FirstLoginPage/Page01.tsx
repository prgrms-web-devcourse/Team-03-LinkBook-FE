import * as S from '../../Modal.style';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Input, Button } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';

interface Props {
  handleNextPage: FormEventHandler;
}

const Page01 = ({ handleNextPage }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState('');
  const { userInfo, setUserName } = useUserInfo();

  const handleClickStoreName: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const res = setUserName(nameValue);

    if (typeof res === 'string') {
      setErrorText(res);
      return;
    }

    handleNextPage(e);
  };

  useEffect(() => {
    nameRef.current.value = userInfo.name;
    nameRef.current.focus();
  }, [userInfo]);

  return (
    <S.FormContainer onSubmit={handleClickStoreName}>
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
        <Button type="submit">다음 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page01;
