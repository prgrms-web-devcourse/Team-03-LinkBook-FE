import TagItem from './TagItem';
import * as S from './Tag.style';

interface Items {
  id: number;
  text: string;
}

interface Props {
  tagItems: Items[];
  cardWidth?: number;
}

const Tag = ({ tagItems, cardWidth }: Props) => {
  console.log(cardWidth);
  return (
    <S.TagWrapper>
      {tagItems.map((item) => (
        <TagItem key={item.id}>{item.text}</TagItem>
      ))}
    </S.TagWrapper>
  );
};
export default Tag;
