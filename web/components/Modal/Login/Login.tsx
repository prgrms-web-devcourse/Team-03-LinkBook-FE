import { MouseEventHandler, useCallback, useRef } from 'react';
import { getUserInfo, userLogin } from '../../../apis/UserAPI';
import { Button, Input } from '../../index';
import { useSetRecoilState } from 'recoil';
import * as S from '../Modal.style';
import { loginStatus } from '../../../recoil/authentication';
import { setCookies } from '../../../util/cookies';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LogIn, MyInfo } from '../../../types';
import { userInfo } from '../../../recoil/user';

interface Props {
  switchFunc?: MouseEventHandler;
  closeFunc: MouseEventHandler;
}

interface IFormInput {
  email: string;
  password: string;
}

const Login = ({ switchFunc, closeFunc }: Props) => {
  const checkRef = useRef<HTMLInputElement>(null);
  const setLoginStatus = useSetRecoilState(loginStatus);
  const setUserInfo = useSetRecoilState(userInfo);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = useCallback(async (data, e) => {
    e.preventDefault();
    const isChecked = checkRef.current.checked;
    const { email, password } = data;

    try {
      const res: LogIn = await userLogin({ email, password });
      const { accessToken, refreshToken } = res;

      if (isChecked) setCookies('REFRESH_TOKEN', refreshToken, '/');
      setCookies('ACCESS_TOKEN', accessToken, '/');

      setLoginStatus(true);
      const userInfo: MyInfo = await getUserInfo(accessToken);
      setUserInfo(userInfo);
      closeFunc(e.target);
    } catch (error) {
      alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
      console.log(error);
    }
  }, []);

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
        <S.keepLoginWrapper>
          <S.keepLoginInput type="checkbox" value="keepLogin" ref={checkRef} />
          <S.keepLoginText>로그인 상태 유지</S.keepLoginText>
        </S.keepLoginWrapper>
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
