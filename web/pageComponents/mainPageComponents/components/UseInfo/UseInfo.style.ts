import styled from '@emotion/styled';
import { Button, Text } from '../../../../components';

export const UseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 156px 0;
  margin-top: 156px;
  background-color: ${({ theme }) => theme.colors.mainLight[1]};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 28px;
`;

export const Header = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.l[1]};
  font-weight: 700;
  text-align: center;
  line-height: 52px;
`;

export const MainColorHeader = styled(Header)`
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.h[1]};
  font-weight: 700;
  text-align: center;
  line-height: 30px;
`;

export const MainColorDes = styled(Description)`
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const LogoText = styled(Text)`
  margin-right: 2px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.t[0]};
  color: ${({ theme }) => theme.colors.white[0]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 58px;
  gap: 8px;
`;

export const LinkButton = styled(Button)`
  width: 100%;
  height: 70px;
  padding: 26.5px 32px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  color: ${({ theme }) => theme.colors.white[0]};
`;
