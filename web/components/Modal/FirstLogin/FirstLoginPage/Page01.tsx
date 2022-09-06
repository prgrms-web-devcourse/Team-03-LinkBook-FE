import * as S from '../../Modal.style';
import { useEffect } from 'react';
import { Input, Button } from '../../../index';
import { useUserInfo } from '../contexts/UserInfoProvider';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
}

interface Props {
  handleNextPage: Function;
}

const Page01 = ({ handleNextPage }: Props) => {
  const { userInfo, setUserName } = useUserInfo();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleSubmitStoreName: SubmitHandler<IFormInput> = (data, e) => {
    e.preventDefault();
    const { name } = data;

    setUserName(name);
    handleNextPage();
  };

  useEffect(() => {
    setValue('name', userInfo.name);
    setFocus('name');
  }, [userInfo]);

  return (
    <S.FormContainer onSubmit={handleSubmit(handleSubmitStoreName)}>
      <S.Title>
        <br />
        <S.MainText>Linkbook</S.MainText>에 오신 것을 환영해요! 🎉
        <br />
        사용할 <S.MainText>닉네임</S.MainText>을 입력해 주세요.
      </S.Title>
      <Input
        placeholder="닉네임"
        type="text"
        {...register('name', {
          required: true,
          minLength: 1,
          maxLength: 8,
        })}
        errorText={errors.name && '1-8자 사이의 길이로 입력해주세요.'}
      />
      <S.ButtonContainer>
        <Button type="submit">다음 &gt;</Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Page01;
