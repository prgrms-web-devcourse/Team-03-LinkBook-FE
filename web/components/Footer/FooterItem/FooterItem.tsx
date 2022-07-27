import S from './FooterItem.style';

interface TextProps {
  strong: string;
  plane: string;
}

interface Props {
  title: string;
  textArr: Array<TextProps>;
}

const defaultProps = {
  title: 'Frontend',
  text: [
    {
      strong: '강력 3팀-Front',
      plane: '프로그래머스 데브코스 프론트엔드 과정',
    },
  ],
};

const FooterItem = ({ title, textArr }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {textArr.map((text) => {
        const { strong, plane } = text;
        return (
          <S.TextContainer>
            <S.Strong>{strong}</S.Strong>
            <S.Plane>{plane}</S.Plane>
          </S.TextContainer>
        );
      })}
    </S.Container>
  );
};

FooterItem.defaultProps = defaultProps;

export default FooterItem;
