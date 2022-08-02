import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  shrinking?: boolean;
}

export const TagItem = styled.div<Props>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.fontSize.c[0]};
  background-color: ${({ theme }) => theme.colors.gray[5]};

  ${({ shrinking }) =>
    shrinking &&
    css`
      max-width: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `}
`;
