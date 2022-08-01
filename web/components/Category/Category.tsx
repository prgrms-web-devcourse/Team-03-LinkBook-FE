import * as S from './Category.style';
import { Skeleton, Tab, Card } from '../index';
interface Props {
  data?: any;
  tabItems: string[];
  isLoading?: boolean;
  onClick: (item: string) => void;
  selectedItem: string;
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
            <Card key={item.id} version={cardVersion} data={item} />
          ))
        )}
      </S.CategoryCardWrapper>
    </>
  );
};

export default Category;
