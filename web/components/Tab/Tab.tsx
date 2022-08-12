import TabItem from './TabItem';
import * as S from './Tab.style';
import { TabType } from '../../types';

interface Props {
  onClick: (item: TabType) => void;
  selectedItem: TabType;
  tabItems: TabType[];
}

const Tab = ({ onClick, selectedItem, tabItems }: Props) => {
  return (
    <S.TabWrapper>
      {tabItems &&
        tabItems.map((item, idx) => (
          <TabItem
            key={idx}
            onClick={onClick}
            selected={item.name === selectedItem.name}
          >
            {item}
          </TabItem>
        ))}
    </S.TabWrapper>
  );
};

export default Tab;
