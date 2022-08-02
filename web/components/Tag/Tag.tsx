import TagItem from './TagItem';
import * as S from './Tag.style';

interface Props {
  tagItems: string[];
  shrinking?: boolean;
}

const Tag = ({ tagItems, shrinking = false }: Props) => {
  return shrinking && tagItems.length > 3 ? (
    <S.TagWrapper>
      {tagItems.slice(0, 3).map((item) => (
        <TagItem shrinking key={item.id}>
          {item.text}
        </TagItem>
      ))}
      <TagItem key={123}>{`+${tagItems.length - 3}`}</TagItem>
    </S.TagWrapper>
  ) : (
    <S.TagWrapper>
      {tagItems.map((item, index) => (
        <TagItem shrinking={shrinking} key={index}>
          {item}
        </TagItem>
      ))}
    </S.TagWrapper>
  );
};
export default Tag;
