import styled from '@emotion/styled';

export const TabItemWrapper = styled.div<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 22px;
  border-radius: 39px;
  border: ${({ theme }) => `1.5px solid ${theme.colors.gray[3]}`};

  font-size: ${({ theme }) => theme.fontSize.h[2]};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.gray[3]};
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.gray[3] : theme.colors.white};

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;
