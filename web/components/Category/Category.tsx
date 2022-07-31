import * as S from './Category.style';
import Skeleton from '../Skeleton';
import Tab from '../Tab';
import Card from '../Card';

interface Props {
  data?: any;
  tabItems: string[];
  isLoading?: boolean;
  onClick: (item: string) => void;
  selectedItem: string;
}

const Category = ({
  data,
  tabItems,
  isLoading,
  onClick,
  selectedItem,
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
          data.map((item: any) => <Card data={item} />)
        )}
      </S.CategoryCardWrapper>
    </>
  );
};

export default Category;
