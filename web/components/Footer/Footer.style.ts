import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 440px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.gray[4]}`};
`;

// FooterText Area
export const FooterText = styled.div`
  width: 100%;
  height: 380px;
  background-color: ${({ theme }) => theme.colors.white[0]};
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 310px;
  margin: 70px auto 0 auto;
  color: ${({ theme }) => theme.colors.black[0]};
`;

export const TextNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  margin-bottom: 50px;
`;

export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.a`
  min-width: 100px;
  color: ${({ theme }) => theme.colors.black[0]};
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  text-decoration: none;
`;

export const TextInfo = styled.div`
  display: flex;
  width: 100%;
  min-height: 180px;
`;

// FooterCopyright Area
export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main[0]};
`;

export const Copyright = styled.p`
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white[0]};
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;
