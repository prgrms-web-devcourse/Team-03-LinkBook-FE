import * as S from './TabItem.style';

interface Props {
  children: string;
  onClick: (item: string) => void;
  selected: boolean;
}

const TabItem = ({ onClick, children, selected }: Props) => {
  return (
    <S.TabItemWrapper selected={selected} onClick={() => onClick(children)}>
      {children}
    </S.TabItemWrapper>
  );
};

export default TabItem;
