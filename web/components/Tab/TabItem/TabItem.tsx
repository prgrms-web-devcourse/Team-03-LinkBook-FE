import { TabType } from '../../../types';
import * as S from './TabItem.style';

interface Props {
  children: TabType;
  onClick: (item: TabType) => void;
  selected: boolean;
}

const TabItem = ({ onClick, children, selected }: Props) => {
  return (
    <S.TabItemWrapper selected={selected} onClick={() => onClick(children)}>
      {children.name}
    </S.TabItemWrapper>
  );
};

export default TabItem;
