import { MouseEventHandler, useCallback, useState, useRef } from 'react';
import { Button, Input, Icon } from '../../../index';
import * as S from '../../Modal.style';
import { useUserInfo } from '../contexts/UserProvider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userSignUp } from '../../../../apis/UserAPI';

interface Props {
  handlePage: MouseEventHandler;
}

interface PasswordInput {
  password: string;
}

const Page02 = ({ handlePage }: Props) => {
  const [isValidate, setIsValidate] = useState(true);
  const { email, password, setPassword, removeUserInfo } = useUserInfo();
  const passwordRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordInput>();

  const onSubmit: SubmitHandler<PasswordInput> = useCallback(async (data) => {
    if (data.password !== passwordRef.current.value) {
      setIsValidate(false);
      return;
    }

    setPassword(data.password);
    setIsValidate(true);

    try {
      console.log(email, password);
      const res = await userSignUp(email, password);
      console.log(res);
      await removeUserInfo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <S.InnerContainer onSubmit={handleSubmit(onSubmit)}>
      <S.PreviousButton onClick={handlePage}>
        <Icon name="arrowLeft" size={30} />
      </S.PreviousButton>
      <S.Title>
        <br />
        사용할 <S.MainText>비밀번호</S.MainText>를 입력해 주세요.
        <S.Description>
          최소 8자, 문자와 숫자의 조합으로 입력해주세요.
        </S.Description>
      </S.Title>
      <S.InputContainer>
        <div>
          <Input
            placeholder="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: '최소 8자, 문자와 숫자의 조합으로 입력해주세요.',
              },
            })}
          />
          {errors.password && (
            <S.errorText role="alert">{errors.password.message}</S.errorText>
          )}
        </div>
        <div>
          <Input
            placeholder="비밀번호를 한번 더 입력해 주세요."
            type="password"
            ref={passwordRef}
          />
          {!isValidate && (
            <S.errorText role="alert">
              비밀번호가 일치하지 않습니다.
            </S.errorText>
          )}
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="submit">회원가입 &gt;</Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Page02;
