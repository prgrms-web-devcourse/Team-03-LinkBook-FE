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

export const Text = styled.span`
  font-size: ${({ size }: Props) => size};
  font-weight: ${({ weight }: Props) => weight};
  color: ${({ color }: Props) => color};
  font-family: ${({ fontFamily }: Props) => fontFamily};

  ${({ version }: Props) => {
    switch (version) {
      case 'header':
        return Header;
      default:
        return;
    }
  }};
`;
