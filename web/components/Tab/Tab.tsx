import TabItem from './TabItem';
import * as S from './Tab.style';

interface Item {
  id: string;
  text: string;
}

interface Props {
  onClick: (item: string) => void;
  selectedItem: string;
  tabItems: Item[];
}

const Tab = ({ onClick, selectedItem, tabItems }: Props) => {
  return (
    <S.TabWrapper>
      {tabItems &&
        tabItems.map((item) => (
          <TabItem
            key={item.id}
            onClick={onClick}
            selected={item.text === selectedItem}
          >
            {item.text}
          </TabItem>
        ))}
    </S.TabWrapper>
  );
};

export default Tab;
