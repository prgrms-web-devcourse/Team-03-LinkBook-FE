import styled from "@emotion/styled";
import React, { useCallback, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogIn } from "../../utils/types";

const InnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 420px;
  margin: 30px auto;
`;

const Title = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-top: 20px;
  font-weight: bold;
  font-size: "24px";
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.3;
  text-align: center;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Description = styled.p`
  width: fit-content;
  margin: 20px auto 0 auto;
  font-size: "14px";
`;

const MainText = styled.span`
  color: "#4285f4";
`;

const IconContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  border: '#e0e0e0e0'
  border-radius: 300px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageUploadWrapper = styled.div`
  width: fit-content;
  margin: 10px auto 0 auto;
`;

const keepLoginWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: fit-content;
  padding-left: 10px;
`;

const keepLoginInput = styled.input`
  margin: 0;
`;

const keepLoginText = styled.span`
  font-size: "13px";
  font-family: "Noto Sans KR", sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const PreviousButton = styled.div`
  position: absolute;
  top: 55px;
  left: 20px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  box-sizing: border-box;
  margin-bottom: 150px;
  padding: 10px 30px;
  color: "#FFFFFF";
  font-weight: bold;
  font-size: "18px";
  background-color: "#4285f4";
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  font-size: "11px";
  color: red;
  margin: 5px;
`;

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const checkRef = useRef<HTMLInputElement>(null);

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

      if (isChecked) setCookies("REFRESH_TOKEN", refreshToken, "/");
      setCookies("ACCESS_TOKEN", accessToken, "/");
    } catch (error) {
      alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
      console.log(error);
    }
  }, []);

  return (
    <InnerContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>
        <MainText>Linkbook</MainText>에 오신것을 환영합니다! 🎉
      </Title>
      <InputContainer>
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
            <errorText role="alert">{errors.email.message}</errorText>
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
            <errorText role="alert">{errors.password.message}</errorText>
          )}
        </div>
        <keepLoginWrapper>
          <keepLoginInput type="checkbox" value="keepLogin" ref={checkRef} />
          <keepLoginText>로그인 상태 유지</keepLoginText>
        </keepLoginWrapper>
      </InputContainer>
      <ButtonContainer>
        <Button type="submit" disabled={isSubmitting}>
          로그인
        </Button>
      </ButtonContainer>
      {/* <ButtonContainer>
        <Button type="button">Kakao 로그인</Button>
        <Button type="button">Naver 로그인</Button>
      </ButtonContainer> */}
      <SignUpContainer>
        <SignUpText> 아직 Linkbook의 회원이 아니신가요?</SignUpText>
        <ButtonContainer>
          <Button type="button" version="mainLight" onClick={switchFunc}>
            회원가입
          </Button>
        </ButtonContainer>
      </SignUpContainer>
    </InnerContainer>
  );
};

export default LoginPage;
