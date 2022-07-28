import TabItem from './TabItem';
import * as S from './Tab.style';

interface Props {
  onClick: (item: string) => void;
  selectedItem: string;
  tabItems: string[];
}

const Tab = ({ onClick, selectedItem, tabItems }: Props) => {
  return (
    <S.TabWrapper>
      {tabItems &&
        tabItems.map((item) => (
          <TabItem
            key={item}
            onClick={onClick}
            selected={item === selectedItem}
          >
            {item}
          </TabItem>
        ))}
    </S.TabWrapper>
  );
};

export default Tab;
