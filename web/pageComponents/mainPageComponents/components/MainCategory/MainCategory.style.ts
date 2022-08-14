import styled from '@emotion/styled';
import { Button, Text } from '../../../../components';

export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 50px;
`;

export const DescriptionText = styled(Text)`
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MoreBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mainLight[0]};
`;
