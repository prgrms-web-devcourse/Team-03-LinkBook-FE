import styled from '@emotion/styled';

export const Container = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
`;
