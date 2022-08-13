import styled from "@emotion/styled";
import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 234px;
  padding: 8px 14px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  animation: fadeIn 1s;

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

export const EscapeIconWrapper = styled.div`
  cursor: pointer;
`;

export const MainTextWrapper = styled.div`
  width: 155px;
  height: 40px;
  text-align: center;
  margin-top: 50px;
  align-self: center;
`;

export const MainText = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const MoveToWebButton = styled(Button)`
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  margin-top: 23px;
  width: 140px;
  height: 35px;
  background-color: #4285f4;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 56px;
`;

export const ButtonText = styled.div`
  width: 100px;
  height: 19px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #ffffff;
`;
