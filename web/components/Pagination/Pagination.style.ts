import styled from '@emotion/styled';

export const PaginationButton = styled.div<{
  active?: boolean;
  disable: boolean;
}>`
  color: ${({ active, theme }) =>
    active ? theme.colors.gray[0] : theme.colors.gray[2]};
  font-size: ${({ theme }) => theme.fontSize.b[0]};
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  cursor: ${({ disable }) => !disable && 'pointer'};
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
`;

export const ArrowButtonWrapper = styled.div`
  cursor: pointer;
`;
