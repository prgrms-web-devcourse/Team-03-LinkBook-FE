import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Icon } from "../../components";
import Input from "../../components/Input";
import { userLogin } from "../../utils/api";
import {
  ACCESS_TOKEN,
  CURRENT_TIME,
  EXPIRE_TIME,
  REFRESH_TOKEN,
  URL,
} from "../../utils/constants";
import { getCookie, setCookie } from "../../utils/cookies";
import * as S from "./LoginPage.style";

interface Props {
  isLogin: (bool: boolean) => void;
}
interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = ({ isLogin }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = useCallback(
    async (data, e) => {
      if (e) e.preventDefault();
      const { email, password } = data;

      try {
        const res = await userLogin({ email, password });
        if (!res) throw new Error("잘못된 로그인 리스폰스 타입");
        const { accessToken, refreshToken } = res;

        await setCookie(ACCESS_TOKEN, URL, accessToken, true);
        await setCookie(REFRESH_TOKEN, URL, refreshToken, true);
        await setCookie(
          EXPIRE_TIME,
          URL,
          (CURRENT_TIME + 18000).toString(),
          false
        );

        getCookie(ACCESS_TOKEN, URL);

        isLogin(true);
      } catch (error) {
        alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
        console.log(error);
      }
    },
    [isLogin]
  );

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.IconWrapper>
        <S.LogoIconWrapper href="https://linkbook.tk/" target="_blank">
          <Icon name="logo" width={35} height={20} />
        </S.LogoIconWrapper>
        <S.CloseIconWrapper>
          <Icon
            name="btn_x"
            width={13}
            height={13}
            onClick={() => window.close()}
          />
        </S.CloseIconWrapper>
      </S.IconWrapper>
      <S.Title>
        <S.MainText>Linkbook</S.MainText>에 오신것을 환영합니다! 🎉
      </S.Title>
      <S.InputContainer>
        <div>
          <Input
            placeholder="아이디(이메일)"
            type="text"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && (
            <S.ErrorText role="alert">{errors.email.message}</S.ErrorText>
          )}
        </div>
        <div>
          <Input
            placeholder="비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
            })}
          />
          {errors.password && (
            <S.ErrorText role="alert">{errors.password.message}</S.ErrorText>
          )}
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <S.LoginButton disabled={isSubmitting}>로그인</S.LoginButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default LoginPage;
