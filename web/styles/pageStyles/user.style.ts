import styled from '@emotion/styled';
import { Button, Text } from '../../components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 160px auto 30px auto;
  text-align: left;
  position: relative;
`;

export const ProfileModifyBtn = styled(Button)`
  align-self: flex-end;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const DescriptionText = styled(Text)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  color: ${({ theme }) => theme.colors.black[1]};
`;

export const BoldText = styled(Text)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l[1]};
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
