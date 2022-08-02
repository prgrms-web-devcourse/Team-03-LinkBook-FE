import { MouseEventHandler } from 'react';
import Icon from '../../Icon';
import * as S from './TagItem.style';

interface Props {
  children: string;
  onClick?: MouseEventHandler;
  shrinking?: boolean;
  handleRemoveTag?: (value: string) => void;
}

const TagItem = ({
  children,
  onClick,
  shrinking = false,
  handleRemoveTag,
}: Props) => {
  return (
    <S.TagItem shrinking={shrinking} onClick={onClick}>
      {children}
      {handleRemoveTag && (
        <S.IconWrapper onClick={() => handleRemoveTag(children)}>
          <Icon name="x" size={9} />
        </S.IconWrapper>
      )}
    </S.TagItem>
  );
};

export default TagItem;
