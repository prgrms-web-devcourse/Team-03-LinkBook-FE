import styled from '@emotion/styled';
import Image from 'next/image';
import { Button, Text } from '../../../../components';

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 120px;
  padding-bottom: 100px;
`;

export const BackgroundImage = styled(Image)`
  position: relative;
`;

export const ContentContainer = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Header = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.l[1]};
  font-weight: 700;
  text-align: center;
  line-height: 52px;
`;

export const MainColor = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.l[1]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 8px;
`;

export const SignUpButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mainLight[0]};
`;
