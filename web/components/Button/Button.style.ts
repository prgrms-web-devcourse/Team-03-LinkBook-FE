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
  width: 7.5rem;
  height: 3rem;

  font-size: ${theme.fontSize.h[2]};
  font-weight: 500;
  border-radius: 2.5rem;
  background-color: ${theme.colors.mainLight[0]};
`;

const MainBtn = ({ theme }: ThemeProps) => css`
  width: 7.5rem;
  height: 3rem;

  font-size: ${theme.fontSize.h[2]};
  font-weight: 500;
  border-radius: 3.5rem;
  background-color: ${theme.colors.main[0]};
`;

const ModalBtn = ({ theme }: ThemeProps) => css`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem;

  font-size: ${theme.fontSize.c[1]};
  border-radius: 0.5rem;
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

  &:hover {
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.gray[3]};
    transform: translateY(-0.25em);
  }
  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
  &:disabled:hover {
    transform: none;
  }
  &:disabled:active {
    transform: scale(1);
  }

  ${({ version }: Props) => {
    switch (version) {
      case 'navBar':
        return NavBarBtn;
      case 'mainLight':
        return MainLightBtn;
      case 'modal':
        return ModalBtn;
      default:
        return MainBtn;
    }
  }};
`;
