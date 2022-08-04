import styled from '@emotion/styled';
import { Text } from '../../components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 160px auto 30px auto;
  text-align: left;
  position: relative;
`;

export const ProfileModifyBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 110px;
  height: 45px;
  padding: 9px 14.5px;
  border-radius: 56px;
  background-color: ${({ theme }) => theme.colors.main[0]};
`;

export const ProfileModifyText = styled(Text)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  color: ${({ theme }) => theme.colors.white[0]};
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
