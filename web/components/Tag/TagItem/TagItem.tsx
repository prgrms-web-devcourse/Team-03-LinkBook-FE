import { MouseEventHandler } from 'react';
import * as S from './TagItem.style';

interface Props {
  children: string;
  onClick?: MouseEventHandler;
}

const TagItem = ({ children, onClick }: Props) => {
  console.log(children);
  return <S.TagItem onClick={onClick}>{children}</S.TagItem>;
};

export default TagItem;
