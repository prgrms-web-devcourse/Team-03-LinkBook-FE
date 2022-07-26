import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  version?: string;
}

const NavBarBtn = ({ theme }: ThemeProps) => css`
  height: 2.5rem;
  padding: 0.75rem;

  font-size: ${theme.fontSize.h[2]};
  font-weight: 700;
  border-radius: 0.75rem;
  background-color: ${theme.colors.main[0]};
`;

const MainLightBtn = ({ theme }: ThemeProps) => css`
  width: 7rem;
  height: 3.5rem;

  font-size: ${theme.fontSize.b[0]};
  font-weight: 500;
  border-radius: 2.5rem;
  background-color: ${theme.colors.mainLight[0]};
`;

const MainBtn = ({ theme }: ThemeProps) => css`
  width: 8rem;
  height: 3.25rem;

  font-size: ${theme.fontSize.b[0]};
  font-weight: 500;
  border-radius: 3.5rem;
  background-color: ${theme.colors.main[0]};
`;

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white[0]};

  ${({ version }: Props) => {
    switch (version) {
      case 'navBar':
        return NavBarBtn;
      case 'mainLight':
        return MainLightBtn;
      default:
        return MainBtn;
    }
  }};
`;
