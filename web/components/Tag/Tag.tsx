import TagItem from './TagItem';
import * as S from './Tag.style';

interface Items {
  id: number;
  text: string;
}

interface Props {
  tagItems: Items[];
}

const Tag = ({ tagItems }: Props) => {
  return (
    <S.TagWrapper>
      {tagItems.map((item) => (
        <TagItem key={item.id}>{item.text}</TagItem>
      ))}
    </S.TagWrapper>
  );
};
export default Tag;
