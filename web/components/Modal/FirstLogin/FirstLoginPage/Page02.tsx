import * as S from '../../Modal.style';
import { Button, Input, Icon } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { MouseEventHandler, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  introduce: string;
}

interface Props {
  handleNextPage: Function;
  handlePreviousPage: MouseEventHandler;
}

const Page02 = ({ handleNextPage, handlePreviousPage }: Props) => {
  const { userInfo, setUserIntroduce } = useUserInfo();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleClickStoreIntroduce: SubmitHandler<IFormInput> = (data, e) => {
    e.preventDefault();
    const { introduce } = data;

    setUserIntroduce(introduce);
    handleNextPage();
  };

  useEffect(() => {
    setValue('introduce', userInfo.introduce);
    setFocus('introduce');
  }, [userInfo]);

  return (
    <S.FormContainer onSubmit={handleSubmit(handleClickStoreIntroduce)}>
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
        {...register('introduce', {
          required: true,
          minLength: 1,
          maxLength: 50,
        })}
        errorText={errors.introduce && '1-50자 사이의 길이로 입력해주세요.'}
      />
      <S.ButtonContainer>
        <Button type="submit">다음 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page02;
