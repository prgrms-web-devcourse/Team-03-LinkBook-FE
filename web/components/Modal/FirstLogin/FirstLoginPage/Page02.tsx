import * as S from '../../Modal.style';
import { Button, Input, Icon } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';
import {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  handleNextPage: FormEventHandler;
  handlePreviousPage: MouseEventHandler;
}

const Page02 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const introduceRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState('');
  const { userInfo, setUserIntroduce } = useUserInfo();

  const handleClickStoreIntroduce: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const introduceValue = introduceRef.current.value;
    const res = setUserIntroduce(introduceValue);

    if (typeof res === 'string') {
      setErrorText(res);
      return;
    }

    handleNextPage(e);
  };

  useEffect(() => {
    introduceRef.current.value = userInfo.introduce;
    introduceRef.current.focus();
  }, [userInfo]);

  return (
    <S.FormContainer onSubmit={handleClickStoreIntroduce}>
      <S.PreviousButton onClick={handlePreviousPage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        {userInfo.name}님 반가워요! 👋🏻
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
        <Button type="submit">다음 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page02;
