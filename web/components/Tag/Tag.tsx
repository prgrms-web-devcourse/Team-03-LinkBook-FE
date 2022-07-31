import TagItem from './TagItem';
import * as S from './Tag.style';

interface Props {
  tagItems: string[];
}

const Tag = ({ tagItems }: Props) => {
  return (
    <S.TagWrapper>
      {tagItems.map((item, index) => (
        <TagItem key={index}>{item}</TagItem>
      ))}
    </S.TagWrapper>
  );
};
export default Tag;
