import Image from 'next/image';
import { MouseEventHandler } from 'react';
import * as S from './SNSButton.style';

interface Props {
  image: string;
  text: string;
  onClick?: MouseEventHandler;
}

const defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/72294509?v=4',
  text: 'SNS',
};

const SNSButton = ({ text, onClick }: Props) => {
  // NEXT/Image Component => 추후 icon Component로 교체 예정
  return (
    <S.Container onClick={onClick}>
      {/* <Image src={image} alt="이미지입니다." /> */}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

SNSButton.defaultProps = defaultProps;

export default SNSButton;
