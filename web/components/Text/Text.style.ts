import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  size?: string | number;
  color?: string;
  weight?: string | number;
  version?: string;
  fontFamily?: string;
}

const Header = ({ theme }: ThemeProps) => css`
  font-size: ${theme.fontSize.t[0]};
  font-weight: bold;
`;

const Logo = ({ theme }: ThemeProps) => css`
  font-size: 50px;
  font-family: 'Dongle', sans-serif;
  font-weight: bold;
  color: ${theme.colors.main[0]};
`;

export const Text = styled.span`
  font-size: ${({ size }: Props) => size};
  font-weight: ${({ weight }: Props) => weight};
  color: ${({ color }: Props) => color};
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.4;

  ${({ version }: Props) => {
    switch (version) {
      case 'header':
        return Header;
      case 'logo':
        return Logo;
      default:
        return;
    }
  }};
`;
