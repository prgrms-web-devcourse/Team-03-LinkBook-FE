import * as S from './Category.style';
import { Skeleton, Tab, Card } from '../index';
import { Folder, TabType } from '../../types';
interface Props {
  data: Folder[];
  tabItems: TabType[];
  isLoading: boolean;
  onClick: (item: TabType) => void;
  selectedItem: TabType;
  cardVersion: string;
}

const Category = ({
  data,
  tabItems,
  isLoading,
  onClick,
  selectedItem,
  cardVersion,
}: Props) => {
  return (
    <>
      <S.TabWrapper>
        <Tab
          tabItems={tabItems}
          selectedItem={selectedItem}
          onClick={onClick}
        />
      </S.TabWrapper>
      <S.CategoryCardWrapper>
        {isLoading ? (
          <Skeleton width={340} height={400} repeat={data.length} />
        ) : (
          data.map((item: any) => (
            <Card shrinking key={item.id} version={cardVersion} data={item} />
          ))
        )}
      </S.CategoryCardWrapper>
    </>
  );
};

export default Category;
