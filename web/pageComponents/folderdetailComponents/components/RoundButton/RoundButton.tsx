import { MouseEventHandler } from 'react';
import { Icon } from '../../../../components';
import * as S from './RoundButton.style';

interface Props {
  iconName: string;
  iconSize: number;
  description: number | string;
  isClicked?: boolean;
  onClick?: MouseEventHandler;
  disabled: boolean;
}

const defaultProps = {
  iconSize: 25,
  disabled: false,
};

const RoundButton = ({
  iconName,
  iconSize,
  description,
  isClicked,
  onClick,
  disabled,
}: Props) => {
  return (
    <S.Container>
      <S.Button onClick={onClick} isClicked={isClicked} disabled={disabled}>
        <Icon name={iconName} size={iconSize} />
      </S.Button>
      <S.Description isClicked={isClicked}>{description}</S.Description>
    </S.Container>
  );
};

RoundButton.defaultProps = defaultProps;

export default RoundButton;
