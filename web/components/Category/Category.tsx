import * as S from './Category.style';
import { Skeleton, Tab, Card, NoResultArea } from '../index';
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
      {data.length === 0 ? (
        <NoResultArea>해당하는 폴더가 없어요! 😔</NoResultArea>
      ) : (
        <S.CategoryCardWrapper>
          {isLoading ? (
            <Skeleton width={340} height={369} repeat={data.length} />
          ) : (
            data.map((item: any) => (
              <Card shrinking key={item.id} version={cardVersion} data={item} />
            ))
          )}
        </S.CategoryCardWrapper>
      )}
    </>
  );
};

export default Category;
