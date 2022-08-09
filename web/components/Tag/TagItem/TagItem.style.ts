import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  shrinking?: boolean;
}

const ShrinkTag = ({ theme }: ThemeProps) => css`
  display: inline-block;
  max-width: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${theme.fontSize.b[2]};
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.fontSize.c[0]};
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ theme }) => theme.colors.gray[5]};

  ${({ shrinking }: Props) => shrinking && ShrinkTag}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
