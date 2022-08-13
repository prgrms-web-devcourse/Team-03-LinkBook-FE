import React from "react";
import { Icon } from "../../../components";
import * as S from "./Submit.style";

const Submit = () => {
  return (
    <S.Container>
      <S.IconWrapper>
        <S.LogoIconWrapper href="https://linkbook.tk/" target="_blank">
          <Icon name="logo" width={35} height={20} />
        </S.LogoIconWrapper>
        <S.EscapeIconWrapper>
          <Icon
            name="btn_x"
            width={13}
            height={13}
            onClick={() => window.close()}
          />
        </S.EscapeIconWrapper>
      </S.IconWrapper>
      <S.MainTextWrapper>
        <S.MainText>등록이 완료되었습니다! 🎉 확인하러 가 볼까요?</S.MainText>
      </S.MainTextWrapper>
      <S.MoveToWebButton>
        <S.Atag href="https://linkbook.tk/" target="_blank">
          <S.ButtonText>웹 사이트로 이동{">"}</S.ButtonText>
        </S.Atag>
      </S.MoveToWebButton>
    </S.Container>
  );
};

export default Submit;
