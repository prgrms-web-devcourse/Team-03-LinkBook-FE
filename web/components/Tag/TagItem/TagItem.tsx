import { MouseEventHandler } from 'react';
import * as S from './TagItem.style';

interface Props {
  children: string;
  onClick?: MouseEventHandler;
  shrinking?: boolean;
}

const TagItem = ({ children, onClick, shrinking = false }: Props) => {
  console.log(shrinking);
  return (
    <S.TagItem shrinking={shrinking} onClick={onClick}>
      {children}
    </S.TagItem>
  );
};

export default TagItem;
