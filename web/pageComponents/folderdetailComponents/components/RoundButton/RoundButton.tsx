import { MouseEventHandler } from 'react';
import { Icon } from '../../../../components';
import * as S from './RoundButton.style';

interface Props {
  iconName: string;
  iconSize: number;
  description: number | string;
  isClicked?: boolean;
  onClick?: MouseEventHandler;
}

const defaultProps = {
  iconSize: 25,
};

const RoundButton = ({ iconName, iconSize, description, isClicked, onClick }: Props) => {
  return (
    <S.Container>
      <S.Button onClick={onClick} isClicked={isClicked}>
        <Icon name={iconName} size={iconSize} />
      </S.Button>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

RoundButton.defaultProps = defaultProps;

export default RoundButton;
