import styled from "@emotion/styled";
import { Button, Icon } from "../../components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
  width: 355px;
  height: 380px;

  animation: fadeIn 0.75s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIconWrapper = styled.a`
  display: inline-block;
`;

export const CloseIconWrapper = styled.div`
  cursor: pointer;
`;

export const Title = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-weight: bold;
  font-size: "24px";
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.3;
  text-align: center;
`;

export const MainText = styled.span`
  color: #4285f4;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

export const ErrorText = styled.p`
  font-size: "11px";
  color: red;
  margin: 5px;
`;

export const LoginButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9.5px 31px;
  width: 88px;
  height: 39px;
  background-color: #4285f4;
  border-radius: 56px;

  cursor: pointer;
`;
