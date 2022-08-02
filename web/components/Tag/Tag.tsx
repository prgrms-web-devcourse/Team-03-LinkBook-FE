import TagItem from './TagItem';
import * as S from './Tag.style';

interface Props {
  tagItems: string[];
  shrinking?: boolean;
  handleRemoveTag?: (value: string) => void;
}

const Tag = ({ tagItems, shrinking = false, handleRemoveTag }: Props) => {
  return shrinking && tagItems.length > 3 ? (
    <S.TagWrapper>
      {tagItems.slice(0, 3).map((item, index) => (
        <TagItem shrinking key={index} handleRemoveTag={handleRemoveTag}>
          {item}
        </TagItem>
      ))}
      <TagItem>{`+${tagItems.length - 3}`}</TagItem>
    </S.TagWrapper>
  ) : (
    <S.TagWrapper>
      {tagItems.map((item, index) => (
        <TagItem
          shrinking={shrinking}
          key={index}
          handleRemoveTag={handleRemoveTag}
        >
          {item}
        </TagItem>
      ))}
    </S.TagWrapper>
  );
};

export default Tag;
