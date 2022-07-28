import styled from '@emotion/styled';

export const TabItemWrapper = styled.div<{ selected: boolean }>`
  display: inline-flex;
  padding: 9.5px 29px;
  border-radius: 39px;

  font-size: ${({ theme }) => theme.fontSize.b[0]};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.gray[3]};
  font-weight: 500;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.gray[3] : theme.colors.white};
`;
