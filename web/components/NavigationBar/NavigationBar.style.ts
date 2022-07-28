import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white[0]};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray[5]}`};
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 1200px;
  height: 50px;
  margin: 5px auto;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  margin-left: 60px;
`;

export const Line = styled.div`
  color: ${({ theme }) => theme.colors.gray[4]};
`;

export const NavItem = styled.a`
  padding: 12px 10px;
  color: ${({ theme }) => theme.colors.black[0]};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

export const Login = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserSignUp = styled.button`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;
