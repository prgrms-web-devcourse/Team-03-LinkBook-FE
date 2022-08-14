import styled from '@emotion/styled';
import { Button, Text } from '../../../../components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 156px;
  padding: 150px 0;
  background-color: ${({ theme }) => theme.colors.mainLight[1]};
`;

export const UseInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  justify-content: center;
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
  margin-right: 5px;
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
  padding: 25px 32px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.b[0]};
  color: ${({ theme }) => theme.colors.white[0]};
`;

export const Whale3Wrapper = styled.div`
  width: 180px;
  height: 300px;
  margin-right: 20px;
  background: url('/backgrounds/whale3.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 80px;
`;

export const Whale2Wrapper = styled.div`
  width: 200px;
  height: 300px;
  background: url('/backgrounds/whale2.svg');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
`;
