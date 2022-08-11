import React from 'react';
import * as S from './Switch.style';

export interface Props {
  isPrivate: boolean;
  setIsPrivate: (item: boolean) => void; // Update Page에서 사용될 props
}

export const Switch = ({ isPrivate, setIsPrivate }: Props) => {
  const onToggle = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <S.SwitchWrapper onClick={onToggle}>
      <S.SwitchInput type="checkbox" />
      <S.SwitchLabel
        checked={isPrivate}
        data-on="Public"
        data-off="Private"
      ></S.SwitchLabel>
      <S.SwitchHandler checked={isPrivate}></S.SwitchHandler>
    </S.SwitchWrapper>
  );
};

export default React.memo(Switch);
