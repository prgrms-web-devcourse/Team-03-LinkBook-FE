import styled from '@emotion/styled';

export const TagItem = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;

  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.fontSize.c[0]};
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;
