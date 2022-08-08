import { MouseEvent, MouseEventHandler, useCallback } from 'react';
import { userLogin } from '../../../apis/UserAPI';
import { Button, Input, Icon } from '../../index';
import { useSetRecoilState } from 'recoil';
import * as S from '../Modal.style';
import { loginStatus } from '../../../recoil/authentication';
import { setCookies } from '../../../util/cookies';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  switchFunc?: MouseEventHandler;
  closeFunc: MouseEventHandler;
}

interface IFormInput {
  email: string;
  password: string;
}

const Login = ({ switchFunc, closeFunc }: Props) => {
  const setLoginStatus = useSetRecoilState(loginStatus);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IFormInput>();

  const onSubmit: any = useCallback(
    async (data: IFormInput, e: MouseEvent<HTMLButtonElement>) => {
      console.log(data);
      const { email, password } = data;

      try {
        const res: any = await userLogin(email, password);
        const { accessToken, refreshToken } = res;

        setCookies('ACCESS_TOKEN', accessToken, '/');
        setCookies('REFRESH_TOKEN', refreshToken, '/');
        setLoginStatus(true);
        closeFunc(e);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <S.InnerContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 오신것을 환영합니다! 🎉
      </S.Title>
      <S.InputContainer>
        <div>
          <Input
            placeholder="아이디(이메일)"
            type="text"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
          {errors.email && (
            <S.errorText role="alert">{errors.email.message}</S.errorText>
          )}
        </div>
        <div>
          <Input
            placeholder="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
            })}
          />
          {errors.password && (
            <S.errorText role="alert">{errors.password.message}</S.errorText>
          )}
        </div>
        <S.LoggedButton type="button">
          <Icon name="btn_notChecked" size={25} />
          <S.LoggedText>로그인 상태 유지</S.LoggedText>
        </S.LoggedButton>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="submit" disabled={isSubmitting}>
          로그인
        </Button>
      </S.ButtonContainer>
      {/* <S.ButtonContainer>
        <Button type="button">Kakao 로그인</Button>
        <Button type="button">Naver 로그인</Button>
      </S.ButtonContainer> */}
      <S.SignUpContainer>
        <S.SignUpText> 아직 Linkbook의 회원이 아니신가요?</S.SignUpText>
        <S.ButtonContainer>
          <Button type="button" version="mainLight" onClick={switchFunc}>
            회원가입
          </Button>
        </S.ButtonContainer>
      </S.SignUpContainer>
    </S.InnerContainer>
  );
};

export default Login;
