import { useState } from 'react';
import * as S from './Switch.style';

export interface Props {
  setIsPrivate?: (item: boolean) => void; // Update Page에서 사용될 props
}

export const Switch = ({ setIsPrivate }: Props) => {
  const [checked, setChecked] = useState(false);

  const onToggle = () => {
    setChecked(!checked);
    //setIsPrivate(!checked)
  };

  return (
    <S.SwitchWrapper onClick={onToggle}>
      <S.SwitchInput type="checkbox" />
      <S.SwitchLabel
        checked={checked}
        data-on="Public"
        data-off="Private"
      ></S.SwitchLabel>
      <S.SwitchHandler checked={checked}></S.SwitchHandler>
    </S.SwitchWrapper>
  );
};

export default Switch;
