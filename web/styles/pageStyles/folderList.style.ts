import styled from '@emotion/styled';
import { Text } from '../../components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  margin: 150px auto 170px auto;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const DescriptionText = styled(Text)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  color: ${({ theme }) => theme.colors.black[1]};
`;

export const BoldText = styled(Text)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  color: ${({ theme }) => theme.colors.black[1]};
`;

export const TabWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CategoryCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 50px;
`;

export const PaginationWrapper = styled.div`
  margin: 85px auto 145px auto;
`;
