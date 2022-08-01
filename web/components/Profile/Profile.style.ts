import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  size?: number | string;
  version?: 'comment' | 'profile';
}

export const Container = styled.div`
  max-width: 1100px;
  height: auto;
  display: flex;
  gap: 15px;
  padding: 5px 0;
`;

export const IconContainer = styled.div`
  width: ${({ size }: Props) =>
    typeof size === 'number' ? `${size}px` : size};
  height: ${({ size }: Props) =>
    typeof size === 'number' ? `${size}px` : size};
  border: ${({ theme }) => `1px solid ${theme.colors.gray[5]}`};
  border-radius: 50%;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentName = ({ theme }: ThemeProps) => css`
  font-size: ${theme.fontSize.h[2]};
`;

const ProfileName = ({ theme }: ThemeProps) => css`
  font-size: ${theme.fontSize.h[1]};
`;

export const Name = styled.h1`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${({ version }: Props) => {
    switch (version) {
      case 'comment':
        return CommentName;
      case 'profile':
        return ProfileName;
      default:
        return ProfileName;
    }
  }};
`;

const CommentDescription = ({ theme }: ThemeProps) => css`
  font-size: ${theme.fontSize.c[0]};
`;

const ProfileDescription = ({ theme }: ThemeProps) => css`
  font-size: ${theme.fontSize.b[1]};
`;

export const Description = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[0]};

  ${({ version }: Props) => {
    switch (version) {
      case 'comment':
        return CommentDescription;
      case 'profile':
        return ProfileDescription;
      default:
        return ProfileDescription;
    }
  }};
`;
