import { MouseEventHandler } from 'react';
import Icon from '../../Icon';
import * as S from './SNSButton.style';

interface Props {
  iconName: string;
  text: string;
  onClick?: MouseEventHandler;
}

const defaultProps = {
  iconName: 'ico_instagram',
  text: 'SNS',
};

const SNSButton = ({ iconName, text, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <Icon name={iconName} size={30} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

SNSButton.defaultProps = defaultProps;

export default SNSButton;
